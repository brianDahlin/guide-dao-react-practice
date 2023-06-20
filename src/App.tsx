import React from 'react';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Input } from './components/Input';
import { Link } from './components/Link';
import {HashRouter, Route} from "react-router-dom"



export default function App () {
 return (
   <HashRouter>
    <Container>
    <Button label="Кнопка"/>
    <Input  placeholder="Инпут" />
    <Link href="https://royalfools.lol/" label="Royal Fools"/>
    </Container>
    </HashRouter>
 )
}

