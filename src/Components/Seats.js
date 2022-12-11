import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Button, Footer, Title } from "../GlobalStyle";

export default function Seats() {
    const [movie, setMovie] = useState();
    const { id } = useParams();
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${id}/seats`);
        request.then(response => setMovie(response.data));
        request.catch(reponse => console.log(reponse));
    }, []);

    if (movie === undefined) return;

    function selectSeat(id) {
        if (!selectedSeats.includes(id)) setSelectedSeats(selectedSeats => [...selectedSeats, id]);
        else
        {
            setSelectedSeats(selectedSeats.filter(s => { return s !== id && s }))
        }
    }


    function bookSeat(event) {
        event.preventDefault();

        const reservation = {
            ids: selectedSeats,
            name,
            cpf
        }
        const request = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", reservation);
        request.then(navigate("/sucesso"));
        request.catch(response => console.log(response));
    }

    return (
        <SeatsStyle>
            <Title>Selecione o(s) assento(s)</Title>
            <SeatsList>
                {movie.seats.map(s => {
                    return <Seat className={selectedSeats.includes(s.id) ? "selected" :
                        s.isAvailable ? "available" : "unavailable"}
                        disabled={!s.isAvailable} onClick={() => selectSeat(s.id)}>{s.name}</Seat>
                })}
            </SeatsList>
            <Caption>
                <div>
                    <Seat className="selected" disabled={true}></Seat>
                    <p>Selecionado</p>
                </div>
                <div>
                    <Seat className="available" disabled={true}></Seat>
                    <p>Disponível</p>
                </div>
                <div>
                    <Seat className="unavailable" disabled={true}></Seat>
                    <p>Indisponível</p>
                </div>
            </Caption>
            <form onSubmit={bookSeat}>
                <label>Nome do comprador:</label>
                <input type="text" placeholder="Digite seu nome..." value={name} onChange={e => setName(e.target.value)} required />

                <label>CPF do comprador:</label>
                <input type="number" placeholder="Digite seu CPF..." value={cpf} onChange={e => setCpf(e.target.value)} required />
                <Button type="submit">Reservar assento(s)</Button>
            </form>
            <Footer>
                <div><img src={movie.movie.posterURL} /></div>
                <p>{movie.movie.title}<br />
                    {movie.day.weekday} - {movie.name}</p>
            </Footer>
        </SeatsStyle>
    );
}

const SeatsStyle = styled.div`
    padding: 10px 20px;
    margin-bottom: 117px;
    display: flex;
    flex-direction: column;
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

    form{
        margin-top: 40px;
        display:flex;
        flex-direction: column;

        label{
            font-size: 18px;
            color: #293845;
            margin-bottom: 2px;
        }

        input{
             height: 51px;
             border: 1px solid #D4D4D4;
             border-radius: 3px;
             font-size: 18px;
             padding-left: 18px;
             margin-bottom: 10px;
        }
        input::placeholder{
            font-style: italic;
            color: #AFAFAF;
        }

        button{
            width: 225px;
            margin-top: 50px;
            align-self: center;
        }
    }
`;


const SeatsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
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

const Caption = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    div{
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    button{
        margin: 5;
    }

    p{
        font-size: 13px;
        color: #4E5A65;
    }
`;