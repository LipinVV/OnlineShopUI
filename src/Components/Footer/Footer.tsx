import React from 'react'
import './footer.scss'


export const Footer = () => {

    return (
        <div className='footer'>
            <div className='footer-main'>
                <div className='footer-shop'>
                    <h4 className='footer-shop__title'>Shop Bag</h4>
                    <span className='footer-shop__text'>
                        We are the best furniture platform. We are already working on thousands of future home projects. Trust us, you will surely be satisfied
                    </span>
                </div>
                <div className='footer-content'>
                    <ul className='footer-content__community'>Community
                        <li className='footer-content__community-item'>Job Board</li>
                        <li className='footer-content__community-item'>Career Advice</li>
                        <li className='footer-content__community-item'>Pricing</li>
                        <li className='footer-content__community-item'>Assessments</li>
                        <li className='footer-content__community-item'>Powered</li>
                    </ul>
                    <ul className='footer-content__about'>About us
                        <li className='footer-content__about-item'>Career</li>
                        <li className='footer-content__about-item'>Internship</li>
                        <li className='footer-content__about-item'>Press</li>
                        <li className='footer-content__about-item'>Blog</li>
                        <li className='footer-content__about-item'>Contact</li>
                    </ul>
                    <ul className='footer-content__support'>Help & Support
                        <li className='footer-content__support-item'>Job Search</li>
                        <li className='footer-content__support-item'>Hello</li>
                        <li className='footer-content__support-item'>Hiring</li>
                        <li className='footer-content__support-item'>Talent Guide</li>
                        <li className='footer-content__support-item'>Online Text</li>
                    </ul>
                    <ul className='footer-contacts'>Contact Us
                        <li className='footer-contacts__mail'><a className='footer-contacts__mail-link'  href = "mailto: Hello@shopbag.com">Hello@shopbag.com</a></li>
                        <li className='footer-contacts__phone'><a className='footer-contacts__phone-number' href='tel:+081437650889'>081437650889</a></li>
                        <li className='footer-contacts__social-media'>
                            <span className='footer-contacts__social-media-item'><a href='https://facebook.com' className='footer-contacts__social-media-item-fb'></a></span>
                            <span className='footer-contacts__social-media-item'><a href='https://twitter.com' className='footer-contacts__social-media-item-twitter'></a></span>
                            <span className='footer-contacts__social-media-item'><a href='https://linkedin.com' className='footer-contacts__social-media-item-linked'></a></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='footer-underline'>
                <ul className='footer-underline__list'>
                    <li className='footer-underline__item'>2021 © Shopbag - All right reserved</li>
                    <li className='footer-underline__item'>Term of Service</li>
                    <li className='footer-underline__item'>Privacy Policy</li>
                    <li className='footer-underline__item'>Partners & Affiliates</li>
                    <li className='footer-underline__item'>Sitemap</li>
                </ul>
            </div>
        </div>
    )
}
