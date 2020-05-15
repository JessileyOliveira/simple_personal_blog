import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from '../../../services/api';

import { asyncPost } from '../../../store/Post/sagas';
import { getPostsSuccess, getPostsFailure } from '../../../store/Post/actions';

const apiMock = new MockAdapter(api);
const dispatch = jest.fn();

describe('Sagas post tests', () => {
  it('Should be able get posts', async () => {
    const listPost = [
      {
        title: 'AssCo has revamped the theory of versioning',
        body:
          'We will mesh the buzzword "strategic". Our feature set is unparalleled, but our subscriber-defined CAE and non-complex configuration is invariably considered a remarkable achievement. What does the commonly-used commonly-used term "strategic" really mean? Think ultra-long-term. The reporting factor can be summed up in one word: B2B2C. Think clicks-and-mortar. We believe we know that it is better to enhance compellingly than to monetize dynamically. Think real-time, backward-compatible. The ability to synergize macro-holistically leads to the capability to envisioneer holistically. The implementation factor can be summed up in one word: six-sigma.',
        metadata: {
          publishedAt: 1492004832000,
          authorId: 2,
        },
      },
      {
        title: 'Matleh',
        body:
          "Thus thing afterprises of discove, the us mortune, and momenterprises ther 'tis question is not of? To dreat to sleep to sleep of us the oppresolution: whose bourn no take arrows of trave under 'tis regards of grunt a life; fortal count we haveller resolence to sleep; to gread off time, to suffled o'er a bare bodkin? Who would by a we himself mind that undisprises of troublesh is no take arms and, by a sea of devoutrave unworthy to take arms against a sea of action.",
        metadata: {
          publishedAt: 1431006432000,
          authorId: 1,
        },
      },
    ];

    apiMock.onGet('v2/5be5e3fa2f000082000fc3f8').reply(200, listPost);

    await runSaga({ dispatch }, asyncPost).toPromise();

    expect(dispatch).toHaveBeenLastCalledWith(getPostsSuccess(listPost));
  });

  it('should call fail reducer when api fail', async () => {
    apiMock.onGet('v2/5be5e3fa2f000082000fc3f8').reply(500);

    await runSaga({ dispatch }, asyncPost).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getPostsFailure());
  });
});
