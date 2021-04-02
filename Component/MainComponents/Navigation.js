import React, { useEffect, useRef, useState } from 'react'
import NavLink from '../Componnents/NavLink'
import Nav from '../StyledComponents/Nav'
import NavWrapper from '../StyledComponents/NavWrapper'
import StyledImage from '../StyledComponents/StyledImage'
import ham from '../../public/hamburger.svg'
import close from '../../public/close.svg'
import NavToggle from './NavToggle'
import { AnimatePresence, motion, useCycle } from 'framer-motion'
import styled from 'styled-components'
import { useDimensions } from '../Componnents/use-dimentions'

const NavAnimate = styled(motion.div)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    z-index: 200;
    top: -5px;
    height: 25vh;
    width: 100%;
    left: 0px;
    right: 0px;
`

const sidebar = {
    open: (height = 100) => ({
      clipPath: `circle(${height * 5 + 200}px at 50% -55px)`,
      transition: {
        type: "spring",
        stiffness: 200,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(0px at 50% 10%)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

function Navigation() {

    const [show, handleShow] = useState(false)
    // const [nav, setNav] = useState(false)
    const [isOpen, toggleOpen] = useCycle(false, true);

    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);


    useEffect(() => {
        const myFunc = () => {
            if (window.scrollY > 10) {
                handleShow(true);
            } else handleShow(false);
        }
        window.addEventListener("scroll", myFunc)
        return () => {
            window.removeEventListener("scroll", myFunc)
        }
    }, [])

    return (
        <>
        <Nav show={show}>
            <NavWrapper className="nav__wrapper">
                <NavWrapper>
                    Kent's Cup
                </NavWrapper>
                <NavWrapper className="nav__mobile">
                    <NavWrapper className="nav__mobile__ham" >
                        <StyledImage src={ isOpen ? close : ham} alt="ham" className="nav__ham" onClick={() => toggleOpen()} />
                    </NavWrapper>


                </NavWrapper>
                <NavWrapper className="nav__desktop">
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
            </NavWrapper>
            
        </Nav>
        <NavWrapper className="nav__mobile__wrapper__main">
            <motion.div 
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
                variants={sidebar}
                style={{ width: "100%", border: "hidden" }}
                >
                <AnimatePresence>
                        <NavAnimate 
                            key="nav-toggle" 
                            initial={{ opacity: 0 , y: -5 }}
                            animate={{ opacity: 1  , y: 5 }}
                            exit={{ opacity: 0 , y: -5 }}
                            >
                                <NavWrapper className="nav__mobile__wrapper">
                                    <NavLink to="/" link="home" onclick={() => toggleOpen()} >
                                        Home
                                    </NavLink>
                                    <NavLink to="/about" link="about" onclick={() => toggleOpen()} >
                                        About
                                    </NavLink>
                                    <NavLink to="/menu" link="menu" onclick={() => toggleOpen()} >
                                        Menu
                                    </NavLink>
                                    <NavLink to="/contact" link="contact" onclick={() => toggleOpen()} >
                                        Contact
                                    </NavLink>
                                </NavWrapper>
                        </NavAnimate>
                </AnimatePresence> 
            </motion.div>
            </NavWrapper>
        </>
    )
}

export default Navigation
