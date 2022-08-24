import React, { useState } from 'react'

export default function Carteirinha(props) {
    const [carteirinha, setCarteirinha] = useState(props.carteirinha)

    function changeCarteirinha(carteirinha) {
        const nome = document.querySelector('input[name="nome"]').value
        const rm = document.querySelector('input[name="rm"]').value
        const curso = document.querySelector('input[name="curso"]').value
        const turma = document.querySelector('input[name="turma"]').value
        carteirinha = {
            nome: nome,
            rm: rm,
            curso: curso,
            turma: turma,
        }
        setCarteirinha(carteirinha)
    }

    
    const estilosFigure = {
        display: 'flex',
        alignItems: 'center',
        columnGap: '2rem',
        paddingTop: '1rem',
        backgroundColor: '#000000',
        color: '#ffffff',
    }

    const estilosImagem = {
        width: '200px',
        borderRadius: '50%',
        border: '2px solid #ffffff',
        margin: '0 0 1rem 1rem',

    }
    const estilosFigCaption = {
        textAlign: 'center',
        fontSize: '1.2rem',
        fontFamily: 'sans-serif',
    }
  return (
    <div>
        <figure style={estilosFigure}>
            <img src={props.carteirinha.imagem} alt="Foto do aluno" style={estilosImagem}/>
            <figcaption style={estilosFigCaption}>Nome: {props.carteirinha.nome} RM: {props.carteirinha.rm} Curso: {props.carteirinha.curso} Turma: {props.carteirinha.turma}</figcaption>
        </figure>
        {props.carteirinha.nome === undefined ? 
        <form action="#" id='form-carteirinha'>
        Nome: <input type="text" name='nome' />
        RM: <input type="text" name='rm' />
        Curso: <input type="text" name='curso' />
        Turma: <input type="text" name='turma' />
        <button onClick={(e) => {
            e.preventDefault()
            changeCarteirinha(carteirinha)
            }}>Enviar</button>
        </form>
        : null}
    </div>
  )
}
