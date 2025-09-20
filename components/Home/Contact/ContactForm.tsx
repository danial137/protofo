import React from 'react'

const ContactForm = () => {
    return (
        <div className='bg-[#140c1c] rounded-lg p-4 sm:p-10'>
            <h1 className='text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold'>Let`s Work Together</h1>
            <p className='text-gray-200 mt-3 lg:text-base text-xs md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt necessitatibus tenetur ab repellendus veniam voluptate!</p>
            {/* input */}
            <form className='mt-8 block w-full overflow-hidden'>
                <div className='flex flex-col md:flex-row items-center justify-between gap-4 '>
                    <input type="text" placeholder='First Name' className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none ' />
                    <input type="text" placeholder='Last Name' className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none ' />
                </div>

                <div className='flex mt-5  flex-col md:flex-row items-center justify-between gap-4 '>
                    <input type="email" placeholder='Enter your email' className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none ' />
                    <input type="text" placeholder='phone number' className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none ' />
                </div>

                <div>
                    <select className='w-full bg-black mt-5 text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none '>
                        <option value="" disabled selected>Select a subject</option>
                        <option value="web-development">Web Development</option>
                        <option value="graphic-design">Frontend Development</option>
                        <option value="seo">Full Stack Development</option>
                    </select>
                </div>

            </form>
        </div>
    )
}

export default ContactForm