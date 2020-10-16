import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

var style = {"disabled":"_styles-module__disabled__2RWmX","btn":"_styles-module__btn__1Pz2d","btn-circle":"_styles-module__btn-circle__ZMOEZ","btn-circle-custom":"_styles-module__btn-circle-custom__38f37","square-btn":"_styles-module__square-btn__1HEK_","default-circle-btn":"_styles-module__default-circle-btn__39XKQ","medium-btn":"_styles-module__medium-btn__38YRm","medium-circle-btn":"_styles-module__medium-circle-btn__2qA6O","small-btn":"_styles-module__small-btn__2FH_1","small-circle-btn":"_styles-module__small-circle-btn__38yRp","xsmall-btn":"_styles-module__xsmall-btn__1F4aM","xsmall-circle-btn":"_styles-module__xsmall-circle-btn__1P2U1","primary-btn":"_styles-module__primary-btn__39bnp","secondary-btn":"_styles-module__secondary-btn__21664","disabled-btn":"_styles-module__disabled-btn__1hoGZ","transparent-btn":"_styles-module__transparent-btn__oBYU2","white-btn":"_styles-module__white-btn__DvBYY","color-btn":"_styles-module__color-btn__MHNEW","label-input":"_styles-module__label-input__32_3E","label-input-dark":"_styles-module__label-input-dark__2ZEov","form-disabled":"_styles-module__form-disabled__cD1yu","form-checkbox":"_styles-module__form-checkbox__3NosP","form-checkbox-dark":"_styles-module__form-checkbox-dark__3IIVU","form-radio":"_styles-module__form-radio__2uu7E","form-radio-dark":"_styles-module__form-radio-dark__2VXtv","alert-overlay":"_styles-module__alert-overlay__1mGr8","alert-container":"_styles-module__alert-container__2rI0b","body":"_styles-module__body__2mo3X","footer":"_styles-module__footer__24OKz","confirm-overlay":"_styles-module__confirm-overlay__1GhqT","confirm-container":"_styles-module__confirm-container__3K3_g"};

const Button = ({
  text,
  onClick,
  extClass,
  color,
  styles,
  disabled,
  size,
  width,
  shape,
  Icon
}) => {
  var buttonStyle = style.btn;
  var buttonColor = 'linear-gradient(105deg, #24B9E1 0%, #7166C4 100%)';
  var buttonDisabled = false;
  var buttonWidth = 'max-content';

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

  switch (buttonColor) {
    case 'red':
      buttonColor = '#D9005C';
      break;

    case 'yellow':
      buttonColor = '#F7BE2D';
      break;

    case 'blue':
      buttonColor = '#354199';
      break;

    case 'cyan':
      buttonColor = '#24B9E1';
      break;

    case 'black':
      buttonColor = '#020726';
      break;
  }

  if (extClass) {
    buttonStyle += ' ' + extClass;
  }

  if (width !== undefined) {
    buttonWidth = width;
  }

  return /*#__PURE__*/React.createElement("button", {
    onClick: !buttonDisabled ? onClick : null,
    className: buttonStyle,
    disabled: disabled === true ? true : false,
    style: {
      backgroundColor: buttonColor,
      width: buttonWidth
    }
  }, Icon ? /*#__PURE__*/React.createElement(Icon, null) : null, text);
};

const ButtonCircle = ({
  Icon,
  onClick,
  extClass,
  size,
  color,
  disabled
}) => {
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

  if (extClass !== undefined) {
    buttonStyle += ' ' + extClass;
  }

  return /*#__PURE__*/React.createElement("div", {
    onClick: !buttonDisabled ? onClick : null,
    className: buttonStyle,
    style: {
      backgroundColor: buttonColor,
      opacity: buttonOpacity
    }
  }, /*#__PURE__*/React.createElement(Icon, null));
};

const Input = ({
  label,
  placeHolder,
  onChange,
  disabled,
  value,
  defaultValue,
  extClass,
  theme
}) => {
  var inputPlaceHolder = '';
  var inputDisabled = false;
  var formStyle = style['label-input'];
  var inputStyle = '';

  if (theme === 'dark') {
    formStyle = style['label-input-dark'];
  }

  if (extClass !== undefined) {
    formStyle += ' ' + extClass;
  }

  if (disabled === true) {
    inputDisabled = disabled;
    inputStyle += ' ' + style['form-disabled'];
  }

  if (placeHolder) {
    inputPlaceHolder = placeHolder;
  }

  return /*#__PURE__*/React.createElement("label", {
    className: formStyle
  }, label, /*#__PURE__*/React.createElement("input", {
    defaultValue: defaultValue ? defaultValue : null,
    value: value ? value : null,
    disabled: inputDisabled,
    onChange: onChange,
    placeholder: inputPlaceHolder,
    className: inputStyle
  }));
};

