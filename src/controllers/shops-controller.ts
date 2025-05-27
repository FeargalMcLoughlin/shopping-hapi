import { Request, ResponseToolkit } from "@hapi/hapi";
import { db } from "../models/db.js";

export const shopsController = {
  index: {
    handler: async function (request: Request, h: ResponseToolkit) {
      const loggedInUser = request.auth.credentials;
      const shoptypes = await db.shoptypeStore.find();
      return h.view("create", {
        title: "Create a Shop",
        user: loggedInUser,
        shoptypes: shoptypes,
      });
    },
  },
  create: {
    handler: async function (request: Request, h: ResponseToolkit) {
      try {
        const loggedInUser = request.auth.credentials;
        const shopPayload = request.payload as any;
        const shop = {
          name: shopPayload.name,
          address: shopPayload.address,
          rating: shopPayload.rating,
          method: shopPayload.method,
          creator: loggedInUser._id,
          shoptype: shopPayload.shoptype,
          lat: shopPayload.lat,
          lng: shopPayload.lng,
        };
        await db.shopStore.add(shop);

        return h.redirect("/create");
      } catch (err: any) {
        return h.view("main", { errors: [{ message: err.message }] });
      }
    },
  },
  report: {
    handler: async function (request: Request, h: ResponseToolkit) {
      const loggedInUser = request.auth.credentials;
      const shops = await db.shopStore.find();
      return h.view("report", {
        title: "Report",
        user: loggedInUser,
        shops: shops,
      });
    },
  },
};