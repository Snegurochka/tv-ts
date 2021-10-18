export enum AppRoute {
    HOME = '/',
    LOGIN = '/login',
    WATCH_LIST = '/watchlist',
    CATALOG = '/catalog/:category',
    MOVIES = '/catalog/movie',
    TV = '/catalog/tv',
    ADD_REVIEW = '/review',
};

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}
