# blr-ui

> ini librabry untuk reuseble component pwa assemblr

[![NPM](https://img.shields.io/npm/v/blr-ui.svg)](https://www.npmjs.com/package/blr-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)



## Install

```bash
npm install --save blr-ui
```

## Usage

![GitHub Logo](/docs/example.png)

```jsx
import React, { Component } from 'react'

import {Button, ButtonCircle} from 'blr-ui'
import 'blr-ui/dist/index.css'

class Example extends Component {
  render() {
    return (
      <div>
        <Button 
          onClick={()=>console.log('1 clicked')} 
          styles='primary'
          text='Primary'
          additonalClass='btn'
        />

        <Button 
          onClick={()=>console.log('2 clicked')} 
          styles='secondary'
          text='Secondary'
          additonalClass='btn'
        />

        <Button 
          onClick={()=>console.log('3 clicked')} 
          text='Disabled'
          disabled={true}
          additonalClass='btn'
        />

        <Button 
          onClick={()=>console.log('4 clicked')} 
          text='Transparent'
          styles='transparent'
          additonalClass='btn'
        />

        <Button 
          onClick={()=>console.log('5 clicked')} 
          text='White'
          styles='white'
          additonalClass='btn'
        />

        <Button 
          onClick={()=>console.log('6 clicked')} 
          text='Yellow'
          styles='color'
          color='#F7BE2D'
          additonalClass='btn'
        />

        <Button 
          onClick={()=>console.log('7 clicked')} 
          text='Red'
          styles='color'
          color='#D9005C'
          additonalClass='btn'
        />

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

        <Button 
          onClick={()=>console.log('9 clicked')} 
          text='Large'
          additonalClass='btn2'
          
        />

        <Button 
          onClick={()=>console.log('10 clicked')} 
          text='Medium'
          size='m'
          additonalClass='btn2'
        />

        <Button 
          onClick={()=>console.log('11 clicked')} 
          text='Small'
          size='s'
          additonalClass='btn2'
        />

        <Button 
          onClick={()=>console.log('12 clicked')} 
          text='Extra Small'
          size='xs'
          additonalClass='btn2'
        />

        <Button 
          onClick={()=>console.log('1 clicked')} 
          shape='rectangle'
          additonalClass='btn'
          text='Rectangle'
        />

        <ButtonCircle
          onClick={()=>console.log('button clicked')}
          additonalClass='btn'
          Icon = {()=> (
            <BsArrowLeft style={{fill:'white'}}/>
          )}
        />

        <ButtonCircle
          onClick={()=>console.log('button clicked')}
          additonalClass='btn'
          size='m'
          Icon = {()=> (
            <BsArrowLeft style={{fill:'white'}}/>
          )}
        />
        
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
