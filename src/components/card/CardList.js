import React from 'react'
import { faker } from "@faker-js/faker"
import CardDetail from './CardDetail'
import "./CardList.css"

const CardList = () => {
    return (
        <div class="card-list">
            <CardDetail 
                image = { faker.image.city() } 
                title = "Hello" 
                description={faker.lorem.paragraphs()}
                />
            <CardDetail
            title= "Another Card"
                image = { faker.image.animals() }
                />
            <CardDetail 
                image = { faker.image.food() }
                description = { faker.lorem.paragraphs()}
                />
            <CardDetail 
                image={ faker.image.fashion() }/>
        </div>
    )
}

export default CardList
