import { useState, useMemo } from "react";
import Button from "../Button";
import ColorSelector from "../ColorSelector";
import Description from "./Description";
import Image from "../Image";
import classes from "./index.module.scss";

function Card({ variants, ...rest }) {
  const [selected, setSelected] = useState(0);

  const colors = useMemo(() => {
    let colors = [];

    for (let i = 0; i < variants.length; i++) {
      colors[i] = variants[i].color;
    }

    return colors;
  }, [variants]);

  const pictures = useMemo(() => {
    let pictures = [];

    for (let i = 0; i < variants.length; i++) {
      pictures[i] = variants[i].picture;
    }

    return pictures;
  }, [variants]);

  const onChange = (color) => {
    const selectedVariant = variants.findIndex(
      (variant) => variant.color === color
    );
    setSelected(selectedVariant);
  };

  return (
    <div className={classes.root}>
      <Image picture={pictures[selected]} />
      <Description {...rest} />
      <ColorSelector
        onChange={onChange}
        colors={colors}
        selectedColor={variants[selected].color}
      />
      <div className={classes.buttons}>
        <Button onClick={() => alert("Add to cart")}>Add to cart</Button>
        <Button onClick={() => alert("Buy now")} variant="outlined">
          Buy now
        </Button>
      </div>
      <a href="#">Read reviews</a>
    </div>
  );
}

export default Card;
