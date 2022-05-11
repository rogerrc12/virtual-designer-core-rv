import React, { useState, useEffect } from 'react';

const Trailer = ({ frontColor, rearColor }) => {
  const [type, setType] = useState(null);

  useEffect(() => {
    if (frontColor && !rearColor) setType('front');
    if (rearColor && !frontColor) setType('rear');
    if (frontColor && rearColor) setType('full');
    if (!frontColor && !rearColor) setType(null);

    return () => setType(null);
  }, [frontColor, rearColor]);

  return (
    <div className='relative mb-6'>
      {!type && <img src={`${process.env.PUBLIC_URL}/images/trailer.png`} alt='Trailer' className='mx-auto' width={950} />}
      {type && type !== 'full' && <img src={`${process.env.PUBLIC_URL}/images/${type}/${frontColor || rearColor}.png`} width={950} alt='Trailer' className='mx-auto' />}
      {type === 'full' && (
        <img
          src={`${process.env.PUBLIC_URL}/images/${type}/${frontColor === rearColor ? `${frontColor}.png` : `${rearColor}/${rearColor}-${frontColor}.png`}`}
          width={950}
          className='mx-auto'
          alt='Trailer'
        />
      )}
    </div>
  );
};

export default React.memo(Trailer);
