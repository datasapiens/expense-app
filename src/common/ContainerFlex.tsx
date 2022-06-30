import React, { ReactElement } from 'react'

export const ContainerFlex: React.FC<{children: ReactElement}> = ({children}) => {
  return (
    <div className='container__flex'>
        <div className='main_nav'></div>
        <div className='main_lg_container'>
            <div className="main_lg_content">
            {children}
            </div>
        </div>
   </div>
  )
}
