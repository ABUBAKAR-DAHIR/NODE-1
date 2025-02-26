import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className='flex  bg-blue-100 justify-around items-center'>
            <div className='text-4xl font-semibold self-center text-[#00ff] underline-offset-8' >
                <span className='text-black'>Modular</span> <span>Solutions</span>
            </div>
            <div>
                <ul className='flex space-x-20 text-[20px]' >
                    <li className="hover:bg-blue-600 rounded-t-md p-6 hover:text-amber-50 "> Home</li>
                    <li className="hover:bg-blue-600 rounded-t-md p-6 hover:text-amber-50">About</li>
                    <li className="hover:bg-blue-600 rounded-t-md p-6 hover:text-amber-50">Services</li>
                    <li className="hover:bg-blue-600 rounded-t-md p-6 hover:text-amber-50">Contact</li>
                </ul>
            </div>
        </div>
        
    </>
  )
}

export default Navbar