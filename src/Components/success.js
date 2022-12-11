import styled from "styled-components";

export default function Success() {
    return (
        <Title>Pedido feito com sucesso!</Title>
    );
}


const Title = styled.h1`
    font-size: 24px;
    font-weight: 700;
    color: #247A6B;
    text-align: center;
`;