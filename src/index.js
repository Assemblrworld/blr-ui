import React from 'react'
import style from './styles.module.css'
import {FiAlertTriangle} from 'react-icons/fi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {BsArrowLeft, BsArrowRepeat, BsCheckCircle} from 'react-icons/bs'



const Button = ({text, onClick, extClass, color, styles, disabled, size, width, shape, Icon, margin, loading})  => {
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
    buttonStyle+=' '+style['medium-size']
  } else if(size === 's'){
    buttonStyle+=' '+style['small-size']
  } else if(size === 'xs'){
    buttonStyle+=' '+style['xsmall-size']
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

  if(margin===undefined){
    margin=[0,0,20,0]
  }

  if(loading){
    Icon = () => <BsArrowRepeat style={{fil:'white'}} className={style['spinning-icon']}/>
  }
  
  return (
    <button 
      onClick={!buttonDisabled?onClick:null}
      className={buttonStyle} 
      disabled={disabled===true?true:false}
      style={{backgroundColor:buttonColor,width:buttonWidth,marginTop:margin[0],marginRight:margin[1],marginBottom:margin[2],marginLeft:margin[3]}}
      > 
        {Icon?
          <Icon/>
        :null}
        {text}
    </button>
  )
}

const ButtonCircle = ({Icon, onClick, extClass, size, color, disabled, margin}) => {
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

  if(margin===undefined){
    margin=[0,0,20,0]
  }

  return (
    <div 
      onClick={!buttonDisabled?onClick:null}
      className={buttonStyle}
      style={{backgroundColor:buttonColor,opacity:buttonOpacity, marginTop:margin[0],marginRight:margin[1],marginBottom:margin[2],marginLeft:margin[3]}}>
      
      <Icon/>
    </div>
  )
}

