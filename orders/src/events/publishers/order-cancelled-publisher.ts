import { Subjects, Publisher, OrderCancelledEvent } from '@modelclubauth/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
