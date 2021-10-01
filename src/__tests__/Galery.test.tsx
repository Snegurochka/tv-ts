import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import Gallery from '../components/Gallery/Gallery';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

test("lets users click on thumbnails to make them the hero", async () => {
    const images = [{file_path:"0.jpg"}, {file_path:"1.jpg"}, {file_path:"2.jpg"}];
    const component = render(<Gallery header='' photos={images} />);

    const componentThumbnail:any = await component.findByTestId("thumbnail");

    expect(componentThumbnail.src).toContain(`${IMAGE_BASE_URL}${POSTER_SIZE}${images[0].file_path}`);

    for(let i = 0; i < images.length; i++) {
        const image = images[i].file_path;
        const thumb = await component.findByTestId(`thumbnail${i}`);
        thumb.click();

        expect(componentThumbnail.src).toContain(`${IMAGE_BASE_URL}${POSTER_SIZE}${image}`);
        expect(thumb.classList).toContain('active');
    }
});