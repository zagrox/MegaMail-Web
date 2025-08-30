import React from 'react';

const Logo: React.FC = () => {
  const logoSrc = 'https://crm.mailzila.com/assets/78a080f4-ef7f-4083-bc26-af4a30c08056';

  return (
    <img
      src={logoSrc}
      alt="مگامیل لوگو"
      className="h-10 w-auto"
    />
  );
};

export default Logo;
