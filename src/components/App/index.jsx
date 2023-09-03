import { useState } from "react";
import Card from "../Card";
import classes from "./index.module.scss";

function App() {
  const [goods, setGoods] = useState([
    {
      title: "Zebronics head phone",
      description:
        "A portable headphone with a battery life of 20 hours and IP67 rating. Comes with a 3 years warranty.",
      price: 100,
      id: 4375974507485,
      variants: [
        {
          color: "#E44",
          picture: "/red_hearphones.png",
        },
        {
          color: "#3C81F6",
          picture: "/blue_hearphones.jpeg",
        },
        {
          color: "#000",
          picture: "/black_hearphones.jpg",
        },
      ],
    },
  ]);

  return (
    <div className={classes.root}>
      {goods.map((good) => (
        <Card {...good} key={good.id} />
      ))}
    </div>
  );
}

export default App;
