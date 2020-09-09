import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "./cardSlice";
import styles from "./Cards.module.css";

const Card = (props) => {
  const dispatch = useDispatch();

  return (
    <div
      className={styles.card}
      style={{
        background: props.card.colors[props.card.currentColor],
      }}
    >
      <h1>{props.cardType} Card</h1>
      <p>Color ={props.card.colors[props.card.currentColor]}</p>
      <p>
        Long Description. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Sed est error repellat veritatis.
      </p>
      <div className={styles.visual}>
        <button
          onClick={() => {
            dispatch(
              actions.cardPreviousColor({
                id: props.card.id,
                changes: { currentColor: props.card.currentColor },
              })
            );
          }}
        >
          <h1>Previous</h1>
        </button>
      </div>
      <div className={styles.visual}>
        <button
          onClick={() =>
            dispatch(
              actions.cardNextColor({
                id: props.card.id,
                changes: { currentColor: props.card.currentColor },
              })
            )
          }
        >
          <h1>Next</h1>
        </button>
      </div>
    </div>
  );
};

export default Card;
