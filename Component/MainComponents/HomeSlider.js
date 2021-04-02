import styled from "styled-components"
import HomeWrapper from "../StyledComponents/HomeWrapper"
import bg from '../../public/board.jpg'
import burger from '../../public/shop-2.jpg'
import kitchen from '../../public/kitchen.jpg'
import shop from '../../public/shop.jpg'
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const slides = [
  {id: 0, image: bg },
  {id: 1, image: burger },
  {id: 2, image: kitchen },
  {id: 3, image: shop },
]

const HomeSlideWrapper = styled(motion.div)`

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  opacity: will-change;

  &.home__title{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`


function HomeSlider() {
  const [current, set] = useState(0)

  const slide = slides[current]

  // setInterval(() => {
  //   set(state => (state + 1) % slides.length)
  //   console.log(current)
    
  // }, 5000);
  useEffect(() => {
    void
    setInterval(() => {
      set(state => (state + 1) % slides.length)
      
    }, 5000);
  }, [])

  return (
    <HomeWrapper className="homeslider__wrapper">
      <AnimatePresence>
      <HomeSlideWrapper 
        key={slide.id}
        initial={{opacity: 0.5 }}
        animate={{opacity: 1 }}
        exit={{opacity: 0.5 }}
        style={{backgroundImage: `url(${slide.image})`}} 
        >
        
      </HomeSlideWrapper>
      </AnimatePresence>
      <HomeWrapper className="swipper__home">
        <AnimatePresence>
        <HomeSlideWrapper
          key="home"
          initial={{opacity: 0 , y: -10 }}
          animate={{opacity: 1 , y: 0 }}
          className="home__title"
          >
            Kent's Cup
        </HomeSlideWrapper>
        </AnimatePresence>
      </HomeWrapper>
    </HomeWrapper>
  )
}

export default HomeSlider
