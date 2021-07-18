import React from "react";
import { Link } from "react-router-dom";
import { Image } from "./Thumb.styles";

type ThumbProps = {
    image: string,
    moveId?: number,
    clickable: boolean
}

const Thumb: React.FC<ThumbProps> = ({ image, moveId, clickable }) => (
    <div>
        {clickable
            ? (
                <Link to={`/${moveId}`}>
                    <Image src={image} alt='movie-thumb' />
                </Link>
            )
            : <Image src={image} alt='movie-thumb' />}

    </div>
)

export default Thumb;
