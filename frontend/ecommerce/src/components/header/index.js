import React from 'react';
import Navbar from '../navbar';
import ImageSlideshow from '../../components/ImageSlideshow/ImageSlideshow'; // Update the import path according to your folder structure
import './index.css';

export default function Header() {
  return (
    <>
      <Navbar />
      <ImageSlideshow />
    </>
  );
}
