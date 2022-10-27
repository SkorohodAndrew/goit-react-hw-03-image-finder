import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { StyledModal, Overlay } from './modalStyled';

const modalRoot = document.getElementById('root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentDidUpdate() {
    window.removeEventListener('keydown', this.closeModal);
  }

  //   handleChange({ target, currentTarget, code }) {
  //     if (target === currentTarget || code === `Escape`) {
  //       this.props.onClose();
  //     }
  //   }

  closeModal = event => {
    if (event.code === 'Escape' || event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  //   render() {
  //     return createPortal(
  //       <Overlay onClick={this.handleChange}>
  //         <StyledModal />
  //       </Overlay>,
  //       modalRoot
  //     );
  //   }

  render() {
    const { imageUrlLarge } = this.props.content;
    return createPortal(
      <Overlay onClick={this.closeModal}>
        <StyledModal>
          <img src={imageUrlLarge} alt="" />
        </StyledModal>
      </Overlay>,
      modalRoot
    );
  }
}
