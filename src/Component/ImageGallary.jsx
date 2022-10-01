import React from 'react'
import Card from './Card'
import Images from '../data.js'
import "./ImageGallery.css"


const ImageGallary = () => {
    return (
        <div className="galary">
            <h1>Runner's Workout</h1>

            <section className="img-container">
                {Images.map((item) => <Card key={item.id} item={item} />)}
            </section></div>
    )
}

export default ImageGallary