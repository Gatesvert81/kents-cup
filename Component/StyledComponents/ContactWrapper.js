import styled from "styled-components";
import bg from '../../public/contact.jpg'


const ContactWrapper = styled.div`

    &.contact__page__head{
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
        font-size: 4rem;
        font-family: Akaya Kanadaka;
    }

    &.contact__page__main{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 5vw;
    }

    &.contact__page__form__input{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-bottom: 20px;
    }

    &.contact__page__form__head{
        text-align: center;
        font-size: 1.5rem;
        font-weight: 500;
        margin-bottom: 20px;
    }

    &.contact__page__form__name__email{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
        align-content: center;
        width: 100%;
    }
 
    &.contact__page__form__textarea{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 10px 0px;
    }

    &.location__head{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 1.6rem;
        font-weight: 500;
    }

    &.contact__page__location__section{
        display: grid;
        grid-template-columns: 1fr ;
        grid-gap: 20px;
        justify-items: center;
        padding: 20px 5vw;
    }

    &.contact__page__location__grid{
        width: 100%;
    }

    &.contact__page__location__head{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 10px;
    }

    &.contact__page__location{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 25vh;
        background: burlywood;
    }
`
export default ContactWrapper