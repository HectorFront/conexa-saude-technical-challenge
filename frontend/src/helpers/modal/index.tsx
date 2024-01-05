/** @name Dependencies */
import {Modal as ModalBootstrap} from 'react-bootstrap';
import {ElementType, memo, ReactNode} from "react";
/** @name External */
import {Render} from 'helpers';

interface ModalProps {
    show: boolean,
    size?: string,
    title?: string,
    children: ReactNode,
    handleClose: () => void
}

interface ModalHeader {
    title: string
}

interface ModalContent {
    children: ReactNode
}

export const Modal: ElementType = memo(({ show, handleClose = () => {}, size = 'lg', title, children, ...props }: ModalProps) =>
    <ModalBootstrap
        {...props}
        centered
        size="lg"
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
    >
        {children}
    </ModalBootstrap>
);

export const ModalHeader: ElementType = memo(({ title }: ModalHeader) =>
    <ModalBootstrap.Header closeButton>
        <Render condition={title}>
            <ModalBootstrap.Title id="contained-modal-title-vcenter">
                {title}
            </ModalBootstrap.Title>
        </Render>
    </ModalBootstrap.Header>
);

export const ModalBody: ElementType = memo(({ children }: ModalContent) =>
    <ModalBootstrap.Body>
        {children}
    </ModalBootstrap.Body>
);

export const ModalFooter: ElementType = memo(({ children }: ModalContent) =>
    <ModalBootstrap.Footer>
        {children}
    </ModalBootstrap.Footer>
);