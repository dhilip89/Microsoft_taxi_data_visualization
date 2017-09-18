import { getClassSet } from 'app/util/ClassNameUtil';
import React, { Component } from 'react';
import 'app/components/widget/button/button.scss';

export default class Button extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      let { style, classNames } = this.props;
      let classes = getClassSet([classNames, 'button']);

      return (
         <div onClick={this.onClick} style={style} className={classes}></div>
      );
   }

   onclick(e) {
      this.props.onClick(e);
   }
}