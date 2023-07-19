import React, { FC } from 'react';
import { IIcon } from './IIcon';

const MediaIcon: FC<IIcon> = ({ color = '#dcdcdc' }) => {
  return (
    <svg width='16' height='21' viewBox='0 0 16 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M15.8333 6.33333V3.16667L12.6667 4.11667V0H9.5V5.06667L6.33333 6.01667V1.58333H3.16667V6.96667L0 7.91667V11.0833L3.16667 10.1333V13.3L0 14.25V17.4167L3.16667 16.4667V20.5833H6.33333V15.5167L9.5 14.5667V19H12.6667V13.6167L15.8333 12.6667V9.5L12.6667 10.45V7.28333L15.8333 6.33333ZM9.5 11.4L6.33333 12.35V9.18333L9.5 8.23333V11.4Z'
        fill={color}
      />
    </svg>
  );
};

export default MediaIcon;
