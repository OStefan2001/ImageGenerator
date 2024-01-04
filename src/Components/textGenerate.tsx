import { MouseEventHandler } from "react";
import React, { useState } from 'react';
import { Button, Card } from "react-bootstrap";
import defaultTxtImg from '/src/assets/text-post.jpg'
import axios from "axios";
function TextGenerator(props:{
    darkMode:boolean;
    refreshPage:MouseEventHandler<HTMLButtonElement> | undefined;
}){
    const[image,setImage]=useState("")
    function handleImage(e : any){
        console.log(e.target.files)
        setImage(e.target.files[0   ])
    }
    function displayImg(){
        const formData = new FormData()
        formData.append('image',image)
        axios.post('url',formData).then((res)=>{
            console.log(res)
        })
    }
    return(
    <><div className="container d-flex justify-content-center align-items-center mt-2">
        <Card className={props.darkMode ? 'bg-dark text-light' : 'bg-light'} style={{ width: '48rem' }}>
            <Card.Img variant="top" src={defaultTxtImg} />
            <Card.Body className={props.darkMode? 'bg-dark text-light' : 'bg-light'}>
              <Card.Title ><input  type="file" name="file" onChange={handleImage}></input></Card.Title>
              <Card.Text>
                Your text generated based on your picture
              </Card.Text>
            <Button variant={props.darkMode ? 'light' : 'dark'} className="ms-2" >Generate</Button>
            <Button onClick={props.refreshPage} variant={props.darkMode ? 'light' : 'dark'} className="ms-2" >Back</Button>
            </Card.Body>
        </Card>
        </div>
    </>
    );
}
export default TextGenerator;