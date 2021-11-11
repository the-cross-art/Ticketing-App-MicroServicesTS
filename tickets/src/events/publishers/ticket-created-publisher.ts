import { Publisher, Subjects, TicketCreatedEvent } from '@modelclubauth/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
