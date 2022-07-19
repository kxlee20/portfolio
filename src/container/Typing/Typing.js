import React, { useState, useEffect } from 'react';
import Typewriter from "typewriter-effect";
import {Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import './Typing.scss';



const Typing = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
        navigate('/home')
        }, 300)
    }, [])
  return (
    <>
    <div className="app__typing">
        <div className="app__typing-other big-text">
        Let me explain
        </div>
        <div className="app__typing-text big-text">
            <Typewriter 
            onInit={(typewriter) => {
                typewriter.pauseFor(800).typeString("myself()")
                // .callFunction(() => {
                    
                // })
                .start();
            }}
            />
        </div>
    </div>
    </>
  )
}

export default Typing