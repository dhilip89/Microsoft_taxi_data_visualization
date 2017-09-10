import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
   constructor(props) {
      super(props);
   }


   render() {
      return (
         <div>
            hello world
         </div>
      );
   }
}

const mapStateToProps = (state, ownProps) => {
   return {

   };
};

export default connect(mapStateToProps)(App);