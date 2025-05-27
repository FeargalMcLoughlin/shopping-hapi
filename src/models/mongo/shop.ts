import { Schema, model } from "mongoose";
import { Shop } from "../../types/shop-types";

const shopSchema = new Schema<Shop>({
  name: String,
  address: String,
  rating: Number,
  method: String,
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  shoptype: {
    type: Schema.Types.ObjectId,
    ref: "Shoptype",
  },
  lat: String,
  lng: String,
});

export const ShopMongoose = model("Shop", shopSchema);