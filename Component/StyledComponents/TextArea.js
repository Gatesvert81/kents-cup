import styled from "styled-components";

const TextArea = styled.textarea`

    width: 100%;
    background: none;
    color: black;
    border: 1px solid;
    padding: 5px;
    min-height: 30px;
    
    :focus{
        background: burlywood;
        border: 1px solid black;
    }
`

export default TextArea