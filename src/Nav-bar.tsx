

import { TbBrandTailwind } from "react-icons/tb";
import { Button } from './Button';

export const NavBar = () => {
  
  const Links =[ 
    {name:"HOME",link:"/"},
    {name:"ABOUT US",link:"/"},
    {name:"CONTACT",link:"/"},
    {name:"TOPHIES",link:"/"},
  ]
  return (
    <div className='shadow-md w-full  fixed top-0 left-0'>
        <div className='md:flex justify-between items-center bg-white py-6  md:px-10 md:py-7'>
            <div className="font-bolf text-2xl cursor-pointer flex items-center font-Poppins text-gray-800">
            
                <span className='text-3xl text-indigo-600'> <TbBrandTailwind /></span>
                TailWind
            </div>
            <ul className='md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500'>
           
              {
              Links.map(link=>(
                 <li key={link.name} className="md:ml-8 text-xl
                 md:my-0 my-7 " >
                  <a className='text-gray-800 hover:text-gray-400 duration-500' href={link.name}>{link.name}</a>
                  </li>
              ))
            }
            <Button name={"name"} />
            </ul>
        </div>
    </div>
  )
}
