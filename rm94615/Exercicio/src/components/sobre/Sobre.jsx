import React from "react";

export default function Sobre(props) {

    const estiloCriador = {
        display: 'flex',
        columnGap: '60px',
        maxWidth: '850px',
        border: '3px solid black',
        padding: '1%',
        margin: '10px 0px',
        alignItems: 'center',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: '20px',
        backgroundColor: '#ccffff',
      }

      const estiloGrupo = {
        display: 'flex',
        columnGap: '60px',
        maxWidth: '850px',
        border: '3px solid black',
        padding: '1%',
        margin: '10px 0px',
        alignItems: 'center',
        fontFamily: 'Arial',
        fontSize: '16px',
        backgroundColor: '#bfbfbf',
      }


    return(
        <>

        <h1>CRIADOR</h1>
        <figure style={estiloCriador}>
            <img src={props.fotoProps[4]} alt="Avatar do Github" />
            <figcaption>
                <p>{props.nomeProps[4]}</p>
                <a href={props.gitProps[4]} style={{textDecoration: 'none'}}>{props.nicknameProps[4]}</a>
                <p>{props.turmaProps[4]}</p>
            </figcaption>
        </figure>

        </>
    )
}