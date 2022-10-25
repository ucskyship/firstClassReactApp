import React, {useState} from "react";
import CardList from "./components/card/CardList";
import NewCard from "./components/card/NewCard";
import Counter from "./components/counter/Counter";
import { faker } from "@faker-js/faker";

const title = "Hello there";

function greet() {
  return "Hello from greet";
}

const App = () => {
  const style = { color: "green" };
  const obj = { name: "Eden", quality: "Astonishingly beautiful" };

  const cardData = [
    {
      id: faker.datatype.uuid(),
      title: faker.random.word(),
      description: faker.random.words(faker.random.numeric()),
      image: faker.image.fashion(),
    },
    {
      id: faker.datatype.uuid(),
      title: faker.random.word(),
      description: faker.random.words(faker.random.numeric()),
      image: faker.image.avatar(),
    },
    {
      id: faker.datatype.uuid(),
      title: faker.random.word(),
      description: faker.random.words(faker.random.numeric()),
      image: faker.image.fashion(),
    },
    {
      id: faker.datatype.uuid(),
      title: faker.random.word(),
      description: faker.random.words(faker.random.numeric()),
      image: faker.image.avatar(),
    },
    {
      id: faker.datatype.uuid(),
      title: faker.random.word(),
      description: faker.random.words(faker.random.numeric()),
      image: faker.image.fashion(),
    },
  ];

  const [data, setData] = useState(cardData)

  return (
    <div>
      <Counter />

      <h1>{title}</h1>
      <br />
      <h1>{greet()}</h1>
      <br />
      <h1 style={style}>
        {obj.name} is just {obj.quality} no lies. "Says Mr. Anjola "
      </h1>

      <NewCard setData={setData}/>
      <CardList data={data} />
    </div>
  );
};

export default App;
