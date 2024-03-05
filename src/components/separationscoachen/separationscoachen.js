import React from 'react';
import ImageOne from './ImageOne';
import Text1Component from './fetchSeparationsCoachen';
import { ContactButton } from '../contactButton'
import '../../css/SeparationsCoachen.css';

const SectionOne = () => {
  return (
    <div className="SeparationsCoachen">
      <ImageOne/>
      <Text1Component />
      <div>
        <ContactButton />
      </div>
      
    </div>
  );
};

export default SectionOne;
