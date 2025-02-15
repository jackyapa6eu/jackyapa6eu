/* eslint-disable @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access */
import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { Button, Collapse, Form, Input, Modal } from 'antd';
import { nanoid } from 'nanoid';
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
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

  const showModal = (data) => {
    setIsModalOpen(true);
    setSelectedItem(data);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleSubmit = async (values): void => {
    if (timeTracking.inWork) await stopTrack();
    else await startTrack(values);
  };

  const handleOk = async () => {
    setIsModalOpen(false);
    await handleStart();
    setSelectedItem(null);
  };

  const handleStart = async () => {
    if (timeTracking.inWork) return;
    await startTrack(selectedItem);
  };

  const handleChangeName = async (event) => {
    await debouncedStartTrack({ name: event.target.value });
  };

  const history = useMemo(() => {
    if (!timeTrackingHistory) return [];

    const days = {};

    Object.entries(timeTrackingHistory).forEach(([parentId, parentData]) => {
      const parentDataCopy = JSON.parse(JSON.stringify(parentData));
      parentDataCopy.total ??= 0;
      parentDataCopy.parentId = parentId;

      const date = new Date(parentDataCopy.startedAt);
      const start = startOfDay(date).getTime();
      days[start] ??= {
        total: 0,
        items: [],
      };

      parentDataCopy.items.forEach((item) => {
        const diff = item.finishedAt - item.startedAt;
        days[start].total += diff;
        parentDataCopy.total += diff;
      });

      days[start].items.push(parentDataCopy);
    });

    return Object.entries(days);
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
        {history.map(([dayTimestamp, dayData]) => {
          return (
            <div key={dayTimestamp} className={globalStyles.card}>
              <h2 className={globalStyles.card__title}>
                <span>
                  {format(new Date(Number(dayTimestamp)), 'dd.MM.yyyy')}
                </span>
                <span style={{ marginLeft: 'auto' }}>
                  <AccentText text={getTimeStr(getTimeObject(dayData.total))} />
                </span>
              </h2>
              <div className={styles.tracker__timestamps}>
                {dayData.items.map((parent) => {
                  return (
                    <Collapse
                      key={parent.parentId}
                      ghost
                      items={[
                        {
                          key: parent.parentId,
                          label: (
                            <p
                              style={{
                                margin: 0,
                                display: 'flex',
                                justifyContent: 'space-between',
                                fontWeight: 500,
                              }}
                            >
                              {parent.name === ''
                                ? 'Без названия'
                                : parent.name}
                              <AccentText
                                text={getTimeStr(getTimeObject(parent.total))}
                              />
                            </p>
                          ),
                          children: (
                            <div>
                              {parent.items.map((elem) => {
                                return (
                                  <p
                                    key={elem.startedAt}
                                    className={styles.tracker__timestamp}
                                    onClick={() => {
                                      showModal({
                                        ...elem,
                                        id: parent.parentId,
                                      });
                                    }}
                                  >
                                    <TextWithLinks
                                      text={
                                        elem.name === ''
                                          ? 'Без названия'
                                          : elem.name
                                      }
                                    />
                                    <span
                                      className={styles.tracker__timeWrapper}
                                    >
                                      <span>
                                        {format(
                                          new Date(elem.startedAt),
                                          'HH:mm',
                                        )}
                                        -
                                        {format(
                                          new Date(elem.finishedAt),
                                          'HH:mm',
                                        )}
                                      </span>
                                      <span>
                                        [
                                        {getTimeStr(
                                          getTimeObject(
                                            elem.finishedAt - elem.startedAt,
                                          ),
                                        )}
                                        ]
                                      </span>
                                    </span>
                                  </p>
                                );
                              })}
                            </div>
                          ),
                        },
                      ]}
                    />
                  );
                  // return parent.items.map((elem) => {
                  //   return (
                  //     <p
                  //       key={elem.startedAt}
                  //       className={styles.tracker__timestamp}
                  //     >
                  //       <TextWithLinks
                  //         text={elem.name === '' ? 'Без названия' : elem.name}
                  //       />
                  //       <span className={styles.tracker__timeWrapper}>
                  //         <span>
                  //           {format(new Date(elem.startedAt), 'HH:mm')}-
                  //           {format(new Date(elem.finishedAt), 'HH:mm')}
                  //         </span>
                  //         <span>
                  //           [
                  //           {getTimeStr(
                  //             getTimeObject(elem.finishedAt - elem.startedAt),
                  //           )}
                  //           ]
                  //         </span>
                  //       </span>
                  //     </p>
                  //   );
                  // });
                })}
              </div>
            </div>
          );
        })}

        {/*<Collapse*/}
        {/*  ghost*/}
        {/*  items={history.map(([dayTimestamp, dayData]) => ({*/}
        {/*    key: dayTimestamp,*/}
        {/*    label: (*/}
        {/*      <h2 className={globalStyles.card__title}>*/}
        {/*          <span>*/}
        {/*            {format(new Date(Number(dayTimestamp)), 'dd.MM.yyyy')}*/}
        {/*          </span>*/}
        {/*        <span style={{ marginLeft: 'auto' }}>*/}
        {/*            <AccentText*/}
        {/*              text={getTimeStr(getTimeObject(dayData.total))}*/}
        {/*            />*/}
        {/*          </span>*/}
        {/*      </h2>*/}
        {/*    ),*/}
        {/*    children: <p>text</p>,*/}
        {/*  }))}*/}
        {/*/>*/}
        {
          /* history */ [].map(([day, dayData]) => (
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
          ))
        }
      </div>

      <Modal
        title={`Запустить трекинг ${selectedItem?.name}?`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      ></Modal>
    </div>
  );
});

export default TimeTracker;
