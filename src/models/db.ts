import { Db } from "../types/shop-types.js";
import { connectMongo } from "./mongo/connect.js";

export const db: Db = {
  userStore: null,
  shoptypeStore: null,
  shopStore: null,
};

export function connectDb(dbType: string) {
  switch (dbType) {
    case "mongo":
      connectMongo(db);
      break;
    default:
  }
}
