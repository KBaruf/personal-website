import React from 'react';
import HomePage from '../views/home';
import NotFound from '../views/NotFound';
import { Routes, Route } from 'react-router-dom';
import ScrollTopBehaviour from '../components/ScrollTopBehaviour';

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
