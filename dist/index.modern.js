import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsArrowRepeat, BsCheckCircle, BsArrowLeft } from 'react-icons/bs';

var style = {"disabled":"_styles-module__disabled__2RWmX","medium-size":"_styles-module__medium-size__2LpS7","small-size":"_styles-module__small-size__1Dccc","xsmall-size":"_styles-module__xsmall-size__2HSWc","dark-mode":"_styles-module__dark-mode__3yj9P","btn":"_styles-module__btn__1Pz2d","btn-circle":"_styles-module__btn-circle__ZMOEZ","btn-circle-custom":"_styles-module__btn-circle-custom__38f37","square-btn":"_styles-module__square-btn__1HEK_","default-circle-btn":"_styles-module__default-circle-btn__39XKQ","medium-circle-btn":"_styles-module__medium-circle-btn__2qA6O","small-circle-btn":"_styles-module__small-circle-btn__38yRp","xsmall-btn":"_styles-module__xsmall-btn__1F4aM","xsmall-circle-btn":"_styles-module__xsmall-circle-btn__1P2U1","primary-btn":"_styles-module__primary-btn__39bnp","secondary-btn":"_styles-module__secondary-btn__21664","disabled-btn":"_styles-module__disabled-btn__1hoGZ","transparent-btn":"_styles-module__transparent-btn__oBYU2","white-btn":"_styles-module__white-btn__DvBYY","color-btn":"_styles-module__color-btn__MHNEW","label-input":"_styles-module__label-input__32_3E","label-input-dark":"_styles-module__label-input-dark__2ZEov","form-disabled":"_styles-module__form-disabled__cD1yu","input-area":"_styles-module__input-area__34vFI","form-checkbox":"_styles-module__form-checkbox__3NosP","form-checkbox-dark":"_styles-module__form-checkbox-dark__3IIVU","form-radio":"_styles-module__form-radio__2uu7E","form-radio-dark":"_styles-module__form-radio-dark__2VXtv","popup-overlay":"_styles-module__popup-overlay__1oBGy","alert-container":"_styles-module__alert-container__2rI0b","body":"_styles-module__body__2mo3X","footer":"_styles-module__footer__24OKz","confirm-container":"_styles-module__confirm-container__3K3_g","modal-container":"_styles-module__modal-container__1DUXS","close-btn":"_styles-module__close-btn__3viwp","header":"_styles-module__header__1aDvk","default-modal-footer":"_styles-module__default-modal-footer__2R1Fn","mobile-header":"_styles-module__mobile-header__17jS4","spinning-icon":"_styles-module__spinning-icon__3DxlQ","spin":"_styles-module__spin__1sp4O"};

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
  Icon,
  margin,
  loading
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
    buttonStyle += ' ' + style['medium-size'];
  } else if (size === 's') {
    buttonStyle += ' ' + style['small-size'];
  } else if (size === 'xs') {
    buttonStyle += ' ' + style['xsmall-size'];
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

  if (margin === undefined) {
    margin = [0, 0, 20, 0];
  }

  if (loading) {
    Icon = () => /*#__PURE__*/React.createElement(BsArrowRepeat, {
      style: {
        fil: 'white'
      },
      className: style['spinning-icon']
    });
  }

  return /*#__PURE__*/React.createElement("button", {
    onClick: !buttonDisabled ? onClick : null,
    className: buttonStyle,
    disabled: disabled === true ? true : false,
    style: {
      backgroundColor: buttonColor,
      width: buttonWidth,
      marginTop: margin[0],
      marginRight: margin[1],
      marginBottom: margin[2],
      marginLeft: margin[3]
    }
  }, Icon ? /*#__PURE__*/React.createElement(Icon, null) : null, text);
};

