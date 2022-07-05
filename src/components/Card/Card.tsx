import React from "react";
import styles from "./Card.module.scss";

export interface CardProps extends React.PropsWithChildren {
  title?: string;
}

export const Card: React.FC<CardProps> = ({ title, children }: CardProps) => {
  return (
    <div className={styles.cardContainer}>
      {title && (
        <div>
          <h2 className={styles.cardTitle}>{title}</h2>
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};
