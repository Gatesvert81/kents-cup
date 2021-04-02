import styled from "styled-components";

const Button = styled.button`


    

    &.cup__button{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px hidden;
        border-radius: 8px;
        background: ${props => props.selected ? "#ecdac6" : "none"};
        transition: 0.2s;
        padding: 5px;
        width: fit-content;
        height: fit-content;
    }

    &.cup__button:hover{
        transform: scale(1.1);
        background: #ecdac6;
    }

    &.popupComp__order{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        background: none;
        border: 1px solid;
        border-radius: 10px;
        text-transform: uppercase;
        align-self: flex-end;
        margin: 20px;
        width: fit-content;
        transition: 0.3s;

    }

    &.popupComp__order:hover{
        transform: scale(1.1);
        background: #ecdac6;
    }

    &.form__btn{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #deb88791;
        border: 1px hidden;
        border-radius: 10px;
        padding: 10px;
        transition: 0.3s;
    }

    &.form__btn:hover{
        background: burlywood;
        transform: scale(1.1);
    }
`
export default Button