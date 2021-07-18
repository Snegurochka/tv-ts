import React, { useEffect, useRef, useState } from "react";
import { Wrapper, Content } from "./SearchBar.styles";

type PropsType = {
    setSearchTerm: (state: string) => void
}

const SearchBar: React.FC<PropsType> = ({ setSearchTerm }) => {
    const [state, setState] = useState('');
    const initial = useRef(true);

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }
        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 600);
        return ()=> clearTimeout(timer);
    }, [setSearchTerm, state]);

    return (
        <Wrapper>
            <Content>
                <input
                    type="text"
                    placeholder="Search movie ... "
                    onChange={(evt) => setState(evt.currentTarget.value)}
                    value={state}
                />

            </Content>
        </Wrapper>
    )
}

export default SearchBar;