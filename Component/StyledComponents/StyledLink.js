import styled from "styled-components";

const StyledLink = styled.a`
    margin: 0px 10px;
    border: 1px hidden;
    border-bottom: ${props => props.selected ? "1px solid burlywood" : "none"} ;
`

export default StyledLink