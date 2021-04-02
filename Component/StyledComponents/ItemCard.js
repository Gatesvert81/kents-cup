import styled from "styled-components"

const ItemCard = styled.div`

    &.menucard__card{
        position: relative;
        border: 1px hidden black;
        width: 100%;
        height: 300px;
        overflow: hidden;
    }

    &.menucard__card__image{
        width: 100%;
        height: 100%;
    }

    &.menucard__detail{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        content: '';
        position: absolute;
        background: linear-gradient(360deg, black 10%, transparent 100%);
        width: 100%;
        height: 40%;
        bottom: -10%;
        transition: 0.3s;
    }

    &.menucard__detail__text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        text-transform: uppercase;
        padding: 20px;
        background: none;
        position: absolute;
        bottom: 0px;
        color: whitesmoke;
        font-size: 1rem;
        transform: scale(1.2);
        font-weight: 600;
        transition: 0.3s;
        opacity: 0.8;
    }

    

    &.menucard__card:hover &.menucard__detail {
        position: absolute;
        /* bottom: 0%; */
    }

    &.menucard__card:hover &.menucard__detail__text {
        position: absolute;
        transform: scale(1.8);
        bottom: 10%;
    }

    &.menucard__card:hover .menucard__image {
        transform: scale(1.1);
    }

    &.popupComp__main{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 70vw;
        height: 70vh;
        border: 1px hidden;
        border-radius: 10px;
    }

    &.popupComp__body{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        background: url(${props => props.bgImage}) no-repeat;
        background-size: cover;
        background-position: center;
        padding: 10px;
        width: 100%;
        height: 35vh;
    }

    &.popupComp__title , &.popupComp__price{
        font-size: 2rem;
        font-weight: 400;
        text-shadow: 2px 2px 1px burlywood;
    }

    &.popupComp__price{
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px hidden;
        border-radius: 20px;
        padding: 5px;
        background: #deb88775;
    }

    &.popupComp__detail{
        display: flex; 
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px ;
    }

    &.popupComp__order__wrapper{
        justify-self: flex-end;
    }

    @media all and (min-width: 425px){

    &.menucard__card{
        position: relative;
        border: 1px hidden black;
        width: 350px;
        height: 250px;
        overflow: hidden;
    }

    &.popupComp__main{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 350px;
        height: fit-content;
        border: 1px hidden;
        border-radius: 10px;
    }

    &.popupComp__body{
        height: 30vh;
    }

    }
`
export default ItemCard