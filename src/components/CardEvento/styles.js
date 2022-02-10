import styled from "styled-components"
import { Button, Card } from "react-bootstrap";

export const ImgCard = styled(Card.Img)`
    width: 100%;
    height: 139px;
    border-radius: 3px;
`;

export const ButtonCard = styled(Button)`
    border-color: ${props => props.theme.mainColor} !important;
    background-color: ${props => props.theme.mainColor} !important;
    margin-top: auto;
`;

export const TextCard = styled(Card.Text)`
    ${props => props.hidedescriptionmobile ? `
    @media (max-width: 768px) {   
        display: none;   
    }` : ''}   
    
`
export const BodyCard = styled(Card.Body)`
    display: flex;
    flex-direction: column;
`


