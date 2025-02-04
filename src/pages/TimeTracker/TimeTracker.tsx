/* eslint-disable @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access */
import React, { FC, useEffect, useMemo, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { Button, Form, Input } from 'antd';
import { format, startOfDay } from 'date-fns';
import { useLocation } from 'react-router-dom';

import { TimeCounter, AccentText, AuthToUse } from '../../components';
import timeTrackerStore from '../../stores/timeTrackerStore';

import authStore from '../../stores/authStore';
import { getTimeObject, getTimeStr } from '../../utils/helpers';
import globalStyles from '../../styles/global/global.module.scss';
import styles from './styles/tracker.module.scss';
import { TextWithLinks } from '../../components/TextWithLinks';

const TimeTracker: FC = observer(() => {
  const isSubscribed = useRef(false);
  const location = useLocation();
  const [form] = Form.useForm();
  const { user, logout } = authStore;

  const {
    startTrack,
    stopTrack,
    debouncedStartTrack,
    subscribeTimeTracking,
    timeTracking,
    timeTrackingHistory,
  } = timeTrackerStore;

  const handleSubmit = async (values): void => {
    if (timeTracking.inWork) await stopTrack();
    else await startTrack(values);
  };

  const handleChangeName = async (event) => {
    await debouncedStartTrack({ name: event.target.value });
  };

  const history = useMemo(() => {
    if (!timeTrackingHistory) return [];

    const grouped = Object.entries(
      Object.values(timeTrackingHistory).reduce((acc, item) => {
        const date = new Date(item.startedAt);
        const start = startOfDay(date).getTime();
        const diff = item.finishedAt - item.startedAt;
        acc[start] ??= {
          total: 0,
          items: [],
        };
        acc[start].items.push(item);
        acc[start].total += diff;

        return acc;
      }, {}),
    ).map(([day, data]) => [
      day,
      { ...data, items: data.items.sort((b, a) => a.startedAt - b.startedAt) },
    ]);
    return grouped.sort(([dateA], [dateB]) => {
      return Number(dateB) - Number(dateA);
    });
  }, [timeTrackingHistory]);

  useEffect(() => {
    const unsubscribe = subscribeTimeTracking();
    isSubscribed.current = true;
    return () => {
      unsubscribe();
    };
  }, [user]);

  useEffect(() => {
    form.setFieldsValue({ ...timeTracking });
  }, [timeTracking]);

  return (
    <div className={styles.tracker}>
      <Form
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        className={styles.tracker__form}
        disabled={user === null}
      >
        <Form.Item name="name" onChange={handleChangeName}>
          <Input placeholder="Введите название" />
        </Form.Item>

        <div className={styles.tracker__itemsContainer}>
          <TimeCounter timeStamp={timeTracking.startedAt || null} />

          <Form.Item>
            <Button type="default" htmlType="submit">
              {timeTracking.inWork ? 'стоп' : 'старт'}
            </Button>
          </Form.Item>
        </div>
      </Form>
      {user === null && (
        <AuthToUse
          text="Для того, чтобы использовать трекинг времени необходимо"
          from={location.pathname}
        />
      )}
      <div className={styles.tracker__history}>
        {history.map(([day, dayData]) => (
          <div key={day} className={globalStyles.card}>
            <h2 className={globalStyles.card__title}>
              <span>{format(new Date(Number(day)), 'dd.MM.yyyy')}</span>
              <span style={{ marginLeft: 'auto' }}>
                <AccentText text={getTimeStr(getTimeObject(dayData.total))} />
              </span>
            </h2>
            <div className={styles.tracker__timestamps}>
              {dayData.items.map((el) => {
                return (
                  <p key={el.startedAt} className={styles.tracker__timestamp}>
                    <TextWithLinks
                      text={el.name === '' ? 'Без названия' : el.name}
                    />
                    <span className={styles.tracker__timeWrapper}>
                      <span>
                        {format(new Date(el.startedAt), 'HH:mm')}-
                        {format(new Date(el.finishedAt), 'HH:mm')}
                      </span>
                      <span>
                        [
                        {getTimeStr(
                          getTimeObject(el.finishedAt - el.startedAt),
                        )}
                        ]
                      </span>
                    </span>
                  </p>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default TimeTracker;
