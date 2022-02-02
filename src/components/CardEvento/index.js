import { Card } from "react-bootstrap";
import { ImgCard, ButtonCard, TextCard, TitleCard, ContainerDescription } from "./styles";

export const CardCustom = (props) => {
    return (
        <Card as='article' className="text-center">
            <Card.Header className="p-0">
                <ImgCard variant="top" src={props.imageSrc} alt={props.altImg} />
            </Card.Header>
            <Card.Body>
                <TitleCard>{props.title}</TitleCard>
                <ContainerDescription>
                <TextCard hideDescriptionMobile={props.hideDescriptionMobile}>{props.description}</TextCard>
                </ContainerDescription>
                <ButtonCard onClick={props.onClickButton} >{props.textButton}</ButtonCard>
            </Card.Body>
        </Card>
    )
}