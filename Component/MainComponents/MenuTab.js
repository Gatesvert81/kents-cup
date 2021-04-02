import React, { useContext } from 'react'
import { categories } from '../Componnents/products'
import MenuTabBtn from '../StyledComponents/MenuTabBtn'
import MenuWrapper from '../StyledComponents/MenuWrapper'
import { TabContext } from './Context'

function MenuTab() {
    const [tab, setTab] = useContext(TabContext)
    return (
        <MenuWrapper className="menutab__wrapper">
            {
                categories.map((category, index) => (
                    <MenuTabBtn key={index} onClick={() => setTab(category)} selected={ tab === category ? true : false } >
                        {category}
                    </MenuTabBtn>
                ))
            }
        </MenuWrapper>
    )
}

export default MenuTab
