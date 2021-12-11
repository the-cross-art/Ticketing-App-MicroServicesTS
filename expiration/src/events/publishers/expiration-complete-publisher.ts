import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@modelclubauth/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
