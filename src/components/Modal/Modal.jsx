import React, { Component } from 'react';
import { ModalBackdrop, ModalContent } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    console.log(e.target);
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <ModalBackdrop onClick={this.handleBackdropClick}>
        <ModalContent>
          <img src={this.props.ImageUrl} alt="Modal" width={800} height={600} />
        </ModalContent>
      </ModalBackdrop>,
      modalRoot
    );
  }
}

export default Modal;
