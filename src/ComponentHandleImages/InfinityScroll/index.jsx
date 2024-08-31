import React from 'react'
import '../assets/InfinityScroll/index.css'

export default function InfinityScroll() {
    return (
        <div className='container-infinit'>
            <h1>Infinity Scroll</h1>
            <div className="container-infinit-scroll">
            <div className="wrapper-infinit-images">
                <img src="https://dummyimage.com/600x400/ff8325/0011ff.jpg&text=Size+images" alt="image-1" />
                <img src="https://dummyimage.com/600x400/ff8325/0011ff.jpg&text=Size+images" alt="image-2" />
                <img src="https://dummyimage.com/600x400/ff8325/0011ff.jpg&text=Size+images" alt="image-3" />
                <img src="https://dummyimage.com/600x400/ff8325/0011ff.jpg&text=Size+images" alt="image-4" />
            </div>

            <div className="wrapper-infinit-images">
                <img src="https://dummyimage.com/600x400/ff8325/0011ff.jpg&text=Size+images" alt="image-1" />
                <img src="https://dummyimage.com/600x400/ff8325/0011ff.jpg&text=Size+images" alt="image-2" />
                <img src="https://dummyimage.com/600x400/ff8325/0011ff.jpg&text=Size+images" alt="image-3" />
                <img src="https://dummyimage.com/600x400/ff8325/0011ff.jpg&text=Size+images" alt="image-4" />
            </div>

            </div>
        </div>
    )
}