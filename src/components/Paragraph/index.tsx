import { FC, PropsWithChildren } from 'react';

import styles from './styles/paragraph.module.scss';

interface IParagraphProps {}

export const Paragraph: FC<PropsWithChildren<IParagraphProps>> = ({
  children,
}) => {
  return <p className={styles.paragraph}>{children}</p>;
};
