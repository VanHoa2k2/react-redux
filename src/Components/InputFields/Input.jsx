import React from 'react'
import "../Edit/edit.css"
import "../Posts/post.css"

const Input = (props) => {
    const {inputType, classStyle, data, setData, label} = props
  return (
    <>
        <lable>{label}</lable>
        {inputType === 'textArea' ? (
            <textarea type='text' className={classStyle} placeholder={data} onChange={e => setData(e.target.value)}/>
        ) : (<input type="text" placeholder={data} onChange={e => setData(e.target.value)}/>)}
        
    </>
  )
}

export default Input