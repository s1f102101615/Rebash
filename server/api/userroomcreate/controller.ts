import { userUsecase } from '$/usecase/userusecase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: () => ({ status: 200, body: 'Hello' }),
  post: async ({ body, user }) => ({
    status: 201,
    body: await userUsecase.user(body.searchRoomId, user.id),
  }),
}));
