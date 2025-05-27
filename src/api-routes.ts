import { shoptypesApi } from "./api/shoptypes-api.js";
import { shopsApi } from "./api/shops-api.js";
import { userApi } from "./api/users-api.js";

export const apiRoutes = [
  { method: "GET" as const, path: "/api/users", config: userApi.find },
  { method: "POST" as const, path: "/api/users", config: userApi.create },
  { method: "DELETE" as const, path: "/api/users", config: userApi.deleteAll },
  { method: "GET" as const, path: "/api/users/{id}", config: userApi.findOne },
  { method: "POST" as const, path: "/api/users/authenticate", config: userApi.authenticate },

  { method: "GET" as const, path: "/api/shoptypes", config: shoptypesApi.find },
  { method: "GET" as const, path: "/api/shoptypes/{id}", config: shoptypesApi.findOne },
  { method: "POST" as const, path: "/api/shoptypes", config: shoptypesApi.create },
  { method: "DELETE" as const, path: "/api/shoptypes/{id}", config: shoptypesApi.deleteOne },
  { method: "DELETE" as const, path: "/api/shoptypes", config: shoptypesApi.deleteAll },

  { method: "GET" as const, path: "/api/shops", config: shopsApi.findAll },
  { method: "GET" as const, path: "/api/shoptypes/{id}/shops", config: shopsApi.findByShoptype },
  { method: "POST" as const, path: "/api/shoptypes/{id}/shops", config: shopsApi.makeShop },
  { method: "DELETE" as const, path: "/api/shops", config: shopsApi.deleteAll },
];
