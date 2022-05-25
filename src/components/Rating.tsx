import React, { FC } from 'react'
import starRate from '../assets/starRate.svg'
import starRateFull from '../assets/starRateFull.svg'
import { useState } from 'react';

/* A type definition for the props that the component will receive. */
interface IProps {
  rating: string
}
/* A React component that takes a prop called rating and returns a star rating component. */
const Rating: FC<IProps> = ({ rating }:IProps) => {
  const rate = parseInt(rating)
  const [level, setLevel] = useState(rate)
  const stars = [1,2,3,4,5]

  return (
    <div>
      {stars.map((star) => (
        <img
          className='star'
          key={star}
          src={level >= star ? starRateFull : starRate}
          alt='star'
          onClick={() => (level !== star ? setLevel(star) : setLevel(star - 1))}
        />
      ))}
    </div>
  );
};

export default Rating