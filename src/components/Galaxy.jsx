import React from 'react'

const Galaxy = (props) => {

    const cardStyle = {
        backgroundColor: "#063970",
        width: 150,
        padding: 10,
        color: "white",
        borderRadius : 8
    }


    return (
        <div style={cardStyle}>
            <h4 style={{ fontSize: 16 }}> ({props.id}). {props.name}</h4>
            <p>Diameter : {props.dmt}</p>
        </div>

    )
}

export default Galaxy