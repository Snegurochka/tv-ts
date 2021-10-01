import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import MovieInfo from '../components/MovieInfo/MovieInfo';

const movieMoc = {
    id: 0,
    backdrop_path: '',
    poster_path: '',
    original_title: '',
    title: '',
    overview: '',
    vote_average: '',
    budget: 0,
    revenue: 0,
    runtime: 0,
    actors: [],
    directors: [],
}

test('displays a default thumbnail for movie', async () => {
    const movieInfo = render(<MovieInfo movie={movieMoc} />);
    const movieInfoThumbnail: any = await movieInfo.findByTestId("thumbnail");

    expect(movieInfoThumbnail.src).toContain("no_image.jpg");
})