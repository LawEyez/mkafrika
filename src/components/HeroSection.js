import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <Carousel infiniteLoop autoPlay>
            <div className='hero-container one'>
            {/* <video src='/' autoPlay loop muted/>  */}
            <h1>The Future is Here.</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button 
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    >
                        Get Started
                </Button>
                <Button 
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    >
                        Watch Trailer
                </Button>
                </div>
            </div>
            <div className='hero-container two'>
                {/* <video src='/' autoPlay loop muted/>  */}
                <h1>Adventure Awaits</h1>
                <p>What are you waiting for?</p>
                <div className='hero-btns'>
                    <Button 
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        >
                            Get Started
                    </Button>
                    <Button 
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                        >
                            Watch Trailer
                    </Button>
                </div>
            </div>
            <div className='hero-container three'>
            {/* <video src='/' autoPlay loop muted/>  */}
            <h1>We Travel to Learn</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button 
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    >
                        Get Started
                </Button>
                {/* <Button 
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    >
                        Watch Trailer
                </Button> */}
            </div>
        </div>

        </Carousel>
    )
}

export default HeroSection;
