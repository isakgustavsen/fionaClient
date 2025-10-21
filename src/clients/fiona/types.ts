export interface FionaOptions {
  baseUrl: string;
  key: string;
}

// Aggregated client type for Fiona endpoints
import type { AttachmentsEndpoint } from './endpoints/attachments'
import type { CompaniesEndpoint } from './endpoints/companies'
import type { CompositionsEndpoint } from './endpoints/compositions'
import type { EditionSectionsEndpoint } from './endpoints/edition-sections'
import type { EditionTypesEndpoint } from './endpoints/edition-types'
import type { EditionsEndpoint } from './endpoints/editions'
import type { FilmsEndpoint } from './endpoints/films'
import type { GuestbooksEndpoint } from './endpoints/guestbooks'
import type { LocationsEndpoint } from './endpoints/locations'
import type { LookupsEndpoint } from './endpoints/lookups'
import type { MutationsEndpoint } from './endpoints/mutations'
import type { PerformancesEndpoint } from './endpoints/performances'
import type { PersonsEndpoint } from './endpoints/persons'
import type { SchedulesEndpoint } from './endpoints/schedules'
import type { VolunteersEndpoint } from './endpoints/volunteers'

export interface FionaClient {
  mutations: MutationsEndpoint
  editionTypes: EditionTypesEndpoint
  editions: EditionsEndpoint
  editionSections: EditionSectionsEndpoint
  films: FilmsEndpoint
  performances: PerformancesEndpoint
  compositions: CompositionsEndpoint
  locations: LocationsEndpoint
  schedules: SchedulesEndpoint
  persons: PersonsEndpoint
  companies: CompaniesEndpoint
  guestbooks: GuestbooksEndpoint
  volunteers: VolunteersEndpoint
  lookups: LookupsEndpoint
  attachments: AttachmentsEndpoint
}

// Optional: handy function-level aliases for compositions
export type GetCompositionsByEdition = FionaClient['compositions']['getAllByEdition']
export type GetCompositionsByEditionWithText = FionaClient['compositions']['getAllByEditionWithText']
export type GetCompositionsByEditionAndType = FionaClient['compositions']['getAllByEditionAndType']
export type GetCompositionsByEditionAndTypeWithText = FionaClient['compositions']['getAllByEditionAndTypeWithText']
export type GetCompositionsByEditionSection = FionaClient['compositions']['getAllByEditionSection']
export type GetCompositionsByEditionSectionWithText = FionaClient['compositions']['getAllByEditionSectionWithText']
export type GetCompositionById = FionaClient['compositions']['getById']
