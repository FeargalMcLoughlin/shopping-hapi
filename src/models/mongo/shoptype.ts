import { Schema, model } from "mongoose";
import { Shoptype } from "../../types/shop-types";

const shoptypeSchema = new Schema<Shoptype>({
  category: String,
});

export const ShoptypeMongoose = model("Shoptype", shoptypeSchema);