import classes from "./index.module.scss";

function Image({ picture }) {
  return <img src={picture} alt="pic" className={classes.root} />;
}

export default Image;
