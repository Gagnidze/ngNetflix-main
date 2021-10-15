export interface movieType {
    adult: boolean
    backdrop_path: string
    genre_ids: []
    0: number
    1: number
    2: number
    length: number
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface genresRes {
    page: number
    results: movieType[]
    total_pages: number
    total_results: number
}

export interface posterRes {
    url: string
}