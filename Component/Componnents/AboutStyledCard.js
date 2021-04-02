import React from 'react'
import AboutCard from '../StyledComponents/AboutCard'
import StyledImage from '../StyledComponents/StyledImage'

function AboutStyledCard({title, children, image, reverse}) {
    return (
        <>
          <AboutCard className="aboutcard__card">
            <AboutCard className="aboutcard__card__title"> 
              {title}
            </AboutCard>
            <AboutCard 
            className={ reverse ? "aboutcard__card__body__reverse" : "aboutcard__card__body"} >
              <AboutCard className="aboutcard__card__description">
                {children}
              </AboutCard>
              <AboutCard className="aboutcard__card__image">
                <StyledImage src={image} alt="images" className="aboutcard__image" />
              </AboutCard>
            </AboutCard>
          </AboutCard>
        </>
    )
}

export default AboutStyledCard
