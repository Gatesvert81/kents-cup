import styled from "styled-components";

const AboutCard = styled.div`

    &.aboutcard__card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px 0px;
    }

    &.aboutcard__card__title{
        margin: 10px;
        font-size: 1.5rem;
        font-weight: 500;
    }

    &.aboutcard__card__body{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-areas:
        "textarea"
        "imagearea" ;
        grid-gap: 20px;
    }

    &.aboutcard__card__body__reverse{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-areas:
        "textarea"
        "imagearea" ;
        grid-gap: 20px;
    }

    &.aboutcard__card__description{
        text-align: left;
        line-height: max-height;
        padding-bottom: 20px;
        grid-area: textarea;
    } 

    &.aboutcard__card__image{
        width: 100%;
        height: 100%;
        grid-area: imagearea;
    }

    @media all and (min-width: 425px){

    &.aboutcard__card__title{
        margin: 10px;
        font-size: 1.5rem;
        font-weight: 500;
    }

    &.aboutcard__card__body{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
        "textarea imagearea" ;
    }

    &.aboutcard__card__body__reverse{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
        "imagearea textarea" ;
    }

    &.aboutcard__card__description{
        text-align: left;
        line-height: max-height;
        padding-bottom: 20px;
    } 

    &.aboutcard__card__description{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        padding: 20px 30px;
        background: none;
        text-align: left;
        line-height: max-height;
        grid-area: textarea;
    }

    }

`
export default AboutCard