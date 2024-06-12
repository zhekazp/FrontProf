type Action =
  | { type: "addIngredient"; payLoad: { food: string, price: number } }
  | { type: "clearOrder" };

export default Action;
