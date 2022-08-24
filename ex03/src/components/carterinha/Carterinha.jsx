import React from 'react';

export default function Carterinha(props) {

  const figureStyle = {
    display: 'flex',
    alignItems: 'center',
    columnGap: '80px',
    backgroundColor: 'gray',
    border: 'none',
    borderRadius: '6px',
    padding: '10px',
    margin: '10px 0px',
    maxWidth: '900px',
  }
  return (
    <>
      <figure style={figureStyle}>
        <img src={props.fotoAluno} alt='foto aluno' style={{ width: '200px', borderRadius: '50%' }} />
        <figcaption style={{ textAlign: 'center',fontFamily: 'sans-serif' ,fontSize: '18px'}}>{props.nomeAluno}, RM: {props.rmAluno}, Curso: {props.cursoAluno}, Turma: {props.turma}</figcaption>
      </figure>
    </>
  );
}