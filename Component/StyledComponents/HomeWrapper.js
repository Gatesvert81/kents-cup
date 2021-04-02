import styled from "styled-components";

const HomeWrapper = styled.div`

    &.home__wrap{
        width: 100vw;
    }

    &.home__page{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* background: ${props => `url(${props.backG}) no-repeat`}; */
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 100vh;
        will-change: opacity;

    }

    &.homeslider__wrapper{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    &.swipper__home{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 5;
        top: 50px;
        width: 100%;
        height: 100%;
        background: none;
        color: whitesmoke;
        text-shadow: 0 0 5px burlywood;
        font-weight: 800;
        letter-spacing: 8px;
        text-transform: uppercase;
        font-size: 5rem;
        font-family: Akaya Kanadaka;
    }

    &.home__page__slide{
        width: 100%;
        height: 100vh;
    }

    &.home__about{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        padding: 20px 5vw;
    }

    &.home__page__head{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        padding: 10px;
        font-weight: 600;
        font-size: 2.2rem;
        text-align: center;
    }

    &.home__menu{
        width: 100%;
    }

    &.home__menu__slider{
        display: grid;
        grid-template-columns: 1fr;
        width: 100%;
        padding: 5vw;
    }

    &.home__menu__order{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
    }

    @media all and (min-width: 425px){

    &.home__menu__slider{
        display: grid;
        grid-template-columns: 1fr;
        width: 100%;

    }
    }
`

export default HomeWrapper