import styled from "styled-components";

const NavWrapper = styled.div`
    display: flex;
    flex-direction: row;

    &.nav__link{
        cursor: pointer;
        transition: 0.3s;
        opacity: ${ props => props.selected ? "1" : "0.6" };
    }

    &.nav__link:hover{
        transform: scale(1.1);
        opacity: 1;
    }

    &.footer__social{
        padding: 10px 0px;
    }

    &.footer__designer{
        padding-top: 10px;
        font-size: 0.8rem;
    }

    &.nav__mobile{
        display: flex;
        flex-direction: column;
        /* width: 100%; */
        background: none;
        transition: 0.3s;
    }

    &.nav__desktop{
        display: none;
    }

    &.nav__wrapper{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        background: none;
        transition: 0.3s;
    }

    &.nav__mobile__wrapper__main{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: sticky;
        z-index: 200;
        width: 100%;
        background: none;
        top: 38px;
        left: 0px; 
        right: 0px;
        border: hidden;
    }

    &.nav__mobile__wrapper{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        /* position: absolute; */
        top: -5px;
        width: 100%;
        height: 100%;
        padding-bottom: 15%;
        background: #c5a683;
        transition: 0.3s;
        border: hidden;
    }

    @media all and (min-width: 425px) {

    &.nav__desktop{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    
    &.nav__mobile__wrapper__main{
        display: none;
    }

    &.nav__mobile__ham{
        display: none;
    }



    }

`

export default NavWrapper