import styled from "styled-components";

const StyledImage = styled.img`

    &.homecard__image{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &.nav__ham{
        width: 25px;
        height: 25px;
    }

    &.menucard__image{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.3s;
    }

    &.aboutcard__image{
        width:100%;
        height: 100%;
        object-fit: cover;
    }

    &.footer__icon{
        width: 30px;
        height: 30px;
        opacity: 0.8;
    }

    &.footer__icon:hover{
        transform: scale(1.1);
        opacity: 1;
    }
    
    &.small__cup{
        width: 30px;
        height: fit-content;
    }

    &.medium__cup{
        width: 45px;
        height: fit-content;
    }

    &.large__cup{
        width: 60px;
        height: fit-content;
    }

    
`
export default StyledImage