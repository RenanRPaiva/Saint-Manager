import styled from 'styled-components'
import { Header } from './Header'
import { Footer } from './Footer'



export function Layout({ children }) {
    return (
        <>
            <Header />
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