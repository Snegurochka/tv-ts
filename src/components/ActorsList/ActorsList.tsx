import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import { ActorType } from "../../types";
import Actor from "../Actor/Actor";
import Grid from '../Grid/Grid';
import NoImage from '../../img/no_image.jpg';

import { Wrapper } from "./ActorsList.styles";
import Button from "../UI/Button/Button";


type PropsType = {
    actors: ActorType[]
}

const ActorsList: React.FC<PropsType> = ({ actors }) => {
    return (
        <>
        <Wrapper>
            <Grid header='Actors'>
                {actors.map(actor => (
                    <Actor
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={actor.profile_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                            : NoImage} />
                ))}
            </Grid>
        </Wrapper>
        <Button text='Load more' callback={()=>{console.log('in progress...');
        }}/>
        </>
    )
}

export default ActorsList;