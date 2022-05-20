import React, {FC, useState} from "react";
import arrowBack from "../assets/arrowBack.svg"

interface IProps {
  content: string | string[]
  header: string
  defaultClosed: boolean
}

const Accordion: FC<IProps> = ({ content, header, defaultClosed }: IProps) => {
  const [isClosed, setState] = useState(defaultClosed)

  let displayedContent
  (typeof content === 'string') ? displayedContent = [content] : displayedContent = content

  return (
    <div className="accordion">
        <div className="accordion__header" onClick={() => setState(!isClosed) }>
            <span className="accordion__title">{header}</span>
            <img src={arrowBack} alt="arrow-back" className="accordion-arrow" onClick={() => setState(!isClosed) }/>
        </div>
        <div className={isClosed ? 'accordion-content--hidden' : 'accordion-content'}>
        {
            displayedContent.map(item => {
              return (
                    <span key={item + '_key'}>
                        {item}
                        <br />
                    </span>
              )
            })
        }
        </div>
    </div>
  )
}

export default Accordion