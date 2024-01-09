import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --background: #fff;
        --text: #000;

		--danger-100: #fcc;
        --danger-200: #f88;

        --gray-100: #eee;
        --gray-200: #ccc;
        --gray-300: #aaa;

        --link: #66f;
	}

    html[data-theme=dark] {
        --background: #000;
        --text: #fff;

        --danger-100: #411;
        --danger-200: #622;

        --gray-100: #111;
        --gray-200: #222;
        --gray-300: #333;
    }

    html {
        background-color: var(--background);
        color: var(--text);
    }

    button {
        font-family: inherit;
        font-size: inherit;
        color: inherit;
    }
`;
