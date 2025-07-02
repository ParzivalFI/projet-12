import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" kay={item.id}>
      <img src={item.image} alt="" className="work__img"></img>
      <h3 className="work__title">{item.title}</h3>
      <a href="#" className="work__button">
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};
export default WorkItems;
