import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh, faVolumeOff } from '@fortawesome/free-solid-svg-icons';
import audio from './audio/Code_and_Cream.mp3';

const AudioButton = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <button onClick={toggleAudio} className="music-button">
        <FontAwesomeIcon 
          icon={isPlaying ? faVolumeHigh : faVolumeOff} 
          className="toggle-icon"
        />
      </button>
      <audio ref={audioRef} loop src={audio} />
    </div>
  );
};

export default AudioButton;
