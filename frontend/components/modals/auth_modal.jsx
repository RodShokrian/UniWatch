import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SessionFormSignUpContainer from '../session_form/session_form_signup_container';
import SessionFormLoginContainer from '../session_form/session_form_login_container';

const customStyles = {
  content : {
    top                   : '30%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class AuthModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  // afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = '#f00';
  // }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

    render() {
       let formType;

       return (
         <div>
           {this.props.formType === "signup" ?
             <div>
             <button className="navbutton" onClick={this.openModal}>Signup</button>
               <Modal
                 isOpen={this.state.modalIsOpen}
                 // onAfterOpen={this.afterOpenModal}
                 onRequestClose={this.closeModal}
                 style={customStyles}
                 contentLabel="Example Modal"
               >
                 <button onClick={this.closeModal}>X</button>
                 <SessionFormSignUpContainer formType={formType}/>
               </Modal>
             </div> : <div>
               <button className="navbutton" onClick={this.openModal}>Login</button>
                 <Modal
                   isOpen={this.state.modalIsOpen}
                   // onAfterOpen={this.afterOpenModal}
                   onRequestClose={this.closeModal}
                   style={customStyles}
                   contentLabel="Example Modal"
                 >
                   <button onClick={this.closeModal}>X</button>
                   <SessionFormLoginContainer formType={formType}/>
                 </Modal>
             </div>}
         </div>
       );
     }
   }

   export default AuthModal;
