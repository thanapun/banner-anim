import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Arrow extends Component {
  onClick = (e) => {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    this.props[this.props.arrowType](e);
  }

  render() {
    let className = this.props.className;
    const defaultClass = `${className}-default`;
    className = `${className} ${this.props.prefixCls || ''}`.trim();
    className = !this.props.default ? className : `${className} ${defaultClass}`.trim();
    className = `${className} ${this.props.arrowType}`;
    const props = { ...this.props, ...this.props.componentProps };
    [
      'arrowType', 'next', 'prev',
      'component', 'componentProps', 'default', 'prefixCls',
    ].forEach(key => delete props[key]);
    props.className = className;
    props.onClick = this.onClick;
    return React.createElement(this.props.component, props, this.props.children);
  }
}

Arrow.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string,
  prefixCls: PropTypes.string,
  component: PropTypes.any,
  arrowType: PropTypes.string,
  default: PropTypes.bool,
  next: PropTypes.func,
  prev: PropTypes.func,
  componentProps: PropTypes.object,
};
Arrow.defaultProps = {
  component: 'div',
  className: 'banner-anim-arrow',
  componentProps: {},
};

Arrow.isBannerAnimArrow = true;

export default Arrow;
