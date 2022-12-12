import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../GlobalStyle";
import { ticket } from "./Seats";

export default function Success() {
    const navigate = useNavigate();
    return (
        <SuccessStyle>
            <Title>Pedido feito com sucesso!</Title>

            <div data-test="movie-info" >
                <Caption>Filme e sessão</Caption>
                <Data>{ticket.title}</Data>
                <Data>{ticket.date} {ticket.hour}</Data>
            </div>

            <div data-test="seats-info">
                <Caption>Ingressos</Caption>
                {ticket.seats.map(t => <Data key={t}>Assento {t}</Data>)}
            </div>

            <div data-test="client-info">
                <Caption>Comprador</Caption>
                <Data>Nome: {ticket.name}</Data>
                <Data>CPF: {ticket.cpf.slice(0, 3)}.{ticket.cpf.slice(3, 6)}.{ticket.cpf.slice(6, 9)}-{ticket.cpf.slice(9)}</Data>
            </div>

            <Button onClick={() => navigate("/")} data-test="go-home-btn">Voltar pra Home</Button>
        </SuccessStyle>
    );
}

const SuccessStyle = styled.div`
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    button{
        width: 225px;
        align-self: center;
        margin-top: 80px;
    }
`;

const Title = styled.h1`
    padding: 0px 25%;
    margin-top: 40px;
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 700;
    color: #247A6B;
    text-align: center;
`;

const Caption = styled.h2`
    font-size: 24px;
    font-weight: 700;
    color: #293845;
    margin-top: 30px;
    margin-bottom: 10px;
`;

const Data = styled.p`
    font-size: 22px;
    color: #293845;
    margin-bottom: 5px;
`;