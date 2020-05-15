import { put, call } from 'redux-saga/effects';
import api from '../../services/api';

import { getAuthorsSuccess, getAuthorsFailure } from './actions';

export function* asyncAuthor() {
  try {
    const response = yield call(api.get, 'v2/5be5e3ae2f00005b000fc3f6');

    if (response.status === 200) {
      const { data } = response;

      yield put(getAuthorsSuccess(data));
    } else {
      yield put(getAuthorsFailure());
    }
  } catch (e) {
    yield put(getAuthorsFailure());
  }
}
