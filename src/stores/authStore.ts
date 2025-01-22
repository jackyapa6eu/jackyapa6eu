import { makeAutoObservable, runInAction } from 'mobx';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { getDatabase, ref, set, get } from 'firebase/database';
import { message } from 'antd';

import type { IRegistrationFormValues } from '../types';

export interface IUserData {
  email: string;
  uid: string;
}

export interface ITimeTracking {
  inWork: boolean;
  name: string;
  startedAt: number;
}

export interface ITimeTrackingHistory {
  finishedAt: number;
  startedAt: number;
  inWork: boolean;
  name: string;
}

export interface IUser {
  timeTracking?: ITimeTracking;
  timeTrackingHistory?: {
    [key: number]: ITimeTrackingHistory;
  };
  userData: IUserData;
}

class AuthStore {
  user: IUser | null = null;

  signUpIsLoading: string = 'pending';
  signInIsLoading: string = 'pending';

  constructor() {
    makeAutoObservable(this);
  }

  setSignUpLoadingStatus = (newStatus: string) => {
    runInAction(() => {
      this.signUpIsLoading = newStatus;
    });
  };

  setSignInLoadingStatus = (newStatus: string) => {
    runInAction(() => {
      this.signInIsLoading = newStatus;
    });
  };

  signUp = async (values: IRegistrationFormValues) => {
    const auth = getAuth();
    const db = getDatabase();

    const { email, password } = values;
    this.setSignUpLoadingStatus('loading');

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const { uid } = user;
      const dataRef = ref(db, `users/${user.uid}/userData`);
      await set(dataRef, { uid, email });
      void message.success('Регистрация прошла успешно');
    } catch (error: unknown) {
      this.setSignUpLoadingStatus('error');

      if (error.code === 'auth/email-already-in-use') {
        void message.error('Данный email уже используется', 10);
      } else {
        void message.error('Произошла ошибка при регистрации');
      }
    }
  };

  signIn = async (values: IRegistrationFormValues) => {
    const auth = getAuth();
    const { email, password } = values;

    this.setSignInLoadingStatus('loading');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      void message.success('Авторизация прошла успешно.');
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.error(`Firebase Error Code: ${error.code}`);
        console.error(`Firebase Error Message: ${error.message}`);
      } else {
        console.error('Unknown error:', error);
      }
    } finally {
      this.setSignInLoadingStatus('pending');
    }
  };

  getUserData = async (uid: string) => {
    const db = getDatabase();

    const dataRef = ref(db, `users/${uid}/userData`);

    try {
      const response = await get(dataRef);
      if (response.exists()) {
        this.setUser(response.val() as IUser);
        runInAction(() => {
          this.isPreviouslyLogged = true;
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  setUser = (newUserData: IUser) => {
    runInAction(() => {
      this.user = newUserData;
    });
  };

  logout = async () => {
    const auth = getAuth();
    try {
      await auth.signOut();
    } catch (e) {
      console.log(e);
    } finally {
      this.setUser(null);
    }
  };
}

const authStore = new AuthStore();
export default authStore;
