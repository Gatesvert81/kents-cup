import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    /* position: ${props => props.show ? "sticky" : "absolute" }; */
    position: sticky;
    top: 0px;
    width: 100%;
    z-index: 10;
    /* background: ${props => props.show ? "#c5a683" : "linear-gradient(180deg, #c5a683  5% , transparent 100% )" }; */
    background: #c5a683;
    padding: 15px;
    height: 50px;
    color: white;
    transition: 0.03s ease;
    /* transform: translateY() */

    @media all and (min-width: 376px) {
        padding: 0vw 5vw;
    }
`
export default Nav