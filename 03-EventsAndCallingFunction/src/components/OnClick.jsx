import React from 'react'

const OnClick = (val) => {
    const handleClick = () => {
        console.log(`Button Clicked!`);
    }
  return (
    <div>
        {/* <button onClick={handleClick}>Click Me!</button> */}
        <button onClick={(event) => {
            console.log(event);
            
            handleClick(event)
        }}>Click Me!</button>
    </div>
  )
}

export default OnClick