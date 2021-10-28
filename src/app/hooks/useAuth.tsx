import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from 'utils/redux/slices/auth';
import { clearGraphqlData } from 'utils/redux/slices/dashboard';
import { IRootState } from 'utils/redux/store';
import { ILogin } from 'utils/types';

// eslint-disable-next-line
const useAuth = () => {
  const dispatch = useDispatch();

  const {
    isLoading, isAuthenticated, apiKey,
  } = useSelector(
    (state: IRootState) => state.auth,
  );

  return {
    isLoading,
    isAuthenticated,
    apiKey,

    login: (params: ILogin) => dispatch(
      login({
        apiKey: params.apiKey,
      }),
    ),

    logout: () => {
      dispatch(logout());
      dispatch(clearGraphqlData());
    },
  };
};

export default useAuth;
