import styled from "styled-components";
import bg from '../../public/shop.jpg'


const AboutWrapper = styled.div`

    &.about__page__head{
        display: flex;
        justify-content: center;
        align-items: center;
        background: url(${bg}) no-repeat;
        background-position: center;
        background-size: cover;
        height: 60vh;
        color: whitesmoke;
        text-shadow: 0 0 5px burlywood;
        font-weight: 800;
        letter-spacing: 8px;
        text-transform: uppercase;
        font-size: 5rem;
        font-family: Akaya Kanadaka;
    }

    &.about__page__cards{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px 5vw; 
    }

`
export default AboutWrapper