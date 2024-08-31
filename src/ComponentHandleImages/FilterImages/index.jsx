import React from 'react'
import '../assets/FilterImages/index.css'

export default function FilterImages() {
    return (
        <div className="container-images-filter">
            <h1>Filter Images</h1>
            <div className="photos-filter-images">
                <img src="https://dummyimage.com/600x400/ff8325/0011ff.jpg&text=Size+images" alt="image-1" />
                <img src="https://dummyimage.com/600x400/ff8325/0011ff.jpg&text=Size+images" alt="image-2" />
                <img src="https://dummyimage.com/600x400/ff8325/0011ff.jpg&text=Size+images" alt="image-3" />
                <img src="https://dummyimage.com/600x400/ff8325/0011ff.jpg&text=Size+images" alt="image-4" />
            </div>
        </div>
    )
}