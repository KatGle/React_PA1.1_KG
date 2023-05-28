import React, { useState }  from 'react';
import './Content.css';
import '../ChangeFonts/ChangeFonts.css'


function Content(){

    const [fontSize, setFontSize] = useState(16);

    return (

        <div className='content'>
            <h1><p style={{fontSize: `${fontSize}px`}}>Content</p></h1>
        
        <div className='grid-content'>
                <div className="box box-1"><button id="FontIncrease" onClick={() => setFontSize(fontSize + 2)}>Fonts +</button>
                <button id="FontDecrease" onClick={() => setFontSize(fontSize - 2)}>Fonts -</button>
                </div>
                <div className="box box-2"><p style={{fontSize: `${fontSize}px`}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam quisquam fugit aspernatur sequi praesentium magni pariatur sit laborum maxime animi?</p></div>
                <div className="box box-3"><p style={{fontSize: `${fontSize}px`}}>3</p></div>
                <div className="box box-4"><p style={{fontSize: `${fontSize}px`}}>4</p></div>
                <div className="box box-5"><p style={{fontSize: `${fontSize}px`}}>5</p></div>
                <div className="box box-6"><p style={{fontSize: `${fontSize}px`}}>6</p></div>
                <div className="box box-7"><p style={{fontSize: `${fontSize}px`}}>7</p></div>
            </div>
        </div>
    );
}


export default Content;