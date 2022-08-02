import { Button, Modal } from "react-bootstrap";

export function ModalConfirm({
    show, 
    onHide, 
    onConfirm, 
    title = 'Deseja realmente esta ação?', 
    content = 'Esta ação não possui volta.', 
    cancelLabel = 'Cancelar', 
    confirmLabel = 'Confirmar', 
    confirmVariant = 'primary'
}) {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{content}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    {cancelLabel}
                </Button>
                <Button variant={confirmVariant} onClick={onConfirm}>
                    {confirmLabel}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}