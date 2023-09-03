import cn from "classnames";
import classes from "./index.module.scss";

function ColorSelector({ onChange, colors, selectedColor }) {
  return (
    <div className={classes.root}>
      <p className={classes.title}>Choose your colour</p>
      <div className={classes.colors}>
        {colors.map((color) => (
          <div
            onClick={() => onChange(color)}
            className={cn(classes.wrapper, {
              [classes.selected]: selectedColor === color,
            })}
            key={color}
          >
            <div
              className={classes.colorBox}
              style={{
                backgroundColor: color,
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorSelector;
