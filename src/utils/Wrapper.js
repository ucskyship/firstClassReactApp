import React from 'react'


const Wrapper = (props) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {props.children}
        </div>

    )
}

export default Wrapper
