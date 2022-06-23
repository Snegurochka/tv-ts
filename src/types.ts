export type MoviType = {
    id: number,
    backdrop_path: string,
    poster_path: string,
    backdrops: Backdrops[],
    original_title: string,
    title: string,
    overview: string,
    vote_average: string,
    budget: number,
    revenue: number,
    runtime: number,
}

export type DirectorType = {
    credit_id: number,
    name: string,
    job: string,
}

export type ActorType = {
    credit_id: number,
    name: string,
    character: string,
    profile_path: string,
}

export type MovieState = MoviType & { actors: ActorType[]; directors: DirectorType[]; };

export type MoviesStateType = {
    page: number,
    results: Array<MoviType>,
    total_pages: number,
    total_results: number,
}

export type Credits = {
    id: number,
    cast: ActorType[],
    crew: DirectorType[],
}

export type Backdrops = {
    file_path: string

}

export type Photos = {
    id: number,
    backdrops: Backdrops[]
}

export type CommentType = {
    uid: string,
    title: string,
    text: string,
}