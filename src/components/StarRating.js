import React, { useState } from 'react';
import Star from './Star';

function StarRating() {
    const [rating, setRating] = useState(0);
    const [ratingWord, setRatingWord] = useState('Your rating');
    const ratingWords = ['Your rating', 'Terrible', 'Regular', 'Good', 'Great', 'Excellent'];

    const clickStar = (index) => {
        setRating(index);
        setRatingWord(ratingWords[index]);
    };

    return (
        <section className='star-rating'>
            <div className='rating-container'>
                {[...Array(5)].map((_, i) => {
                    const starI = i + 1;
                    return (
                        <Star 
                            className={starI <= rating ? 'star rated' : 'star'}
                            onClick={() => clickStar(starI)}
                            key={starI}
                        />
                    );
                })}
            </div>
            <div className='rating-word-container'>
                <h2>{ratingWord}</h2>
            </div>
        </section>
    );
}

export default StarRating;