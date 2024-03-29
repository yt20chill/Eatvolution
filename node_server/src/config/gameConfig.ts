export default class GameConfig {
  static readonly USER_UPDATE_SCHEDULE = "* /5 * * * *"; // every 5 minutes
  static readonly SHOP_REFRESH_SCHEDULE = "0 0 8,13,19 * * *"; // every 8am, 1pm, 7pm
  static readonly FOOD_CATEGORY = ["Healthy", "Processed", "Empty", "Dessert"];
  static readonly EARNING_RATE_CONSTANT = 10; // rate of earning rate
  static readonly BMR_CONSTANT = 1; // rate of calories reduction per second
  static readonly FOOD_NUM_ALLOWED = 11; // number of food allowed in shop
  static readonly CHEAP_FOOD_NUM = 1; // min number of cheap food in shop
  static readonly CHEAP_FOOD_MAX_INDEX = Math.min(this.CHEAP_FOOD_NUM + 5, this.FOOD_NUM_ALLOWED); // first nth food (ordered by cost) to be randomly picked on each refresh
  static readonly GAME_STATUS_CODE = { refreshShop: "200", payDay: "201" };
  static readonly REFRESH_PRICE = 100;
  static readonly CUSTOM_FOOD_PRICE = 100000;
  static readonly INITIAL_MONEY = 10000;
  static readonly INITIAL_CALORIES = 0;
  static readonly MIN_FOOD_TO_EVOLVE = 10;
}
export enum EvolveCriteria {
  SkinnyFat = 0.6,
  Keto = 0.5,
}
