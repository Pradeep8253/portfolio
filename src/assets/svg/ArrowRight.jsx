import React from 'react'

function ArrowRight(props) {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 24 24"
        width="1em"
        {...props}
      >
        <path d="M0 0h24v24H0z" fill='none'/>
        <path fill={props.darkMode? '#1c1c1c': '#fff'} d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
      </svg>
    )
}

export default ArrowRight
