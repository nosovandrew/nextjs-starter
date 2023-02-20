import { GetStaticProps } from 'next';
import styled from 'styled-components';

import dbConnect from '../helpers/dbConnect';

// test styled-components
const Title = styled.h1`
    font-size: 250px;
`;

// test db connection
export const getStaticProps: GetStaticProps = async () => {
    dbConnect().then(() => console.log('Connection to DB was successfull!'));

    return {
        props: {
            data: [],
        },
    };
};

const Main = () => <Title>Привет, родной!</Title>;

export default Main;
