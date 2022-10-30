// import React, { Component } from 'react';
// import { createPortal } from 'react-dom';
// import { StyledModal, Overlay } from './modalStyled';

// const modalRoot = document.querySelector('#modal-root');

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleChange);
//   }

//   componentDidUpdate() {
//     window.removeEventListener('keydown', this.handleChange);
//   }

//   handleChange = ({ target, currentTarget, code }) => {
//     if (target === currentTarget || code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   // closeModal = event => {
//   //   if (event.code === 'Escape' || event.target === event.currentTarget) {
//   //     this.props.onClose();
//   //   }
//   // };

//   render() {
//     return createPortal(
//       <Overlay onClick={this.handleChange}>
//         <StyledModal> {this.props.children}</StyledModal>
//       </Overlay>,
//       modalRoot
//     );
//   }
// }

import { Component } from 'react';
import { createPortal } from 'react-dom';
import { StyledModal, Overlay } from './modalStyled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClose);
  }

  handleClose = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleClose}>
        <StyledModal>{this.props.children}</StyledModal>
      </Overlay>,
      modalRoot
    );
  }
}
