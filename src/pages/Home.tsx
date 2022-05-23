import React, {FC} from 'react'
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Thumb from "../components/Thumb";
import { IAccomodations } from '../types';
import Footer from '../components/Footer'

/* Defining the type of the props that the component will receive. */
interface IProps {
  accomodations: IAccomodations
}


/**
 * The Home component is a functional component that takes an accomodations prop
 * @param {IProps}  - FC<IProps> = ({ accomodations }: IProps)
 * @returns An array of JSX elements.
 */
const Home: FC<IProps> = ({ accomodations }: IProps) => {
  return (
    <div>
      <Header />
      <div className="home__container">
        <div className='center'>
          <div className="home__banner">
            <h1>Chez vous,<br></br> partout et ailleurs</h1>
          </div>
        </div>
      </div>
      <div className="results">
        <div className='center'>
          <div className="results__container">
            {accomodations.map((accomodation) => {
                  return (
                        <Link to={'/lodging/' + accomodation.id} className="lodging-link" key={accomodation.id}>
                            <Thumb cover={accomodation.cover} title={accomodation.title}/>
                        </Link>
                  )
                })
            }
          </div>
        </div>
      </div>
     <Footer />
    </div>
  )
}


export default Home;