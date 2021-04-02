import React, { useContext } from 'react'
import Link from 'next/link'
import StyledLink from '../StyledComponents/StyledLink'
import NavWrapper from '../StyledComponents/NavWrapper'
import { NavContext } from '../MainComponents/Context'

function NavLink({children, to, link, onclick}) {

    const [nav, setNav] = useContext(NavContext)

    return (
        <NavWrapper className="nav__link " onClick={() => setNav(link)} selected={nav.toUpperCase() === children.toString().toUpperCase() ? true : false } >
           <Link href={to}>
            <StyledLink selected={nav.toUpperCase() === children.toString().toUpperCase() ? true : false } onClick={onclick} >
                {children} 
            </StyledLink>
           </Link> 
        </NavWrapper>
    )
}

export default NavLink
