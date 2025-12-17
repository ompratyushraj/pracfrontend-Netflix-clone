import React, { useEffect, useState } from 'react'
import { Movie, singleMovie } from '../interfaces'
import Image from 'next/image'
import styles from '../styles/Banner.module.css'
import { FaPlay } from 'react-icons/fa'
import { IoMdInformationCircleOutline } from 'react-icons/io'

import Model from './Model'

interface props {
  trendingMovies: Movie[]
}

const Banner = ({ trendingMovies }: props) => {
  const [movie, setMovie] = useState<Movie | null>();
  const [show, setShow] = useState(false);
  const [trailer, setTrailer] = useState("")
  const [singleMovie, setSingleMovie] = useState<singleMovie | null>(null)

  useEffect(() => {
    setMovie(trendingMovies?.[Math.floor(Math.random() * trendingMovies?.length)])
  }, [])

  const handleClose = () => {
    setShow(false)
  }

  useEffect(() => {
    const fetchData = async () => {

      const res = await fetch(`http://api.themoviedb.org/3/movie/${movie?.id}?api_key=512527e45f78c9fe542face1e16e9ad9&append_to_response=videos`)

      const data = await res.json()
      setTrailer(data?.videos?.results[0]?.key);
      setSingleMovie(data)

    }

    fetchData();

  }, [movie])

  return (
    <div className='flex flex-col md:space-y-6 pt-24  lg:h-[65vh] lg:justify-end lg:pb-5 '>
      <div className='absolute   w-screen -z-10 h-[100vh] top-0 left-0'>
        {movie && <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          layout='fill'
          objectFit='cover'
        />}
      </div>

      <h1 className='text-2xl lg:text-7xl md:text-4xl'>{movie?.title || movie?.name || movie?.original_name}</h1>
      <p className='max-w-xs text-sm md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>{movie?.overview}</p>

      <div className='flex w-56 justify-between md:w-72 lg:w-96'>
        <button
          onClick={() => {
            setShow(true)
            console.log('setShowtrue')
          }}
          className={`${styles.buttons} bg-white text-black`}><FaPlay className='text-gray-900 text-lg md:text-xl lg:text-3xl ' /> Play</button>
        <button className={`${styles.buttons} bg-gray-400`}><IoMdInformationCircleOutline className='text-white text-lg md:text-xl lg:text-4xl ' /> More Info</button>
      </div>

      <Model show={show} handleClose={handleClose} trailer={trailer} movie={movie} singleMovie={singleMovie} />


    </div>
  )
}

export default Banner
