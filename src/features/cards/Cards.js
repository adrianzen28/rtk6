import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions, selectCardEntity } from "./cardSlice";
import styles from "./Cards.module.css";
import Card from "./Card";

const Cards = () => {
  const dispatch = useDispatch();

  const allCards = [
    {
      id: "greenCard",
      colors: ["olivedrab", "seagreen", "palegreen"],
      currentColor: 0,
    },
    {
      id: "blueCard",
      colors: ["SteelBlue", "Cyan", "CadetBlue"],
      currentColor: 0,
    },
    {
      id: "redCard",
      colors: ["FireBrick", "Crimson", "DarkRed"],
      currentColor: 0,
    },
  ];

  dispatch(actions.cardsAddMany(allCards));
  const greenCard = useSelector(selectCardEntity("greenCard"));
  const blueCard = useSelector(selectCardEntity("blueCard"));
  const redCard = useSelector(selectCardEntity("redCard"));

  return (
    <div className={styles.cardbody}>
      <Card cardType="Green" card={greenCard} />
      <Card cardType="Blue" card={blueCard} />
      <Card cardType="Red" card={redCard} />
    </div>
  );
};

export default Cards;
