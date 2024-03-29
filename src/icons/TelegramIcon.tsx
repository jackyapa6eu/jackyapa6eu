import React, { FC } from 'react';
import { IIcon } from './IIcon';

const TelegramIcon: FC<IIcon> = ({ color = '#dcdcdc' }) => {
  return (
    <svg width='20' height='18' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M7.59502 16.2042L7.89836 11.6217L16.2184 4.12501C16.5867 3.78917 16.1425 3.62667 15.655 3.91917L5.38502 10.4083L0.943356 9.00001C-0.00997773 8.72917 -0.0208113 8.06834 1.16002 7.59167L18.4609 0.918339C19.2517 0.560839 20.01 1.11334 19.7067 2.32667L16.76 16.2042C16.5542 17.19 15.9584 17.4283 15.135 16.9733L10.65 13.6583L8.49419 15.7492C8.24502 15.9983 8.03919 16.2042 7.59502 16.2042Z'
        fill={color}
      />
    </svg>
  );
};

export default TelegramIcon;
