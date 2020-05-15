export const INITIAL_STATE = {
  data: [],
  error: false,
  errorMessage: '',
  loading: false,
};

export default function author(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST_AUTHOR':
      return { ...state, loading: true };
    case 'SUCCESS_AUTHOR':
      return {
        data: action.payload,
        error: false,
        errorMessage: '',
        loading: false,
      };
    case 'FAILURE_AUTHOR':
      return {
        ...INITIAL_STATE,
        error: true,
        errorMessage: 'Erro ao consultar autores!',
        loading: false,
      };
    default:
      return state;
  }
}
