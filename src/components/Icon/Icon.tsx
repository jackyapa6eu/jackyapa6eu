/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/restrict-template-expressions */
import React, { FC, Suspense, useMemo } from 'react';
import classNames from 'classnames';
import { icons } from './icons';

import style from './styles/icon.module.scss';

export type IconName = keyof typeof icons;

interface IIconProps extends React.ComponentProps<'div'> {
  name: IconName;
  size?: 'smaller' | 'small' | 'medium' | 'large';
  slot?: string;
  className?: string;
  rotate?: number;
  clickCallback?: () => void;
}
export const Icon: FC<IIconProps> = ({
  name,
  className = '',
  slot,
  size = 'medium',
  rotate,
  clickCallback,
  ...props
}): React.ReactElement | null => {
  const isClickable = useMemo(() => clickCallback, [clickCallback]);

  const iconClasses = classNames({
    [style.icon]: true,
    [style[`icon--${size}`]]: size,
    [style[`icon--clickable`]]: isClickable,
    [className]: Boolean(className),
  });

  const SvgIcon: any = useMemo(() => icons[name], [name]);

  if (SvgIcon === undefined) return null;

  const handleClick = () => {
    if (clickCallback) clickCallback();
  };

  return (
    <div
      slot={slot}
      className={iconClasses}
      aria-label={name}
      onClick={handleClick}
      role="img"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: isClickable ? 'pointer' : 'default',
        transform: rotate !== undefined ? `rotate(${rotate}deg)` : undefined,
      }}
      {...props}
    >
      <Suspense fallback={null}>
        <SvgIcon />
      </Suspense>
    </div>
  );
};
