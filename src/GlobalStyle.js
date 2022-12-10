import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,.App{
        font-family: 'Roboto';
        box-sizing: border-box;
    }

    .App{
        padding-top: 67px;;
    }
`;

export const Title = styled.p`
    height: 28px;
    margin: 40px 0;
    color: #293845;

    font-size: 24px;
    text-align: center;
`;

export const Footer = styled.div`
    width: 100%;
    max-height: 117px;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;

    position: fixed;
    bottom: 0;
    left: 0;

    padding: 14px 10px;
    display: flex;
    align-items: center;

    div{
        width: 64px;
        height: 89px;
        padding: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,.1);
        background-color: white;
        img{
            max-width: 100%;
            max-height: 100%;
        }
    }

    p{
        font-size: 26px;
        color: #293845;
        margin-left: 15px;
    }

`;

export default GlobalStyle;