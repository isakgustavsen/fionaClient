# Fiona Client

**Complete TypeScript API Client Library for Fiona Platform**

A comprehensive, type-safe HTTP client library for the Fiona festival management platform, providing full API coverage for both the main Fiona API and xAPI services.

## 📦 Installation

```bash
pnpm add fiona-client
```

## 🚀 Quick Start

### Fiona Client (Main API)

```typescript
import { createFiona } from 'fiona-client';

const fionaClient = createFiona({
  baseUrl: 'https://yourfestivalname-a-api.fiona-online.net/v1',
  key: 'your-api-key',
});

// Access all endpoints with full type safety
const films = await fionaClient.films.getAllByEdition('edition-id');
const accreditations = await fionaClient.accreditations.getAllByGuestbook('guestbook-id');
```

### xAPI Client (External API)

```typescript
import { createXapiFiona } from 'fiona-client';

const xapiClient = createXapiFiona({
  baseUrl: 'https://yourorganisation-xapi.fiona-online.net/api',
  key: 'your-xapi-key',
});

// Access all xAPI endpoints with full type safety
const account = await xapiClient.account.getDetails('provider', 'external-id');
const appointments = await xapiClient.appointments.getByAccount('provider', 'external-id', 'guestbook-id');
```

## 📚 Complete API Coverage

### Fiona Client (Main API) - 15 Endpoints

| Endpoint | Methods | Description |
|----------|---------|-------------|
| `mutations` | 1 | System mutations and operations |
| `editionTypes` | 3 | Festival edition types management |
| `editions` | 4 | Individual edition management |
| `editionSections` | 4 | Edition sections and organization |
| `films` | 5 | Film management and details |
| `performances` | 4 | Performance and screening management |
| `compositions` | 2 | Film composition management |
| `locations` | 3 | Location and venue management |
| `schedules` | 3 | Schedule management |
| `persons` | 3 | Person and contact management |
| `companies` | 2 | Company management |
| `guestbooks` | 2 | Guestbook management |
| `volunteers` | 2 | Volunteer management |
| `lookups` | 2 | Lookup value management |
| `attachments` | 1 | File attachment management |

### xAPI Client - 31 Endpoints

| Endpoint | Methods | Description |
|----------|---------|-------------|
| `account` | 1 | Account details and authentication |
| `accreditations` | 18 | Accreditation and badge management |
| `appointments` | 2 | Appointment scheduling |
| `attachments` | 5 | File and media management |
| `companies` | 8 | Company management |
| `companyProfiles` | 2 | Company profile management |
| `customFields` | 5 | Custom field management |
| `deliveries` | 5 | Film delivery tracking |
| `editionTypesEditions` | 4 | Edition type and edition management |
| `entries` | 1 | Entry form management |
| `externalAccounts` | 4 | External authentication management |
| `filmControl` | 3 | Film control edition management |
| `filmFinanciers` | 5 | Film financing management |
| `filmPublicationPrivileges` | 5 | Film publication access control |
| `filmRecommendations` | 5 | Film recommendation management |
| `films` | 9 | Film management and credits |
| `forms` | 2 | Form management |
| `guestbooks` | 3 | Guestbook management |
| `invoices` | 3 | Invoice and billing management |
| `lookups` | 2 | Lookup value management |
| `people` | 10 | Person management and relations |
| `raidSets` | 3 | RAID set management |
| `receivedFilmScreeningCopies` | 6 | Screening copy management |
| `rsvpEvents` | 2 | RSVP event management |
| `schedules` | 3 | Schedule management |
| `screeningCopies` | 1 | Screening copy management |
| `shows` | 1 | Show management |
| `statusLists` | 1 | Status list management |
| `tags` | 1 | Tag management |
| `texts` | 1 | Text content management |
| `ticketInfo` | 1 | Ticket information |
| `volunteers` | 1 | Volunteer management |

## 🏗️ Architecture

### Type Safety
- **100% TypeScript coverage** with comprehensive interfaces
- **Inheritance patterns** using `extends` for related types
- **Discriminated unions** for owner types and lookup values
- **Full IntelliSense support** in modern IDEs

### Authentication
- **Fiona Client**: Uses `apikey` header
- **xAPI Client**: Uses `X-ApiKey` header
- **Environment-aware** configuration

### Error Handling
- **Robust HTTP error handling** via ofetch
- **Type-safe error responses**
- **Environment compatibility** (Node.js, browsers, edge runtimes)

## 🔧 Development

```bash
# Install dependencies
pnpm install

# Build the library
pnpm build

# Watch mode for development
pnpm dev


# Test (if available)
pnpm test
```

## 🌟 Features

- ✅ **Complete API Coverage** - 31 xAPI endpoints + 15 Fiona endpoints
- ✅ **Full Type Safety** - Comprehensive TypeScript interfaces
- ✅ **Modern ESM** - ES2022 modules for all environments
- ✅ **Universal Compatibility** - Node.js, browsers, Cloudflare Workers, Deno, Bun
- ✅ **Robust HTTP Client** - Powered by ofetch for reliable requests
- ✅ **URL Utilities** - UFO for advanced URL manipulation
- ✅ **Zero Dependencies** - Lightweight and fast
- ✅ **Production Ready** - Built with tsup for optimal performance

## 📖 Documentation

### API Reference
- **[Fiona Online API Documentation](https://fionaonlinexapi.docs.apiary.io/)** - Official API specification
- **TSDoc Comments** - Comprehensive inline documentation in the source code with @param and @returns tags

### Usage Examples
See the [Quick Start](#-quick-start) section above for basic usage examples.

## 📄 License

ISC

