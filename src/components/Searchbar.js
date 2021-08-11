import React,{useState,useEffect} from 'react';

const Searchbar = ({onFormSubmit}) =>{
    const [text, setText] = useState('');

    
    // submit the form
    const submitForm = (e)=>{
        e.preventDefault();
        onFormSubmit(text)
    };


    //render the component
    return(
        <div className="searchbar">
            <form
                className="form"
                onSubmit={submitForm}
                >
                <div className="field-box">
                        <label>Video Search </label>
                        <input
                        placeholder="search for youtube videos"
                        type='text'
                        value={text}
                        onChange={(e)=>setText(e.target.value)}
                        />
                </div>
            </form>
        </div>
    )
}

export default Searchbar;