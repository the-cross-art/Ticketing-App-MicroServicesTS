import { Publisher, Subjects, TicketUpdatedEvent } from '@modelclubauth/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
