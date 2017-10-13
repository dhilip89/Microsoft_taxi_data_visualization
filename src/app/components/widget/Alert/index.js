import { getClassSet } from 'app/util/ClassNameUtil';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.scss';

class Alert extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className={getClassSet(['alert'])}>{this.props.alertMsg}</div>
      );
   }
}

const mapStateToProps = (state, ownProps) => {
   return {
      alertMsg: state.alertMsg
   };
}

export default connect(mapStateToProps)(Alert);