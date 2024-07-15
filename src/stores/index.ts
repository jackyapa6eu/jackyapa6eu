import { makeAutoObservable } from 'mobx';

class AppStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment = () => {
    this.count += 1;
  };

  decrement = () => {
    this.count -= 1;
  };
}

const appStore = new AppStore();
export default appStore;
