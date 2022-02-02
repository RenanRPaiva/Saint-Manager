import styled from "styled-components"
import { Button, Card } from "react-bootstrap";

export const ImgCard = styled(Card.Img)`
    width: 100%;
    height: 139px;
    border-radius: 3px;
`;

export const ButtonCard = styled(Button)`
    border-color: #FFA451 !important;
    background-color: #FFA451 !important;
`;

export const TextCard = styled(Card.Text)`
    ${props => props.hideDescriptionMobile ? `
    @media (max-width: 768px) {   
        display: none;   
    }` : ''}   
    
`

export const TitleCard = styled(Card.Title)`
    height: 45px;
`

export const ContainerDescription = styled.div`
 height: 85px;
`