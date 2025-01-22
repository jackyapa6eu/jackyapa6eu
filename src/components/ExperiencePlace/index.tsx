import { FC } from 'react';

import styles from './styles/experience.module.scss';
import { AccentText } from '../AccentText';

interface IExperiencePlaceProps {
  name: string;
  position: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

export const ExperiencePlace: FC<IExperiencePlaceProps> = ({
  name,
  position,
  startDate,
  endDate,
  description,
}) => {
  return (
    <div className={styles.place}>
      <div className={styles.place__header}>
        <h5 className={styles.place__name}>{name}</h5>
        <p className={styles.place__period}>
          с <span className={styles.place__period_from}>{startDate}</span> по{' '}
          <span className={styles.place__period_to}>
            {endDate ?? 'настоящее время'}
          </span>
        </p>
      </div>
      <AccentText text={position} />

      <p className={styles.place__description}>{description}</p>
    </div>
  );
};
