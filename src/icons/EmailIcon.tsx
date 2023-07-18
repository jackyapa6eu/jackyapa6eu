import React, { FC } from 'react';

const EmailIcon: FC = ({ color = '#dcdcdc' }) => {
  return (
    <svg width='22' height='13' viewBox='0 0 22 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M20.1667 0H8.25C7.24167 0 6.41667 0.837692 6.41667 1.86154V10.2385C6.41667 10.7322 6.60982 11.2057 6.95364 11.5548C7.29745 11.9039 7.76377 12.1 8.25 12.1H20.1667C21.1842 12.1 22 11.2716 22 10.2385V1.86154C22 1.36783 21.8068 0.894338 21.463 0.545232C21.1192 0.196126 20.6529 0 20.1667 0ZM20.1667 10.2385H8.25V3.41592L14.2083 6.51538L20.1667 3.41592V10.2385ZM14.2083 4.94239L8.25 1.86154H20.1667L14.2083 4.94239ZM4.58333 10.2385C4.58333 10.3967 4.61083 10.5456 4.62917 10.7038H0.916667C0.410667 10.7038 0 10.285 0 9.77308C0 9.26115 0.410667 8.84231 0.916667 8.84231H4.58333V10.2385ZM2.75 1.39615H4.62917C4.61083 1.55438 4.58333 1.70331 4.58333 1.86154V3.25769H2.75C2.24583 3.25769 1.83333 2.83885 1.83333 2.32692C1.83333 1.815 2.24583 1.39615 2.75 1.39615ZM0.916667 6.05C0.916667 5.53808 1.32917 5.11923 1.83333 5.11923H4.58333V6.98077H1.83333C1.32917 6.98077 0.916667 6.56192 0.916667 6.05Z'
        fill={color}
      />
    </svg>
  );
};

export default EmailIcon;
