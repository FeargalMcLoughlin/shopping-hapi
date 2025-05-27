import { Shop } from "../../types/shop-types.js";
import { ShopMongoose } from "./shop.js";

export const shopStore = {
  async find(): Promise<Shop[]> {
    const shops = await ShopMongoose.find().populate("creator").populate("shoptype").lean();
    return shops;
  },

  async findBy(id: string): Promise<Shop | null> {
    const shop = await ShopMongoose.findOne({ shoptype: id });
    if (!shop) {
      return null;
    }
    return shop;
  },

  async add(shop: Shop): Promise<Shop | null> {
    let newShop = new ShopMongoose({ ...shop });
    await newShop.save();
    const populatedShop = await ShopMongoose.findById(newShop._id).populate("creator").populate("shoptype").lean();
    return populatedShop;
  },


  async delete() {
    await ShopMongoose.deleteMany({});
  },
};