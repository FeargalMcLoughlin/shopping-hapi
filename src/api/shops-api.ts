import Boom from "@hapi/boom";
import { Request, ResponseToolkit } from "@hapi/hapi";
import { db } from "../models/db.js";
import { Shoptype, Shop } from "../types/shop-types.js";

export const shopsApi = {
  findAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      try {
        const shops = await db.shopStore.find();
        return h.response(shops).code(200);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

  findByShoptype: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      const shops = (await db.shopStore.findBy(request.params.id)) as Shop;
      return h.response(shops).code(200);
    },
  },

  makeShop: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      const shoptype = (await db.shoptypeStore.findOne(request.params.id)) as Shoptype;
      if (shoptype === null) {
        return Boom.notFound("No Shop Type with this id");
      }
      const shopPayload = request.payload as Shop;
      const shop = {
        name: shopPayload.name,
        address: shopPayload.address,
        rating: shopPayload.rating,
        method: shopPayload.method,
        creator: request.auth.credentials._id,
        shoptype: shoptype,
        lat: shopPayload.lat,
        lng: shopPayload.lng,
      };
      const newShop = (await db.shopStore.add(shop)) as Shop;
      return h.response(newShop).code(200);
    },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      console.log("delete...");
      await db.shopStore.delete();
      return h.response().code(204);
    },
  },
};
