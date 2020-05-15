export function getAuthors() {
  return {
    type: 'REQUEST_AUTHOR',
    payload: {},
  };
}

export function getAuthorsSuccess(data) {
  return {
    type: 'SUCCESS_AUTHOR',
    payload: data,
  };
}

export function getAuthorsFailure() {
  return {
    type: 'FAILURE_AUTHOR',
    payload: {},
  };
}
