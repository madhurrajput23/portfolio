import React from 'react'

const Navbar = () => {

    const links= [
        {
            id:1,
            link:"Home"
        },
        {
            id:2,
            link:"About"
        },
        {
            id:3,
            link:"Portfolio"
        },
        {
            id:4,
            link:"Contact"
        },
    ]
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>

      <div>
        <h1 className='text-4xl font-signature'>Portfo<span className='text-5xl text-cyan-500'>lio</span></h1>
        </div> 


        <ul className='flex'>

            {links.map(({ link , id}) => {
                return(
                    <li key={id} className='px-4 cursor-pointer font-medium text-gray-400 hover:scale-105 duration-200'>
                  {link}
                  </li>
                )
                  
            })}
           
        </ul>
    
    </div>
  )
}

export default Navbar