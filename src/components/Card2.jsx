import { use } from 'react';
import './Card2.css'
import React,{ useState,useEffect } from 'react';

function Card2() {

    const [text,setText] = useState('')

    const Change = (e) => {
        const newName = e.target.value
        setText(newName)
        localStorage.setItem('name',newName)

        const char = e.target.value
        setNum(char)

    }
    
    useEffect(() => {
        const save = localStorage.getItem('name')
        if(save){
            setText(save)
        }
    },[])

    return(
        <>
        <div className="cont">
            <div className="title">
            </div>

            <div className="main_cont">

                <textarea value={text} onChange={Change} id="all_input" placeholder='Please input Here.' >
                </textarea>
            </div>
        </div>
        </>
    )
}

export default Card2;