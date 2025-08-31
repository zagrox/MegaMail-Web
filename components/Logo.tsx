import React from 'react';

export const logoSrc = 'https://crm.megamail.ir/assets/8156ea40-b926-4b3e-9a64-2e20370cc295';

const Logo: React.FC = () => {
  return (
    <img
      src={logoSrc}
      alt="مگامیل لوگو"
      className="h-10 w-auto"
    />
  );
};

export default Logo;
