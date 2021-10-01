import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import Movie from '../components/Movie/Movie';

test('displays a default thumbnail for actor', async ()=> {
    const movie = render(<Movie />);
    const movieThumbnail: any = await movie.findByTestId("thumbnail");

    expect(movieThumbnail.src).toContain("no_image.jpg");
});