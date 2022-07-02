import React, { useState } from "react";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import { Backdrops } from "../../interfaces/types";

import { Wrapper, Content, ContentGreed, BigImg, Image } from "./Gallery.styles";

type PropsType = {
    header: string,
    photos: Backdrops[]
}

const Gallery: React.FC<PropsType> = ({ header, photos }) => {
    const [active, setActive] = useState(0);
    return (
        <Wrapper>
            <h1>{header}</h1>
            <Content>
                <BigImg data-testid="thumbnail" src={`${IMAGE_BASE_URL}${POSTER_SIZE}${photos[active].file_path}`} alt={`Photo ${header}`} />
                <ContentGreed>
                    {photos.map((photo, index) => (
                        <Image
                            key={index}
                            data-index={index}
                            data-testid={`thumbnail${index}`}
                            src={`${IMAGE_BASE_URL}${POSTER_SIZE}${photo.file_path}`}
                            onClick={(evt) => {
                                if (evt.currentTarget.dataset.index)
                                    setActive(+evt.currentTarget.dataset.index)
                            }}
                            className={index === active ? "active" : ""}
                        />
                    ))}
                </ContentGreed>

            </Content>
        </Wrapper>
    )
}

export default Gallery;