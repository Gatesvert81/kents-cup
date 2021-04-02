import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import { NavContext } from '../Component/MainComponents/Context'
import Wrapper from '../Component/StyledComponents/Wrapper'

function NotFound() {
    const [nav, setNav] = useContext(NavContext)

    useEffect(() => {
        void
        setNav("")
        
    }, [])
    return (
        <Wrapper className="notfound__page">
            <Head>
                <title>Kent's Cup | 404</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Wrapper className="notfound__number__wrapper">
                <Wrapper className="notfound__number">
                    4
                </Wrapper>
                <Wrapper className="notfound__number">
                    4
                </Wrapper>
            </Wrapper>
        </Wrapper>
    )
}

export default NotFound
