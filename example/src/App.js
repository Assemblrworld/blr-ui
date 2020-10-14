import React from 'react'

import { Button, ButtonCircle }  from 'blr-ui'
import 'blr-ui/dist/index.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {BsArrowLeft} from 'react-icons/bs'



const App = () => {
  return (
    <div className='parent'>

      {/* EXAMPLE PRIMARY BUTTON */}
      <Button 
        onClick={()=>console.log('1 clicked')} 
        styles='primary'
        text='Primary'
        extClass='btn'
      />

      {/* EXAMPLE SECONDARY BUTTON */}
      <Button 
        onClick={()=>console.log('2 clicked')} 
        styles='secondary'
        text='Secondary'
        extClass='btn'
      />

      {/* EXAMPLE DISABLED BUTTON */}
      <Button 
        onClick={()=>console.log('3 clicked')} 
        text='Disabled'
        disabled={true}
        extClass='btn'
      />

      {/* EXAMPLE TRANSPARENT BUTTON */}
      <Button 
        onClick={()=>console.log('4 clicked')} 
        text='Transparent'
        styles='transparent'
        extClass='btn'
      />

      {/* EXAMPLE WHITE BUTTON */}
      <Button 
        onClick={()=>console.log('5 clicked')} 
        text='White'
        styles='white'
        extClass='btn'
      />

      {/* EXAMPLE YELLOW BUTTON */}
      <Button 
        onClick={()=>console.log('6 clicked')} 
        text='Yellow'
        styles='color'
        color='yellow'
        extClass='btn'
      />

      {/* EXAMPLE RED BUTTON */}
      <Button 
        onClick={()=>console.log('7 clicked')} 
        text='Red'
        styles='color'
        color='red'
        extClass='btn'
      />

      {/* EXAMPLE BLUE BUTTON */}
      <Button 
        onClick={()=>console.log('7 clicked')} 
        text='Blue'
        styles='color'
        color='blue'
        extClass='btn'
      />

      {/* EXAMPLE CYAN BUTTON */}
      <Button 
        onClick={()=>console.log('7 clicked')} 
        text='Cyan'
        styles='color'
        color='cyan'
        extClass='btn'
      />

      {/* EXAMPLE BLACK BUTTON */}
      <Button 
        onClick={()=>console.log('7 clicked')} 
        text='Black'
        styles='color'
        color='black'
        extClass='btn'
      />

      {/* EXAMPLE BUTTON WITH ICON */}
      <Button 
        onClick={()=>console.log('8 clicked')} 
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
      />

      {/* EXAMPLE EXTRA SMALL BUTTON */}
      <Button 
        onClick={()=>console.log('12 clicked')} 
        text='Extra Small'
        size='xs'
        extClass='btn2'
      />

      {/* EXAMPLE RECTANGLE BUTTON */}
      <Button 
        onClick={()=>console.log('1 clicked')} 
        shape='rectangle'
        extClass='btn'
        text='Rectangle'
      />

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
      
      {/* EXAMPLE DISABLED CIRCLE BUTTON */}
      <ButtonCircle
        onClick={()=>console.log('button clicked')}
        extClass='btn'
        disabled={true}
        Icon = {()=> (
          <BsArrowLeft style={{fill:'white'}}/>
        )}
      />
    </div>
  )
}

export default App
