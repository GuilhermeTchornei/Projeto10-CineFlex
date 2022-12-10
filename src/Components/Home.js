import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Title } from "../GlobalStyle";

export default function Home() {
    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        const request = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")

        request.then(response => setMoviesList(response.data));
        request.catch(response => console.log(response));
    }, []);
    console.log(moviesList);

    return (
        <>
            <Title>Selecione o filme</Title>
            <MoviesList>
                {moviesList.map(m => {
                    return (
                        <Link key={m.id} to={`/sessoes/${m.id}`}>
                            <img src={m.posterURL} />
                        </Link>);
                })}
            </MoviesList>
        </>
    );
}


const MoviesList = styled.div`
    margin: 0 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    a{
        height: 193px;
        width: 129px;
        margin: 5px 15px;
        background-color: white;
        border-radius: 3px;
        box-shadow: 0 2px 4px rgba(0,0,0, .1);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px;
    }
    a img{
        max-width: 100%;
        max-height: 100%;
    }
`;