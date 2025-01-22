import { FC } from 'react';

import styles from './styles/accent_text.module.scss';

interface IAccentTextProps {
  text: string;
  bgColor?: string;
}

export const AccentText: FC<IAccentTextProps> = ({
  text,
  bgColor = 'white',
}) => {
  return (
    <span className={styles.accent_text} style={{ backgroundColor: bgColor }}>
      {text}
    </span>
  );
};
