import React from 'react'

import { useState } from 'react'

//https://www2.fiap.com.br/FotosAlunos/A02ADF18E02E4CFFBA1DB7B235EAA910/93576.jpg
export default function Alunos() {
    const [rmAluno, setRmAluno] = useState('')
    let path = "https://www2.fiap.com.br/FotosAlunos/A02ADF18E02E4CFFBA1DB7B235EAA910/"
    return (
        <div>
            <h2>ALUNO</h2>
            <div>
                <input type="number" placeholder='Digite seu RM apenas números'
                    onChange={e => setRmAluno(path + e.target.value + ".jpg")} />
            </div>
            <img src={rmAluno} width="300px" />

        </div>
    )
}
