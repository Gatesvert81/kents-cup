import Head from 'next/head'
import HomeStyledCard from '../Component/Componnents/HomeStyledCard'
import HomeSlider from '../Component/MainComponents/HomeSlider'
import MenuSlider from '../Component/MainComponents/MenuSlider'
import HomeWrapper from '../Component/StyledComponents/HomeWrapper'
import service from '../public/joe-jus.jpg'
import taste from '../public/cof-machine.jpg'
import icepresso from '../public/icepresso.jpg'
import NavLink from '../Component/Componnents/NavLink'
import Button from '../Component/StyledComponents/Button'
import { useContext, useEffect } from 'react'
import { NavContext } from '../Component/MainComponents/Context'



export default function Home() {
  const [nav, setNav] = useContext(NavContext)

    useEffect(() => {
        void
        setNav("home")
        
    }, [])
  return (
    <HomeWrapper className="home__wrap" >
      <Head>
        <title>Kent's Cup | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeWrapper className="home__page__slide">
        <HomeSlider />
      </HomeWrapper>
      <HomeWrapper className="home__about">
        <HomeWrapper className="home__page__head" >
          Why Choose Us ?
        </HomeWrapper>
        <HomeWrapper className="home__about__cards">
          <HomeStyledCard title="Best Customer Sevice" image={service} reverse={false}>
            Kent's Cup was built with the customer being our first priority. It was just a typical day for me working as a freelance marketing consultant and trainer.  I had a meeting in the morning and then had another meeting later in the day.  It was pointless in returning home in the interim so it was a good excuse to have a coffee and catch up on a few emails.
          </HomeStyledCard>
          <HomeStyledCard title="Great Coffee Taste" image={taste} reverse={true}>
            Our Coffee is made from 100% arabica coffee beans and thus has a great taste . It was just a typical day for me working as a freelance marketing consultant and trainer.  I had a meeting in the morning and then had another meeting later in the day.  It was pointless in returning home in the interim so it was a good excuse to have a coffee and catch up on a few emails.
          </HomeStyledCard>
          <HomeStyledCard title="Order from anywhere" image={icepresso} reverse={false}>
            We are available on food platforms like Jumia and makes it easy for customers to order from anywhere across Accra and Kumasi.  It was just a typical day for me working as a freelance marketing consultant and trainer.  I had a meeting in the morning and then had another meeting later in the day.  It was pointless in returning home in the interim so it was a good excuse to have a coffee and catch up on a few emails.
          </HomeStyledCard>
        </HomeWrapper>
      </HomeWrapper>
      <HomeWrapper className="home__menu">
        <HomeWrapper className="home__page__head">
          Menu
        </HomeWrapper>
        <HomeWrapper className="home__menu__slider">
          <MenuSlider />
        </HomeWrapper>
        <HomeWrapper className="home__menu__order">
          <NavLink to="/menu" link="menu" >
            <Button className="popupComp__order">
              Order Now
            </Button>
          </NavLink>
        </HomeWrapper>
      </HomeWrapper>
    </HomeWrapper>
  )
}
