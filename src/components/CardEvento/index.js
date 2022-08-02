import { Card } from "react-bootstrap";
import { ImgCard, ButtonCard, TextCard, BodyCard } from "./styles";

export const CardCustom = (props) => {
    return (
        <Card as='article' className="text-center h-100">
            <Card.Header className="p-0">
                <ImgCard variant="top" src={props.imageSrc} alt={props.altImg} />
            </Card.Header>
            <BodyCard>
                <Card.Title>{props.title}</Card.Title>              
                <TextCard hidedescriptionmobile={props.hideDescriptionMobile}>{props.description}</TextCard>                
                <ButtonCard onClick={props.onClickButton} >{props.textButton}</ButtonCard>
            </BodyCard>
        </Card>
    )
}