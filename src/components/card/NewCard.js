import React, { useState } from "react";
import "./NewCard.css";
import Button from "../button/Button";
import { faker } from "@faker-js/faker";

const NewCard = ({ setData }) => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
  });

  const inputChangeHandler = (event) => {
    setInputs((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });

    console.log(inputs);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(inputs);

    const cardObj = {
      id: faker.datatype.uuid(),
      image: faker.image.fashion(),
      ...inputs,
    };

    setData((prevData) => [cardObj, ...prevData]);
    setInputs({ title: "", description: "" });
    console.log(cardObj);
  };

  return (
    <form className="new-card" onSubmit={formSubmitHandler}>
      <div>
        <label htmlFor="title"> Card title </label>
        <input
          type="text"
          id="title"
          name="title"
          value={inputs.title}
          onChange={inputChangeHandler}
        />
      </div>

      <div>
        <label htmlFor="description"> Card Description </label>
        <input
          type="text"
          id="description"
          name="description"
          value={inputs.description}
          onChange={inputChangeHandler}
        />
      </div>

      <Button color="white">Add Card</Button>
    </form>
  );
};

export default NewCard;
