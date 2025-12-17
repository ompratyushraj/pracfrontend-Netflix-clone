import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

import React, { useEffect, useRef, useState } from 'react'
import { Movie } from '../interfaces'
import Thumble from './Thumble'
interface props {
    movie: Movie[],
    title: String
}

const Row = ({ title, movie }: props) => {
    const rowRef = useRef<HTMLDivElement>(null);
    const [isMoved, setIsMoved] = useState(0)

    const handleClick = (direction: String) => {

        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current
            setIsMoved(scrollLeft)

            const scrollTo = direction === "left" ? scrollLeft - clientWidth : clientWidth + scrollLeft
            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
        }
        if (direction === "right") setIsMoved(1)


    }
    return (
        <div className='group relative'>
            <h1 className='font-bold text-lg md:text-xl lg:text-2xl my-2'>
                {title}
            </h1>

            <div className=''>
                <ChevronLeftIcon
                    onClick={
                        () => handleClick("left")
                    }
                    className={`absolute cursor-pointer left-1 xh-5 w-5 top-20 lg:top-[5.8rem] text-sm md:text-lg lg:h-8 lg:w-8 opacity-0 hover:opacity-100 group-hover:opacity-100 z-10 ${!isMoved && "hidden"}`} />

            </div>

            <div ref={rowRef} className='flex overflow-y-scroll space-x-2 scrollbar-hide z-0'>

                {movie?.map((item) => {
                    return <Thumble movie={item}
                        key={item.id}


                    />
                })}

            </div>

            <div className=''>
                <ChevronRightIcon
                    onClick={() => { handleClick("right") }}
                    className='absolute cursor-pointer right-1 h-5 w-5 top-20 lg:top-[5.8rem]  text-sm md:text-lg lg:h-8 lg:w-8 hidden hover:opacity-100 group-hover:block transition-all duration-100 z-10' />
            </div>
        </div>

    )
}

export default Row
