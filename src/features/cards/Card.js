import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cardPrevious, cardNext, addNewCard, getCards } from "./cardSlice";
import styles from "./Cards.module.css";

const Card = (props) => {
  const dispatch = useDispatch();
  dispatch(addNewCard(props.card));
  const { ...cards } = useSelector(getCards);
  const cardColor =
    cards[props.card.cardName].colors[cards[props.card.cardName].currentColor];

  return (
    <div className={styles.card} style={{ background: cardColor }}>
      <h1>{props.cardType} Card</h1>
      <p>Color = {cardColor}</p>
      <p>Medium length description. Let's add a few more words here.</p>
      <div className={styles.visual}>
        <button onClick={() => dispatch(cardPrevious(props.card.cardName))}>
          <h1>Previous</h1>
        </button>
      </div>
      <div className={styles.visual}>
        <button onClick={() => dispatch(cardNext())}>
          <h1>Next</h1>
        </button>
      </div>
    </div>
  );
};

export default Card;
