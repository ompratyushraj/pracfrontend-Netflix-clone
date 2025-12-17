import React, { useState } from 'react'
import MuiModal from '@mui/material/Modal'
import { FaPlay } from 'react-icons/fa';
import { CheckIcon, PlusIcon, ThumbUpIcon, VolumeOffIcon, VolumeUpIcon } from '@heroicons/react/outline';
import ReactPlayer from "react-player";
import style from '../styles/Modal.module.css';

import { IoMdClose } from 'react-icons/io';
import { Movie, singleMovie } from '../interfaces';
import { match } from 'assert';



interface prop {
    show: boolean
    handleClose: () => void
    trailer: string
    movie: Movie | null | undefined
    singleMovie: singleMovie | null
}

const Model = ({ show, handleClose, trailer, movie, singleMovie }: prop) => {

    const [muted, setMuted] = useState(true);


    const handleList = () => {
       
    }

    return (
        <MuiModal
            open={show}
            onClose={handleClose}
            className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide transition-all duration-1000"
        >
            <>

                <div className="relative pt-[56.25%]">



                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${trailer}`}
                        width="100%"
                        height="100%"
                        style={{ position: 'absolute', top: '0', left: '0' }}
                        playing
                        muted={muted}
                    />

                    <div className={`${style.modalButtons} absolute top-20 right-5 bg-black/70 border-none`}>

                        <IoMdClose className='h-6 w-6 '
                            onClick={handleClose}
                        />
                    </div>
                    <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
                        <div className="flex space-x-2">
                            <button className="flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]">
                                <FaPlay className="h-7 w-7 text-black" />
                                Play
                            </button>
                            <button className={style.modalButtons} onClick={handleList}>
                                <PlusIcon className='h-6 w-6' />
                            </button>
                            <button className={style.modalButtons}>
                                <ThumbUpIcon className="h-6 w-6" />
                            </button>
                        </div>
                        <button className={style.modalButtons} onClick={() => setMuted(!muted)}>
                            {muted ? (
                                <VolumeOffIcon className="h-6 w-6 text-gray-400 hove:text-white" />
                            ) : (
                                <VolumeUpIcon className="h-6 w-6 text-gray-400 hover:text-white" />
                            )}
                        </button>
                    </div>

                </div>
                <div className='z-100 pl-5 pr-5 bg-black pb-5'>
                    <div>
                        <div className="flex items-center space-x-2 text-sm">
                            <p>New</p>
                            <p className="font-semibold text-green-400">
                                {movie?.vote_average}
                            </p>
                            <p className="font-light">
                                {movie?.release_date || movie?.first_air_date}
                            </p>
                            <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                                HD
                            </div>
                        </div>
                        <div>
                            <p>Watch In  {movie?.original_language} </p>
                            <p>{movie?.overview}</p>
                            <div>
                                <span className="text-[gray]">Genres:</span>{' '}
                                {singleMovie?.genres?.map((genre) => genre.name).join(', ')}
                            </div>

                        </div>
                    </div>
                </div>
            </>
        </MuiModal>
    )
}

export default Model
