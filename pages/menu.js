import { AnimatePresence, motion } from 'framer-motion'
import Head from 'next/head'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import MenuCard from '../Component/Componnents/MenuCard'
import PopupComp from '../Component/Componnents/PopupComp'
import products from '../Component/Componnents/products'
import { NavContext, ProductContext, TabContext } from '../Component/MainComponents/Context'
import MenuTab from '../Component/MainComponents/MenuTab'
import MenuWrapper from '../Component/StyledComponents/MenuWrapper'

const ProductsWrapper = styled(motion.div)``

function Menu() {
    const [open, setOpen] = useState(false)
    const [tab, setTab] = useContext(TabContext)
    const [item, setItem] = useContext(ProductContext)

    const [nav, setNav] = useContext(NavContext)

    useEffect(() => {
        void
            setNav("menu")

    }, [])

    const variants = {
        visible: {
            opacity: 1,
            transition: {
              when: "beforeChildren",
              staggerChildren: 0.3,
            },
          },
          hidden: {
            opacity: 0.8,
            transition: {
              when: "afterChildren",
            },
          },
    }

    const itemAnimate = {
        visible: {  
            y: 0,
            // transition: {
                
            // }
        },
        hidden: {  y: -100 },
    }

    const filteredProducts = products.filter(product => {
        if (product.category.includes(tab)) {
            return true
        } else {
            return false
        }
    })
    return (
        <MenuWrapper className="menu__page">
            <Head>
                <title>Kent's Cup | Menu</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MenuWrapper className="menu__page__head">
                Menu
            </MenuWrapper>
            <MenuWrapper className="menu__page__main">
                <MenuWrapper className="menu__page__tab">
                    <MenuTab />
                </MenuWrapper>
                <MenuWrapper >
                    <AnimatePresence>
                        <ProductsWrapper
                            key={tab}
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                        >
                            <MenuWrapper className="menu__page__products">
                            {
                                tab === "all" ?
                                    products.map((product, index) => (
                                        <MenuWrapper key={index} className="product__wrapper" >
                                            <AnimatePresence>
                                            <ProductsWrapper
                                                key={index}
                                                initial="hidden"
                                                animate="visible"
                                                variants={itemAnimate}
                                                onClick={() => {
                                                    setItem(product);
                                                    setOpen(!open);
                                                }} >
                                                <MenuCard product={product} />
                                            </ProductsWrapper>
                                            </AnimatePresence>
                                        </MenuWrapper>
                                    )) :
                                    filteredProducts.map((product, index) => (
                                        <MenuWrapper className="product__wrapper" key={index}>
                                            <AnimatePresence>
                                            <ProductsWrapper
                                                key={index}
                                                initial="hidden"
                                                animate="visible"
                                                variants={itemAnimate}
                                                onClick={() => {
                                                    setItem(product);
                                                    setOpen(!open);
                                                }}
                                            >
                                                <MenuCard product={product} />
                                            </ProductsWrapper>
                                            </AnimatePresence>
                                        </MenuWrapper>
                                    ))
                            }
                            </MenuWrapper>
                        </ProductsWrapper>
                    </AnimatePresence>
                </MenuWrapper>
                <MenuWrapper>
                    <PopupComp open={open} setOpen={setOpen} />
                </MenuWrapper>
            </MenuWrapper>
        </MenuWrapper>
    )
}

export default Menu
