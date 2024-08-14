import React from 'react'

function Logo(props) {
    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-409 218.7 140 124.3"
      style={{
        enableBackground: "new -409 218.7 140 124.3",
      }}
      xmlSpace="preserve"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M-112.2 102.5c-4-6.7-8.9-5.4-10.7-4.6-.2.1-.4.3-.6.4-.1 0-.1.1-.1.1-1.2.4-2.4.4-3.4-.3-1.8-1.2-2.2-3.9-.9-5.9 1.4-2.1 3.9-2.7 5.8-1.5.3.2.5.4.8.7.3.1.8.1 1.2-.2.6-.5.3-1.5.1-1.9l-6-10.4-12.4 21.5c-.2.8-1.1 5.9 7.6 3.4.3-.1.5-.2.8-.2 1.4-.3 2.8.1 3.8 1.1 1.6 1.7 1.4 4.5-.5 6.3-1.9 1.8-4.7 1.7-6.3 0-2.3-1.2-7.7-2-14.1 4h42.2l-7.3-12.5z"
        style={{
          fill: props.darkMode ? '#fff' : '#1c1c1c',
        }}
        transform="matrix(2.78 0 0 2.78 10 10)"
      />
    </svg>
    )
}

export default Logo
