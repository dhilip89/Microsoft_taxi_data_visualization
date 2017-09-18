import { getClassSet } from 'app/util/ClassNameUtil';
import Util from 'app/util/util';
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
            {Util.getI18n(label)}
         </div>
      );
   }

   onclick(e) {
      this.props.onClick(e);
   }
}