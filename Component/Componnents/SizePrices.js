import Popup from "reactjs-popup"
import styled from "styled-components"
import StyledImage from "../StyledComponents/StyledImage"
import Wrapper from "../StyledComponents/Wrapper"
import Button from "../StyledComponents/Button"
import hotCup from '../../public/hot-cup.png'
import coldCup from '../../public/cold-cup.png'
import food from '../../public/take-away.png'
import products from "./products"
import { useEffect, useState } from "react"



const SizePopup = styled(Popup)`

`


function SizePrices({ product, setPrice }) {
    const [select, setSelect] = useState("small")

    useEffect(() => {
        void
        setPrice(product.prices.small)
        
    }, [])

    const handleCup = () => {
        if (product.category.includes("food")) {
            return food
        } else{
            if (product.category.includes("cold")) {
                return coldCup
            } else {
                return hotCup
            }
        }
    }

    const handleBtn = (size, sizeSelect) => {
        setPrice(size)
        setSelect(sizeSelect)
    }

    return (
        <Wrapper className="sizePrices__main">
            <Wrapper>
                <SizePopup
                    trigger={<Button className="cup__button"  onClick={() => handleBtn(product.prices.small, "small")} 
                    selected={select === "small" ? true : false}
                    > 
                    <StyledImage src={handleCup()} alt="small" className="small__cup" /> 
                    </Button>}
                    position="top center"
                    on={['hover', 'focus']}
                    arrow={false}
                >
                    <Wrapper className="size__popup" >
                        {Object.keys(product.prices)[0]}
                    </Wrapper>
                </SizePopup>
            </Wrapper>
            <Wrapper>
                <SizePopup
                    trigger={
                    <Button className="cup__button" 
                    onClick={() => handleBtn(product.prices.medium, "medium")} 
                    selected={select === "medium" ? true : false}
                    > 
                    <StyledImage src={handleCup()} alt="medium" className="medium__cup" /> 
                    </Button>}
                    position="top center"
                    on={['hover', 'focus']}
                    arrow={false}
                >
                    <Wrapper className="size__popup">
                        {Object.keys(product.prices)[1]}
                    </Wrapper>
                </SizePopup>
            </Wrapper>
            <Wrapper>
                <SizePopup
                    trigger={<Button className="cup__button" onClick={() => handleBtn(product.prices.large, "large")} 
                    selected={select === "large" ? true : false}
                    > 
                    <StyledImage src={handleCup()} alt="large" className="large__cup" /> 
                    </Button>}
                    position="top center"
                    on={['hover', 'focus']}
                    arrow={false}
                >
                    <Wrapper className="size__popup">
                        {Object.keys(product.prices)[2]}
                    </Wrapper>
                </SizePopup>
            </Wrapper>
        </Wrapper>
    )
}

export default SizePrices
