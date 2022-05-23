import React, {FC} from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Accordion from '../components/Accordion';
import Tags from '../components/Tags'
import Rating from '../components/Rating';
import Slider from '../components/Slider'
import Error404 from './Error404'
import { useParams } from "react-router-dom";
import { IAccomodations } from '../types'

/* A type definition for the props that are passed to the Lodging component. */
interface IProps {
  accomodations: IAccomodations
}

/**
 * If the item is not found, return the Error404 component. Otherwise, return the Lodging component.
 * @param {IProps}  - IProps = {
 * @returns The Lodging component is being returned.
 */
const Lodging: FC<IProps> = ({ accomodations }: IProps) => {
  const { id } = useParams()
  const item = accomodations.find(item => item.id === id)
  console.log(item)
   if (!item) {
      return <Error404 />
}
const { pictures, title, location, host, tags, rating, description, equipments } = item
  return (
    <React.Fragment>
            {
                <div className='lodging'>
                  <div className="center">
                    <Header />
                      <Slider pictures={pictures} alt={title}/>
                        <div className="lodging__container">
                          <div className="lodging-left">
                            <h2 className="lodging__title">{title}</h2>
                            <h3 className="lodging__location">{location}</h3>
                          <div className="tag__container">
                              <Tags tags={tags}/>
                          </div>
                        </div>

                        <div className="lodging-right">
                          <div className="host__details">
                            <p className="host__name">{host.name}</p>
                          <div className="profile">
                            <img src={host.picture} alt={host.name + 'photo de profil'} className="host__picture"/>
                          </div>
                          </div>
                            <Rating rating={rating}/>
                          </div>
                        </div>
                      
                        <div className="lodging__details">
                          <Accordion header="Description" content={description} defaultClosed={true}/>
                          <Accordion header="Équipements" content={equipments} defaultClosed={true}/>
                        </div>
                  </div>
                    <Footer />
                </div>
            }
    </React.Fragment>   
  )
}



export default Lodging