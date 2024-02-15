import React from 'react';
import ImageOne from './ImageOne';
import Text1Component from './fetchSeparationsCoachen';
import '../../css/SeparationsCoachen.css';

const SectionOne = () => {
  return (
    <div className="SeparationsCoachen">
      <ImageOne/>
      <Text1Component />
    </div>
  );
};

export default SectionOne;