const Input = ({label, type, size, placeHolder, onChange, onClick, disabled, value, defaultValue, extClass, theme, margin}) => {
  var inputPlaceHolder = ''
  var inputDisabled = false
  var formStyle = style['label-input'] 
  var inputStyle = ''

  if(type===undefined){
    type = 'text'
  }
  
  if(theme === 'dark'){
    //formStyle = style['label-input-dark']
    formStyle += ' '+style['dark-mode']
    inputStyle += ' '+style['dark-mode']
    //inputStyle = style['input-dark'] 
  }
  
  if(extClass !== undefined){
    formStyle += ' '+extClass
  }

  

  if(placeHolder){
    inputPlaceHolder = placeHolder
  }

  if(size !== undefined){
    if(size === 'm'){
      inputStyle += ' '+style['medium-size']
    } else if( size === 's'){
      inputStyle += ' '+style['small-size']
    } else if( size === 'xs'){
      inputStyle += ' '+style['xsmall-size']
    }
  }

  if(disabled === true){
    inputDisabled = disabled
    formStyle += ' '+style['disabled']
    inputStyle += ' '+style['form-disabled']
  }

  if(margin===undefined){
    margin=[0,0,20,0]
  }

  return (
    <label 
      className={formStyle}
      style={{marginTop:margin[0],marginRight:margin[1],marginBottom:margin[2],marginLeft:margin[3]}}
      >
      {label}
      <input
        type={type}
        onClick={onClick}
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

const InputArea = ({label, type, size, placeHolder, onChange, onClick, disabled, value, defaultValue, extClass, theme, margin}) => {
  var inputPlaceHolder = ''
  var inputDisabled = false
  var formStyle = style['label-input'] + ' ' + style['input-area'] 
  var inputStyle = ''

  if(type===undefined){
    type = 'text'
  }
  
  if(theme === 'dark'){
    //formStyle = style['label-input-dark']
    formStyle += ' '+style['dark-mode']
    inputStyle += ' '+style['dark-mode']
    //inputStyle = style['input-dark'] 
  }
  
  if(extClass !== undefined){
    formStyle += ' '+extClass
  }

  

  if(placeHolder){
    inputPlaceHolder = placeHolder
  }

  if(size !== undefined){
    if(size === 'm'){
      inputStyle += ' '+style['medium-size']
    } else if( size === 's'){
      inputStyle += ' '+style['small-size']
    } else if( size === 'xs'){
      inputStyle += ' '+style['xsmall-size']
    }
  }

  if(disabled === true){
    inputDisabled = disabled
    formStyle += ' '+style['disabled']
    inputStyle += ' '+style['form-disabled']
  }

  if(margin===undefined){
    margin=[0,0,20,0]
  }

  return (
    <label 
      className={formStyle}
      style={{marginTop:margin[0],marginRight:margin[1],marginBottom:margin[2],marginLeft:margin[3]}}
      >
      {label}
      <textarea
        type={type}
        onClick={onClick}
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

const CheckBox = ({label, desc , onClick, checked, disabled, extClass, theme, margin}) => {
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

  if(margin===undefined){
    margin=[0,0,20,0]
  }
  if(checked ===undefined){
    checked = false
  }

  return (
    <label 
    style={{marginTop:margin[0],marginRight:margin[1],marginBottom:margin[2],marginLeft:margin[3]}}
      className={formStyle}>
      <input
        disabled={formDisabled}
        onClick={onClick}
        type='checkbox'
        defaultChecked={checked}
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

const Radio = ({label, desc , onChange, name, checked, disabled, extClass, theme, margin}) => {
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

  if(margin===undefined){
    margin=[0,0,20,0]
  }

  if(checked ===undefined){
    checked = false
  }

  return (
    <label 
      style={{marginTop:margin[0],marginRight:margin[1],marginBottom:margin[2],marginLeft:margin[3]}} 
      className={formStyle}>
      <input
        disabled={formDisabled}
        onChange={onChange}
        type='radio'
        name={name}
        defaultChecked={checked}
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

const Alert = ({visibility, context, hideAlert, label, buttonText, Icon, type, loading}) => {
  var render = null

  if(buttonText === undefined){
    buttonText = 'Ok'
  }

  if(type === 'success'){
    Icon = () => <BsCheckCircle style={{width:24,height:24,fill:'#24B9E1'}}/>
  }
  
  if(visibility === true){
    render = (
      <div 
        className={style['popup-overlay']} style={{position:'fixed',top:0,left:0,right:0,bottom:0,zIndex:999999999}}>
          <div className={style['alert-container']}>
            <div className={style['body']}>
              {Icon?(<Icon/>):(<FiAlertTriangle style={{stroke:'red',width:20,height:20}}/>)}
              <span>{label}</span>
            </div>
            <div className={style['footer']}>
              <Button
                size='s'
                loading={loading}
                text={buttonText}
                onClick={hideAlert}
                margin={[0,0,0,0]}
              />
            </div>
          </div>
      </div>
    )
  }

  return render
}

const Confirm = ({visibility, context, confirmAction, label, primaryButtonText, secondaryButtonText, primaryButtonStyle, Icon, loading}) => {
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
              <span>{label}</span>
            </div>
            <div className={style['footer']}>
              <Button
                size='s'
                styles={button1Style}
                color={primaryButtonStyle==='red'?'red':null}
                text={primaryButtonText}
                onClick={()=>confirmAction(true)}
                margin={[0,0,0,0]}
                loading={loading}
              />
              <Button
                size='s'
                style=''
                text={secondaryButtonText}
                onClick={()=>confirmAction(false)}
                styles='transparent'
                margin={[0,0,0,0]}
              />
            </div>
          </div>
      </div>
    )
  }

  return render
}

const Modal = ({visibility, width, headerLabel, bodyLabel, HeaderComponent, BodyComponent, FooterComponent, hideModal, closeButton, showHeader, showFooter, primaryButtonAction, primaryButtonText, secondaryButtonAction, secondaryButtonText, loading}) => {
  var render = null 
  if(width === undefined){
    width = 320
  }
  
  if(primaryButtonText === undefined){
    primaryButtonText = 'Yes'
  }

  if(secondaryButtonText === undefined){
    secondaryButtonText = 'No'
  }

  if(visibility === true){
    render = (
      <div 
        className={style['popup-overlay']} style={{position:'fixed',top:0,left:0,right:0,bottom:0,zIndex:999999999}}>
          <div className={style['modal-container']} style={{width:width}}>

            {showHeader!==false?(
              <div className={style['header']}>
                {HeaderComponent?(<HeaderComponent/>):null}
                {headerLabel?<span>{headerLabel}</span>:null}
              </div>
            ):null}

            <div id='modal-body' className={style['body']}>
              {BodyComponent?(<BodyComponent/>):null}
              {bodyLabel?<span>{bodyLabel}</span>:null}
            </div>
            
            {showFooter!==false?(
              <div className={style['footer']}>
                {FooterComponent?(<FooterComponent/>):(
                  <div className={style['default-modal-footer']}>
                    <Button
                      margin={[0,10,0,0]}
                      size='s'
                      text={primaryButtonText}
                      onClick={primaryButtonAction}
                      loading={loading}
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

const MobileHeader = ({label, buttonAction, buttonVisibility, extClass}) => {
  return (
    <div className={style['mobile-header']+' '+extClass}>
      {(buttonVisibility!==false)?(
        <BsArrowLeft 
          onClick={buttonAction}
          style={{fil:'#001741'}}
        />
      ):null}
      
      {label}
    </div>
  )
} 

export {
  Button,
  ButtonCircle,
  Input,
  CheckBox,
  Radio,
  Alert,
  Confirm,
  Modal,
  InputArea,
  MobileHeader
}
