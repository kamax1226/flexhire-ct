import { useSelector, useDispatch } from 'react-redux';
import { setGraphqlData } from 'utils/redux/slices/dashboard';
import { IRootState } from 'utils/redux/store';
import { IGraphql } from 'utils/types';

// eslint-disable-next-line
const useGraphql = () => {
  const dispatch = useDispatch();

  const {
    currentUser, contracts,
  } = useSelector(
    (state: IRootState) => state.dashboard,
  );

  return {
    currentUser,
    contracts,

    setGraphqlData: (params: IGraphql) => dispatch(
      setGraphqlData({
        currentUser: params.currentUser,
        contracts: params.contracts,
      }),
    ),
  };
};

export default useGraphql;
