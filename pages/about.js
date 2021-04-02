import React, { useContext, useEffect } from 'react'
import AboutWrapper from '../Component/StyledComponents/AboutWrapper'
import AboutStyledCard from '../Component/Componnents/AboutStyledCard'
import bg from '../public/board.jpg'
import joe from '../public/joe.jpg'
import shop from '../public/shop-2.jpg'
import Head from 'next/head'
import { NavContext } from '../Component/MainComponents/Context'


function About() {
    const [nav, setNav] = useContext(NavContext)

    useEffect(() => {
        void
        setNav("about")
        
    }, [])
    return (
        <AboutWrapper className="about__page">
            <Head>
                <title>Kent's Cup | About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AboutWrapper className="about__page__head">
                About
            </AboutWrapper>
            <AboutWrapper className="about__page__cards">
                <AboutStyledCard title="Our Beginning" reverse={true} image={bg}>
                    Kent's Cup is a brand of food and beverages from North Legon, Ghana. It was founded by two young man, on November 2020.  They started the business together in a modest rented building at Ecowas Playboy. 
                </AboutStyledCard>
                <AboutStyledCard title="Our Vision" reverse={false} image={joe}>
                    We aim to be the best coffee shop in Ghana within the next 5 years. We make a consious effort to provide quality service to our customers.  Kent's Cup is a brand of food and beverages from Yogyakarta, Indonesia. It was founded by two young man, on April 2017.  They started the business together in a modest rented building at Jalan Kaliurang Km 5.
                </AboutStyledCard>
                <AboutStyledCard title="Our Team" reverse={true} image={shop}>
                    We train our team to become professional baristas providing quality service to our customers. Kent's Cup is a brand of food and beverages from Yogyakarta, Indonesia. It was founded by two young man, on April 2017.  They started the business together in a modest rented building at Jalan Kaliurang Km 5.
                </AboutStyledCard>
                <AboutStyledCard title="How it's going" reverse={false} image={bg}>
                    We are currently having 2 branches each in Accra and Kumasi. Kent's Cup is a brand of food and beverages from Yogyakarta, Indonesia. It was founded by two young man, on April 2017.  They started the business together in a modest rented building at Jalan Kaliurang Km 5.
                </AboutStyledCard>
            </AboutWrapper>
        </AboutWrapper>
    )
}

export default About
