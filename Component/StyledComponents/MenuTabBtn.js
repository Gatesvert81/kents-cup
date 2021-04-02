import styled from "styled-components";

const MenuTabBtn = styled.button`
    background: ${props => props.selected ? "#88551c" : "none"};
    text-transform: uppercase;
    padding: 8px;
    border: 1px hidden;
    border-radius: 12px;
    color: ${props => props.selected ? "white" : "#88551c"};
    opacity: 0.8;
    transition: 0.3s;
    letter-spacing: 0.15rem;

    :hover{
        transform: scale(1.1)
    }
`
export default MenuTabBtn