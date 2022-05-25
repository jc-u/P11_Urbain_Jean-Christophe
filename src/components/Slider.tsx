import React, { FC, useState } from 'react'
import arrowForward from '../assets/arrowForward.svg'
import arrowBack from '../assets/arrowBack.svg'

/* Defining the props that the component will receive. */
interface IProps {
  pictures: string[]
  alt: string
}

const Slider: FC<IProps> = ({ pictures, alt }: IProps) => {
  const [displayedImage, setDisplayedImage] = useState(pictures[0]);
  let i = pictures.indexOf(displayedImage);

 /* Returning the JSX for the component. */
  return (
    <div className='slider'>
      <img src={displayedImage} alt={alt} className='displayedimage' />
      <img
        src={arrowBack}
        alt='arrowBack'
        className={pictures.length > 1 ? 'arrowback' : 'hide'}
        onClick={() =>
          displayedImage === pictures[0]
            ? setDisplayedImage(pictures[pictures.length - 1])
            : setDisplayedImage(pictures[i - 1])
        }
      />
      <img
        src={arrowForward}
        alt='arrowforward'
        className={pictures.length > 1 ? 'arrowforward' : 'hide'}
        onClick={() =>
          displayedImage === pictures[pictures.length - 1]
            ? setDisplayedImage(pictures[0])
            : setDisplayedImage(pictures[i + 1])
        }
      />
      <p className={pictures.length > 1 ? 'slidenumber' : 'hide'}>
        {i + 1}/{pictures.length}
      </p>
    </div>
  );
};

export default Slider;