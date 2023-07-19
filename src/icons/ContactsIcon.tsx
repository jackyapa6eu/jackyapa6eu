import React, { FC } from 'react';
import { IIcon } from './IIcon';

const ContactsIcon: FC<IIcon> = ({ color = '#dcdcdc' }) => {
  return (
    <svg width='20' height='18' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1.66667 3.99996V15.6666H16.6667V17.3333H1.66667C0.745833 17.3333 0 16.5916 0 15.6666V3.99996H1.66667ZM20 2.33329C20 1.41663 19.25 0.666626 18.3333 0.666626H5C4.08333 0.666626 3.33333 1.41663 3.33333 2.33329V12.3333C3.33333 13.25 4.08333 14 5 14H18.3333C19.25 14 20 13.25 20 12.3333V2.33329ZM18.3333 2.33329L11.6667 6.49996L5 2.33329H18.3333ZM18.3333 12.3333H5V3.99996L11.6667 8.16663L18.3333 3.99996V12.3333Z'
        fill={color}
      />
    </svg>
  );
};

export default ContactsIcon;
