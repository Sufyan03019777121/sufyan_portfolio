import React from 'react'
import "../../styles/components/Button.css"

const Button = ({text}) => {
  return (
    <div>
      <button class="button">{text}</button>
    </div>
  )
}

export default Button
