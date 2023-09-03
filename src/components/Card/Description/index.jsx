import classes from "./index.module.scss";

function Description({ title, description, price }) {
  return (
    <div className={classes.root}>
      <p className={classes.price}>${price}</p>
      <p className={classes.title}>{title}</p>
      <p className={classes.description}>{description}</p>
    </div>
  );
}

export default Description;
