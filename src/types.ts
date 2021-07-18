export type MoviType = {
    id: number,
    backdrop_path: string,
    poster_path: string,
    original_title: string,
    title: string,
    overview: string,
    vote_average: string,
    budget: number,
    revenue: number,
    runtime: number,
}

type DirectorType = {
    credit_id: number,
    name: string,
}

export type ActorType = {
    credit_id: number,
    name: string
    character: string,
    profile_path: string,
}

export type MovieState = MoviType & { actors: ActorType[]; directors: DirectorType[] };