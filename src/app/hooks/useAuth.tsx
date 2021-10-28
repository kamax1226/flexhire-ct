import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from 'utils/redux/slices/authJwt';
import { IRootState } from 'utils/redux/store';
import { ILogin } from 'utils/types';

export default function useAuth() {
  const dispatch = useDispatch();

  const {
    isLoading, isAuthenticated, apiKey,
  } = useSelector(
    (state: IRootState) => state.authJwt,
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

    logout: () => dispatch(logout()),
  };
}
