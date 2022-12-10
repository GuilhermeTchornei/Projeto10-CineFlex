import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components"
import { Footer, Title } from "../GlobalStyle";

export default function Sections() {
    const [movie, setMovie] = useState();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${id}/showtimes`);
        request.then((response) => setMovie(response.data));
        request.catch(response => console.log(response));
    }, []);

    if (movie === undefined) return;
    console.log(movie);

    return (
        <SectionsStyle>
            <Title>Selecione o horário</Title>

            {movie.days.map(d => {
                return (
                    <Section key={d.id}>
                        <p>{d.weekday} - {d.date}</p>
                        {d.showtimes.map(st => <button key={st.id} onClick={() => navigate(`/assentos/${st.id}`)}>{st.name}</button>)}
                    </Section>
                );
            })}

            <Footer>
                <div><img src={movie.posterURL} /></div>
                <p>{movie.title}</p>
            </Footer>
        </SectionsStyle>
    )
}

const SectionsStyle = styled.div`
    margin-bottom: 117px;
    display: flex;
    flex-direction: column;
`;


const Section = styled.div`
    margin: 0 24px;
    margin-bottom: 20px;

    p{
        color: #293845;
        font-size: 20px;
    }
    button{
        width: 83px;
        height: 43px;
        margin-top: 20px;
        margin-right: 9px;
        background-color: #E8833A;
        color: white;
        font-size: 18px;
        text-align: center;
        border: none;
        border-radius: 3px;
    }
`;