const CheckBox = ({
  label,
  desc,
  onClick,
  checked,
  disabled,
  extClass,
  theme
}) => {
  var formStyle = style['form-checkbox'];
  var formDisabled = false;

  if (theme === 'dark') {
    formStyle = style['form-checkbox-dark'];
  }

  if (disabled === true) {
    formDisabled = true;
    formStyle += ' ' + style.disabled;
  }

  if (extClass !== undefined) {
    formStyle += ' ' + extClass;
  }

  return /*#__PURE__*/React.createElement("label", {
    className: formStyle
  }, /*#__PURE__*/React.createElement("input", {
    disabled: formDisabled,
    onClick: onClick,
    type: "checkbox"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, label), desc ? /*#__PURE__*/React.createElement("p", null, desc) : null));
};

const Radio = ({
  label,
  desc,
  onChange,
  name,
  checked,
  disabled,
  extClass,
  theme
}) => {
  var formStyle = style['form-radio'];
  var formDisabled = false;

  if (theme === 'dark') {
    formStyle = style['form-radio-dark'];
  }

  if (disabled === true) {
    formDisabled = true;
    formStyle += ' ' + style.disabled;
  }

  if (extClass !== undefined) {
    formStyle += ' ' + extClass;
  }

  return /*#__PURE__*/React.createElement("label", {
    className: formStyle
  }, /*#__PURE__*/React.createElement("input", {
    disabled: formDisabled,
    onChange: onChange,
    type: "radio",
    name: name
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, label), desc ? /*#__PURE__*/React.createElement("p", null, desc) : null));
};

const Alert = ({
  visibility,
  context,
  hideAlert,
  label,
  buttonText,
  Icon
}) => {
  var render = null;

  if (buttonText === undefined) {
    buttonText = 'Ok';
  }

  if (visibility === true) {
    render = /*#__PURE__*/React.createElement("div", {
      className: style['alert-overlay']
    }, /*#__PURE__*/React.createElement("div", {
      className: style['alert-container']
    }, /*#__PURE__*/React.createElement("div", {
      className: style['body']
    }, Icon ? /*#__PURE__*/React.createElement(Icon, null) : /*#__PURE__*/React.createElement(FiAlertTriangle, {
      style: {
        stroke: 'red',
        width: 20,
        height: 20
      }
    }), /*#__PURE__*/React.createElement("p", null, label)), /*#__PURE__*/React.createElement("div", {
      className: style['footer']
    }, /*#__PURE__*/React.createElement(Button, {
      size: "s",
      text: buttonText,
      onClick: hideAlert
    }))));
  }

  return render;
};

const Confirm = ({
  visibility,
  context,
  confirmAction,
  label,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonStyle,
  Icon
}) => {
  var render = null;
  var button1Style = 'primary';

  if (primaryButtonStyle === 'red') {
    button1Style = 'color';
  }

  if (primaryButtonText === undefined) {
    primaryButtonText = 'Yes';
  }

  if (secondaryButtonText === undefined) {
    secondaryButtonText = 'No';
  }

  if (visibility === true) {
    render = /*#__PURE__*/React.createElement("div", {
      className: style['confirm-overlay']
    }, /*#__PURE__*/React.createElement("div", {
      className: style['confirm-container']
    }, /*#__PURE__*/React.createElement("div", {
      className: style['body']
    }, Icon ? /*#__PURE__*/React.createElement(Icon, null) : /*#__PURE__*/React.createElement(FiAlertTriangle, {
      style: {
        stroke: 'red',
        width: 20,
        height: 20
      }
    }), /*#__PURE__*/React.createElement("p", null, label)), /*#__PURE__*/React.createElement("div", {
      className: style['footer']
    }, /*#__PURE__*/React.createElement(Button, {
      size: "s",
      styles: button1Style,
      color: primaryButtonStyle === 'red' ? 'red' : null,
      text: primaryButtonText,
      onClick: () => confirmAction(true)
    }), /*#__PURE__*/React.createElement(Button, {
      size: "s",
      style: "",
      text: secondaryButtonText,
      onClick: () => confirmAction(false),
      styles: "transparent"
    }))));
  }

  return render;
};

export { Alert, Button, ButtonCircle, CheckBox, Confirm, Input, Radio };
//# sourceMappingURL=index.modern.js.map
