import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Info.scss';

const Info = ({ }) => {
   return (
      <div className='info'>
         info panel
      </div>
   );
};

const mapStateToProps = (state, ownProps) => {
   return {

   };
};

export default connect(mapStateToProps)(Info);