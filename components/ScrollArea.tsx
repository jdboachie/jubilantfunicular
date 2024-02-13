import React from 'react'

const ScrollArea = ({children, className}: {children: React.ReactNode, className?: string,}) => {
  return (
    <div
      className={`${className} scrollArea p-2 overflow-y-auto h-full w-full`}
    >{children}</div>
  )
}

export default ScrollArea