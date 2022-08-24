import React from 'react'
import ReactDOM from 'react-dom' 
import { BrowserRouter } from 'react-router-dom'
import App from './App'
<<<<<<< HEAD

import './index.css'
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
, document.getElementById("root"))


=======
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
 , document.getElementById("root"))
>>>>>>> ddc76b05ba86b9b35ed9f142cb7a75316c68eeec
