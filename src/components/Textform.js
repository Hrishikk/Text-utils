import React,{useState} from "react"
export default function Textform(props){
    const handleUpClick=()=>{
        console.log("upper click is clicked")
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleonChnage=(event)=>{
        console.log("On change")
        setText(event.target.value)
    }
    const countvowels=()=>{
        let countv,count=0
        for(count=0;count<=text.length;count++){
            if(text.charAt(count).match(/[aeiouAEIOU]/)){
                count++;
            }
            countv=count;
        }
        setText(countv)
    }
    const[text,setText]=useState(' ')
    return(
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb3">
                <label htmlFor="myBox" className="form-label">Example sentence</label>
                <textarea className="form-control" id="myBox" rows="3" value={text} onChange={handleonChnage} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}></textarea>
                </div>
                <button className="btn btn-primary mt-3" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mt-3" onClick={countvowels}>count vowels</button>
            
        </div>
        <div className="container" >
            <h1>Preview</h1>
            <p>{text}</p>
            <h2>summary</h2>

        </div>
        </div>
        </>
    )
}