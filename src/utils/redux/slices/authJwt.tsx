import { createSlice } from '@reduxjs/toolkit';
// import jwtDecode from 'jwt-decode';
import { ILogin } from 'utils/types';
import { AppDispatch } from 'utils/redux/store';
// import getApolloClient from '../../graphql/apolloClient';
// import { LoginMutation, SignUpMutation } from '../../graphql/mutations/mutation';
// import { MeQuery } from '../../graphql/queries/query';

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  apiKey: '',
};

const slice = createSlice({
  name: 'authJwt',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // INITIALISE
    getInitialize(state, action) {
      state.isLoading = false;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.apiKey = '';
    },

    // AUTH SUCCESS
    authSuccess(state, action) {
      state.isAuthenticated = true;
      state.apiKey = action.payload.apiKey;
    },

    // LOGOUT
    logoutSuccess(state) {
      state.isAuthenticated = false;
      state.apiKey = '';
    },
  },
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

const isValidToken = (jwtToken: string) => {
  if (!jwtToken) {
    return false;
  }
  // const decoded: IDecoded = jwtDecode(jwtToken);
  // const currentTime = Date.now() / 1000;

  // return decoded.exp > currentTime;
  return false;
};

const setSession = (apiKey: string) => {
  if (apiKey && apiKey.length > 0) {
    localStorage.setItem('apiKey', apiKey);
  } else {
    localStorage.removeItem('apiKey');
  }
};

export function login(params: ILogin) {
  return async (dispatch: AppDispatch) => {
    // try {
    //   const result = await getApolloClient().mutate({
    //     mutation: LoginMutation,
    //     variables: {
    //       email: loginArgs.email,
    //       password: loginArgs.password,
    //     },
    //   });

    setSession(params.apiKey);

    dispatch(slice.actions.authSuccess({ apiKey: params.apiKey }));

    return true;

    //   return true;
    // } catch (error) {
    //   throw error;
    // }
  };
}

// export function register(registerArgs: IRegister) {
//   return async (dispatch: any) => {
//     try {
//       const result = await getApolloClient().mutate({
//         mutation: SignUpMutation,
//         variables: {
//           first_name: registerArgs.first_name,
//           last_name: registerArgs.last_name,
//           email: registerArgs.email,
//           password: registerArgs.password,
//         },
//       });

//       const jwtToken = JSON.parse(result.data.signup).token;
//       setSession(jwtToken);

//       const user: IDecoded = jwtDecode(jwtToken);
//       dispatch(slice.actions.authSuccess({ user }));

//       return true;
//     } catch (error) {
//       throw error;
//     }
//   };
// }

export function logout() {
  // return async (dispatch: any) => {
  //   try {
  //     setSession('');

  //     dispatch(slice.actions.logoutSuccess());
  //     return true;
  //   } catch (error) {
  //     throw error;
  //   }
  // };
}

export function getInitialize() {
  return async (dispatch: AppDispatch) => {
    dispatch(slice.actions.startLoading());

    try {
      const accessToken = localStorage.getItem('jwtToken');
      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);
        // const result = await getApolloClient().query({
        //   query: MeQuery,
        // });

        // dispatch(
        //   slice.actions.getInitialize({
        //     isAuthenticated: true,
        //     user: result.data.me,
        //   }),
        // );
      } else {
        dispatch(
          slice.actions.getInitialize({
            isAuthenticated: false,
            user: false,
          }),
        );
      }
    } catch (error) {
      dispatch(
        slice.actions.getInitialize({
          isAuthenticated: false,
          user: false,
        }),
      );
    }
  };
}
