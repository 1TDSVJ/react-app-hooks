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
            <img src={props.fotoProps[0]} alt="Avatar do Github" />
            <figcaption>
                <p>{props.nomeProps[0]}</p>
                <a href={props.gitProps[0]} style={{textDecoration: 'none'}}>{props.nicknameProps[0]}</a>
                <p>{props.turmaProps[0]}</p>
            </figcaption>
        </figure>

        <h1>Grupo:</h1>
        
        <figure style={estiloGrupo}>
            <img src={props.fotoProps[1]} alt="Avatar do Github" />
            <figcaption>
                <p>{props.nomeProps[1]}</p>
                <a href={props.gitProps[1]} style={{textDecoration: 'none'}}>{props.nicknameProps[1]}</a>
                <p>{props.turmaProps[1]}</p>
            </figcaption>
        </figure>

        <figure style={estiloGrupo}>
            <img src={props.fotoProps[2]} alt="Avatar do Github" />
            <figcaption>
                <p>{props.nomeProps[2]}</p>
                <a href={props.gitProps[2]} style={{textDecoration: 'none'}}>{props.nicknameProps[2]}</a>
                <p>{props.turmaProps[2]}</p>
            </figcaption>
        </figure>

        <figure style={estiloGrupo}>
            <img src={props.fotoProps[3]} alt="Avatar do Github" />
            <figcaption>
                <p>{props.nomeProps[3]}</p>
                <a href={props.gitProps[3]} style={{textDecoration: 'none'}}>{props.nicknameProps[3]}</a>
                <p>{props.turmaProps[3]}</p>
            </figcaption>
        </figure>

        <figure style={estiloGrupo}>
            <img src={props.fotoProps[4]} alt="Avatar do Github" />
            <figcaption>
                <p>{props.nomeProps[4]}</p>
                <a href={props.gitProps[4]} style={{textDecoration: 'none'}}>{props.nicknameProps[4]}</a>
                <p>{props.turmaProps[4]}</p>
            </figcaption>
        </figure>
        {/**/}
        </>
    )
}