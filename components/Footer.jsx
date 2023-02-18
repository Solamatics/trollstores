import React from 'react'

const Footer = () => {

    const year = new Date();
  return (
    <>
         <footer className='flex h-10 items-center justify-center shadow-inner'>
            <p>Copyright © {year.getFullYear()} Amazona</p>
          </footer>
    </>
  )
}

export default Footer