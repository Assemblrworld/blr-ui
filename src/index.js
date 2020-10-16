import React from 'react'
import style from './styles.module.css'
import {FiAlertTriangle} from 'react-icons/fi'
import {AiFillCloseCircle} from 'react-icons/ai'

const Button = ({text, onClick, extClass, color, styles, disabled, size, width, shape, Icon})  => {
  var buttonStyle = style.btn
  var buttonColor = 'linear-gradient(105deg, #24B9E1 0%, #7166C4 100%)'
  var buttonDisabled = false
  var buttonWidth = 'max-content'
  if(disabled){
    buttonStyle += ' '+style['disabled-btn']
    buttonDisabled = disabled
  }

  if(shape === 'rectangle'){
    buttonStyle += ' '+style['square-btn']
  }

  switch (styles) {
    case 'primary':
      buttonStyle += ' '+style['primary-btn']
      break;
    case 'secondary':
      buttonStyle += ' '+ style['secondary-btn']
      break;
    case 'transparent':
      buttonStyle += ' '+ style['transparent-btn']
      break;
    case 'white':
      buttonStyle += ' '+ style['white-btn']
      break;
    case 'color':
      buttonStyle += ' '+ style['color-btn']
      buttonColor = color
      break;
    default:
      buttonStyle += ' '+ style['primary-btn']
      break;
  }

  if(size === 'm'){
    buttonStyle+=' '+style['medium-btn']
  } else if(size === 's'){
    buttonStyle+=' '+style['small-btn']
  } else if(size === 'xs'){
    buttonStyle+=' '+style['xsmall-btn']
  }

  switch (buttonColor) {
    case 'red':
      buttonColor = '#D9005C'
      break;
    case 'yellow':
      buttonColor = '#F7BE2D'
      break;
    case 'blue':
      buttonColor = '#354199'
      break;
    case 'cyan':
      buttonColor = '#24B9E1'
      break;
    case 'black':
      buttonColor = '#020726'
      break;
  
    default:
      break;
  }

  if(extClass){
    buttonStyle += ' '+extClass
  }

  if(width!==undefined){
    buttonWidth = width
  }
  
  return (
    <button 
      onClick={!buttonDisabled?onClick:null}
      className={buttonStyle} 
      disabled={disabled===true?true:false}
      style={{backgroundColor:buttonColor,width:buttonWidth}}
      > 
        {Icon?
          <Icon/>
        :null}
        {text}
    </button>
  )
}

const ButtonCircle = ({Icon,onClick,extClass,size,color,disabled}) => {
  var buttonStyle = ''
  var buttonColor = color 
  var buttonOpacity = 1
  var buttonDisabled = disabled

  if(disabled){
    buttonOpacity = 0.2
  }

  if(buttonColor !== undefined){
    buttonStyle = style['btn-circle-custom']
  } else {
    buttonStyle = style['btn-circle']
  } 

  if(size === 'm'){
    buttonStyle+=' '+style['medium-circle-btn']
  } else if(size === 's'){
    buttonStyle+=' '+style['small-circle-btn']
  } else if(size === 'xs'){
    buttonStyle+=' '+style['xsmall-circle-btn']
  } else {
    buttonStyle+=' '+style['default-circle-btn']
  }

  if(extClass !== undefined){
    buttonStyle += ' '+extClass
  }

  return (
    <div 
      
      onClick={!buttonDisabled?onClick:null}
      className={buttonStyle}
      style={{backgroundColor:buttonColor,opacity:buttonOpacity}}>
      
      <Icon/>
    </div>
  )
}

const Input = ({label, placeHolder, onChange, disabled, value, defaultValue, extClass, theme}) => {
  var inputPlaceHolder = ''
  var inputDisabled = false
  var formStyle = style['label-input'] 
  var inputStyle = ''
  
  if(theme === 'dark'){
    formStyle = style['label-input-dark']
    //inputStyle = style['input-dark'] 
  }
  
  if(extClass !== undefined){
    formStyle += ' '+extClass
  }

  if(disabled === true){
    inputDisabled = disabled
    inputStyle += ' '+style['form-disabled']
  }

  if(placeHolder){
    inputPlaceHolder = placeHolder
  }

  return (
    <label 
      className={formStyle}>
      {label}
      <input
        defaultValue={defaultValue?defaultValue:null}
        value={value?value:null}
        disabled={inputDisabled}
        onChange={onChange}
        placeholder={inputPlaceHolder}
        className={inputStyle}
      />
    </label>
    
  )
}

const CheckBox = ({label, desc , onClick, checked, disabled, extClass, theme}) => {
  var formStyle = style['form-checkbox']
  var formDisabled = false 

  if(theme === 'dark'){
    formStyle = style['form-checkbox-dark']
  }

  if(disabled === true){
    formDisabled = true
    formStyle += ' '+style.disabled
  }

  if(extClass !== undefined){
    formStyle += ' '+extClass
  }

  return (
    <label className={formStyle}>
      <input
        disabled={formDisabled}
        onClick={onClick}
        type='checkbox'
      />
      <div>
        <p>{label}</p>
        {desc?(
          <p>{desc}</p>
        ):null}
      </div>
    </label>
  )
}

