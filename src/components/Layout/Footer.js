import styled from "styled-components"

export function Footer() {
    return (
        <FooterStyled className='text-center'>
            <p className='m-0'>Todos os direitos reservados ao Saint Manager!</p>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    background-color: ${props => props.theme.mainColor};
    color: #FFF;
    margin-top: 20px;
    padding: 5px 0;
`