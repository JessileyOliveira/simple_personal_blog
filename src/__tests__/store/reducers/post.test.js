import reducer, { INITIAL_STATE } from '../../../store/Post/reducers';
import * as PostActions from '../../../store/Post/actions';

describe('Reducers post tests', () => {
  it('test DEFAULT item in switch case', () => {
    const action = {
      type: '',
    };
    const state = reducer(undefined, action);

    expect(state).toStrictEqual(INITIAL_STATE);
  });

  it('REQUEST_POST', () => {
    const state = reducer(INITIAL_STATE, PostActions.getPosts());

    expect(state).toStrictEqual({ ...INITIAL_STATE, loading: true });
  });

  it('SUCCESS_POST', () => {
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
      {
        title:
          'Have you ever needed to streamline your feature set? Right now?',
        body:
          "If you monetize magnetically, you may have to mesh transparently. If you monetize interactively, you may have to engage strategically. Think client-focused. Think six-sigma. Think leading-edge. But don't think all three at the same time. The media sourcing factor is one-to-one. Quick: do you have a clicks-and-mortar plan for handling unplanned-for web-readiness? A company that can target correctly will (at some unspecified point in the future) be able to enhance easily. Without open-source, C2C2B structuring, you will lack reporting. Do you have a plan of action to become granular? The ability to repurpose virally leads to the capacity to recontextualize transparently. Think one-to-one. We usually enhance B2B2C re-purposing. That is an amazing achievement taking into account this year's cycle! Think robust.",
        metadata: {
          publishedAt: 1490010372000,
          authorId: 2,
        },
      },
      {
        title: 'Consulted eagerness unfeeling',
        body:
          'Nor hence hoped her after other known defer his. For county now sister engage had season better had waited. Occasional mrs interested far expression acceptance. Day either mrs talent pulled men rather regret admire but. Life ye sake it shed. Five lady he cold in meet up. Service get met adapted matters offence for. Principles man any insipidity age you simplicity understood. Do offering pleasure no ecstatic whatever on mr directly. ',
        metadata: {
          publishedAt: 1470166495000,
          authorId: 3,
        },
      },
      {
        title: 'Sang lose of hour then he left find',
        body:
          'Unpleasant nor diminution excellence apartments imprudence the met new. Draw part them he an to he roof only. Music leave say doors him. Tore bred form if sigh case as do. Staying he no looking if do opinion. Sentiments way understood end partiality and his. No opinions answered oh felicity is resolved hastened. Produced it friendly my if opinions humoured. Enjoy is wrong folly no taken. It sufficient instrument insipidity simplicity at interested. Law pleasure attended differed mrs fat and formerly. Merely thrown garret her law danger him son better excuse. Effect extent narrow in up chatty. Small are his chief offer happy had.',
        metadata: {
          publishedAt: 1516184567000,
          authorId: 4,
        },
      },
    ];

    const state = reducer(INITIAL_STATE, PostActions.getPostsSuccess(listPost));

    expect(state).toStrictEqual({
      ...INITIAL_STATE,
      data: listPost,
      loading: false,
    });
  });

  it('FAILURE_POST', () => {
    const state = reducer(INITIAL_STATE, PostActions.getPostsFailure());

    expect(state).toStrictEqual({
      ...INITIAL_STATE,
      error: true,
      errorMessage: 'Erro ao consultar postagens!',
      loading: false,
    });
  });
});
