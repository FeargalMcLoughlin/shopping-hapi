import { Shoptype } from "../../types/shop-types.js";
import { ShoptypeMongoose } from "./shoptype.js";

export const shoptypeStore = {
  async find(): Promise<Shoptype[]> {
    const shoptypes = await ShoptypeMongoose.find().lean();
    return shoptypes;
  },

  async findOne(id: string): Promise<Shoptype | null> {
    const shoptype = await ShoptypeMongoose.findOne({ _id: id }).lean();
    return shoptype;
  },

  async findBy(category: string): Promise<Shoptype | null> {
    const shoptype = await ShoptypeMongoose.findOne({
      category,
    }).lean();
    return shoptype;
  },
};