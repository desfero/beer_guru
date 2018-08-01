import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Container} from './Container';
import {Header} from './Header';
import {Scenes} from '../scenes';

const AppLayout = () => (
    <BrowserRouter>
        <Container>
            <header>
                <Header/>
            </header>
            <main>
                <Scenes/>
            </main>
        </Container>
    </BrowserRouter>
);

export {AppLayout};
