export interface Movie{
    title: string
    backdrop_path: string
    media_type?: string
    release_date?: string
    first_air_date: string
    genre_ids: number[]
    id: number
    name: string
    origin_country: string[]
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
}

export interface singleMovie 
    {
        adult: false,
        backdrop_path: string,
        genres: [
            {
                id: number,
                name: string
            }

        ],

        original_language: string,
        original_title: string,
        overview: string,

        production_companies: [
            {
                id: number,
                logo_path: string,
                name: string,
                origin_country: string
            },

        ],
        release_date: string,
        revenue: number,
        runtime: number,
        spoken_languages: [
            {
                english_name: string,
                iso_639_1: string,
                name: string,
            }
        ],
        status: string,
        tagline: string,
        title: string,



        videos: {
            results: [
                {
                    iso_639_1: string,
                    iso_3166_1: string,
                    name: string,
                    key: string,
                    site: string,
                    size: number,
                    type: string,
                    official: boolean,
                    published_at: string,
                    id: string
                },

            ]
        }
    }
