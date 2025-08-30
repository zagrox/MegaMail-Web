import React from 'react';

const Logo: React.FC = () => {
  const logoSrc = '/media/megamail-logo-blue.png';

  return (
    <img
      src={logoSrc}
      alt="مگامیل لوگو"
      className="h-10 w-auto"
    />
  );
};

export default Logo;
