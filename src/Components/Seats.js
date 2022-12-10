import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Title } from "../GlobalStyle";

export default function Seats() {
    const [movie, setMovie] = useState();
    const { id } = useParams();

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${id}/seats`);
        request.then(response => setMovie(response.data));
        request.catch(reponse => console.log(reponse));
    }, []);

    if (movie === undefined) return;
    console.log(movie);

    return (
        <>
            <Title>Selecione o(s) assento(s)</Title>
            <SeatsList>
                {movie.seats.map(s => {
                    return (
                        <Seat className={s.isAvailable ? "available" : "unavailable"}>{s.name}</Seat>
                    );
                })}
            </SeatsList>

        </>
    );
}


const SeatsList = styled.div`
    padding: 10px 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .available{
        background-color: #C3CFD9;
        border: 1px solid #808F9D;
    }
    .selected{
        background-color: #1AAE9E;
        border: 1px solid #0E7D71;
    }
    .unavailable{
        background-color: #FBE192;
        border: 1px solid #F7C52B;
    }
`;

const Seat = styled.button`
    width: 26px;
    height: 26px;
    border-radius: 12px;
    margin: 9px 4px;

    font-size: 11px;
    text-align: center;
    color: black;
`;