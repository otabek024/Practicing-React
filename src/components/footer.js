import React, {Component} from 'react'

class Footer extends Component {
  constructor(){
    super();
  }
  
  render(){
    return(
      <footer>
        { this.props.footerText }
      </footer>
    )
  }
}

export default Footer;

