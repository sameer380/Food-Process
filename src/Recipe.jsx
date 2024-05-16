import React from 'react';
import style from './Recipe.module.css';
import "./App.css"
const Recipe = (props) => {
    return(
        <>
            <div
            className='rsp'
                style={{
                    maxWidth: "500px",
                    backgroundColor: "white",
                    display: "flex",
                    flexWrap: "wrap",
                    margin: "50px",
                    padding: "40px",
                    // textAlign: "center",
                    borderRadius: "10px",
                    alignItems: 'center',
                    justifyContent: "center",
                    cursor:"pointer"
                }}
                // className={style.recipe}
            >
                <h1
                style={{marginBottom:"1rem"}}
                >{props.title}</h1>
                <ol
                    
                >
                {props.ingredients.map((val, ind) => (
                    <li key={ind}>
                        {val.text}
                    </li>
                ))}
            </ol>
            <p className="text-secondary font-monospace">Calories: {props.calories}</p>
            <img className={style.image} src={props.imagesrc} alt="Recipe" />
        </div>
        </>
    );
}

export default Recipe;