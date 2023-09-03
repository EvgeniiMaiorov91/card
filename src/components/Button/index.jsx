import cn from "classnames";
import classes from "./index.module.scss";

function Button({ variant = "filled", ...rest }) {
  return <button className={cn(classes.root, classes[variant])} {...rest} />;
}

export default Button;
