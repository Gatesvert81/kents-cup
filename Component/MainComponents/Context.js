import React, { createContext, useState } from 'react'

export const TabContext = createContext()
export const OpenContext = createContext()
export const ProductContext = createContext()
export const NavContext = createContext()


function Context({ children }) {
    const [tab, setTab] = useState("all")
    const [nav, setNav] = useState("home")
    const [open, setOpen] = useState(false)
    const [item, setItem] = useState({ prices: {} })

    return (
        <TabContext.Provider value={[tab, setTab]}>
            <OpenContext.Provider value={[open, setOpen]}>
                <ProductContext.Provider value={[item, setItem]}>
                    <NavContext.Provider value={[nav, setNav]}>
                        {children}
                    </NavContext.Provider>
                </ProductContext.Provider>
            </OpenContext.Provider>
        </TabContext.Provider>
    )
}

export default Context
