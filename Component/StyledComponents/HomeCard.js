import styled from "styled-components";

const HomeCard = styled.div`


    &.homecard__card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    &.homecard__card__title{
        margin: 10px;
        font-size: 1.2rem;
        font-weight: 500;
    }

    &.homecard__card__body{
        display: grid;
        grid-template-columns: 1fr ;
        justify-items: center;
        justify-content: center;
        grid-template-areas: 
        " imagearea "
        " textarea ";
        grid-gap: 10px; 
    }

    &.homecard__card__body__grid{
        display: grid;
        grid-template-columns: 1fr ;
        grid-template-areas: 
        " imagearea "
        " textarea ";
        grid-gap: 10px;
    }

    &.homecard__card__description{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: none;
        width: 100%;
        grid-area: textarea;
    }

    &.homecard__card__image{
        width: 100%;
        height: 100%;
        grid-area: imagearea;
    }

    @media all and (min-width: 425px) {

    &.homecard__card__title{
        margin: 10px;
        font-size: 1.5rem;
        font-weight: 600;
    }


    &.homecard__card__body{
        display: grid;
        grid-template-columns: 1fr 1fr ;
        justify-items: center;
        justify-content: center;
        grid-template-areas: 
        " imagearea textarea ";
        grid-gap: 10px; 
        width: 100%;
    }

    &.homecard__card__body__grid{
        display: grid;
        grid-template-columns: 1fr 1fr ;
        grid-template-areas: 
        " textarea imagearea " ;
        grid-gap: 10px;
        width: 100%;
    }

    &.homecard__card__description{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background: none;
        width: 100%;
        text-align: center;
        padding: 20px 30px;
        grid-area: textarea;
    }



    }
`
export default HomeCard