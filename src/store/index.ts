import useAppStore from './modules/app';
import useUserStore from './modules/user';

const useStore = () => ({
  user: useUserStore(),
  app: useAppStore(),
});

export default useStore;
