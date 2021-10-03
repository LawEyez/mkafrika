import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                Join the Adventure Newsletter to receive our best vacation deals.
                </p>
                <p className='footer-subscription-text'>
                You can Unsubscribe at any time.
                </p>
                <div className='input-areas'>
                <form>
                    <input type='email' name='email'
                        placeholder='Your E-mail' className='footer-input'/>
                    <Button buttonStyle='btn--outline'>Subscribe</Button>    
                </form>

                </div>

            </section>
            <h1 className='Footer-link-members'>Connect with our Team</h1>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Member One</h2>
                        <h3>Details</h3>
                        <h4>Contact</h4>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Member Two</h2>
                        <h3>Details</h3>
                        <h4>Contact</h4>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Member Three</h2>
                        <h3>Details</h3>
                        <h4>Contact</h4>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Member Four</h2>
                        <h3>Details</h3>
                        <h4>Contact</h4>
                    </div>
                </div>

            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <div className='social-links'>
                            <Link className='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                            > 
                                <i className='fab fa-facebook-f'/>
                            </Link>
                            <Link className='social-icon-link YouTube'
                            to='/'
                            target='_blank'
                            aria-label='YouTube'
                            > 
                                <i className='fab fa-youtube'/>
                            </Link>
                            <Link className='social-icon-link Instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                            > 
                                <i className='fab fa-instagram'/>
                            </Link>
                            <Link className='social-icon-link Twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                            > 
                                <i className='fab fa-twitter'/>
                            </Link>
                        </div>
                    </div>
                    <small className='website-rights'>Mk Africa © 2021</small>
                </div>
            </section>
            
        </div>
    )
}

export default Footer;
