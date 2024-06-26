import Image from 'next/image'
import React from 'react'

const login = () => {
  return (
    <>
    <div className='loginfront flex flex-center flex-col full-w'>
        <Image src='/images/coder.jpeg' width={200} height={200} alt='logo' />
        <h1>Welcome Admin of the blog-web</h1>
        <p>Visit our main website <a href='https://github.com/SkivaDev'>blog-web</a></p>

        <button className='mt-2'>Login with google</button>
    </div>
    </>
  )
}

export default login