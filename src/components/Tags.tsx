import React, { FC } from 'react'

/* Defining the type of the props that the component will receive. */
interface IProps {
  tags: string[]
}

/**
 * The Tags function takes in an array of strings and returns a div with a class of tags that contains
 * a div with a class of tag for each string in the array.
 * @param {IProps}  - IProps - this is the interface that defines the props that the component will
 * receive.
 * @returns An array of divs.
 */
const Tags: FC<IProps> = ({ tags }: IProps) => {
  return (
    <div className="tags">
    {
        tags.map(tag => {
          return (
                <div className='tag' key={tag}>{tag}</div>
          )
        }
        )
    }
    </div>
  )
}

export default Tags