import React from 'react';
import './Static/css/GallaryImages.css';

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

const Images = () => (
    <>
        <div className="image-grid">
            {images.map(image => (
                <div className="image-container">
                    <div className="image-name">{image.split('/').pop()}</div>
                    <img src={image} alt="image" />
                    <a href={image} download>
                        <button className="download-button">Download</button>
                    </a>
                </div>
            ))}
        </div>
    </>
);

export default Images;