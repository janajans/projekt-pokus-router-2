import React, { useState } from 'react';
import './style.css';
import letterObjects from '../../letterObjects.js';

const LearnItem = ({ randomIndex }) => {
  const [showLetter, setShowLetter] = useState(false);

  let audioPictures = new Audio(
    `../../assets/sounds/soundsOfPictures/${randomIndex}.mp3`,
  );
  let audioLetters = new Audio(
    `../../assets/sounds/soundsOfLetters/${randomIndex}.mp3`,
  );

  return (
    <>
      <div className="container-learning">
        <img
          className="learning-image"
          src={letterObjects[randomIndex].picture.image}
          alt=""
          onClick={() => {
            setShowLetter((value) => !value);
            audioPictures.play();
          }}
        />
        {showLetter && (
          <img
            className="learning-image slide-in-left"
            src={letterObjects[randomIndex].letter.uppercase}
            alt=""
            onClick={() => {
              audioLetters.play();
            }}
          />
        )}
      </div>
    </>
  );
};

export default LearnItem;
