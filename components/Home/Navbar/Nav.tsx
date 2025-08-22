import Image from 'next/image'
import React from 'react'

const Nav = () => {
    return (
        <div className='fixed h-[12vh] z-[10] bg-blue-950 w-full'>
            <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto '>
                {/* logo */}
                <Image src="/images/logo.png" alt='LOGO' width={200} height={200} className='ml-[-1.5rem] sm:ml-0 ' />
            </div>
        </div>
    )
}

export default Nav