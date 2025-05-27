import Boom from "@hapi/boom";
import { Request, ResponseToolkit } from "@hapi/hapi";
import { db } from "../models/db.js";

export const shoptypesApi = {
  find: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      const shoptypes = await db.shoptypeStore.find();
      return h.response(shoptypes).code(200);
    },
  },

  findOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      try {
        const shoptype = await db.shoptypeStore.findOne(request.params.id);
        if (shoptype === null) {
          return Boom.notFound("No Shop Type with this id");
        }
        return h.response(shoptype).code(200);
      } catch (err) {
        return Boom.notFound("No Shop Type with this id");
      }
    },
  },

  create: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      const shoptype = await db.shoptypeStore.add(request.payload);
      if (shoptype !== null) {
        return h.response(shoptype).code(201);
      }
      return Boom.badImplementation("error creating shoptype");
    },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      await db.shoptypeStore.delete();
      return h.response().code(204);
    },
  },

  deleteOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      await db.shoptypeStore.deleteOne(request.params.id);
      return h.response().code(204);
    },
  },
};
