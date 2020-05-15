export const INITIAL_STATE = {
  data: [],
  error: false,
  errorMessage: '',
  loading: false,
};

export default function post(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST_POST':
      return { ...state, loading: true };
    case 'SUCCESS_POST':
      return {
        data: action.payload,
        error: false,
        errorMessage: '',
        loading: false,
      };
    case 'FAILURE_POST':
      return {
        ...INITIAL_STATE,
        error: true,
        errorMessage: 'Erro ao consultar postagens!',
        loading: false,
      };
    default:
      return state;
  }
}
