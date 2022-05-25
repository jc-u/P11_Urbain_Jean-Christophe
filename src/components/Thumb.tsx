import React, {FC} from 'react';

/* Defining the props that the component will receive. */
interface IProps {
  cover: string
  title: string
}

const Thumb: FC<IProps> = ({ cover, title }: IProps) => {
  return (
    <div className='thumb'>
      <img src={cover} alt='lodging' />
      <h2>{title}</h2>
    </div>
  );
};

export default Thumb;