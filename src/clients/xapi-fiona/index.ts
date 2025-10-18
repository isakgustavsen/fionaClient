import { createBaseClient } from '../../core/base-client';
import { createAccountEndpoint } from './endpoints/account';
import { createAccreditationsEndpoint } from './endpoints/accreditations';
import { createAppointmentsEndpoint } from './endpoints/appointments';
import { createAttachmentsEndpoint } from './endpoints/attachments';
import { createCompaniesEndpoint } from './endpoints/companies';
import { createCompanyProfilesEndpoint } from './endpoints/company-profiles';
import { createCustomFieldsEndpoint } from './endpoints/custom-fields';
import { createDeliveriesEndpoint } from './endpoints/deliveries';
import { createEditionTypesEndpoint } from './endpoints/edition-types';
import { createEntriesEndpoint } from './endpoints/entries';
import { createExternalAccountsEndpoint } from './endpoints/external-accounts';
import { createFilmControlEndpoint } from './endpoints/film-control';
import { createFilmFinanciersEndpoint } from './endpoints/film-financiers';
import { createFilmPublicationPrivilegesEndpoint } from './endpoints/film-publication-privileges';
import { createFilmRecommendationsEndpoint } from './endpoints/film-recommendations';
import { createFilmsEndpoint } from './endpoints/films';
import { createFormsEndpoint } from './endpoints/forms';
import { createGuestbooksEndpoint } from './endpoints/guestbooks';
import { createInvoicesEndpoint } from './endpoints/invoices';
import { createLookupsEndpoint } from './endpoints/lookups';
import { createPeopleEndpoint } from './endpoints/people';
import { createRaidSetsEndpoint } from './endpoints/raid-sets';
import { createReceivedFilmScreeningCopiesEndpoint } from './endpoints/received-screening-copies';
import { createRsvpEventsEndpoint } from './endpoints/rsvp-events';
import { createSchedulesEndpoint } from './endpoints/schedules';
import { createScreeningCopiesEndpoint } from './endpoints/screening-copies';
import { createShowsEndpoint } from './endpoints/shows';
import { createStatusListsEndpoint } from './endpoints/status-lists';
import { createTagsEndpoint } from './endpoints/tags';
import { createTextsEndpoint } from './endpoints/texts';
import { createTicketInfoEndpoint } from './endpoints/ticket-info';
import { createVolunteersEndpoint } from './endpoints/volunteers';
import type { XapiFionaOptions } from './types';

export function createXapiFiona(options: XapiFionaOptions) {
  const client = createBaseClient({
    baseUrl: options.baseUrl,
    key: options.key,
    authHeader: 'X-ApiKey',
  });

  const account = createAccountEndpoint(client);
  const accreditations = createAccreditationsEndpoint(client);
  const appointments = createAppointmentsEndpoint(client);
  const attachments = createAttachmentsEndpoint(client);
  const companies = createCompaniesEndpoint(client);
  const companyProfiles = createCompanyProfilesEndpoint(client);
  const customFields = createCustomFieldsEndpoint(client);
  const deliveries = createDeliveriesEndpoint(client);
  const editionTypes = createEditionTypesEndpoint(client);
  const entries = createEntriesEndpoint(client);
  const externalAccounts = createExternalAccountsEndpoint(client);
  const filmControl = createFilmControlEndpoint(client);
  const filmFinanciers = createFilmFinanciersEndpoint(client);
  const filmPublicationPrivileges = createFilmPublicationPrivilegesEndpoint(client);
  const filmRecommendations = createFilmRecommendationsEndpoint(client);
  const films = createFilmsEndpoint(client);
  const forms = createFormsEndpoint(client);
  const guestbooks = createGuestbooksEndpoint(client);
  const invoices = createInvoicesEndpoint(client);
  const lookups = createLookupsEndpoint(client);
  const people = createPeopleEndpoint(client);
  const raidSets = createRaidSetsEndpoint(client);
  const receivedFilmScreeningCopies = createReceivedFilmScreeningCopiesEndpoint(client);
  const rsvpEvents = createRsvpEventsEndpoint(client);
  const schedules = createSchedulesEndpoint(client);
  const screeningCopies = createScreeningCopiesEndpoint(client);
  const shows = createShowsEndpoint(client);
  const statusLists = createStatusListsEndpoint(client);
  const tags = createTagsEndpoint(client);
  const texts = createTextsEndpoint(client);
  const ticketInfo = createTicketInfoEndpoint(client);
  const volunteers = createVolunteersEndpoint(client);

  return {
    account,
    accreditations,
    appointments,
    attachments,
    companies,
    companyProfiles,
    customFields,
    deliveries,
    editionTypes,
    entries,
    externalAccounts,
    filmControl,
    filmFinanciers,
    filmPublicationPrivileges,
    filmRecommendations,
    films,
    forms,
    guestbooks,
    invoices,
    lookups,
    people,
    raidSets,
    receivedFilmScreeningCopies,
    rsvpEvents,
    schedules,
    screeningCopies,
    shows,
    statusLists,
    tags,
    texts,
    ticketInfo,
    volunteers,
  };
}

export type { XapiFionaOptions } from './types';

