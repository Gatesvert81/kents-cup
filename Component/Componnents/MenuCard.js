import React, { useContext } from 'react'
import { OpenContext, ProductContext } from '../MainComponents/Context'
import ItemCard from '../StyledComponents/ItemCard'
import StyledImage from '../StyledComponents/StyledImage'
import PopupComp from './PopupComp'

function MenuCard({product}) {

    const [open, setOpen] = useContext(OpenContext)
    const [item, setItem] = useContext(ProductContext)

    return (
        <ItemCard 
            className="menucard__card"  >
            <ItemCard className="menucard__card__image"> 
                <StyledImage src={product.image} alt="product" className="menucard__image" />
            </ItemCard>
            <ItemCard className="menucard__detail">
            <ItemCard className="menucard__detail__text">
                {product.title}
            </ItemCard>
            </ItemCard>
        </ItemCard>
    )
}

export default MenuCard
