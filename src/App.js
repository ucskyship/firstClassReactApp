import React from 'react';
import CardList from './components/card/CardList'
import NewCard from './components/card/NewCard'
import Counter from './components/counter/Counter'

const title = "Hello there";

function greet(){
    return "Hello from greet"
}



const  App = () => {
    const style = { color: "green" };
    const obj = { name: "Eden", quality: "Astonishingly beautiful" };
    return (

        <div>
            < Counter />

            <h1>{title}</h1>
            <br/>
            <h1>{greet()}</h1>
            <br/>
            <h1 style={style}>{obj.name} is just {obj.quality} no lies. "Says Mr. Anjola "</h1>

            <NewCard/>
            <CardList/>

        </div>
    );


}

export default App;
