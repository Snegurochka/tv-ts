import { FC } from "react";
import { Link } from "react-router-dom";
import { Image } from "./Thumb.styles";

type ThumbProps = {
    image: string,
    moveId?: number,
    clickable: boolean
}

const Thumb: FC<ThumbProps> = ({ image, moveId, clickable }) => (
    <>
        {clickable
            ? (
                <Link to={`/${moveId}`}>
                    <Image src={image} alt='movie-thumb' />
                </Link>
            )
            : <Image data-testid="thumbnail" src={image} alt='movie-thumb' />}

    </>
)

export default Thumb;
