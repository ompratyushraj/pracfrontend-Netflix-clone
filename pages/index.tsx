import {useContext} from "react"
import Head from 'next/head'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Row from '../components/Row'
import { AuthContext } from '../context/AuthContext'
import { Movie } from '../interfaces'

interface props {


  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
  animation: Movie[]
  populer: Movie[]
}

const Home = ({
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
  animation,
  populer }: props) => {
  
  
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010512] lg:h-[155vh]">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      </Head>

      <Navbar />
      <main className='relative pl-5 lg:pl-8 space-y-32 overflow-x-hidden'>
        <Banner trendingMovies={trendingNow} />

        <section className='space-y-5 lg:space-y-10 '>
          <Row title={"Trending Movies"} movie={trendingNow} />
          
          <Row title={"Action Movies"} movie={comedyMovies} />
          <Row title={"Comedy Movies"} movie={horrorMovies} />
          <Row title={"Horror Movies"} movie={actionMovies} />
          <Row title={"Romance Movies"} movie={romanceMovies} />
          <Row title={"Documentaries Movies"} movie={documentaries} />
          <Row title={"Animation Movies"} movie={animation} />
          <Row title={"Populer Movies"} movie={populer} />
          <Row title={"Top Rated"} movie={topRated} />

        </section>
      </main>


    </div>
  )
}

export default Home

export const getServerSideProps = async () => {



  const [

    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
    animation,
    populer
  ] = await Promise.all([

    fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=512527e45f78c9fe542face1e16e9ad9').then((res) => res.json()),
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=512527e45f78c9fe542face1e16e9ad9&page=1').then((res) => res.json()),
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=512527e45f78c9fe542face1e16e9ad9&with_genres=28').then((res) => res.json()),
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=512527e45f78c9fe542face1e16e9ad9&with_genres=35').then((res) => res.json()),
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=512527e45f78c9fe542face1e16e9ad9&with_genres=27').then((res) => res.json()),
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=512527e45f78c9fe542face1e16e9ad9&with_genres=10749').then((res) => res.json()),
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=512527e45f78c9fe542face1e16e9ad9&with_genres=99').then((res) => res.json()),
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=512527e45f78c9fe542face1e16e9ad9&with_genres=16').then((res) => res.json()),
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=512527e45f78c9fe542face1e16e9ad9&language=en-US&page=1').then((res) => res.json()),

  ])


  return {
    props: {
      trendingNow: trendingNow.results,

      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
      animation: animation.results,
      populer: populer.results,
    }
  }
}



