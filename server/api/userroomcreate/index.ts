import type { UserId } from '$/commonTypesWithClient/branded';
import type { User1Model } from '$/commonTypesWithClient/models';

export type Methods = {
  get: {
    resBody: string;
  };
  post: {
    reqBody: { searchRoomId: string; userId: UserId };
    resBody: User1Model;
  };
};
