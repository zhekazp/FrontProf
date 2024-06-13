type Action =
  | { type: "addIngredient"; payload: { food: string, price: number } }
  | { type: "clearOrder" };

export default Action;
