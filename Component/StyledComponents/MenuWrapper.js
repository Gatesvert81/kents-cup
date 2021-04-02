import styled from "styled-components";
import bg from '../../public/menu.jpg'


const MenuWrapper = styled.div`

    &.menu__page__head{
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

    &.menu__page__main{
        display: flex;
        flex-direction: column;
        align-items: center; 
    }

    &.menutab__wrapper{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
    }
    

    &.menu__page__tab{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px 0px;
        position: sticky;
        top: 50px;
        z-index: 10;
        background: #ecdac6;
        width: 100%;
        overflow-x: scroll;
        
    }

    &.menu__page__tab::-webkit-scrollbar{
        display: none;
    }

    &.menu__page__products{
        display: grid;
        grid-template-columns: 1fr;
        padding: 0px 5vw 30px;
        grid-gap: 20px;
    }

    &.product__wrapper{
        margin: 20px 0px;
    }

    @media all and (min-width: 350px){
    &.menutab__wrapper{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    }

    @media all and (min-width: 425px){

    &.menu__page__products{
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        padding: 0px 5vw 30px;
        grid-gap: 20px;
        overflow: hidden;
    }

    &.product__wrapper{
        margin: 0px ;
    }

    &.menu__page__tab{
        overflow-x: none;
    }

    }
`
export default MenuWrapper