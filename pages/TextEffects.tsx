import React, { useEffect, Component } from "react";
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import Typewriter from 'typewriter-effect';

function Text() {

    return (   
           <Typewriter 
  options={{
    strings: ['Katarzyna Węsierska'],
    autoStart: true,
    loop: true,
  }}
/>
    )   }

export default Text;