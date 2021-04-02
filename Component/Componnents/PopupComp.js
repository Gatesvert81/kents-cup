import { useContext, useEffect, useState } from "react"
import {  ProductContext } from "../MainComponents/Context"
import Button from "../StyledComponents/Button"
import ItemCard from "../StyledComponents/ItemCard"
import StyledPopup from "../StyledComponents/StyledPopup"
import SizePrices from "./SizePrices"


function PopupComp({open, setOpen}) {

    const [item, setItem] = useContext(ProductContext)

    const [price, setPrice] = useState(item.prices.small)

    useEffect(() => {
        void
        setPrice(item.prices.small)
        
    }, [])

    return (
        <StyledPopup
            open={open}
            onClose={!open}
            modal
            lockScroll={open}
            closeOnDocumentClick={() => setOpen(!open)}
        >
            <ItemCard className="popupComp__main" >
                <ItemCard className="popupComp__body" bgImage={item.image} >
                    <ItemCard className="popupComp__title">
                        {item.title}
                    </ItemCard>
                    <ItemCard className="popupComp__price">
                        ${price}
                    </ItemCard>
                </ItemCard>
                <ItemCard className="popupComp__detail">
                    <ItemCard>
                        <SizePrices product={item} setPrice={setPrice}/> 
                    </ItemCard>
                    <ItemCard>
                        {item.description}
                    </ItemCard>
                    <ItemCard className="popupComp__order__wrapper" >
                        <Button className="popupComp__order" >
                            Order Now
                        </Button>
                    </ItemCard>
                </ItemCard> 
            </ItemCard>
        </StyledPopup>
    )
}

export default PopupComp
