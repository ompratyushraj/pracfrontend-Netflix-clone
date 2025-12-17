import React, { useContext, useEffect, useState } from 'react'
import styles from '../styles/navbar.module.css'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
    const [isScrolle, setIsScrolle] = useState(false);
    const {logout, user}=useContext(AuthContext)


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) setIsScrolle(true)
            else setIsScrolle(false)
            
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll",handleScroll)
        }

    })
    return (
        <div className={`${styles.header} ${isScrolle && "bg-[#141414]"} z-50`}>
            <div className='flex items-center space-x-3 md:space-x-5' >
                <img
                    src="https://rb.gy/ulxxee"
                    width={100}
                    height={100}
                    className="cursor-pointer object-contain"
                />
                <ul className='hidden space-x-5 md:flex '>
                    <li className={styles.navbarLink}>Tv Show</li>
                    <li className={styles.navbarLink}>Movie</li>
                    <li className={styles.navbarLink}>Populer</li>
                    <li className={styles.navbarLink}>My List</li>
                </ul>
            </div>
            <div className='flex items-center space-x-5 text-sm font-normal'>
                <SearchIcon className='hidden sm:inline h-6 w-6' />
                <p>children</p>
                <BellIcon className='h-6 w-6' />
                
                <div className='group relative'>
                    <img
                        src="https://rb.gy/g1pwyx"
                        alt=""
                    className="cursor-pointer rounded"
                    
                    />
                    <div className='absolute right-0 hidden group-hover:block space-y-1 p-5  bg-slate-700'>
                       <p className=' p-3  '>{user?.email?.split("@")[0]}</p>
                        <p
                            onClick={logout}
                            className='p-3 cursor-pointer hover:bg-slate-600 rounded-md'>Logout</p> 
                    </div>
                    
                </div>
                    
                

            </div>
        </div>
    )
}

export default Navbar
