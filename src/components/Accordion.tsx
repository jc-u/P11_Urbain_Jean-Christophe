import React, {FC, useState} from 'react';
import arrowBack from '../assets/arrowDown.svg';
import arrowUp from '../assets/arrowUp.svg';

/* Defining the props that the component will receive. */
interface IProps {
  content: string | string[]
  header: string
  defaultClosed: boolean
}

/* Defining the props that the component will receive. */
const Accordion: FC<IProps> = ({ content, header, defaultClosed }: IProps) => {
  const [isClosed, setState] = useState(defaultClosed)

 /* Checking if the content is a string or an array. If it is a string, it will put it in an array. */
  let displayedContent
  (typeof content === 'string') ? displayedContent = [content] : displayedContent = content

 /* Returning the JSX that will be rendered. */
  return (
    <div className='accordion'>
        <div className='accordion__header' onClick={() => setState(!isClosed) }>
            <span className='accordion__title'>{header}</span>
            <img src={isClosed ? arrowBack : arrowUp} alt='arrow' className='accordion-arrow'/>
        </div>
        <div className={isClosed ? 'accordion-content--hidden' : 'accordion-content'}>
        {
            displayedContent.map(item => {
              return (
                    <p key={item + '_key'}>
                        {item}
                    </p>
              )
            })
        }
        </div>
    </div>
  )
}

export default Accordion