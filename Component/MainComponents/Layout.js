import React from 'react'
import Wrapper from '../StyledComponents/Wrapper'
import Context from './Context'
import Footer from './Footer'
import Navigation from './Navigation'

function Layout({ children }) {
    return (
        <>
            <Context>
                <Navigation />
                <Wrapper className="layout__wrapper">
                    {children}
                </Wrapper>
                <Footer />
            </Context>
        </>

    )
}

export default Layout
