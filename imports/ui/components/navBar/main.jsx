/**
 * sticky navbar component
 */


import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

//Call s3 images
const Logo = 'https://s3.ap-northeast-2.amazonaws.com/alphatoeic-website/images/logo.png';

export default class NavBar extends Component {
  componentDidMount() {
    const self = this;

    //Apply navbar shadow effect on scroll!
    document.addEventListener('scroll', () => {
      // eslint-disable-next-line max-len
      const pos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (self.navBar) {
        if (pos === 0) {
          self.navBar.className = '';
        } else if (self.navBar.className !== 'active') {
          self.navBar.className = 'active';
        }
      }
    });
  }

  render() {
    return (
      <div id="navBar" >
        <div className="" id="navBar-background" ref={(navBar) => { this.navBar = navBar; }}>
          <div id="navBar-content">
            <Image src={Logo} id="navBar-logo" inline />
          </div>
        </div>
      </div>
    );
  }
}
