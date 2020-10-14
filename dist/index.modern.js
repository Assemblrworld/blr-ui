import React from 'react';

var style = {"btn":"_1Pz2d","square-btn":"_1HEK_","default-circle-btn":"_39XKQ","medium-btn":"_38YRm","medium-circle-btn":"_2qA6O","small-btn":"_2FH_1","small-circle-btn":"_38yRp","xsmall-btn":"_1F4aM","xsmall-circle-btn":"_1P2U1","primary-btn":"_39bnp","secondary-btn":"_21664","disabled-btn":"_1hoGZ","transparent-btn":"_oBYU2","white-btn":"_DvBYY","color-btn":"_MHNEW","btn-circle":"_ZMOEZ","btn-circle-custom":"_38f37"};

var Button = function Button(_ref) {
  var text = _ref.text,
      onClick = _ref.onClick,
      additonalClass = _ref.additonalClass,
      color = _ref.color,
      styles = _ref.styles,
      disabled = _ref.disabled,
      size = _ref.size,
      shape = _ref.shape,
      Icon = _ref.Icon;
  var buttonStyle = style.btn;
  var buttonColor = 'linear-gradient(105deg, #24B9E1 0%, #7166C4 100%)';
  var buttonDisabled = false;

  if (disabled) {
    buttonStyle += ' ' + style['disabled-btn'];
    buttonDisabled = disabled;
  }

  if (shape === 'rectangle') {
    buttonStyle += ' ' + style['square-btn'];
  }

  switch (styles) {
    case 'primary':
      buttonStyle += ' ' + style['primary-btn'];
      break;

    case 'secondary':
      buttonStyle += ' ' + style['secondary-btn'];
      break;

    case 'transparent':
      buttonStyle += ' ' + style['transparent-btn'];
      break;

    case 'white':
      buttonStyle += ' ' + style['white-btn'];
      break;

    case 'color':
      buttonStyle += ' ' + style['color-btn'];
      buttonColor = color;
      break;

    default:
      buttonStyle += ' ' + style['primary-btn'];
      break;
  }

  if (size === 'm') {
    buttonStyle += ' ' + style['medium-btn'];
  } else if (size === 's') {
    buttonStyle += ' ' + style['small-btn'];
  } else if (size === 'xs') {
    buttonStyle += ' ' + style['xsmall-btn'];
  }

  return /*#__PURE__*/React.createElement("button", {
    onClick: !buttonDisabled ? onClick : null,
    className: buttonStyle + ' ' + additonalClass,
    style: {
      backgroundColor: buttonColor
    }
  }, Icon ? /*#__PURE__*/React.createElement(Icon, null) : null, text);
};

var ButtonCircle = function ButtonCircle(_ref2) {
  var Icon = _ref2.Icon,
      onClick = _ref2.onClick,
      additonalClass = _ref2.additonalClass,
      size = _ref2.size,
      color = _ref2.color,
      disabled = _ref2.disabled;
  var buttonStyle = '';
  var buttonColor = color;
  var buttonOpacity = 1;
  var buttonDisabled = disabled;

  if (disabled) {
    buttonOpacity = 0.2;
  }

  if (buttonColor !== undefined) {
    buttonStyle = style['btn-circle-custom'];
  } else {
    buttonStyle = style['btn-circle'];
  }

  if (size === 'm') {
    buttonStyle += ' ' + style['medium-circle-btn'];
  } else if (size === 's') {
    buttonStyle += ' ' + style['small-circle-btn'];
  } else if (size === 'xs') {
    buttonStyle += ' ' + style['xsmall-circle-btn'];
  } else {
    buttonStyle += ' ' + style['default-circle-btn'];
  }

  return /*#__PURE__*/React.createElement("div", {
    onClick: !buttonDisabled ? onClick : null,
    className: buttonStyle + ' ' + additonalClass,
    style: {
      backgroundColor: buttonColor,
      opacity: buttonOpacity
    }
  }, /*#__PURE__*/React.createElement(Icon, null));
};

export { Button, ButtonCircle };
//# sourceMappingURL=index.modern.js.map
