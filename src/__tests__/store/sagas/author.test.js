import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from '../../../services/api';

import { asyncAuthor } from '../../../store/Author/sagas';
import {
  getAuthorsSuccess,
  getAuthorsFailure,
} from '../../../store/Author/actions';

const apiMock = new MockAdapter(api);
const dispatch = jest.fn();

describe('Sagas author tests', () => {
  it('Should be able get authors', async () => {
    const listAuthor = [
      {
        name: 'Jemma Chadwick',
        id: 1,
      },
      {
        name: 'Nicholas Jordan',
        id: 2,
      },
      {
        name: 'Zinnia Rickard',
        id: 3,
      },
      {
        name: 'Sophie Hawk',
        id: 4,
      },
    ];

    apiMock.onGet('v2/5be5e3ae2f00005b000fc3f6').reply(200, listAuthor);

    await runSaga({ dispatch }, asyncAuthor).toPromise();

    expect(dispatch).toHaveBeenLastCalledWith(getAuthorsSuccess(listAuthor));
  });

  it('should call fail reducer when api fail', async () => {
    apiMock.onGet('v2/5be5e3ae2f00005b000fc3f6').reply(500);

    await runSaga({ dispatch }, asyncAuthor).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getAuthorsFailure());
  });
});
