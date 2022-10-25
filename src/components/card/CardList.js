import React from "react";
import CardDetail from "./CardDetail";
import styles from "./CardList.module.css";

const CardList = ({ data }) => {
  return (
    <div className={ `${styles.cardlist} ${styles.cardagain}`}>
      {data.map((d) => (
        <CardDetail
            key={d.id}
          title={d.title}
          description={d.description}
          image={d.image}
        />
      ))}
    </div>
  );
};

export default CardList;
