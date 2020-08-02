import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    body{
        font-family: 'Anton', sans-serif;
        padding: 20px 80px;

        @media screen and (max-width:800px){
            padding :10px;
        }
    }
    a{
        text-decoration: none;
        color: black;
    }
    
`;