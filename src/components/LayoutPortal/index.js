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
            <div className="d-flex flex-grow-1">
                <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
                <div className="flex-fill">
                <Topbar onOpen={openSidebar} />
                    <MainStyled>
                        {children}
                    </MainStyled>
                </div>
            </div>
            <Footer />
        </>
    )
}

const MainStyled = styled.main`
   padding-top: 75px;
`