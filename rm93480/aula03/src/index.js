import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AppDesafio from './AppDesafio'
//import "./index.css" <- JAMAIS FAZER ESTA MERDA!

ReactDOM.render(
    <BrowserRouter>
        <AppDesafio/>
    </BrowserRouter>
, document.getElementById("root"))