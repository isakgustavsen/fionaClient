import { createBaseClient } from '../../core/base-client';
import { createMutationsEndpoint } from './endpoints/mutations';
import { createEditionTypesEndpoint } from './endpoints/edition-types';
import { createEditionsEndpoint } from './endpoints/editions';
import { createEditionSectionsEndpoint } from './endpoints/edition-sections';
import { createFilmsEndpoint } from './endpoints/films';
import { createPerformancesEndpoint } from './endpoints/performances';
import { createCompositionsEndpoint } from './endpoints/compositions';
import { createLocationsEndpoint } from './endpoints/locations';
import { createSchedulesEndpoint } from './endpoints/schedules';
import { createPersonsEndpoint } from './endpoints/persons';
import { createCompaniesEndpoint } from './endpoints/companies';
import { createGuestbooksEndpoint } from './endpoints/guestbooks';
import { createVolunteersEndpoint } from './endpoints/volunteers';
import { createLookupsEndpoint } from './endpoints/lookups';
import { createAttachmentsEndpoint } from './endpoints/attachments';
import type { FionaOptions } from './types';

export function createFiona(options: FionaOptions) {
  const client = createBaseClient({
    baseUrl: options.baseUrl,
    key: options.key,
    authHeader: 'apikey',
  });

  const mutations = createMutationsEndpoint(client);
  const editionTypes = createEditionTypesEndpoint(client);
  const editions = createEditionsEndpoint(client);
  const editionSections = createEditionSectionsEndpoint(client);
  const films = createFilmsEndpoint(client);
  const performances = createPerformancesEndpoint(client);
  const compositions = createCompositionsEndpoint(client);
  const locations = createLocationsEndpoint(client);
  const schedules = createSchedulesEndpoint(client);
  const persons = createPersonsEndpoint(client);
  const companies = createCompaniesEndpoint(client);
  const guestbooks = createGuestbooksEndpoint(client);
  const volunteers = createVolunteersEndpoint(client);
  const lookups = createLookupsEndpoint(client);
  const attachments = createAttachmentsEndpoint(client);

  return {
    mutations,
    editionTypes,
    editions,
    editionSections,
    films,
    performances,
    compositions,
    locations,
    schedules,
    persons,
    companies,
    guestbooks,
    volunteers,
    lookups,
    attachments,
  };
}

export type { FionaOptions } from './types';

