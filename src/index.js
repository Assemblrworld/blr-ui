import React from 'react'
import style from './styles.module.css'

const Button = ({text,onClick,additonalClass,color,styles,disabled,size,shape,Icon})  => {
  var buttonStyle = style.btn
  var buttonColor = 'linear-gradient(105deg, #24B9E1 0%, #7166C4 100%)'
  var buttonDisabled = false
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


  return (
    <button 
      onClick={!buttonDisabled?onClick:null}
      className={buttonStyle+' '+additonalClass} 
      style={{backgroundColor:buttonColor}}
      > 
        {Icon?
          <Icon/>
        :null}
        {text}
    </button>
  )
}

const ButtonCircle = ({Icon,onClick,additonalClass,size,color,disabled}) => {
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

  return (
    <div 
      
      onClick={!buttonDisabled?onClick:null}
      className={buttonStyle+' '+additonalClass}
      style={{backgroundColor:buttonColor,opacity:buttonOpacity}}>
      
      <Icon/>
    </div>
  )
}

export {
  Button,
  ButtonCircle
}
