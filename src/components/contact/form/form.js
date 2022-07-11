import React from 'react';
import "./form.css";

export default function Form(){
    return(
        <div>
            <form className="form-contact">
                <h2> Send us your Message</h2>
                <input type="text" placeholder='Full Name'></input>
                <input type="phone" placeholder='Phone Number'></input>
                <input type="email" placeholder='Email Address'></input>
                <textarea type="text" placeholder='Message'></textarea>
                <button>Send</button>
            </form>
        </div>
    )
}