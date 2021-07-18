import React from 'react';

// helpers
import { calcTime, convertMoney } from '../../helpers';
import { Wrapper, Content } from './MovieInfoBar.styles';

type PropsType = {
    time: number,
    buget: number,
    revenue: number
}

const MovieInfoBar: React.FC<PropsType> = ({ time, buget, revenue }) => (
    <Wrapper>
        <Content>
            <div className="column">
                <p>Punning time: {calcTime(time)}</p>
            </div>
            <div className="column">
                <p>Budget: {convertMoney(buget)}</p>
            </div>
            <div className="column">
                <p>Revenue: {convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
)

export default MovieInfoBar;