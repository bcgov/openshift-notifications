import { getPosts } from '../../../../graphql/resolvers/post-resolvers';

describe('post-resolvers - unit', () => {

  describe('`getPosts` function' , () => {

    it('calls `findAll` function on ORM', () => {
      const mockRoot = {};
      const mockArgs = {};
      const mockContext = {
        models: {
          Post: {
            findAll: jest.fn(() => 'Foo'),
          },
        },
      };
      const mockInfo = {};

      expect(getPosts(mockRoot, mockArgs, mockContext, mockInfo)).toEqual('Foo');
    });

  });

});
