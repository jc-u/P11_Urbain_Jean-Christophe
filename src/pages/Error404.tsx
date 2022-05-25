import React, {FC} from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader'


const Error404: FC = () => {

  const [loader, setLoader] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setLoader(false);
  }, 500)
}, [])

  return loader ? (
    <Loader />
  ) : (
    <div className='error'>
      <Header />
        <div className='error404__container'>
            <span className='error404'>404</span>
            <span className='error404-message'> Oups! La page que vous demandez n'existe pas.</span>
            <Link to="/"
            className='back-to-home'>
            Retourner sur la page d'accueil
            </Link>
        </div>
      <Footer />
    </div>)
}

export default Error404