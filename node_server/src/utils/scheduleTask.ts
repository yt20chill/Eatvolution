import schedule from "node-schedule";
import ShopService from "../shop/shop.service";
import { redis, shopService } from "./container";
import RedisClientWrapper from "./redisUtils";

// TODO: test case
export const scheduleUpdateShop = async () =>
  schedule.scheduleJob(ShopService.rule, async () => {
    await shopService.updateUniversalShop();
    const extendedRedis = new RedisClientWrapper(redis);
    // delete all keys that start with shop
    extendedRedis.deleteKeys("shop*");
  });
