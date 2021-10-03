import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Card() {
    return (
        <div className='cards'>
            <h1>CHECH OUT OUR EPIC DESTINATIONS!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/7.JPG'
                        text='Exlore with the best Tour Company for the youths of East-Africa'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem
                        src='images/1.JPG'
                        text='Exlore with the best Tour Company for the youths of East-Africa'
                        label='Luxury'
                        path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/6.JPG'
                        text='Exlore with the best Tour Company for the youths of East-Africa'
                        label='Holiday'
                        path='/services'
                        />
                        <CardItem
                        src='images/4.JPG'
                        text='Exlore with the best Tour Company for the youths of East-Africa'
                        label='Inspiration'
                        path='/services'
                        />
                        <CardItem
                        src='images/5.JPG'
                        text='Exlore with the best Tour Company for the youths of East-Africa'
                        label='Adventure'
                        path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/6.JPG'
                        text='Exlore with the best Tour Company for the youths of East-Africa'
                        label='Holiday'
                        path='/services'
                        />
                        <CardItem
                        src='images/4.JPG'
                        text='Exlore with the best Tour Company for the youths of East-Africa'
                        label='Inspiration'
                        path='/services'
                        />
                        <CardItem
                        src='images/5.JPG'
                        text='Exlore with the best Tour Company for the youths of East-Africa'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem
                        src='images/5.JPG'
                        text='Exlore with the best Tour Company for the youths of East-Africa'
                        label='Adventure'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Card;
