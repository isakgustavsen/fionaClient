import type { FionaOptions, FionaClient } from "./types";
import { createBaseClient } from "../../core/base-client";
import { createAttachmentsEndpoint } from "./endpoints/attachments";
import { createCompaniesEndpoint } from "./endpoints/companies";
import { createCompositionsEndpoint } from "./endpoints/compositions";
import { createEditionSectionsEndpoint } from "./endpoints/edition-sections";
import { createEditionTypesEndpoint } from "./endpoints/edition-types";
import { createEditionsEndpoint } from "./endpoints/editions";
import { createFilmsEndpoint } from "./endpoints/films";
import { createGuestbooksEndpoint } from "./endpoints/guestbooks";
import { createLocationsEndpoint } from "./endpoints/locations";
import { createLookupsEndpoint } from "./endpoints/lookups";
import { createMutationsEndpoint } from "./endpoints/mutations";
import { createPerformancesEndpoint } from "./endpoints/performances";
import { createPersonsEndpoint } from "./endpoints/persons";
import { createSchedulesEndpoint } from "./endpoints/schedules";
import { createVolunteersEndpoint } from "./endpoints/volunteers";

export function createFiona(options: FionaOptions): FionaClient {
  const client = createBaseClient({
    baseUrl: options.baseUrl,
    key: options.key,
    authHeader: "apikey",
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

export type { FionaOptions } from "./types";
