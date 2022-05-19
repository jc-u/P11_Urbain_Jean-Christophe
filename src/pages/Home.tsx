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
 * The Home component is a functional component that takes an accomodations prop and returns a div with
 * a header, a div with a class of home__container, a div with a class of home__banner, a div with a
 * class of results, and a div with a class of results__container.
 * @param {IProps}  - FC<IProps> = ({ accomodations }: IProps)
 * @returns An array of JSX elements.
 */
const Home: FC<IProps> = ({ accomodations }: IProps) => {
  return (
    <div>
      <Header />
      <div className="home__container">
        <div className="home__banner">
          <h2>Chez vous, partout et ailleurs</h2>
        </div>
      </div>
      <div className="results">
        <div className="results__container">
            {accomodations.map((accomodation) => {
                  return (
                        <Link to={'/accomodation/' + accomodation.id} className="accomodation-link" key={accomodation.id}>
                            <Thumb cover={accomodation.cover} title={accomodation.title}/>
                        </Link>
                  )
                })
            }
        </div>
      </div>
      <Footer />
    </div>
  )
}


export default Home;