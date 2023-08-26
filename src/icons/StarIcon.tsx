import React, { FC, memo } from 'react';

interface IIStarIcon {
  color?: string;
  size?: string;
  fill?: boolean;
}

const StarIcon: FC<IIStarIcon> = ({ color, size = '20px', fill = false }) => {
  const notFilledColor = color ?? 'rgb(131 197 190 / 50%)';
  const filledColor = color ?? '#83c5be';
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24'>
      <path
        fill={fill ? filledColor : notFilledColor}
        d='m19.65 9.04l-4.84-.42l-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73l3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z'
      ></path>
      <polygon
        points='12,6 9,10 5,10 8,14 7,19 12,16 17,19 16,14 19,10 14,10'
        fill={fill ? filledColor : 'none'}
        shapeRendering='geometricPrecision'
      />
    </svg>
  );
};

export default memo(StarIcon);
