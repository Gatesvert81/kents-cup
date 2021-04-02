import React from 'react'
import NavLink from '../Componnents/NavLink'
import Foot from '../StyledComponents/Foot'
import NavWrapper from '../StyledComponents/NavWrapper'
import StyledImage from '../StyledComponents/StyledImage'
import fb from '../../public/fb.png'
import ig from '../../public/ig.png'
import twi from '../../public/twi.png'


function Footer() {
    return (
        <Foot>
            <NavWrapper>
                Kent's Cup
            </NavWrapper>
            <NavWrapper>
            <NavLink to="/" link="home">
                    Home
                </NavLink>
                <NavLink to="/about" link="about">
                    About
                </NavLink>
                <NavLink to="/menu" link="menu">
                    Menu
                </NavLink>
                <NavLink to="/contact" link="contact">
                    Contact
                </NavLink>
            </NavWrapper>
            <NavWrapper className="footer__social" >
                <NavLink to="#">
                    <StyledImage src={fb} alt="fb" className="footer__icon" />
                </NavLink>
                <NavLink to="#">
                <StyledImage src={ig} alt="ig" className="footer__icon" />
                </NavLink>
                <NavLink to="#">
                <StyledImage src={twi} alt="twi" className="footer__icon" />
                </NavLink>
            </NavWrapper>
            <NavWrapper>
                ©Copyright 2021 Kent's Cup
            </NavWrapper>
            <NavWrapper className="footer__designer">
                Designed by Gates Vert
            </NavWrapper>
        </Foot>
    )
}

export default Footer
