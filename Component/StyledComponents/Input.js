import styled from "styled-components";

const Input = styled.input`
    width: 100%;
    background: none;
    color: black;
    border: 1px hidden;
    border-bottom: 1px solid;
    padding: 5px;
    
    :focus{
        background: burlywood;
        border: 1px hidden;
        border-bottom: 1px solid black;
    }
`

export default Input