import React from 'react';

const Banner = () => {
  return (
    <div className="relative bg-cover bg-center h-96 flex items-center justify-center" 
         style={{ backgroundImage: `url('path_to_banner_image.jpg')` }}>
      <div className="text-center text-white bg-black bg-opacity-50 p-6 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Your Vision. Our Guidance.</h1>
        <p className="text-lg">Partner with LPL Financial to achieve your financial goals.</p>
      </div>
    </div>
  );
};

export default Banner;
