import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { Footer } from "../Layout/Footer";
import styled from "styled-components";
import { useState } from "react";

export function LayoutPortal({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const openSidebar = () => setIsSidebarOpen(true)
    const closeSidebar = () => setIsSidebarOpen(false)
    return (
        <>
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
            <Topbar onOpen={openSidebar} />
            <MainStyled>
                {children}
            </MainStyled>
            <Footer />
        </>
    )
}

const MainStyled = styled.main`
   padding-top: 75px;
`