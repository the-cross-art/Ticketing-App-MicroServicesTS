import { Publisher, OrderCreatedEvent, Subjects } from '@modelclubauth/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
