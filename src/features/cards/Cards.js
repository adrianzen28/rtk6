import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  card2Previous,
  card2Next,
  getCard2Color,
  card3Previous,
  card3Next,
  getCard3Color,
} from "./cardSlice";
import styles from "./Cards.module.css";
import Card from "./Card";

const Cards = () => {
  const greenCard = {
    cardName: "greenCard",
    colors: ["olivedrab", "seagreen", "palegreen"],
    currentColor: 0,
  };
  const blueCard = {
    cardName: "blueCard",
    colors: ["turquoise", "mediumturquoise", "teal"],
    currentColor: 0,
  };
  const card2Color = useSelector(getCard2Color);
  const card3Color = useSelector(getCard3Color);
  const dispatch = useDispatch();

  return (
    <div className={styles.cardbody}>
      <Card cardType="Green" card={greenCard} />
      {/*<Card cardType="Blue" card={blueCard} />*/}
      <div className={styles.card} style={{ background: card2Color }}>
        <h1>Blue Card</h1>
        <p>Color = {card2Color}</p>
        <p>
          Long Description. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Sed est error repellat veritatis.
        </p>
        <div className={styles.visual}>
          <button onClick={() => dispatch(card2Previous())}>
            <h1>Previous</h1>
          </button>
        </div>
        <div className={styles.visual}>
          <button onClick={() => dispatch(card2Next())}>
            <h1>Next</h1>
          </button>
        </div>
      </div>
      <div className={styles.card} style={{ background: card3Color }}>
        <h1>Red Card</h1>
        <p>Color = {card3Color}</p>
        <p>Short Description.</p>
        <div className={styles.visual}>
          <button onClick={() => dispatch(card3Previous())}>
            <h1>Previous</h1>
          </button>
        </div>
        <div className={styles.visual}>
          <button onClick={() => dispatch(card3Next())}>
            <h1>Next</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
