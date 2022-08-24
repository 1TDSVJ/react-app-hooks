import React from "react"

export default function Footer(){
    const footer={
        backgroundColor: '#403b32',
        height:"9vh",
        display:"flex",
        color:"#ded8c8",
        fontSize:"30px",
    }
    const copy={
        marginLeft:"38rem"
    }

    return(
        <footer>
            <div style={footer}>
                <p style={copy}>Copyright &copy;2022, Designed by Zefrafis</p>
            </div>
        </footer>
        
    )
}