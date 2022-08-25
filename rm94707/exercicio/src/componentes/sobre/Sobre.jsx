import React from "react";

export default function Sobre(props) {

    const Criador = {
        display: 'flex',
        columnGap: '70px',
        maxWidth: '900px',
        border: '4px solid black',
        padding: '1%',
        margin: '15px 0px',
        alignItems: 'center',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: '30px',
        backgroundColor: '#fff00000',
      }

    return(
        <>

        <h1>CRIADOR</h1>
        <figure style={Criador}>
            <img src={props.fotoProps[0]} alt="Avatar do Github" />
            <figcaption>
                <p>{props.nomeProps[0]}</p>
                <a href={props.gitProps[0]} style={{textDecoration: 'none'}}>{props.nicknameProps[0]}</a>
                <p>{props.turmaProps[0]}</p>
            </figcaption>
        </figure>
        </>
    )
}