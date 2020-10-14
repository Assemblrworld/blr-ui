# blr-ui

> ini librabry untuk reuseble component pwa assemblr

[![NPM](https://img.shields.io/npm/v/blr-ui.svg)](https://www.npmjs.com/package/blr-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)



## Install

```bash
npm install github:Assemblrworld/blr-ui
```

## Usage

![GitHub Logo](/docs/example2.png)

```bash
SIZE VARIANT : [
  LARGE       : DEFAULT SIZE IF EMPTY
  MEDIUM      : 'm'
  SMALL       : 's'
  Extra Small : 'xs'
]
```

```jsx
import React, { Component } from 'react'

import {Button, ButtonCircle} from 'blr-ui'
import 'blr-ui/dist/index.css'

class Example extends Component {
  render() {
    return (
      <div>
        {/* EXAMPLE PRIMARY BUTTON */}
      <Button 
        onClick={()=>console.log('1 clicked')} 
        styles='primary'
        text='Primary'
        additonalClass='btn'
      />

      {/* EXAMPLE SECONDARY BUTTON */}
      <Button 
        onClick={()=>console.log('2 clicked')} 
        styles='secondary'
        text='Secondary'
        additonalClass='btn'
      />

      {/* EXAMPLE DISABLED BUTTON */}
      <Button 
        onClick={()=>console.log('3 clicked')} 
        text='Disabled'
        disabled={true}
        additonalClass='btn'
      />

      {/* EXAMPLE TRANSPARENT BUTTON */}
      <Button 
        onClick={()=>console.log('4 clicked')} 
        text='Transparent'
        styles='transparent'
        additonalClass='btn'
      />

      {/* EXAMPLE WHITE BUTTON */}
      <Button 
        onClick={()=>console.log('5 clicked')} 
        text='White'
        styles='white'
        additonalClass='btn'
      />

      {/* EXAMPLE YELLOW BUTTON */}
      <Button 
        onClick={()=>console.log('6 clicked')} 
        text='Yellow'
        styles='color'
        color='yellow'
        additonalClass='btn'
      />

      {/* EXAMPLE RED BUTTON */}
      <Button 
        onClick={()=>console.log('7 clicked')} 
        text='Red'
        styles='color'
        color='red'
        additonalClass='btn'
      />

      {/* EXAMPLE BLUE BUTTON */}
      <Button 
        onClick={()=>console.log('7 clicked')} 
        text='Blue'
        styles='color'
        color='blue'
        additonalClass='btn'
      />

      {/* EXAMPLE CYAN BUTTON */}
      <Button 
        onClick={()=>console.log('7 clicked')} 
        text='Cyan'
        styles='color'
        color='cyan'
        additonalClass='btn'
      />

      {/* EXAMPLE BLACK BUTTON */}
      <Button 
        onClick={()=>console.log('7 clicked')} 
        text='Black'
        styles='color'
        color='black'
        additonalClass='btn'
      />

      {/* EXAMPLE BUTTON WITH ICON */}
      <Button 
        onClick={()=>console.log('8 clicked')} 
        text='Sign in with Facebook'
        styles='color'
        color='#3B5998'
        additonalClass='btn'
        Icon={()=> (
          <AiOutlineFacebook/>
        )}
      />

      {/* EXAMPLE LARGE BUTTON */}
      <Button 
        onClick={()=>console.log('9 clicked')} 
        text='Large'
        additonalClass='btn2'
        
      />

      {/* EXAMPLE MEDIUM BUTTON */}
      <Button 
        onClick={()=>console.log('10 clicked')} 
        text='Medium'
        size='m'
        additonalClass='btn2'
      />

      {/* EXAMPLE SMALL BUTTON */}
      <Button  
        onClick={()=>console.log('11 clicked')} 
        text='Small'
        size='s'
        additonalClass='btn2'
      />

      {/* EXAMPLE EXTRA SMALL BUTTON */}
      <Button 
        onClick={()=>console.log('12 clicked')} 
        text='Extra Small'
        size='xs'
        additonalClass='btn2'
      />

      {/* EXAMPLE RECTANGLE BUTTON */}
      <Button 
        onClick={()=>console.log('1 clicked')} 
        shape='rectangle'
        additonalClass='btn'
        text='Rectangle'
      />

      {/* EXAMPLE CIRCLE BUTTON */}
      <ButtonCircle
        onClick={()=>console.log('button clicked')}
        additonalClass='btn'
        Icon = {()=> (
          <BsArrowLeft style={{fill:'white'}}/>
        )}
      />

      {/* EXAMPLE CIRCLE BUTTON MEDIUM SIZE */}
      <ButtonCircle
        onClick={()=>console.log('button clicked')}
        additonalClass='btn'
        size='m'
        Icon = {()=> (
          <BsArrowLeft style={{fill:'white'}}/>
        )}
      />
      
      {/* EXAMPLE DISABLED CIRCLE BUTTON */}
      <ButtonCircle
        onClick={()=>console.log('button clicked')}
        additonalClass='btn'
        disabled={true}
        Icon = {()=> (
          <BsArrowLeft style={{fill:'white'}}/>
        )}
      />
      </div>
    )
  }
}
```

## License

MIT © [assemblrworld](https://github.com/assemblrworld)
