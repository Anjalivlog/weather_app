
import React from 'react';
import spinner from '../Assets/spinner.gif';

const Spinner = () => {
  return (
    <>
      <img className='w-[200px] m-auto block' src={spinner} alt='loading..' />
    </>
  );
};

export default Spinner;