import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --background-color: #09090A;
        --red: #E52E40;
        --blue: #8257E5;

        --blue-light: #996DFF;

        --text-title: #f4f4f5;
        --text-body: #a1a1aa;

        --shape: #18181b;
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (min-width: 1080px) {
            font-size: 93.75%;
        }
        @media (min-width: 720px) {
            font-size: 87.5%;
        }
    }
    body{
        background: var(--background-color);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400
    }

    h1, h2 , h3 ,h4 ,h5 ,h6 , strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
