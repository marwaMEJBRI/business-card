import Photo from './Photo.png';
import React from 'react';
export default function ProfilePhoto() {
    return (
        <div>
            <img src={Photo} alt="photo" className="ph"></img>
        </div>
    )
}
