import React from 'react'
import HomeCard from '../StyledComponents/HomeCard'
import StyledImage from '../StyledComponents/StyledImage'

function HomeStyledCard({title, children, image, reverse}) {
    return (
        <>
          <HomeCard className="homecard__card"> 
            <HomeCard className="homecard__card__title">
              {title}
            </HomeCard>
            <HomeCard 
            className={ reverse ? "homecard__card__body__grid" : "homecard__card__body"} >
              <HomeCard className="homecard__card__description">
                {children}
              </HomeCard>
              <HomeCard className="homecard__card__image">
                <StyledImage src={image} alt="images" className="homecard__image" />
              </HomeCard>
            </HomeCard>
          </HomeCard>
        </>
    )
}

export default HomeStyledCard
