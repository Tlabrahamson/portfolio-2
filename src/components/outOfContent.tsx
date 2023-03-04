import React, { useState } from 'react';
import axios from 'axios';

export default function OutOfContent() {

    const [dadJoke, setDadJoke] = useState('');
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);

    const requestDadJoke = async () => {
        try {
            setVisible(false);
            setLoading(true);
            let dadJokeRequest = await axios.get('https://icanhazdadjoke.com/', {headers: {'Accept': 'application/json'}})
            setTimeout(() => {
              setDadJoke(dadJokeRequest.data.joke)
              setVisible(true);
              setLoading(false);
            }, 400)
        } catch(error) {
            console.log(error);
            setLoading(false);
        }
    }

  return (
    <div className='out-of-content-background'>
      <div className='out-of-content-container'>
        <div className='out-of-content-section'>
            <h3 className='large-heading'>Out of Content<span>:</span></h3>
            <p>
              Ehh, this is awkward....How about a dad joke?
            </p>

            <button className='joke-button' onClick={requestDadJoke}>{loading ? (<div className='button-spinning-loader'></div>) : ('Tell me a joke')}</button>
            <p className={`joke-text ${visible ? 'show' : ''}`}>{dadJoke}</p>
        </div>
      </div>
    </div>
  )
}