const Radio = ({label, desc , onChange, name, checked, disabled, extClass, theme}) => {
  var formStyle = style['form-radio']
  var formDisabled = false 

  if(theme === 'dark'){
    formStyle = style['form-radio-dark']
  }

  if(disabled === true){
    formDisabled = true
    formStyle += ' '+style.disabled
  }

  if(extClass !== undefined){
    formStyle += ' '+extClass
  }

  return (
    <label className={formStyle}>
      <input
        disabled={formDisabled}
        onChange={onChange}
        type='radio'
        name={name}
      />
      <div>
        <p>{label}</p>
        {desc?(
          <p>{desc}</p>
        ):null}
      </div>
    </label>
  )
}

const Alert = ({visibility, context, hideAlert, label, buttonText, Icon}) => {
  var render = null

  if(buttonText === undefined){
    buttonText = 'Ok'
  }
  
  if(visibility === true){
    render = (
      <div 
        className={style['popup-overlay']} style={{position:'fixed',top:0,left:0,right:0,bottom:0,zIndex:999999999}}>
          <div className={style['alert-container']}>
            <div className={style['body']}>
              {Icon?(<Icon/>):(<FiAlertTriangle style={{stroke:'red',width:20,height:20}}/>)}
              <p>{label}</p>
            </div>
            <div className={style['footer']}>
              <Button
                size='s'
                text={buttonText}
                onClick={hideAlert}
              />
            </div>
          </div>
      </div>
    )
  }

  return render
}

const Confirm = ({visibility, context, confirmAction, label, primaryButtonText, secondaryButtonText, primaryButtonStyle, Icon}) => {
  var render = null
  
  var button1Style = 'primary'
  var buttonColor = ''

  if(primaryButtonStyle === 'red'){
    button1Style = 'color'
    buttonColor = 'red'
  }

  if(primaryButtonText===undefined){
    primaryButtonText = 'Yes'
  }

  if(secondaryButtonText===undefined){
    secondaryButtonText = 'No'
  }
  
  if(visibility === true){
    render = (
      <div 
        className={style['popup-overlay']} style={{position:'fixed',top:0,left:0,right:0,bottom:0,zIndex:999999999}}>
          <div className={style['confirm-container']}>
            <div className={style['body']}>
              {Icon?(<Icon/>):(<FiAlertTriangle style={{stroke:'red',width:20,height:20}}/>)}
              <p>{label}</p>
            </div>
            <div className={style['footer']}>
              <Button
                size='s'
                styles={button1Style}
                color={primaryButtonStyle==='red'?'red':null}
                text={primaryButtonText}
                onClick={()=>confirmAction(true)}
              />
              <Button
                size='s'
                style=''
                text={secondaryButtonText}
                onClick={()=>confirmAction(false)}
                styles='transparent'
              />
            </div>
          </div>
      </div>
    )
  }

  return render
}

const Modal = ({visibility, width, headerLabel, bodyLabel, HeaderComponent, BodyComponent, FooterComponent, hideModal, closeButton, showHeader, showFooter, primaryButtonAction, primaryButtonText, secondaryButtonAction, secondaryButtonText}) => {
  var render = null 
  if(width === undefined){
    width = 320
  }
  

  if(visibility === true){
    render = (
      <div 
        className={style['popup-overlay']} style={{position:'fixed',top:0,left:0,right:0,bottom:0,zIndex:999999999}}>
          <div className={style['modal-container']} style={{width:width}}>

            {showHeader!==false?(
              <div className={style['header']}>
                {HeaderComponent?(<HeaderComponent/>):null}
                {headerLabel?<p>{headerLabel}</p>:null}
              </div>
            ):null}

            <div className={style['body']}>
              {BodyComponent?(<BodyComponent/>):null}
              {bodyLabel?<p>{bodyLabel}</p>:null}
            </div>
            
            {showFooter!==false?(
              <div className={style['footer']}>
                {FooterComponent?(<FooterComponent/>):(
                  <div className={style['default-modal-footer']}>
                    <Button
                      size='s'
                      text={primaryButtonText}
                      onClick={primaryButtonAction}
                    />
                    <Button
                      size='s'
                      styles='transparent'
                      text={secondaryButtonText}
                      onClick={secondaryButtonAction}
                    />
                  </div>
                )}
              </div>
            ):null}

            

            {closeButton!==false?(
              <AiFillCloseCircle
                className={style['close-btn']}
                style={{fill:'#67697C'}}
                onClick={hideModal}
              />
            ):null}
            

          </div>
      </div>
    )
  }

  return render
}

export {
  Button,
  ButtonCircle,
  Input,
  CheckBox,
  Radio,
  Alert,
  Confirm,
  Modal
}
