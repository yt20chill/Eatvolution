export type User = {
  id?: null | number;
  username: string;
  hash_password: string; // char(60)
  money: number;
  total_money: number;
  created_at: string;
  updated_at: string;
};

export type Category = {
  id?: null | number;
  name: string;
  created_at: string;
  updated_at: string;
};

export type SlimeType = {
  id?: null | string; // uuid
  name: string;
  description: string;
  max_calories: number;
  bMR_multiplier: number;
  earn_rate_multiplier: number;
  created_at: string;
  updated_at: string;
};

export type Slime = {
  id?: null | number;
  owner_id: number;
  owner?: User;
  slime_type_id: string; // uuid
  slime_type?: SlimeType;
  calories: number;
  extra_calories: number;
  is_archived: boolean;
  created_at: string;
  updated_at: string;
};

export type Food = {
  id?: null | number;
  name: string;
  cost?: null | number;
  category_id?: null | number;
  calories: number;
  protein: number;
  fat: number;
  saturated_fat: number;
  cholesterol: number;
  carbohydrates: number;
  fibre: number;
  sugar: number;
  sodium: number;
  emoji: string;
  created_at: string;
  updated_at: string;
};

export type CustomFood = {
  id?: null | number;
  food_id: number;
  food?: Food;
  user_id: number;
  user?: User;
  created_at: string;
  updated_at: string;
};

export type SlimeFood = {
  id?: null | number;
  slime_id: number;
  slime?: Slime;
  food_id: number;
  food?: Food;
  created_at: string;
};

export type UserFoodCollection = {
  id?: null | number;
  user_id: number;
  user?: User;
  food_id: number;
  food?: Food;
  created_at: string;
};

export type UserSlimeTypeCollection = {
  id?: null | number;
  user_id: number;
  user?: User;
  slime_type_id: string; // uuid
  slime_type?: SlimeType;
  created_at: string;
};

export type Shop = {
  id?: null | number;
  food_id: number;
  food?: Food;
  created_at: string;
  updated_at: string;
};

export type UserShop = {
  id?: null | number;
  user_id: number;
  user?: User;
  food_id: number;
  food?: Food;
  created_at: string;
  updated_at: string;
};

export type Item = {
  id?: null | number;
  name: string;
  description: string;
  cost: number;
  created_at: string;
  updated_at: string;
};
