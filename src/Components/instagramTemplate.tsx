import { MouseEventHandler, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import defaultImage from '/src/assets/defaultInsta.png'
import '/src/Styles/templates.css'
import OpenAI from 'openai';
function InstaTemplate(props:{
    darkMode: boolean
    refreshPage:MouseEventHandler<HTMLButtonElement> | undefined;
    }){
    const iframeStyles: React.CSSProperties = {
        maxWidth:'100%',
        maxHeight:'100%',
    };
const [imageUrl,setImageUrl] = useState("default");
const [generatedText,setGeneratedText] = useState<string>("");
let inputRef = useRef<HTMLInputElement | null>(null);
const API_KEY = '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';

const openai = new OpenAI({
    apiKey: API_KEY,
    dangerouslyAllowBrowser:true,
});

const generateTextAndImg = async () => {
    if (!inputRef.current || inputRef.current.value === "") {
        alert("The description is empty!");
        return;
    }

    try {
        // Generare text
        const textResponse = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                { role: 'user', content: inputRef.current.value },
            ],
            max_tokens: 100,
            temperature: 0.7,
        });
        let textGenerated = textResponse.choices[0].message.content;
        if (textGenerated !== null && textGenerated !== undefined) {
            setGeneratedText(textGenerated);
        } else {
            
            setGeneratedText("Nu s-a generat textul"); 
        }

        // Generare imagine
        const imgResponse = await openai.images.generate({
            model:'dall-e-3',
            prompt: `${inputRef.current.value}`,
            n: 1,
            size: "1024x1024",
        });
        let generatedImg = imgResponse.data[0]?.url;
        if (generatedImg) {
            setImageUrl(generatedImg);
        } else {
            console.error("URL error");
        }
    } catch (e) {
        console.error(e);
    }
};


    return(
    <>
    <div className="col-md-6 mx-auto mt-1">
        <div className="row g-0 flex-md-row mb-4 "> 
            <div className="col p-3 d-flex flex-column position-static mr-3">
            <h3 className="mb-0">Generated text:</h3>
            <p>{generatedText}</p>
            </div>
            <div className="col-auto d-lg-block">
            <div className='mt-1 d-flex align-content-center'>
                <div className="smartphone">
                <div className="content" >
                    <div className='box-img'>
                    <img className="img-size" src={imageUrl==="default" ? defaultImage : imageUrl} style={iframeStyles} />
                    </div>
                </div>
                </div> 
            </div>
            </div>
        </div>
    </div>
    <div className="container py-3 mt-0">
        <h4>Generate instagram ad based on your description!</h4>
        <div className='d-flex mt-0'>
        <Form.Control
        className="bg-body-tertiary"
        data-bs-theme={props.darkMode ? 'dark' : 'light'}
        size="lg"
        type="text"
        ref={inputRef}
        placeholder="Describe your post!"
        />{' '}
        <Button onClick={generateTextAndImg} variant={props.darkMode ? 'dark' : 'outline-light'} className="ms-2" >Generate</Button>
        <Button onClick={props.refreshPage} variant={props.darkMode ? 'dark' : 'outline-light'} className="ms-2" >Back</Button>
        </div>
        
    </div>
    </>
    );
}
export default InstaTemplate;