import React from 'react'
import './style.css'
const Container = ({children}) => {
  return (
    <div className='main__container main__container--padding'>{children}</div>
  )
}

export default Container