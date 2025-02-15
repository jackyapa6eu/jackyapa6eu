/* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unnecessary-condition */
import { makeAutoObservable, runInAction, toJS } from 'mobx';
import { getDatabase, ref, set, get, onValue, update } from 'firebase/database';
import { debounce } from 'lodash';

import authStore, { ITimeTracking, ITimeTrackingHistory } from './authStore';
import { message } from 'antd';
import { nanoid } from 'nanoid';

const emptyTimeTracking = {
  inWork: false,
  startedAt: null,
  name: '',
};

class TimeTrackerStore {
  timeTracking: ITimeTracking;
  timeTrackingHistory?: {
    [key: number]: ITimeTrackingHistory;
  };

  constructor() {
    this.timeTracking = emptyTimeTracking;
    makeAutoObservable(this);
  }

  setTimeTracking = (newData) => {
    runInAction(() => {
      this.timeTracking = newData;
    });
  };

  setTimeTrackingHistory = (newData) => {
    runInAction(() => {
      this.timeTrackingHistory = newData;
    });
  };

  onTimeTrackingChange = (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      runInAction(() => {
        this.setTimeTracking(data.current);
        if (data.history) this.setTimeTrackingHistory(data.history);
      });
    }
  };

  subscribeTimeTracking = () => {
    if (authStore.user === null) return () => {};
    const db = getDatabase();
    const dataRef = ref(db, `users/${authStore.user.uid}/timeTracking`);

    return onValue(dataRef, this.onTimeTrackingChange);
  };

  startTrack = async (values: {
    name: string;
    timeStamp: number;
    id?: string;
  }) => {
    const db = getDatabase();
    const timestamp = values.timeStamp ?? Date.now();

    if (authStore.user !== null) {
      const uid: string = authStore.user.uid;

      const dataRef = `users/${uid}/timeTracking/current`;
      const updates = {};

      try {
        updates[dataRef] = {
          inWork: true,
          startedAt: timestamp,
          name: values.name ?? '',
          id: values.id ?? nanoid(),
        };
        await update(ref(db), updates);
        void message.success(`Трекинг времени запущен`);
      } catch (e) {
        console.log(e);
        void message.error('Error!');
      }
    }
  };

  stopTrack = async () => {
    const db = getDatabase();

    if (authStore.user !== null) {
      const uid: string = authStore.user.uid;
      const now = Date.now();
      let reqBody;

      const currentCopy = JSON.parse(JSON.stringify(this.timeTracking));
      const historyItem = this.timeTrackingHistory?.[currentCopy.id];
      currentCopy.finishedAt = now;
      delete currentCopy.inWork;

      if (historyItem) reqBody = JSON.parse(JSON.stringify(historyItem));
      else {
        reqBody = {
          startedAt: currentCopy.startedAt,
          name: currentCopy.name,
          items: [],
        };
      }
      reqBody.items.push(currentCopy);
      reqBody.lastEdited = now;

      const currentRef = `users/${uid}/timeTracking/current`;
      const historyRef = `users/${uid}/timeTracking/history/${currentCopy.id}`;
      const updates = {};

      try {
        updates[currentRef] = {
          inWork: false,
          startedAt: null,
          name: '',
        };
        updates[historyRef] = reqBody;
        await update(ref(db), updates);
        void message.success(`Трекинг времени остановлен`);
      } catch (e) {
        console.log(e);
        void message.error('Error!');
      }
    }
  };

  debouncedStartTrack = debounce(async ({ name }: string) => {
    if (this.timeTracking.inWork && authStore.user !== null) {
      const uid: string = authStore.user.uid;
      const db = getDatabase();
      const dataRef = `users/${uid}/timeTracking/current/name`;
      const updates = {};
      updates[dataRef] = name;
      try {
        await update(ref(db), updates);
      } catch (e) {
        /*empty */
      }
    }
  }, 700);
}

const timeTrackerStore = new TimeTrackerStore();

export default timeTrackerStore;
