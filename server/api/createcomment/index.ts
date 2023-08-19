import type { UserId } from '$/commonTypesWithClient/branded';
import type { User1Model } from '$/commonTypesWithClient/models';

export type Methods = {
  post: {
    reqBody: { comment: string; userId: UserId };
    resBody: User1Model;
  };
};