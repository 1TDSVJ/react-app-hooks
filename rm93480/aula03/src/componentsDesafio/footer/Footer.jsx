import React from "react"

export default function Footer(){
    const footer={
        backgroundColor: '#403b32',
        height:"9vh",
        textAlign:"center",
        color:"#ded8c8",
        fontSize:"30px",
    }

    return(
        <footer>
            <div style={footer}>
                <p>Copyright &copy;2022, Designed by Zefrafis</p>
            </div>
        </footer>
        
    )
}