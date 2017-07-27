import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

  render () {
    return (
      <footer className="footer">
        <div className="footer-left-box">
          <i className="fa fa-copyright copyright-icon" aria-hidden="true"></i>
           2017 - Rod Shokrian
           <a className="github-icon" href="https://github.com/RodShokrian">
             <i className="fa fa-github fa-2x" aria-hidden="true"></i>
           </a>
           <a className="linkedin-icon" href="https://www.linkedin.com/in/rodshokrian/">
             <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
           </a>
        </div>
        <div className="footer-right-box">


        </div>
      </footer>
    )
  }
}

export default Footer;
