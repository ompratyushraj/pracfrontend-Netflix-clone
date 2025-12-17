import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Movie, singleMovie } from '../interfaces'

import Model from './Model'


interface props {
    movie: Movie

}

const Thumble = ({ movie }: props) => {
    const [show, setShow] = useState(false)
    const [trailer, setTrailer] = useState("")
    const [singleMovie, setSingleMovie] = useState<singleMovie | null>(null)
    const [showCard, setShowCard] = useState(false)
    const handleClose = () => {
        setShow(false)


    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://api.themoviedb.org/3/movie/${movie?.id}?api_key=512527e45f78c9fe542face1e16e9ad9&append_to_response=videos`)

            const data = await res.json();
            setSingleMovie(data)
            
        }
        fetchData();
    }, [movie])


    return (

        <div className=''>
            <div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] hover:scale-[1.1]'>


                <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                    layout='fill'
                    className='object-cover rounded-sm'
                    onClick={() => {
                        setShow(true)

                        const fetchData = async () => {
                            const res = await fetch(`http://api.themoviedb.org/3/movie/${movie?.id}?api_key=512527e45f78c9fe542face1e16e9ad9&append_to_response=videos`)

                            const data = await res.json();
                            data ? setTrailer(data.videos?.results[0]?.key) : ""
                           
                        }
                        fetchData();
                    }}
                    onMouseEnter={() => {
                        setShowCard(true)
                    }}
                    onMouseLeave={() => {
                        setShowCard(false)
                    }}
                />




            </div>

            


            <Model show={show} handleClose={handleClose} trailer={trailer} singleMovie={singleMovie} movie={movie} />
        </div>

    )
}

export default Thumble


