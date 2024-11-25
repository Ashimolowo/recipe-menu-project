import React from 'react'
import {useTheme} from '../../hooks/useTheme'
import modeSwitch from '../../assets/brightness.svg'
const themeColors = ['#58249c','#249c6b','#b70233']
const ContextSelector = () => {

    const {mode, change_color, change_mode} = useTheme()
    const toggle = () => {
        if(mode === 'dark') change_mode('light')
        else change_mode('dark')
    }
  return (
    <div className='container'>
        <img 
            src={modeSwitch} 
            alt=""  
            className='mode'
            onClick={toggle}
            style={{filter: mode === 'dark' ? 'invert(100%)' : 'invert(60%)'}}
        
        />
      <div className='colors'>
        {themeColors.map(color => (
            <div 
                className='palette'
                key={color}
                style={{
                    background: color, 
                    width: '20px', 
                    height: '20px',
                    borderRadius: '50%'
                }}
                onClick={()=>change_color(color)}
            />
        ))}
      </div>
    </div>
  )
}

export default ContextSelector
