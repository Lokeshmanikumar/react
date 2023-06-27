import React from "react";

const Count = (props) => {
    const {text,number} = props
    console.log(`${text} rendered`)
    return <h3>{text}:{number}</h3>
}

export default React.memo(Count)