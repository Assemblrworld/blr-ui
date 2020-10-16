import React from 'react'

import { Button, ButtonCircle, Input, CheckBox, Radio, Alert, Confirm  }  from 'blr-ui'
import 'blr-ui/dist/index.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {BsArrowLeft} from 'react-icons/bs'



const Component = ({style,theme, context}) => {
  var exampleString = ''
  var exampleHeaderStyle = 'example-header'
  var exampleStyle = 'example'
  const {alertVisibility, confirmVisibility} = context.state
  

  if(theme === 'dark'){
    exampleString = `
  theme='dark'`
    exampleHeaderStyle = 'example-header dark'
    exampleStyle = 'example dark' 
  } 
  
  return (
    <div 
      style={style}
      className='child'>

        {/* SHOW ALERT BUTTON */}
        <Button 
          width='100%'
          onClick={()=>context.setState({alertVisibility:!alertVisibility})} 
          styles='primary'
          text='Show Alert'
          extClass='btn'
        />

        {/* SHOW CONFIRM BUTTON */}
        <Button 
          width='100%'
          onClick={()=>context.setState({confirmVisibility:!confirmVisibility})} 
          styles='primary'
          text='Show Confirm'
          extClass='btn'
        />
      
        {/* EXAMPLE PRIMARY BUTTON */}
        <Button 
          width='100%' 
          styles='primary'
          text='Primary'
          extClass='btn'
        />

        {/* EXAMPLE SECONDARY BUTTON */}
        <Button 
          onClick={()=>console.log('2 clicked')} 
          width='100%'
          styles='secondary'
          text='Secondary'
          extClass='btn'
        />

        {/* EXAMPLE DISABLED BUTTON */}
        <Button 
          onClick={()=>console.log('3 clicked')} 
          width='100%'
          text='Disabled'
          disabled={true}
          extClass='btn'
        />

        {/* EXAMPLE TRANSPARENT BUTTON */}
        <Button 
          onClick={()=>console.log('4 clicked')} 
          width='100%'
          text='Transparent'
          styles='transparent'
          extClass='btn'
        />

        {/* EXAMPLE WHITE BUTTON */}
        <Button 
          onClick={()=>console.log('5 clicked')} 
          width='100%'
          text='White'
          styles='white'
          extClass='btn'
        />

        {/* EXAMPLE YELLOW BUTTON */}
        <Button 
          onClick={()=>console.log('6 clicked')} 
          width='100%'
          text='Yellow'
          styles='color'
          color='yellow'
          extClass='btn'
        />

        {/* EXAMPLE RED BUTTON */}
        <Button 
          onClick={()=>console.log('7 clicked')} 
          width='100%'
          text='Red'
          styles='color'
          color='red'
          extClass='btn'
        />

        {/* EXAMPLE BLUE BUTTON */}
        <Button 
          onClick={()=>console.log('7 clicked')} 
          width='100%'
          text='Blue'
          styles='color'
          color='blue'
          extClass='btn'
        />

        {/* EXAMPLE CYAN BUTTON */}
        <Button 
          onClick={()=>console.log('7 clicked')} 
          width='100%'
          text='Cyan'
          styles='color'
          color='cyan'
          extClass='btn'
        />

        {/* EXAMPLE BLACK BUTTON */}
        <Button 
          onClick={()=>console.log('7 clicked')} 
          width='100%'
          text='Black'
          styles='color'
          color='black'
          extClass='btn'
        />

        {/* EXAMPLE BUTTON WITH ICON */}
        <Button 
          onClick={()=>console.log('8 clicked')} 
          width='100%'
          text='Sign in with Facebook'
          styles='color'
          color='#3B5998'
          extClass='btn'
          Icon={()=> (
            <AiOutlineFacebook/>
          )}
        />

        {/* EXAMPLE LARGE BUTTON */}
        <Button 
          onClick={()=>console.log('9 clicked')} 
          text='Large'
          extClass='btn2'
          
        />

        {/* EXAMPLE MEDIUM BUTTON */}
        <Button 
          onClick={()=>console.log('10 clicked')} 
          text='Medium'
          size='m'
          extClass='btn2'
        />

        {/* EXAMPLE SMALL BUTTON */}
        <Button  
          onClick={()=>console.log('11 clicked')} 
          text='Small'
          size='s'
          extClass='btn2'
          Icon = {()=> (
            <BsArrowLeft style={{fill:'white'}}/>
          )}
        />

        {/* EXAMPLE EXTRA SMALL BUTTON */}
        <Button 
          onClick={()=>console.log('12 clicked')} 
          text='Extra Small'
          size='xs'
          extClass='btn2'
          Icon = {()=> (
            <BsArrowLeft style={{fill:'white'}}/>
          )}
        />

        {/* EXAMPLE RECTANGLE BUTTON */}
        <Button 
          onClick={()=>console.log('1 clicked')} 
          shape='rectangle'
          extClass='btn'
          text='Rectangle'
        />

{/* USER GUIDELINE*/}
<div className={exampleHeaderStyle}>How to use Rounded Button</div>
<div className={exampleStyle}>
<pre>
  {`<Button 
  onClick={()=>console.log('8 clicked')} 
  width='100%' *default value equal to text width
  text='Your Button Label'
  styles='primary(default) / secondary / color'
  disabled={false(default) / true}
  color='(yellow/red/blue/cyan/black/custom)'*style=color
  extClass='your external class'
  size={l(default) / m / s / xs }
  Icon={()=> (
    <AiOutlineFacebook/> //Your Icon Component
  )}
/>`}
</pre>          
</div>

        {/* EXAMPLE CIRCLE BUTTON */}
        <ButtonCircle
          onClick={()=>console.log('button clicked')}
          extClass='btn'
          Icon = {()=> (
            <BsArrowLeft style={{fill:'white'}}/>
          )}
        />

        {/* EXAMPLE CIRCLE BUTTON MEDIUM SIZE */}
        <ButtonCircle
          onClick={()=>console.log('button clicked')}
          extClass='btn'
          size='m'
          Icon = {()=> (
            <BsArrowLeft style={{fill:'white'}}/>
          )}
        />

        {/* EXAMPLE CIRCLE BUTTON MEDIUM SIZE */}
        <ButtonCircle
          onClick={()=>console.log('button clicked')}
          extClass='btn'
          size='s'
          Icon = {()=> (
            <BsArrowLeft style={{fill:'white'}}/>
          )}
        />

        {/* EXAMPLE CIRCLE BUTTON MEDIUM SIZE */}
        <ButtonCircle
          onClick={()=>console.log('button clicked')}
          extClass='btn'
          size='xs'
          Icon = {()=> (
            <BsArrowLeft style={{fill:'white'}}/>
          )}
        />
        
        {/* EXAMPLE DISABLED CIRCLE BUTTON */}
        <ButtonCircle
          onClick={()=>console.log('button clicked')}
          extClass='btn'
          disabled={true}
          Icon = {()=> (
            <BsArrowLeft style={{fill:'white'}}/>
          )}
        />

{/* USER GUIDELINE*/}
<div className={exampleHeaderStyle}>How to use circle button with icon</div>
<div className={exampleStyle}>
<pre>
  {`<ButtonCircle
  onClick={()=>console.log('button clicked')}
  extClass='your extenernal class' *optional
  disabled={false(default) / true}
  size={l(default) / m / s / xs }
  Icon = {()=> (
    <BsArrowLeft style={{fill:'white'}}/>
  )}
/>`}
</pre>          
</div>

        <Input
          theme={theme==='dark'?'dark':null}
          label='Default Form'
          placeHolder='Insert Name'
          onChange={(e)=>console.log(e.target.value)}
        />

        <Input
          theme={theme==='dark'?'dark':null}
          label='Form with default value (editable)'
          placeHolder='Insert Name'
          defaultValue={'First Name'}
          onChange={(e)=>console.log(e.target.value)}
        />

        <Input
          theme={theme==='dark'?'dark':null}
          label='Form with value (non-editable)'
          placeHolder='Insert Name'
          value='My Name'
          onChange={(e)=>console.log(e.target.value)}
        />

        <Input
          theme={theme==='dark'?'dark':null}
          label='Disabled Form'
          placeHolder='Insert Name'
          disabled={true}
          onChange={(e)=>console.log(e.target.value)}
        />

{/* USER GUIDELINE*/}
<div className={exampleHeaderStyle}>How to use Input Form</div>
<div className={exampleStyle}>
<pre>
  {`<Input
  label='Disabled Form'
  placeHolder='Insert Name'
  disabled={true/false} Optional
  defaultValue={Optional}
  value={optional}
  onChange={(e)=>console.log(e.target.value)}`+
  exampleString+`
/>`}
</pre>          
</div>

        <CheckBox
          theme={theme==='dark'?'dark':null}
          label='Ini label'
          onClick={e=>console.log('Label : '+e.target.checked)}
        />

        <CheckBox
          theme={theme==='dark'?'dark':null}
          label='Ini headline'
          onClick={e=>console.log('Headline : '+e.target.checked)}
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae mollis tellus'
        />

        <CheckBox
          disabled={true}
          theme={theme==='dark'?'dark':null}
          label='Disabled Checkbox'
          onClick={e=>console.log('Headline : '+e.target.checked)}
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae mollis tellus'
        />

{/* USER GUIDELINE*/}
<div className={exampleHeaderStyle}>How to use Checkbox</div>
<div className={exampleStyle}>
<pre>
  {`<CheckBox
  disabled={true/false} *Optional
  label='Disabled Checkbox'
  onClick={e=>console.log('Headline : '+e.target.checked)}
  desc='description' *Optional`+
  exampleString+`
/>`}
</pre>          
</div>

        <Radio
          theme={theme==='dark'?'dark':null}
          label='Radio 1'
          name='picker'
          onChange={()=>console.log('picker 1 selected')}
        />

        <Radio
          theme={theme==='dark'?'dark':null}
          label='Radio 2'
          name='picker'
          onChange={()=>console.log('picker 2 selected')}
        />

        <Radio
          theme={theme==='dark'?'dark':null}
          label='Radio 3 with desc'
          desc='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
          name='picker'
          onChange={()=>console.log('picker 3 selected')}
        />

        <Radio
          disabled={true}
          theme={theme==='dark'?'dark':null}
          label='Disabled Radio'
          name='picker'
          onChange={()=>console.log('picker 2 selected')}
        />

{/* USER GUIDELINE*/}
<div className={exampleHeaderStyle}>How to use Radio</div>
<div className={exampleStyle}>
<pre>
  {`<Radio
  disabled={true/false} *optional
  label='Your Label'
  desc='Your description here' *optional
  name='radio group name' 
  onChange={()=>console.log('picker 2 selected')}`+
  exampleString+`
/>`}
</pre>          
</div>

        
    </div>
  )
}


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      alertVisibility:false,
      confirmVisibility:false,
    }
  }

  render(){
    const {alertVisibility, confirmVisibility} = this.state
    const context = this
    return (
      <div className='parent'>
  
        <Component style={{backgroundColor:'white'}} context={context}/>
        <Component style={{backgroundColor:'#F4F4F4'}} context={context}/>
        <Component theme='dark' style={{backgroundColor:'#020726'}} context={context}/>
  
        <Alert
          visibility={alertVisibility}
          context={context}
          buttonText='Okay'
          label='Something wrong with you, please try again!'
          hideAlert={()=>context.setState({alertVisibility:false})}
        />

        <Confirm
          visibility={confirmVisibility}
          context={context}
          primaryButtonText='Yes'
          secondaryButtonText='No'
          primaryButtonStyle='red'
          label='Are you sure want to delete this project?'
          confirmAction={(value)=>{
            console.log(value)
            context.setState({confirmVisibility:false})
          }}
        />

      </div>
    )
  }
}

export default App