const ButtonCircle = ({
  Icon,
  onClick,
  extClass,
  size,
  color,
  disabled,
  margin
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

  if (margin === undefined) {
    margin = [0, 0, 20, 0];
  }

  return /*#__PURE__*/React.createElement("div", {
    onClick: !buttonDisabled ? onClick : null,
    className: buttonStyle,
    style: {
      backgroundColor: buttonColor,
      opacity: buttonOpacity,
      marginTop: margin[0],
      marginRight: margin[1],
      marginBottom: margin[2],
      marginLeft: margin[3]
    }
  }, /*#__PURE__*/React.createElement(Icon, null));
};

const Input = ({
  label,
  type,
  size,
  placeHolder,
  onChange,
  onClick,
  disabled,
  value,
  defaultValue,
  extClass,
  theme,
  margin
}) => {
  var inputPlaceHolder = '';
  var inputDisabled = false;
  var formStyle = style['label-input'];
  var inputStyle = '';

  if (type === undefined) {
    type = 'text';
  }

  if (theme === 'dark') {
    formStyle += ' ' + style['dark-mode'];
    inputStyle += ' ' + style['dark-mode'];
  }

  if (extClass !== undefined) {
    formStyle += ' ' + extClass;
  }

  if (placeHolder) {
    inputPlaceHolder = placeHolder;
  }

  if (size !== undefined) {
    if (size === 'm') {
      inputStyle += ' ' + style['medium-size'];
    } else if (size === 's') {
      inputStyle += ' ' + style['small-size'];
    } else if (size === 'xs') {
      inputStyle += ' ' + style['xsmall-size'];
    }
  }

  if (disabled === true) {
    inputDisabled = disabled;
    formStyle += ' ' + style['disabled'];
    inputStyle += ' ' + style['form-disabled'];
  }

  if (margin === undefined) {
    margin = [0, 0, 20, 0];
  }

  return /*#__PURE__*/React.createElement("label", {
    className: formStyle,
    style: {
      marginTop: margin[0],
      marginRight: margin[1],
      marginBottom: margin[2],
      marginLeft: margin[3]
    }
  }, label, /*#__PURE__*/React.createElement("input", {
    type: type,
    onClick: onClick,
    defaultValue: defaultValue ? defaultValue : null,
    value: value ? value : null,
    disabled: inputDisabled,
    onChange: onChange,
    placeholder: inputPlaceHolder,
    className: inputStyle
  }));
};

const InputArea = ({
  label,
  type,
  size,
  placeHolder,
  onChange,
  onClick,
  disabled,
  value,
  defaultValue,
  extClass,
  theme,
  margin
}) => {
  var inputPlaceHolder = '';
  var inputDisabled = false;
  var formStyle = style['label-input'] + ' ' + style['input-area'];
  var inputStyle = '';

  if (type === undefined) {
    type = 'text';
  }

  if (theme === 'dark') {
    formStyle += ' ' + style['dark-mode'];
    inputStyle += ' ' + style['dark-mode'];
  }

  if (extClass !== undefined) {
    formStyle += ' ' + extClass;
  }

  if (placeHolder) {
    inputPlaceHolder = placeHolder;
  }

  if (size !== undefined) {
    if (size === 'm') {
      inputStyle += ' ' + style['medium-size'];
    } else if (size === 's') {
      inputStyle += ' ' + style['small-size'];
    } else if (size === 'xs') {
      inputStyle += ' ' + style['xsmall-size'];
    }
  }

  if (disabled === true) {
    inputDisabled = disabled;
    formStyle += ' ' + style['disabled'];
    inputStyle += ' ' + style['form-disabled'];
  }

  if (margin === undefined) {
    margin = [0, 0, 20, 0];
  }

  return /*#__PURE__*/React.createElement("label", {
    className: formStyle,
    style: {
      marginTop: margin[0],
      marginRight: margin[1],
      marginBottom: margin[2],
      marginLeft: margin[3]
    }
  }, label, /*#__PURE__*/React.createElement("textarea", {
    type: type,
    onClick: onClick,
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
  theme,
  margin
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

  if (margin === undefined) {
    margin = [0, 0, 20, 0];
  }

  if (checked === undefined) {
    checked = false;
  }

  return /*#__PURE__*/React.createElement("label", {
    style: {
      marginTop: margin[0],
      marginRight: margin[1],
      marginBottom: margin[2],
      marginLeft: margin[3]
    },
    className: formStyle
  }, /*#__PURE__*/React.createElement("input", {
    disabled: formDisabled,
    onClick: onClick,
    type: "checkbox",
    defaultChecked: checked
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
  theme,
  margin
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

  if (margin === undefined) {
    margin = [0, 0, 20, 0];
  }

  if (checked === undefined) {
    checked = false;
  }

  return /*#__PURE__*/React.createElement("label", {
    style: {
      marginTop: margin[0],
      marginRight: margin[1],
      marginBottom: margin[2],
      marginLeft: margin[3]
    },
    className: formStyle
  }, /*#__PURE__*/React.createElement("input", {
    disabled: formDisabled,
    onChange: onChange,
    type: "radio",
    name: name,
    defaultChecked: checked
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, label), desc ? /*#__PURE__*/React.createElement("p", null, desc) : null));
};

const Alert = ({
  visibility,
  context,
  hideAlert,
  label,
  buttonText,
  Icon,
  type,
  loading
}) => {
  var render = null;

  if (buttonText === undefined) {
    buttonText = 'Ok';
  }

  if (type === 'success') {
    Icon = () => /*#__PURE__*/React.createElement(BsCheckCircle, {
      style: {
        width: 24,
        height: 24,
        fill: '#24B9E1'
      }
    });
  }

  if (visibility === true) {
    render = /*#__PURE__*/React.createElement("div", {
      className: style['popup-overlay'],
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999999999
      }
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
    }), /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("div", {
      className: style['footer']
    }, /*#__PURE__*/React.createElement(Button, {
      size: "s",
      loading: loading,
      text: buttonText,
      onClick: hideAlert,
      margin: [0, 0, 0, 0]
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
  Icon,
  loading
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
      className: style['popup-overlay'],
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999999999
      }
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
    }), /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("div", {
      className: style['footer']
    }, /*#__PURE__*/React.createElement(Button, {
      size: "s",
      styles: button1Style,
      color: primaryButtonStyle === 'red' ? 'red' : null,
      text: primaryButtonText,
      onClick: () => confirmAction(true),
      margin: [0, 0, 0, 0],
      loading: loading
    }), /*#__PURE__*/React.createElement(Button, {
      size: "s",
      style: "",
      text: secondaryButtonText,
      onClick: () => confirmAction(false),
      styles: "transparent",
      margin: [0, 0, 0, 0]
    }))));
  }

  return render;
};

const Modal = ({
  visibility,
  width,
  headerLabel,
  bodyLabel,
  HeaderComponent,
  BodyComponent,
  FooterComponent,
  hideModal,
  closeButton,
  showHeader,
  showFooter,
  primaryButtonAction,
  primaryButtonText,
  secondaryButtonAction,
  secondaryButtonText,
  loading
}) => {
  var render = null;

  if (width === undefined) {
    width = 320;
  }

  if (primaryButtonText === undefined) {
    primaryButtonText = 'Yes';
  }

  if (secondaryButtonText === undefined) {
    secondaryButtonText = 'No';
  }

  if (visibility === true) {
    render = /*#__PURE__*/React.createElement("div", {
      className: style['popup-overlay'],
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999999999
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: style['modal-container'],
      style: {
        width: width
      }
    }, showHeader !== false ? /*#__PURE__*/React.createElement("div", {
      className: style['header']
    }, HeaderComponent ? /*#__PURE__*/React.createElement(HeaderComponent, null) : null, headerLabel ? /*#__PURE__*/React.createElement("span", null, headerLabel) : null) : null, /*#__PURE__*/React.createElement("div", {
      id: "modal-body",
      className: style['body']
    }, BodyComponent ? /*#__PURE__*/React.createElement(BodyComponent, null) : null, bodyLabel ? /*#__PURE__*/React.createElement("span", null, bodyLabel) : null), showFooter !== false ? /*#__PURE__*/React.createElement("div", {
      className: style['footer']
    }, FooterComponent ? /*#__PURE__*/React.createElement(FooterComponent, null) : /*#__PURE__*/React.createElement("div", {
      className: style['default-modal-footer']
    }, /*#__PURE__*/React.createElement(Button, {
      margin: [0, 10, 0, 0],
      size: "s",
      text: primaryButtonText,
      onClick: primaryButtonAction,
      loading: loading
    }), /*#__PURE__*/React.createElement(Button, {
      size: "s",
      styles: "transparent",
      text: secondaryButtonText,
      onClick: secondaryButtonAction
    }))) : null, closeButton !== false ? /*#__PURE__*/React.createElement(AiFillCloseCircle, {
      className: style['close-btn'],
      style: {
        fill: '#67697C'
      },
      onClick: hideModal
    }) : null));
  }

  return render;
};

const MobileHeader = ({
  label,
  buttonAction,
  buttonVisibility,
  extClass
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: style['mobile-header'] + ' ' + extClass
  }, buttonVisibility !== false ? /*#__PURE__*/React.createElement(BsArrowLeft, {
    onClick: buttonAction,
    style: {
      fil: '#001741'
    }
  }) : null, label);
};

export { Alert, Button, ButtonCircle, CheckBox, Confirm, Input, InputArea, MobileHeader, Modal, Radio };
//# sourceMappingURL=index.modern.js.map
