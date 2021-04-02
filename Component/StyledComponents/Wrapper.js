import styled from "styled-components";
import cup from '../../public/cup.jpg'


const Wrapper = styled.div`

    &.notfound__page{
        display: flex;
        justify-content: center;
        align-items: center;
        background: url(${cup}) no-repeat;
        background-position: center;
        background-size: cover;
        height: 100vh;
        width: 100%;
        color: #ecdac6;
        color: black;
    }

    &.notfound__number__wrapper{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        justify-items: center;
        width: 100%;
        /* background: blue; */
        padding-top: 0px;
    }

    &.notfound__number{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        /* background: green; */
        font-size: 15rem;
        text-align: center;
        font-weight: 700;
    }

    &.sizePrices__main{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
        align-items: flex-end;
        justify-content: center;
    }

    &.size__popup{
        background: burlywood;
        padding: 10px;
        margin: 10px;
    }

    &.layout__wrapper{
        /* min-height: 100vh; */
    }
`
export default Wrapper