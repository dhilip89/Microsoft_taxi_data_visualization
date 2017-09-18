import { getClassSet } from 'app/util/ClassNameUtil';
import React, { Component } from 'react';
import 'app/components/widget/button/button.scss';

export default class Button extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      let {
         classNames,
         label,
         ...restProps
      } = this.props;
      let classes = getClassSet([classNames, 'button']);

      return (
         <div onClick={this.onClick} className={classes} {...restProps}>
            {label}
         </div>
      );
   }

   onclick(e) {
      this.props.onClick(e);
   }
}