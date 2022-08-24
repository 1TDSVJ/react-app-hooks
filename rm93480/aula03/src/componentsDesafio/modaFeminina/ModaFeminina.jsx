import React from "react"


export default function ModaFeminina(){
    const modaFeminina={
        backgroundColor: "#fad9f8",
        height:"85vh",
        textAlign:"center",
        color:"#5f0d69",
        fontSize:"25px"
    }

    return(
        <body style={modaFeminina}>
            <div>
                <h1>Moda Feminina</h1>
                <h3>PARA TODAS AS MULHERES</h3>
            </div>
            <div>
                <ul><li style={textRedirect}><Link to='#'>Casual</Link></li></ul>
                <img src="../sobre/images/casual-fem.jpg" alt="mulher-casual"/>
            </div>
        </body>
    )
}