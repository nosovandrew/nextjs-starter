import { createGlobalStyle } from 'styled-components';

import { media } from './media';

const GlobalStyle = createGlobalStyle`
    :root {
        /* MOBILE SIZE (default) */

        /* COLORS */
        --clr-base: 0 0% 5%;
        --clr-bg-base: 0 0% 100%;

        /* FONT */
        --ff-base: 'Ruslan Display', -apple-system, system-ui, BlinkMacSystemFont, 'Helvetica Neue',
        'Helvetica', sans-serif;
        --fs-base: 18px;
        --fw-base: 400;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    html,
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overscroll-behavior-x: none;
        font-family: var(--ff-base);
        font-size: var(--fs-base);
        font-weight: var(--fw-base);
        color: hsl(var(--clr-base));
        background-color: hsl(var(--clr-bg-base));
        -webkit-tap-highlight-color: transparent;
    }

    a {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0); // outline light by press on mobile
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }
`;

export default GlobalStyle;
