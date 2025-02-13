import classNames from "classnames";
import { FC, ReactNode } from "react";
import styles from "./AccelerateButton.module.scss";

export const AccelerateButton: FC<{
  children: ReactNode;
  variant: "none" | "scale" | "ship";
}> = ({ children, variant = "none" }) => {
  return (
    <button
      className={classNames(
        styles.root,
        { [styles.some]: variant !== "none" },
        styles[variant],
      )}
    >
      {children}
    </button>
  );
};
