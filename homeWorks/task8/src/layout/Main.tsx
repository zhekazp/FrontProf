import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

function Main() {
  const sandwich = useSelector((state: RootState) => state.sandwich.totalOrder);
  const price = useSelector((state: RootState) => state.sandwich.totalPrice);
  const dispatch = useDispatch();
  return (
    <main className="mainBlock">
      <div className="info">
        <h3>Chose ingredients</h3>
        <div className="order">
          <span>{sandwich}</span>
        </div>
        <div className="order">
          <span>Total price : {price}</span>
        </div>
        <button
          onClick={() =>
            dispatch({ type: "addIngredient", food: " bread , ", price: 1 })
          }
        >
          Add bread
        </button>
        <button
          onClick={() =>
            dispatch({ type: "addIngredient", food: " cheese , ", price: 2 })
          }
        >
          Add cheese
        </button>
        <button
          onClick={() =>
            dispatch({ type: "addIngredient", food: " sausages , ", price: 3 })
          }
        >
          Add sausages
        </button>
        <button onClick={()=>dispatch({type:"clearOrder"})}>Clear</button>
      </div>
    </main>
  );
}

export { Main };
