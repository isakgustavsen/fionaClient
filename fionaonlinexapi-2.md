FORMAT: 1A
HOST: https://yourorganisation-xapi.fiona-online.net/api

# Fiona Online xAPI

Fiona Online offers an API to fetch and modify data. This document describes some basic essentials and all available endpoints.
Last updated date of this documentation: August 4th 2025

## Basic API information

The API is available at https://yourorganisation-xapi.fiona-online.net/api
or at https://yourorganisation-xapi.fiona-app.com/api, depending on your festival's settings.

## Authentication

To connect with our API, authentication is necessary. You authenticate via HTTP Basic Auth. On every request send the following header:

```
X-ApiKey:[X-ApiKey]
```

Your secret API key is for you only. Make sure you never expose it in any public website's client-side code. Also don't share it in publicly accessible areas like GitHub or Stack Overflow.

As you will see in the documentation below, API requests must be made over HTTPS. Calls you make over plain HTTP will fail and give you an error. API calls without authentication will also fail.

## Timezones
Fiona uses the [Internet Date/Time format](https://tools.ietf.org/html/rfc3339#section-5.6) to specify all dates and times: YYYYMMDDTHHmmssSSSZ, in UTC.
For example: 20170623T084620524Z

# Group Account information
In Fiona you can link external accounts (MyFestival accounts) to people. With an external account a filmmaker can login to the Fiona entry platform to fill out film and accreditation forms.
It is also possible to register viewer rights to an account, by adding the account to a group.

With the following endpoints you can retrieve information from Fiona based on this external account.

## Account details [/account/details/{providerName}/{externalIdentificationId}/]
E.g. `/account/details/{providerName}/{externalIdentificationId}`

Returns all available account groups for an account, based on the external account.

### Get on id [GET]

+ Parameters
    + providerName (string) - Name of the provider
    + externalIdentificationId (string) - External id of the account

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
            "AccountGroups": [
                {
                    "Description": "DOCS",
                    "Id": "4cd56176-551a-4206-aff1-e72008ba3434"
                },
            ],
            "Person": {
                "Address": {
                    "Address1": "Scheepmakershaven 32c",
                    "Address2": "",
                    "City": "Rotterdam",
                    "Country": {
                        "Key": "NL",
                        "Translations": [
                            {
                                "Abbreviation": null,
                                "Language": "nl",
                                "Text": "Nederland"
                            },
                            {
                                "Abbreviation": null,
                                "Language": "en",
                                "Text": "Netherlands, The"
                            }
                        ]
                    },
                    "PostalCode": "3011 VB",
                    "State": null
                },
                "AppliedCustomFieldOptions": [
                    {
                        "CustomField": "pe-code",
                        "Option": "evenementen_2017: opening 2 personen",
                        "SortOrder": 1
                    },
                ],
                "AppliedCustomFieldValues": [
                    {
                        "CustomField": "pe-don-datum",
                        "Value": "2016-12-13T01:00:00.0000000+01:00"
                    },
                    {
                        "CustomField": "pe-don-bedrag",
                        "Value": "40"
                    }
                ],
                "Companies": [
                    {
                        "Id": "a653bed5-3ffc-481d-8fc3-3affb4352427",
                        "Name": "Fiona Festival",
                        "Role": {
                            "Key": "producer",
                            "Translations": [
                                {
                                    "Abbreviation": null,
                                    "Language": "en",
                                    "Text": "Producer"
                                },
                                {
                                    "Abbreviation": null,
                                    "Language": "nl",
                                    "Text": "Producer"
                                }
                            ]
                        }
                    }
                ],
                "ContactDetails": [
                    {
                        "Id": "fd72fcbf-1a0b-41d6-b418-53c0be32799a",
                        "SubType": {
                            "Key": "Work",
                            "Translations": [
                                {
                                    "Abbreviation": "W",
                                    "Language": "nl",
                                    "Text": "Werk"
                                },
                                {
                                    "Abbreviation": "W",
                                    "Language": "en",
                                    "Text": "Work"
                                }
                            ]
                        },
                        "Type": {
                            "Key": "Email",
                            "Translations": [
                                {
                                    "Abbreviation": "E.",
                                    "Language": "nl",
                                    "Text": "E-mail"
                                },
                                {
                                    "Abbreviation": "E.",
                                    "Language": "en",
                                    "Text": "Email"
                                }
                            ]
                        },
                        "Value": "hello@fiona-festival.com"
                    },
                    {
                        "Id": "13b26451-292f-4062-823a-c738a1b85d95",
                        "SubType": {
                            "Key": "Work",
                            "Translations": [
                                {
                                    "Abbreviation": "W",
                                    "Language": "nl",
                                    "Text": "Werk"
                                },
                                {
                                    "Abbreviation": "W",
                                    "Language": "en",
                                    "Text": "Work"
                                }
                            ]
                        },
                        "Type": {
                            "Key": "Email",
                            "Translations": [
                                {
                                    "Abbreviation": "E.",
                                    "Language": "nl",
                                    "Text": "E-mail"
                                },
                                {
                                    "Abbreviation": "E.",
                                    "Language": "en",
                                    "Text": "Email"
                                }
                            ]
                        },
                        "Value": "digna@fiona-festival.com"
                    },
                    {
                        "Id": "b2f8372a-8004-4c59-b88c-a101fe9c49c9",
                        "SubType": {
                            "Key": "Work",
                            "Translations": [
                                {
                                    "Abbreviation": "W",
                                    "Language": "nl",
                                    "Text": "Werk"
                                },
                                {
                                    "Abbreviation": "W",
                                    "Language": "en",
                                    "Text": "Work"
                                }
                            ]
                        },
                        "Type": {
                            "Key": "Phone",
                            "Translations": [
                                {
                                    "Abbreviation": "P.",
                                    "Language": "en",
                                    "Text": "Phone"
                                },
                                {
                                    "Abbreviation": "T.",
                                    "Language": "nl",
                                    "Text": "Telefoon"
                                }
                            ]
                        },
                        "Value": "+31 10 280 11 11"
                    }
                ],
                "FirstName": "Digna",
                "Id": "45b48863-90f3-4196-b839-56e3d93df139",
                "LastName": "Nielen",
                "Prefix": "van",
                "Profession": {
                    "Key": "director",
                    "Translations": [
                        {
                            "Abbreviation": null,
                            "Language": "nl",
                            "Text": "director"
                        },
                        {
                            "Abbreviation": null,
                            "Language": "en",
                            "Text": "director"
                        }
                    ]
                }
            }
        }

## Account information [/account/{providerName}/{externalIdentification}/]
Returns all available groups for an account.

+ Parameters
    + providerName (string) - Name of the provider
    + externalIdentification (string) - External id of the account

### Get on id [GET]

+ Response 200 (application/json)

        [
          {
            "Description": "Group 1",
            "Id": "4cd56176-551a-4206-aff1-e72008ba3434"
          },
          {
            "Description": "Group 2",
            "Id": "6c341f19-34ce-4785-83e1-c6486d22d769"
          },
          {
            "Description": "Group 3",
            "Id": "c4f4b7e8-8b7a-4c1e-b646-a8a5d7d91338"
          }
        ]

## Accreditation information [/account/{providerName}/{externalIdentification}/guestbook/{guestbookId}/accreditation]
Returns the accrediation information within a guestbook for a specific account. Same information as accreditation on id.

+ Parameters
    + providerName (string) - Name of the provider
    + externalIdentification (string) - External id of the account
    + guestbookId (string) - Id of the guestbook

### Get on id [GET]

+ Response 200 (application/json)

            {
                "Accommodation": null,
                "AccommodationEndsOn": null,
                "AccommodationRemarks": null,
                "AccommodationStartsOn": null,
                "ArrivalFlightNumber": null,
                "ArrivalOn": null,
                "AvailabilityEndsOn": null,
                "AvailabilityStartsOn": null,
                "CompanyOnBadge": "3po LLP",
                "CostCenter": {
                    "Description": "-",
                    "Id": "134d6ebe-c093-4013-aa13-c3a082c26f4c"
                },
                "DepartureFlightNumber": null,
                "DepartureOn": null,
                "EmployerCompany": {
                    "Description": "3po LLP-",
                    "Id": "263986b4-7b19-4cab-8f04-618a22fb8e16"
                },
                "ExternalAccountId": "d57a6f5a-e47f-4535-a934-4cb5cbb10664",
                "FavoriteImageAttachment": {
                    "Category": 0,
                    "ContentType": null,
                    "CreatedOn": "2022-07-12T09:39:04.3523006+00:00",
                    "Id": "d30c41f6-df00-485c-ba7d-3aca2a372ad0",
                    "OriginalFileName": "13a0db22-97b1-4bcd-960b-83264f848e68.png",
                    "Password": null,
                    "SerialNumber": 0,
                    "Title": "13a0db22-97b1-4bcd-960b-83264f848e68.png",
                    "Type": {
                        "Description": "Image",
                        "Id": "233d9d0f-4020-43aa-9703-286cb21c6437"
                    },
                    "Value": "UzMBEABmaW9uYS1vbmxpbmUtZGV2NABhdHRhY2htZW50cy81OWU2OWIyNi02ODA5LTQ2YmItOTI4Yi02MjhkNDAyZDdmOGEucG5n"
                },
                "Films": [
                    {
                        "FinalRecommendation": {
                            "Key": "Selected",
                            "Translations": [
                                {
                                    "Abbreviation": "Sel.",
                                    "Language": "nl",
                                    "Text": "Geselecteerd"
                                },
                                {
                                    "Abbreviation": "Sel.",
                                    "Language": "en",
                                    "Text": "Selected"
                                },
                                {
                                    "Abbreviation": "Sel.",
                                    "Language": "ja",
                                    "Text": "Selected"
                                }
                            ]
                        },
                        "Description": "Citizen Kane",
                        "Id": "3e4d87e1-66a6-42aa-a58b-e499f4efc170"
                    }
                ],
                "Guestbook": {
                    "Description": "Guestbook 2021",
                    "Id": "a1c1bed1-9d27-482c-9494-ded936dfbffa"
                },
                "Id": "02b73a12-f523-4977-a6fd-e2b50b95059f",
                "InCompanyProfile": false,
                "InterpreterLanguage": {
                    "Description": "-",
                    "Id": "1473364c-ec98-4006-aac8-b5c3aff36b17"
                },
                "InvitedBy": {
                    "Description": "Erik van Wijk *",
                    "Id": "cc08cf0f-630f-4ea3-8708-182150b26e56"
                },
                "NameOnBadge": "Erik van Wijk *",
                "NoPublicationOfContactDetails": false,
                "Notes": null,
                "NumberOfNights": 2,
                "Person": {
                    "Description": "Erik van Wijk *",
                    "Id": "e7861c0a-cb4c-418b-a32b-cb691a2269ba"
                },
                "ProfessionOnBadge": null,
                "Status": {
                    "Description": "Pending",
                    "Id": "88168fcf-9465-493e-9120-e224cdafc070"
                },
                "StatusRemarks": null,
                "TransportMode": {
                    "Description": "Train",
                    "Id": "7e74bc24-1f26-40af-923e-b93acbf8fad4"
                },
                "TravelRemarks": null,
                "Type": {
                    "Description": "Guest",
                    "Id": "629c2f13-92c9-4eae-9cfd-b07473ddbf36"
                },
                "CreatedBy": {
                    "Description": "Erik van Wijk *",
                    "Id": "cc08cf0f-630f-4ea3-8708-182150b26e56"
                },
                "CreatedOn": "2021-02-24T14:52:15.6171053+00:00",
                "UpdatedBy": {
                    "Description": "Erik van Wijk *",
                    "Id": "cc08cf0f-630f-4ea3-8708-182150b26e56"
                },
                "UpdatedOn": "2022-07-13T21:49:45.6816052+00:00"
            }

## Volunteer information [/account/{providerName}/{externalIdentification}/volunteeredition/{volunteereditionId}/vollunteer]
Returns the volunteer information within a volunteer edition for a specific account. Same information as volunteer on id.

+ Parameters
    + providerName (string) - Name of the provider
    + externalIdentification (string) - External id of the account
    + volunteereditionId (string) - Id of the volunteer edition

### Get on id [GET]

+ Response 200 (application/json)

            {
                "AssignedPosition": {
                    "Description": "Box office",
                    "Id": "6946c0c6-cfa9-439a-80bb-750b3d944652"
                },
                "Badge": {
                    "Description": "Crew",
                    "Id": "5510683d-babd-4a5b-ae61-ec5b2c25f947"
                },
                "Extras": [],
                "HasDriversLicence": false,
                "Id": "8dd4643b-b774-491d-8414-e90308aa904a",
                "IsWillingToWorkMore": false,
                "Languages": [],
                "Person": {
                    "Description": "Erik van Wijk *",
                    "Id": "e7861c0a-cb4c-418b-a32b-cb691a2269ba"
                },
                "Remarks": null,
                "Status": {
                    "Description": "Volunteer",
                    "Id": "431b82d0-571d-4dfe-bb74-2197653356fe"
                },
                "VolunteerEdition": {
                    "Description": "Vrijwilligers 2022",
                    "Id": "796efb5a-7956-462b-869e-3f0e769d5c96"
                },
                "DietType": null,
                "DriversLicenseType": null,
                "ShirtSize": null,
                "FavoriteImageAttachment": {
                    "Category": 0,
                    "ContentType": null,
                    "CreatedOn": "2022-07-12T09:22:01.374638+00:00",
                    "Id": "3be39c82-d988-41fa-ab4b-ceb159a4f0a9",
                    "OriginalFileName": "13a0db22-97b1-4bcd-960b-83264f848e68.png",
                    "Password": null,
                    "SerialNumber": 0,
                    "Title": "13a0db22-97b1-4bcd-960b-83264f848e68.png",
                    "Type": {
                        "Description": "Image",
                        "Id": "233d9d0f-4020-43aa-9703-286cb21c6437"
                    },
                    "Value": "UzMBEABmaW9uYS1vbmxpbmUtZGV2NABhdHRhY2htZW50cy83ZTAxZDg1Yy01NzFhLTRiOGUtYWE0Yi1iYWY3OGQwNjgxOWQucG5n"
                },
                "CreatedBy": {
                    "Description": "Erik van Wijk *",
                    "Id": "cc08cf0f-630f-4ea3-8708-182150b26e56"
                },
                "CreatedOn": "2022-05-12T01:15:16.3225663+00:00",
                "UpdatedBy": {
                    "Description": "Erik van Wijk *",
                    "Id": "cc08cf0f-630f-4ea3-8708-182150b26e56"
                },
                "UpdatedOn": "2022-07-12T09:22:01.374638+00:00"
            }

## Appointments [/account/{providerName}/{externalIdentification}/guestbook/{guestbookId}/appointments]
Returns all appointments for an account, within a [guestbook](/#reference/guestbooks).

+ Parameters
    + providerName (string) - Name of the provider
    + externalIdentification (string) - External id of the account
    + guestbookId (guid) - Id of the [guestbook](/#reference/guestbooks)

### Get all [GET]

+ Response 200 (application/json)

        {
            "Accreditation": {
                "Description": "Digna van Nielen",
                "Id": "68492add-47f9-4f0e-a372-c53c95934f8a"
            },
            "AccreditationStatus": {
                "Key": "guest",
                "Translations": [
                    {
                        "Abbreviation": "Gast",
                        "Language": "nl",
                        "Text": "Gast"
                    },
                    {
                        "Abbreviation": "Guest",
                        "Language": "en",
                        "Text": "Guest"
                    },
                    {
                        "Abbreviation": "Guest",
                        "Language": "ja",
                        "Text": "Guest"
                    }
                ]
            },
            "WillAttendFestival": false,
            "WillAttendFromDifferentLocation": true,
            "WillAttentFestivalFromTimeZone": "America/New_York",
            "Appointments": [
                {
                    "AppointmentType": {
                        "Description": "Introduction",
                        "Id": "6b20f6af-2af6-48be-b636-145bf5a846e5"
                    },
                    "Guestbook": {
                        "Description": "Guestbook 2021",
                        "Id": "a1c1bed1-9d27-482c-9494-ded936dfbffa"
                    },
                    "StartsOn": "2021-10-15T10:15:00+00:00",
                    "EndsOn": "2021-10-15T10:30:00+00:00",
                    "FestivalOffset": {
                        "InMinutes": 60,
                        "InUtc": "UTC+00:00"
                    },
                    "GuestOffset": {
                        "InMinutes": -240,
                        "InUtc": "UTC-05:00"
                    },
                    "Id": "9dce9d55-209f-439b-a48b-9eb1fbf116c0",
                    "InternalNotes": null,
                    "InterpreterIsNeeded": false,
                    "InterpreterLanguage": {
                        "Description": "-",
                        "Id": "1473364c-ec98-4006-aac8-b5c3aff36b17"
                    },
                    "IsOnline": true,
                    "Location": {
                        "Description": "Cinerama 2",
                        "Id": "3e7c591a-bd76-44bf-9b86-024f71d061a6"
                    },
                    "Members": [
                        {
                            "CompanyName": "Fiona Festival",
                            "FavoriteImageAttachment": null,
                            "FullName": "Digna van Nielen",
                            "Role": {
                                "Key": "owner",
                                "Translations": [
                                    {
                                        "Abbreviation": null,
                                        "Language": "nl",
                                        "Text": "Eigenaar"
                                    },
                                    {
                                        "Abbreviation": null,
                                        "Language": "en",
                                        "Text": "Owner"
                                    },
                                    {
                                        "Abbreviation": null,
                                        "Language": "ja",
                                        "Text": "Owner"
                                    }
                                ]
                            },
                            "Offset": {
                                "InMinutes": -240,
                                "InUtc": "UTC-05:00"
                            }
                        },
                        {
                            "CompanyName": "3po LLP",
                            "FavoriteImageAttachment": null,
                            "FullName": "Roland van Putten",
                            "Role": {
                                "Key": "owner",
                                "Translations": [
                                    {
                                        "Abbreviation": null,
                                        "Language": "nl",
                                        "Text": "Eigenaar"
                                    },
                                    {
                                        "Abbreviation": null,
                                        "Language": "en",
                                        "Text": "Owner"
                                    },
                                    {
                                        "Abbreviation": null,
                                        "Language": "ja",
                                        "Text": "Owner"
                                    }
                                ]
                            },
                            "Offset": {
                                "InMinutes": 60,
                                "InUtc": "UTC+00:00"
                            }
                        }
                    ],
                    "OnlineMeetingIsEnabled": false,
                    "Subject": "Test",
                    "Table": null
                },
                {
                    "AppointmentType": {
                        "Description": "1 on 1",
                        "Id": "11de337f-57f7-4bd7-af97-5bd58ae3801a"
                    },
                    "Guestbook": {
                        "Description": "Guestbook 2021",
                        "Id": "a1c1bed1-9d27-482c-9494-ded936dfbffa"
                    },
                    "StartsOn": "2021-11-23T06:00:00+00:00",
                    "EndsOn": "2021-11-23T06:25:00+00:00",
                    "FestivalOffset": {
                        "InMinutes": 0,
                        "InUtc": "UTC+00:00"
                    },
                    "GuestOffset": {
                        "InMinutes": -300,
                        "InUtc": "UTC-05:00"
                    },
                    "Id": "ac872167-df9c-4087-8bc6-b9c17a2db0d2",
                    "InternalNotes": null,
                    "InterpreterIsNeeded": false,
                    "InterpreterLanguage": {
                        "Description": "-",
                        "Id": "1473364c-ec98-4006-aac8-b5c3aff36b17"
                    },
                    "IsOnline": true,
                    "Location": null,
                    "Members": [
                        {
                            "CompanyName": "Fiona Festival",
                            "FavoriteImageAttachment": null,
                            "FullName": "Digna van Nielen",
                            "Role": {
                                "Key": "decision-maker",
                                "Translations": [
                                    {
                                        "Abbreviation": "dm",
                                        "Language": "en",
                                        "Text": "Decision maker"
                                    },
                                    {
                                        "Abbreviation": "dm",
                                        "Language": "nl",
                                        "Text": "Decision maker"
                                    },
                                    {
                                        "Abbreviation": "dm",
                                        "Language": "ja",
                                        "Text": "Decision maker"
                                    }
                                ]
                            },
                            "Offset": {
                                "InMinutes": -300,
                                "InUtc": "UTC-05:00"
                            }
                        },
                        {
                            "CompanyName": "3po LLP",
                            "FavoriteImageAttachment": null,
                            "FullName": "Roland van Putten",
                            "Role": {
                                "Key": "project-representatives",
                                "Translations": [
                                    {
                                        "Abbreviation": "pv",
                                        "Language": "nl",
                                        "Text": "Project vertegenwoordiger"
                                    },
                                    {
                                        "Abbreviation": "pr",
                                        "Language": "en",
                                        "Text": "Project representatives"
                                    },
                                    {
                                        "Abbreviation": "pr",
                                        "Language": "ja",
                                        "Text": "Project representatives"
                                    }
                                ]
                            },
                            "Offset": {
                                "InMinutes": 0,
                                "InUtc": "UTC+00:00"
                            }
                        }
                    ],
                    "OnlineMeetingIsEnabled": false,
                    "Subject": "Citizen Kane",
                    "Table": null
                }
            ]
        }

## Contributor roles [/account/{providerName}/{externalIdentification}/show/{showId}/contributorroles]
Returns all contributor roles for an account, within a [show](/#reference/shows).

+ Parameters
    + providerName (string) - Name of the provider
    + externalIdentification (string) - External id of the account
    + showId (guid) - Id of the show

### Get all [GET]

+ Response 200 (application/json)

        [
            {
                "Key": "programmer",
                "Translations": [
                    {
                        "Abbreviation": "Pr.",
                        "Language": "en",
                        "Text": "Programmer"
                    },
                    {
                        "Abbreviation": "Pr.",
                        "Language": "nl",
                        "Text": "Programmeur"
                    }
                ]
            }
        ]

## Showpart appointment roles [/account/{providerName}/{externalIdentification}/showpart/{showPartId}/appointmentroles]
Returns all appointment roles for an account, within a show part

+ Parameters
    + providerName (string) - Name of the provider
    + externalIdentification (string) - External id of the account
    + showPartId (guid) - Id of the show part

### Get all [GET]

+ Response 200 (application/json)

        [
            {
                "Key": "dir",
                "Translations": [
                    {
                        "Abbreviation": "reg",
                        "Language": "nl",
                        "Text": "Regisseur"
                    },
                    {
                        "Abbreviation": "dir",
                        "Language": "en",
                        "Text": "Director"
                    }
                ]
            },
            {
                "Key": "decision-maker",
                "Translations": [
                    {
                        "Abbreviation": "dm",
                        "Language": "en",
                        "Text": "Decision maker"
                    },
                    {
                        "Abbreviation": "dm",
                        "Language": "nl",
                        "Text": "Decision maker"
                    }
                ]
            }
        ]

## Meeting Program participations [/account/{providerName}/{externalIdentification}/guestbook/{guestbookId}/meetingprogramparticipations]
Returns all (meeting) programs an account is participating in, within a [guestbook](/#reference/guestbooks).

+ Parameters
    + providerName (string) - Name of the provider
    + externalIdentification (string) - External id of the account
    + guestbookId (guid) - Id of the [guestbook](/#reference/guestbooks)

### Get all [GET]

+ Response 200 (application/json)

        {
            "Accreditation": {
                "Description": "Jacques-Rémy Girerd",
                "Id": "aaa65c98-be6a-4372-8882-f70da6d2be66"
            },
            "AccreditationStatus": {
                "Key": "guest",
                "Translations": [
                    {
                        "Abbreviation": "Gast",
                        "Language": "nl",
                        "Text": "Gast"
                    },
                    {
                        "Abbreviation": "Guest",
                        "Language": "en",
                        "Text": "Guest"
                    }
                ]
            },
            "AvailabilityFormsClosesOn": "2020-10-30T00:00:00+01:00",
            "AvailabilityFormsOpensOn": "2020-09-07T00:00:00+02:00",
            "Schedules": [
                {
                    "Id": "fc42b306-330d-4824-8eb4-b411c2d980bd",
                    "MeetingPrograms": [
                        {
                            "Id": "98c50bef-159e-440f-b7c4-ec64d7519946",
                            "MeetingRequestFormsClosesOn": "2020-10-29T13:00:00+00:00",
                            "MeetingRequestFormsOpensOn": "2020-09-13T22:00:00+00:00",
                            "Name": "Forum HUB"
                        },
                        {
                            "Id": "aeed5bc9-c75b-4c02-9e50-68ae17cde81a",
                            "MeetingRequestFormsClosesOn": "2020-10-30T05:00:00+00:00",
                            "MeetingRequestFormsOpensOn": "2020-09-14T14:00:00+00:00",
                            "Name": "Forum LAB"
                        }
                    ],
                    "Name": "Forum 2020"
                }
            ]
        }

## New project meeting request [/account/{providerName}/{externalIdentification}/meetingprogrammeetingrequest/{targetParticipationId}]
Create a new meeting request between the account and another guest or project.

+ Parameters
    + providerName (string) - Name of the provider
    + externalIdentification (string) - External id of the account
    + targetParticipationId (guid) - Id of the film project or accreditation the account wants to meet

### Set [POST]

+ Parameters
    + providerName (string) - Name of the provider
    + externalIdentification (string) - External id of the account
    + targetParticipationId (guid) - Id of the film project or accreditation the account wants to meet

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            {
                "Id": "75421e18-ffbf-4afa-b81c-c30cd72fc6cc",
                "SortOrder": 5,
                "SourceMeetingProgramParticipationId": "10e7410b-76fc-487b-8b5c-bf7adeeff411",
                "TargetMeetingProgramParticipationId": "76485703-3fa0-494b-bfb1-83b3bdd4e664"
            }

+ Response 200 (application/json)

# Group Accreditations

## All Accreditations on Guestbook id [/guestbook/{guestbookId}/accreditations]

Get all accreditations in a single guestbook

### Get all [GET]

+ Parameters
    + guestbookId (guid) - Id of the guestbook

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
                "createdOn": "2017-10-31T12:13:52.6789034+00:00",
                "updatedOn": "2017-11-03T09:02:15.2547938+00:00",
                "description": "Roland van Almere",
                "id": "801029f7-8810-4033-ba48-b2fc8c91f392"
            },
            {
                "createdOn": "2017-10-24T07:58:11.4543107+00:00",
                "updatedOn": "2017-10-24T08:16:29.2218814+00:00",
                "description": "Jan Klaassen",
                "id": "c687eea4-bf80-4b00-bb7d-dc1954667f6e"
            },
            {
                "createdOn": "2017-10-18T09:07:57.1619213+00:00",
                "updatedOn": "2017-11-03T09:01:59.3807344+00:00",
                "description": "Roland van Putten",
                "id": "fd5cab79-60a8-432c-b566-85029ee10515"
            }
        ]

## Accreditation [/accreditation]

`/accreditation`

Create an accreditation.

Note:

### Create an accreditation [POST /accreditation]

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            (same as the accreditation GET request body)

+ Response 200 (application/json)

        (same as the accreditation POST response body)

## Accreditation on id [/accreditation/{accreditationId}]

`/accreditation/{accreditationId}`

All details from one accreditation.

Get, update or delete an accreditation, based on the accreditation id.

Note:

To update an accreditation, always send the _complete_ accreditation object when you post a accreditation on id. All empty (or forgotten) fields will be emptied in the database.
It is currently _not_ possible to update external accounts for accreditations.

### Create an accreditation [POST /accreditation]

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            (same as the accreditation GET request body)

+ Response 200 (application/json)

        (same as the accreditation POST response body)

### Get accreditation [GET]

+ Parameters
    + accreditationId (guid) - Id of the accreditation

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

            {
                "Accommodation": null,
                "AccommodationEndsOn": null,
                "AccommodationRemarks": null,
                "AccommodationStartsOn": null,
                "ArrivalFlightNumber": null,
                "ArrivalOn": null,
                "AvailabilityEndsOn": null,
                "AvailabilityStartsOn": null,
                "CompanyOnBadge": "testbedrijf",
                "CostCenter": {
                    "Description": "-",
                    "Id": "134d6ebe-c093-4013-aa13-c3a082c26f4c"
                },
                "DepartureFlightNumber": null,
                "DepartureOn": null,
                "EmployerCompany": {
                    "Description": "testbedrijf",
                    "Id": "08f09e16-ecf5-4947-9f08-2823561e6ba8"
                },
                "ExternalAccountId": null,
                "FavoriteImageAttachment": {
                    "Category": 2,
                    "ContentType": null,
                    "CreatedOn": "2022-07-20T14:31:50.3879451+00:00",
                    "Id": "7800d889-30f5-4316-87a8-1787dc078ef1",
                    "OriginalFileName": "Digna.png",
                    "Password": null,
                    "SerialNumber": 0,
                    "Title": "Digna.png",
                    "Type": {
                        "Description": "Image",
                        "Id": "233d9d0f-4020-43aa-9703-286cb21c6437"
                    },
                    "Value": "UzMBEABmaW9uYS1vbmxpbmUtZGV2NABhdHRhY2htZW50cy82MzA0YmU3NC0wOWM5LTQyMzgtOGU5OC0yYThlYWYzOTNkODUucG5n"
                },
                "Films": [
                    {
                        "FinalRecommendation": {
                            "Key": "Selected",
                            "Translations": [
                                {
                                    "Abbreviation": "Sel.",
                                    "Language": "nl",
                                    "Text": "Geselecteerd"
                                },
                                {
                                    "Abbreviation": "Sel.",
                                    "Language": "en",
                                    "Text": "Selected"
                                },
                                {
                                    "Abbreviation": "Sel.",
                                    "Language": "ja",
                                    "Text": "Selected"
                                }
                            ]
                        },
                        "Description": "127 Heurs",
                        "Id": "a7a74176-8ed9-4de6-9186-3eb16ee9e45c"
                    },
                    {
                        "FinalRecommendation": {
                            "Key": "Research",
                            "Translations": [
                                {
                                    "Abbreviation": "Res.",
                                    "Language": "en",
                                    "Text": "Research"
                                },
                                {
                                    "Abbreviation": "Res.",
                                    "Language": "nl",
                                    "Text": "Research"
                                },
                                {
                                    "Abbreviation": "Res.",
                                    "Language": "ja",
                                    "Text": "Research"
                                }
                            ]
                        },
                        "Description": "127 Hours",
                        "Id": "6301173a-cb3c-48c1-be34-b18db4d71232"
                    },
                    {
                        "FinalRecommendation": {
                            "Key": "Selected",
                            "Translations": [
                                {
                                    "Abbreviation": "Sel.",
                                    "Language": "nl",
                                    "Text": "Geselecteerd"
                                },
                                {
                                    "Abbreviation": "Sel.",
                                    "Language": "en",
                                    "Text": "Selected"
                                },
                                {
                                    "Abbreviation": "Sel.",
                                    "Language": "ja",
                                    "Text": "Selected"
                                }
                            ]
                        },
                        "Description": "127 Hours",
                        "Id": "88507935-b1a3-4f2d-a100-3aee0aab2668"
                    },
                    {
                        "FinalRecommendation": {
                            "Key": "Selected",
                            "Translations": [
                                {
                                    "Abbreviation": "Sel.",
                                    "Language": "nl",
                                    "Text": "Geselecteerd"
                                },
                                {
                                    "Abbreviation": "Sel.",
                                    "Language": "en",
                                    "Text": "Selected"
                                },
                                {
                                    "Abbreviation": "Sel.",
                                    "Language": "ja",
                                    "Text": "Selected"
                                }
                            ]
                        },
                        "Description": "127 Hours",
                        "Id": "88507935-b1a3-4f2d-a100-3aee0aab2668"
                    },
                    {
                        "FinalRecommendation": {
                            "Key": "Research",
                            "Translations": [
                                {
                                    "Abbreviation": "Res.",
                                    "Language": "en",
                                    "Text": "Research"
                                },
                                {
                                    "Abbreviation": "Res.",
                                    "Language": "nl",
                                    "Text": "Research"
                                },
                                {
                                    "Abbreviation": "Res.",
                                    "Language": "ja",
                                    "Text": "Research"
                                }
                            ]
                        },
                        "Description": "127 Hours",
                        "Id": "d5b7c03b-2efe-44bf-be65-d817a0626a3f"
                    },
                    {
                        "FinalRecommendation": {
                            "Key": "Research",
                            "Translations": [
                                {
                                    "Abbreviation": "Res.",
                                    "Language": "en",
                                    "Text": "Research"
                                },
                                {
                                    "Abbreviation": "Res.",
                                    "Language": "nl",
                                    "Text": "Research"
                                },
                                {
                                    "Abbreviation": "Res.",
                                    "Language": "ja",
                                    "Text": "Research"
                                }
                            ]
                        },
                        "Description": "127 Hours",
                        "Id": "d5b7c03b-2efe-44bf-be65-d817a0626a3f"
                    },
                    {
                        "FinalRecommendation": {
                            "Key": "Selected",
                            "Translations": [
                                {
                                    "Abbreviation": "Sel.",
                                    "Language": "nl",
                                    "Text": "Geselecteerd"
                                },
                                {
                                    "Abbreviation": "Sel.",
                                    "Language": "en",
                                    "Text": "Selected"
                                },
                                {
                                    "Abbreviation": "Sel.",
                                    "Language": "ja",
                                    "Text": "Selected"
                                }
                            ]
                        },
                        "Description": "127 Hours",
                        "Id": "075a8bb7-bb3b-4bd7-8232-63a336d100d7"
                    },
                    {
                        "FinalRecommendation": {
                            "Key": "Selected",
                            "Translations": [
                                {
                                    "Abbreviation": "Sel.",
                                    "Language": "nl",
                                    "Text": "Geselecteerd"
                                },
                                {
                                    "Abbreviation": "Sel.",
                                    "Language": "en",
                                    "Text": "Selected"
                                },
                                {
                                    "Abbreviation": "Sel.",
                                    "Language": "ja",
                                    "Text": "Selected"
                                }
                            ]
                        },
                        "Description": "127 Hours",
                        "Id": "075a8bb7-bb3b-4bd7-8232-63a336d100d7"
                    },
                    {
                        "FinalRecommendation": {
                            "Key": "Selected",
                            "Translations": [
                                {
                                    "Abbreviation": "Sel.",
                                    "Language": "nl",
                                    "Text": "Geselecteerd"
                                },
                                {
                                    "Abbreviation": "Sel.",
                                    "Language": "en",
                                    "Text": "Selected"
                                },
                                {
                                    "Abbreviation": "Sel.",
                                    "Language": "ja",
                                    "Text": "Selected"
                                }
                            ]
                        },
                        "Description": "Test de credits",
                        "Id": "7458e510-3e29-4e64-a704-d38a4175d080"
                    },
                    {
                        "FinalRecommendation": {
                            "Key": "Research",
                            "Translations": [
                                {
                                    "Abbreviation": "Res.",
                                    "Language": "en",
                                    "Text": "Research"
                                },
                                {
                                    "Abbreviation": "Res.",
                                    "Language": "nl",
                                    "Text": "Research"
                                },
                                {
                                    "Abbreviation": "Res.",
                                    "Language": "ja",
                                    "Text": "Research"
                                }
                            ]
                        },
                        "Description": "Test Digna",
                        "Id": "4ee2b217-16af-47e2-86a1-8a53b1921a7e"
                    }
                ],
                "Guestbook": {
                    "Description": "Gastenboek 2022",
                    "Id": "fc3caf95-0322-4af8-810e-c2303e1bf369"
                },
                "Id": "d77e2d38-59aa-4b02-9780-3f4dc137f879",
                "InCompanyProfile": false,
                "InterpreterLanguage": {
                    "Description": "-",
                    "Id": "1473364c-ec98-4006-aac8-b5c3aff36b17"
                },
                "InvitedBy": {
                    "Description": "Digna van Niëlen *",
                    "Id": "9bb3e137-9556-40ea-a626-e252b134b289"
                },
                "NameOnBadge": "Digna van Nielen *",
                "NoPublicationOfContactDetails": true,
                "Notes": null,
                "NumberOfNights": 0,
                "Person": {
                    "Description": "Digna van Niëlen *",
                    "Id": "6bca9b32-c1b9-4171-987b-8321c614cc1b"
                },
                "ProfessionOnBadge": null,
                "Status": {
                    "Description": "Pending",
                    "Id": "88168fcf-9465-493e-9120-e224cdafc070"
                },
                "StatusRemarks": null,
                "TransportMode": {
                    "Description": "-",
                    "Id": "743d1d11-73c5-4b4e-9552-b7259f3d1392"
                },
                "TravelRemarks": null,
                "Type": null,
                "CreatedBy": {
                    "Description": "Digna van Niëlen *",
                    "Id": "9bb3e137-9556-40ea-a626-e252b134b289"
                },
                "CreatedOn": "2022-02-09T15:38:54.9121125+00:00",
                "UpdatedBy": {
                    "Description": "Digna van Niëlen *",
                    "Id": "9bb3e137-9556-40ea-a626-e252b134b289"
                },
                "UpdatedOn": "2022-07-20T14:31:53.8879271+00:00"
            }

### Update an accreditation [POST]

+ Parameters
    + accreditationId (guid) - Unique id of the accreditation

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            (same as the accreditation GET request body)

+ Response 200 (application/json)

        (same as the accreditation POST response body)

### Set External Identification [POST /accreditation/{accreditationId}/{providerName}/externalIdentification/{externalIdentification}]

+ Parameters
    + accreditationId (guid)
    + providerName
    + externalIdentification

+ Request

    + Headers

            X-ApiKey: [X-ApiKey]

### Delete an accreditation [DELETE]

+ Parameters
    + accreditationId (guid) - Unique id of the accreditation

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

## Badges [/accreditation/{accreditationId}/badges]

+ Attributes
  + (array)
    + guestbookBadge (object)
      + description
      + id
    + status (object)
      + description
      + id
    + productVariant (object)
      + description
      + id
    + id
    + code
    + voucherCode
    + feeType - *obsolete*
    + edition - *obsolete* will always return 'null'
    + badgeType - *obsolete*  will always return 'null'. Use guestbookBadge instead

### Get all on Accreditation Id [GET /accreditation/{accreditationId}/badges]

+ Parameters
    + accreditationId (guid) - Unique id of the accreditation

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
                "GuestbookBadge": {
                    "Description": "Industry badge",
                    "Id": "a66a8769-653e-417b-8890-b8798226178f"
                },
                "ProductVariant": {
                    "Description": "Regular",
                    "Id": "60fdc605-77e9-42be-a08b-55280539c9b8"
                },
                "Status": {
                    "Description": "Approved",
                    "Id": "e45a518a-4c5b-4317-b29e-6f26fdcd732e"
                },
                "Id": "e497ab0a-eddf-479d-a732-4509c1122424",
                "Code": "UTFNuTv9w3KB0Uzhw6B4NLKeQXUsth0mblSQ0AdTRK4",
                "VoucherCode": "46BJCKPGJ3",
                "Edition": null,
                "BadgeType": null,
                "FeeType": null
            },
            {
                "GuestbookBadge": {
                    "Description": "Press badge",
                    "Id": "e9fe87c7-2ebe-4a6b-97ff-46b0dffab90e"
                },
                "ProductVariant": {
                    "Description": "Accreditation (excl. VAT)",
                    "Id": "3961381d-585a-4c4d-a4d8-1cc74b12736d"
                },
                "Status": {
                    "Description": "Approved",
                    "Id": "e45a518a-4c5b-4317-b29e-6f26fdcd732e"
                },
                "Id": "0e5e2b37-a92e-4932-bf85-4da71f09cf79",
                "Code": null,
                "VoucherCode": null,
                "Edition": null,
                "BadgeType": null,
                "FeeType": null
            }
        ]

### Get all on external identification [GET /account/{providerName}/{externalIdentification}/guestbook/{guestbookId}/badges]

+ Parameters
    + providerName - The name of the authentication provider e.g. KeyCloak
    + externalIdentification - The unique id of the person within the authentication provider
    + guestbookId (Guid) - The unique id of the guestbook of the accreditation

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
          {
              "GuestbookBadge": {
                  "Description": "Festival badge",
                  "Id": "e464f1b6-2744-471f-afdf-c3edde165506"
              },
             "ProductVariant": {
                  "Description": "Accreditation (excl. VAT)",
                  "Id": "3961381d-585a-4c4d-a4d8-1cc74b12736d"
               },
              "Status": {
                  "Description": "Paid",
                  "Id": "95db8b0d-15b5-4f91-a6ee-bac942f77882"
              },
              "Id": "66562879-9c1f-487f-877e-cce1f19c6abb",
              "Code": "1234567890",
              "Edition": null,
              "BadgeType": null,
              "FeeType": null
          }
        ]
## Badge on id [/accreditation/{accreditationId}/badge/{badgeId}]

+ Attributes
  + guestbookBadge (object)
    + description
    + id
  + status (object)
    + description
    + id
  + code
  + VoucherCode
  + id
  + feeType - *obsolete*
  + edition - *obsolete* will always return 'null'
  + badgeType - *obsolete*  will always return 'null'. Use guestbookBadge instead

### Read [GET]

+ Parameters
    + accreditationId (guid) - Unique id of the accreditation
    + badgeId (guid) - Unique id of the badge

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
            "GuestbookBadge": {
                "Description": "Market badge 2021",
                "Id": "95f937ee-00b8-4402-9cde-1eda1ce7afd4"
            },
            "ProductVariant": {
                "Description": "Accreditation (excl. VAT)",
                "Id": "3961381d-585a-4c4d-a4d8-1cc74b12736d"
            },
            "Status": {
                "Description": "Paid",
                "Id": "95db8b0d-15b5-4f91-a6ee-bac942f77882"
            },
            "Id": "8e7f5e2c-746f-41ed-a7f9-d4b10c2f2a4b",
            "Code": "5896314",
            "VoucherCode": "46BJCKPGJ3",
            "Edition": null,
            "BadgeType": null,
            "FeeType": null
        }

### Update [POST]

+ Parameters
    + accreditationId (guid) - Unique id of the accreditation
    + badgeId (guid) - Unique id of the badge

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body
            {
                "GuestbookBadge": {
                    "Description": "Press badge",
                    "Id": "e9fe87c7-2ebe-4a6b-97ff-46b0dffab90e"
                },
                "ProductVariant": {
                    "Description": "Accreditation (excl. VAT)",
                    "Id": "3961381d-585a-4c4d-a4d8-1cc74b12736d"
                },
                "Status": {
                    "Description": "Approved",
                    "Id": "e45a518a-4c5b-4317-b29e-6f26fdcd732e"
                },
                "Id": "0e5e2b37-a92e-4932-bf85-4da71f09cf79",
                "Code": "123456",
                "VoucherCode": null
            }

+ Response 200 (application/json)

        (array of values the same as the GET response body)

### Delete [DELETE]

+ Parameters
    + accreditationId (guid) - Unique id of the accreditation
    + badgeId (guid) - Unique id of the badge

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

## Badge - add new [/accreditation/{accreditationId}/badge]

### Set [POST]

+ Parameters
    + accreditationId (guid) - Unique id of the accreditation

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            {
                "GuestbookBadge": {
                    "Id": "f4d78903-6c02-442f-9055-1a4b74f9d5f2"
                },
                "Code":"1234567"
            }

+ Response 200 (application/json)

        (array of values the same as the GET response body)

## Expenses [/accreditation/{accreditationId}/expenses]

All the extra expenses for an accreditation (not connected to a specific Travel or Stay).

### Read all [GET]

+ Parameters
    + accreditationId (guid) - Unique id of the accreditation

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
                "id": "d40479f4-e82b-4662-8729-d56432638bc6",
                "amount": 200.00,
                "costCenter": {
                    "description": "General",
                    "id": "afdcfd78-6f92-48b7-83e2-c05461abaf09"
                },
                "description": "First class upgrade",
                "festivalAmount": 50.00,
                "guestAmount": 150.00,
                "expenseType": {
                    "description": "Travel",
                    "id": "5fb454dd-b000-4c9f-be71-ffd6bfad03f4"
                }
            },
            {
                "id": "e57d0bed-aa7b-41fd-8387-a8fca04059c5",
                "amount": 5.00,
                "costCenter": {
                    "description": "General",
                    "id": "afdcfd78-6f92-48b7-83e2-c05461abaf09"
                },
                "description": "test",
                "festivalAmount": 3.00,
                "guestAmount": 2.00,
                "expenseType": {
                    "description": "Stay",
                    "id": "44fd533a-d027-4b70-939c-6d123011691c"
                }
            }
        ]

## Expense on id [/accreditation/{accreditationId}/expense/{expenseId}]

Get the details for a specific Expense for a guest.

### Read [GET]

+ Parameters
    + accreditationId (guid) - Unique id of the accreditation
    + expenseId (guid) - Unique id of the expense

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
            "Id": "d40479f4-e82b-4662-8729-d56432638bc6",
            "Amount": 200.00,
            "CostCenter": {
                "Description": "General",
                "Id": "afdcfd78-6f92-48b7-83e2-c05461abaf09"
            },
            "Description": "First class upgrade",
            "FestivalAmount": 50.00,
            "GuestAmount": 150.00,
            "ExpenseType": {
                "Description": "Travel",
                "Id": "5fb454dd-b000-4c9f-be71-ffd6bfad03f4"
            }
        }

## Stays [/accreditation/{accreditationId}/stays]

All the information about stays, including the costs per stay.

### Read all [GET]

+ Parameters
    + accreditationId (guid) - Unique id of the accreditation

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
                "id": "4b7ecb3d-e680-4579-a5bb-7bcd8789e2dd",
                "amountCorrection": 0.00,
                "bookingStatus": {
                    "description": "Concept",
                    "id": "5e39578d-efb1-4fb6-9925-676a6cdbf0af"
                },
                "breakfastType": {
                    "description": "Breakfast voucher",
                    "id": "28421ac4-58a6-4b55-aa3a-28331a707961"
                },
                "noShow": false,
                "dateFrom": "2019-11-18T00:00:00+01:00",
                "dateUntil": "2019-11-20T00:00:00+01:00",
                "remarks": "Still needs to be confirmed by guests",
                "room": {
                    "description": "Hotel 3 - Double",
                    "id": "02290a3f-d97a-434c-b794-7fd46ed74047"
                },
                "accreditations": [
                    {
                        "description": "Victoria Abril",
                        "id": "c47f038a-c5be-4782-be6e-2d7ec9e9bf0a"
                    },
                    {
                        "description": "Digna van Nielen",
                        "id": "d99fb8ac-0d29-4228-bb16-7fde7a7b3fd7"
                    }
                ],
                "expenses": [
                    {
                        "id": "913210fc-4162-48c7-b734-102dbd5f8190",
                        "amount": 95.00,
                        "amountFestival": 95.00,
                        "amountGuest": 0.0,
                        "costCenter": {
                            "description": "Festival",
                            "id": "401175a4-8727-45b9-b167-a63aee94d879"
                        },
                        "date": "2019-11-18T00:00:00+01:00",
                        "paidBy": null
                    },
                    {
                        "id": "a82ab4ec-c435-4cf2-9ae5-cdde7d8d7a42",
                        "amount": 95.00,
                        "amountFestival": 95.00,
                        "amountGuest": 0.0,
                        "costCenter": {
                            "description": "Festival",
                            "id": "401175a4-8727-45b9-b167-a63aee94d879"
                        },
                        "date": "2019-11-19T00:00:00+01:00",
                        "paidBy": null
                    }
                ],
                "roomUseType": {
                    "description": "Double",
                    "id": "c72b260e-81ec-4a72-98fa-db049c3af59a"
                }
            }
        ]

## Stay on id [/accreditation/{accreditationId}/stay/{stayId}]

Get the details for a specific Stay for a guest.

### Read [GET]

+ Parameters
    + accreditationId (guid) - Unique id of the accreditation
    + stayId (guid) - Unique id of the stay

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
            "id": "4b7ecb3d-e680-4579-a5bb-7bcd8789e2dd",
            "amountCorrection": 0.00,
            "bookingStatus": {
                "description": "Concept",
                "id": "5e39578d-efb1-4fb6-9925-676a6cdbf0af"
            },
            "breakfastType": {
                "description": "Breakfast voucher",
                "id": "28421ac4-58a6-4b55-aa3a-28331a707961"
            },
            "noShow": false,
            "dateFrom": "2019-11-18T00:00:00+01:00",
            "dateUntil": "2019-11-20T00:00:00+01:00",
            "remarks": "Still needs to be confirmed by guests",
            "room": {
                "description": "Hotel 3 - Double",
                "id": "02290a3f-d97a-434c-b794-7fd46ed74047"
            },
            "accreditations": [
                {
                    "description": "Victoria Abril",
                    "id": "c47f038a-c5be-4782-be6e-2d7ec9e9bf0a"
                },
                {
                    "description": "Digna van Nielen",
                    "id": "d99fb8ac-0d29-4228-bb16-7fde7a7b3fd7"
                }
            ],
            "expenses": [
                {
                    "id": "913210fc-4162-48c7-b734-102dbd5f8190",
                    "amount": 95.00,
                    "amountFestival": 95.00,
                    "amountGuest": 0.0,
                    "costCenter": {
                        "description": "Festival",
                        "id": "401175a4-8727-45b9-b167-a63aee94d879"
                    },
                    "date": "2019-11-18T00:00:00+01:00",
                    "paidBy": null
                },
                {
                    "id": "a82ab4ec-c435-4cf2-9ae5-cdde7d8d7a42",
                    "amount": 95.00,
                    "amountFestival": 95.00,
                    "amountGuest": 0.0,
                    "costCenter": {
                        "description": "Festival",
                        "id": "401175a4-8727-45b9-b167-a63aee94d879"
                    },
                    "date": "2019-11-19T00:00:00+01:00",
                    "paidBy": null
                }
            ],
            "roomUseType": {
                "description": "Double",
                "id": "c72b260e-81ec-4a72-98fa-db049c3af59a"
            }
        }

## Travels [/accreditation/{accreditationId}/travels]

All the Travels for a guest, including the costs per travel.

### Read all [GET]

+ Parameters
    + accreditationId (guid) - Unique id of the accreditation

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
                "id": "bc5cecb2-a918-4fe1-b59a-d9e20f5334bf",
                "amount": 200.00,
                "amountFestival": 100.00,
                "amountGuest": 100.00,
                "costCenter": {
                    "description": "General",
                    "id": "afdcfd78-6f92-48b7-83e2-c05461abaf09"
                },
                "costRemarks": "Shared costs 50/50",
                "flightNumber": "KL661",
                "generalRemarks": "Guest needs to be picked up from the airport with luggage!",
                "hasCheckedLuggage": true,
                "location": {
                    "description": "Schiphol",
                    "id": "407aaeea-33d7-49f9-bee5-2a10cafc4243"
                },
                "transferType": {
                    "description": "Car service",
                    "id": "54448201-2582-4ade-8406-be4e86fe5819"
                },
                "transportMode": {
                    "description": "Flight",
                    "id": "6e42c537-9878-4b32-a0e6-fc4c5f0e14ee"
                },
                "travelDate": "2019-08-13T22:00:00+00:00",
                "travelType": {
                    "description": "Arrival",
                    "id": "a2993dc3-81f3-4dac-b949-06f01974f67f"
                }
            },
            {
                "id": "bb8d3db6-0e65-42bd-a6ad-0c128a2f6d19",
                "amount": 300.00,
                "amountFestival": 250.00,
                "amountGuest": 50.00,
                "costCenter": {
                    "description": "Industry",
                    "id": "a57b5680-353b-435d-8392-8c62f2c7324e"
                },
                "costRemarks": null,
                "flightNumber": null,
                "generalRemarks": null,
                "hasCheckedLuggage": false,
                "location": null,
                "transferType": null,
                "transportMode": null,
                "travelDate": "2019-12-14T00:00:00+01:00",
                "travelType": {
                    "description": "Departure",
                    "id": "5e44cf01-d746-4673-99b8-1eae5d656621"
                }
            }
        ]

## Travel on id [/accreditation/{accreditationId}/travel/{travelId}]

Get the details for a specific Travel for a guest.

### Read [GET]

+ Parameters
    + accreditationId (guid) - Unique id of the accreditation
    + travelId (guid) - Unique id of the travel

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

            {
                "id": "bc5cecb2-a918-4fe1-b59a-d9e20f5334bf",
                "amount": 200.00,
                "amountFestival": 100.00,
                "amountGuest": 100.00,
                "costCenter": {
                    "description": "General",
                    "id": "afdcfd78-6f92-48b7-83e2-c05461abaf09"
                },
                "costRemarks": "Shared costs 50/50",
                "flightNumber": "KL661",
                "generalRemarks": "Guest needs to be picked up from the airport with luggage!",
                "hasCheckedLuggage": true,
                "location": {
                    "description": "Schiphol",
                    "id": "407aaeea-33d7-49f9-bee5-2a10cafc4243"
                },
                "transferType": {
                    "description": "Car service",
                    "id": "54448201-2582-4ade-8406-be4e86fe5819"
                },
                "transportMode": {
                    "description": "Flight",
                    "id": "6e42c537-9878-4b32-a0e6-fc4c5f0e14ee"
                },
                "travelDate": "2019-08-13T22:00:00+00:00",
                "travelType": {
                    "description": "Arrival",
                    "id": "a2993dc3-81f3-4dac-b949-06f01974f67f"
                }
            }

# Group Appointments

## All Appointments on Guestbook id [/guestbook/{guestbookId}/appointments?isOnline={isOnline}&appointmentTypeKey={appointmentTypeKey}&appointmentTypeId={appointmentTypeId}]

Get all appointments in a single guestbook

### Get all [GET]

+ Parameters
    + guestbookId (guid) - Id of the guestbook
    + isOnline (optional, boolean) - Set to true to filter the results on appointments that are online
    + appointmentTypeId (optional, guid) - The id of the appoinment type to filter the results on, supersedes appointmentTypeKey
    + appointmentTypeKey (optional, string) - The key of the appointment type to filter the results on, is superseded bij appointmentTypeId

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
                "Id": "924422b6-fe83-404c-a032-2021a9cdc832",
                "AppointmentType": {
                "Key": "industry",
                "Translations": [
                    {
                        "Abbreviation": "Indus.",
                        "Language": "en",
                        "Text": "Industry"
                    }
                ]
            },
                "Subject": "Testafspraak rapporten",
                "StartsOn": "2022-09-07T14:00:00+00:00",
                "EndsOn": "2022-09-07T14:15:00+00:00",
                "IsOnline": false,
                "Location": {
                     "Description": "Schiphol airport",
                     "Id": "c9577b07-9523-4e33-be64-4b6ae25c424f"
                 },
                "Participants": [
                    {
                        "Id": "53b19c28-1400-45c7-ae44-db9943cd2689",
                        "PersonFullName": "Jane Doe",
                        "ExternalIdentification": "f9b5ddbd-86f3-40e1-bc65-43139b83138f"
                    }
                ]
            },
            {
                "Id": "11d07fa5-6bd5-4a90-87f1-94b750391269",
                "AppointmentType": {
                    "Key": "industry",
                    "Translations": [
                        {
                            "Abbreviation": "Indus.",
                            "Language": "en",
                            "Text": "Industry"
                        }
                    ]
                },
                "Subject": "Industry",
                "StartsOn": "2023-09-06T13:00:00+00:00",
                "EndsOn": "2023-09-06T15:30:00+00:00",
                "IsOnline": true,
                "Participants": [
                    {
                        "Id": "493f0231-771a-45c5-9a7f-60ad0bf86a68",
                        "PersonFullName": "Tom Cruise",
                        "ExternalIdentification": null
                    },
                    {
                        "Id": "21db5304-7a8c-4d2f-8ab9-a60f2ac5b73f",
                        "PersonFullName": "Miles Teller",
                        "ExternalIdentification": null
                    },
                    {
                        "Id": "5f387b10-06bc-4662-8a55-43acb5a60af0",
                        "PersonFullName": "Joseph Kosinski",
                        "ExternalIdentification": null
                    },
                    {
                        "Id": "2bb54740-bf43-4573-96da-d87214361607",
                        "PersonFullName": "Jim Cash",
                        "ExternalIdentification": null
                    }
                ]
            }
        ]

# Group Attachments

## Introduction

You can get, create, update and delete attachments for the following ownerTypes:
+ film
+ accreditation
+ volunteer
+ filmscreeningcopy
+ person
<!-- + TO DO company profile, attachments and media only)-->
<!-- + TO DO show, attachments and media only)-->

An attachment has a category (int) which defines where the attachment appears:
+ 0 = in the attachments section (documents, stills, links, text memo, hardcopy attachments)
+ 1 = in the preview section (videolinks to YouTube or Vimeo, with password if neccessairy)
+ 2 = in the publication media section (all media you want to publish)

Some attachment types are not allowed in each category.
All the AttachmentTypes can be found through [the lookup value - AttachmentTypes](#reference/lookups/lookup-values-on-id)

## All attachments for owner [/{ownerType}/{ownerTypeId}/attachments]

E.g.: `/film/{filmId}/attachments`

To get all the available attachments for a specific film or accreditation.

### Read all [GET]

+ Parameters
    + ownerType (string) - Type of the owner
    + ownerTypeId (guid) - Unique id of the owner

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
                "category": 0,
                "contentType": null,
                "createdOn": "2017-10-16T14:30:32.0676255+00:00",
                "id": "404713ab-f65c-433f-9ccc-6959b8a667d8",
                "originalFileName": "Linkedin-banner-persoon.png",
                "password": null,
                "serialNumber": 0,
                "title": "Linkedin-banner-persoon.png",
                "type": {
                    "description": "Image",
                    "id": "233d9d0f-4020-43aa-9703-286cb21c6437"
                },
                "value": "UzMBEABmaW9uYS1vbmxpbmUtZGV2NABhdHRhY2htZW50cy85NGFjOThlYi01YWNkLTQxYTMtODdiMy01MDA1NWNlNTgxOTMucG5n"
            },
            {
                "category": 0,
                "contentType": null,
                "createdOn": "2017-10-18T09:55:09.2662315+00:00",
                "id": "65d6c8b9-713a-4f35-ba60-58fe0f125405",
                "originalFileName": null,
                "password": null,
                "serialNumber": 0,
                "title": "Website link",
                "type": {
                    "description": "URL",
                    "id": "7ed1af6a-20cd-4c41-860d-0591389b582c"
                },
                "value": "https://www.fiona-festival.com"
            }
        ]

## Attachment details [/{ownerType}/{ownerId}/attachment/{attachmentId}]

E.g.: `/film/{filmId}/attachment/{attachmentId}`

+ Attributes
    + category (number) - 0 for attachments, 1 for previews, 2 for publication media
    + contentType (object) - To define the type of content [lookup value - AttachmentContentType](#reference/lookups/lookup-values-on-id)
    + createdOn - Created date
    + id - Unique id of the attachment
    + originalFileName - Original file name of a document or image
    + password - Password of a preview link
    + serialNumber - Sort order
    + title - Title of the attachment
    + type (object) - Type of attachment [lookup value - AttachmentType](#reference/lookups/lookup-values-on-id)
    + value - The link, memo, token of the image or file, et cetera

### Read [GET]

+ Parameters
    + ownerType (string) - Type of the owner (film or accreditation)
    + ownerId (guid) - Unique id of the owner
    + attachmentId (guid) - Unique id of the attachment

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
            "category": 0,
            "contentType": null,
            "createdOn": "2017-10-16T14:30:32.0676255+00:00",
            "id": "404713ab-f65c-433f-9ccc-6959b8a667d8",
            "originalFileName": "Linkedin-banner-persoon.png",
            "password": null,
            "serialNumber": 0,
            "title": "Linkedin-banner-persoon.png",
            "type": {
                "description": "Image",
                "id": "233d9d0f-4020-43aa-9703-286cb21c6437"
            },
            "value": "UzMBEABmaW9uYS1vbmxpbmUtZGV2NABhdHRhY2htZW50cy85NGFjOThlYi01YWNkLTQxYTMtODdiMy01MDA1NWNlNTgxOTMucG5n"
        }

### Update [POST]

+ Parameters
    + ownerType (string) - Type of the owner (film or accreditation)
    + ownerId (guid) - Unique id of the owner
    + attachmentId (guid) - Unique id of the attachment

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            (array of values the same as the GET response body)

+ Response 200 (application/json)

        (array of values the same as the GET response body)

### Delete [DELETE]

+ Parameters
    + ownerType (string) - Type of the owner (film or accreditation)
    + ownerId (guid) - Unique id of the owner
    + attachmentId (guid) - Unique id of the attachment

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

## Create new attachment [/{ownerType}/{ownerTypeId}/attachment]

E.g.: `/film/{filmId}/attachment`

To create a new attachment for a film or accreditation, use this endpoint. When you create an attachment, you do not use the {attachmentId} in the call or in the body.
In the response, you will get an id for the attachment.

Note:
If the attachment is a document or image, you need to [upload it first](#reference/attachments/upload-file). You can use the token in the response as value to create a new attachment.

+ Attributes
    + category (number) - 0 for attachments, 1 for previews, 2 for publication media
    + contentType (object) - To define the type of content [lookup value - AttachmentContentType](#reference/lookups/lookup-values-on-id)
    + createdOn - You can leave this empty, it will be filled out in response
    + id - You can leave this empty, it will be filled out in response
    + originalFileName - Original file name of a document or image
    + password - Password of a preview link
    + title - Title of the attachment
    + type (object) - Type of attachment [lookup value - AttachmentType](#reference/lookups/lookup-values-on-id)
    + value - The link, memo, token of the image or file, et cetera

### Create [POST]

+ Parameters
    + ownerType (string) - Type of the owner (film or accreditation)
    + ownerTypeId (guid) - Unique id of the owner (film or accreditation)

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            {
                "category": 2,
                "contentType": null,
                "createdOn": "",
                "id": "",
                "originalFileName": "filmstill.jpg",
                "password": null,
                "serialNumber": 0,
                "title": "Filmstill Reservoir Dogs",
                "type": {
                    "id": "233d9d0f-4020-43aa-9703-286cb21c6437"
                },
                "value": "UzMBEABmaW9uYS1vbmxpbmUtZGV2NABhdHRhY2htZW50cy9kMmI3ZWUxMC1kMjhkLTQyYzgtODdmZC1kOTJjNzRhNzg1NDYucG5n"
            }

+ Response 200 (application/json)

        {
            "category": 2,
            "contentType": null,
            "createdOn": "2017-10-16T14:38:55.4455288+00:00",
            "id": "23f585cd-45e9-4f64-93ba-f20c8ce34ae0",
            "originalFileName": "filmstill.jpg",
            "password": null,
            "serialNumber": 0,
            "title": "Filmstill Reservoir Dogs",
            "type": {
                "description": "Image",
                "id": "233d9d0f-4020-43aa-9703-286cb21c6437"
            },
            "value": "UzMBEABmaW9uYS1vbmxpbmUtZGV2NABhdHRhY2htZW50cy9kMmI3ZWUxMC1kMjhkLTQyYzgtODdmZC1kOTJjNzRhNzg1NDYucG5n"
        }

## Upload file [/attachment]

Before you can add a file as an attachment to a film or accreditation, you need to upload the file first.

### Create [POST]

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            (form-data file upload)

+ Response 200 (application/json)

        {
            "category": 2,
            "contentType": null,
            "createdOn": "2017-10-16T14:38:55.4455288+00:00",
            "id": "b0369cb7-2841-4cfc-82e0-8ecfc6a66b88",
            "originalFileName": "linkedin-banner.jpg",
            "password": null,
            "serialNumber": 0,
            "title": "test digna",
            "type": {
                "id": "233d9d0f-4020-43aa-9703-286cb21c6437"
            },
            "value": "UzMBEABmaW9uYS1vbmxpbmUtZGV2NABhdHRhY2htZW50cy9kMmI3ZWUxMC1kMjhkLTQyYzgtODdmZC1kOTJjNzRhNzg1NDYucG5n"
        }

## Attachment Url [/attachment/{token}]
Documents are not stored in Fiona, but in Amazon. An attachment returns a token, which you can use in a temporary url. This url is valid for 15 minutes, to download the image or document from Amazon.

### Get for token [GET]
+ Parameters
    + token (string) - Token as received in the value property of an attachment.

+ Response 200 (text/plain)

        {
            "accessUrl": "https://fiona-online-dev.s3.eu-central-1.amazonaws.com/attachments/94ac98eb-5acd-41a3-87b3-50055ce58193.png?X-Amz-Expires=518400&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIAKK7FM25UT24UJQ/20171214/eu-central-1/s3/aws4_request&X-Amz-Date=20171214T141459Z&X-Amz-SignedHeaders=host&X-Amz-Signature=59621a57c7f11b494f411f6db4ca48e61dbc1743c1d8a42e7dffd353fb5e6f67"
        }

# Group Companies

## Introduction

A company in Fiona contains some information, like name and address. A company can be added to a film as a [film credit](#reference/film-credits),
or can be added to a [guestbook](https://fionaonlinexapi.docs.apiary.io/#reference/guestbooks) with a company profile .

You cannot search on companies in the API.

## Existing company [/company/{companyId}]

Get all the available information of a company

+ Attributes
    + id - Unique id of the company
    + address (address) - Private address of the company
    + mailingLanguage
    + name
    + tags - Empty array, not in use
    + vatNumber - VAT for billing
    + yearOfFoundation (number)

### Read [GET]

+ Parameters
    + companyId - Unique id of the company

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
            "id": "com21bfd932-a849-45f3-8c5e-cdabf2f06abfpany",
            "address": {
                "address1": "Scheepmakershaven 32c",
                "address2": null,
                "city": null,
                "country": {
                    "description": "Netherlands",
                    "id": "4d4661c4-0fbd-493b-a790-1d6011ac0f46"
                },
                "postalCode": null,
                "state": null
            },
            "mailingLanguage": "en",
            "name": "Fiona BV",
            "tags": [],
            "vatNumber": null,
            "yearOfFoundation": 0
        }

### Update [POST]

+ Parameters
    + id - Unique id of the company

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
            "id": "com21bfd932-a849-45f3-8c5e-cdabf2f06abfpany",
            "address": {
                "address1": "Scheepmakershaven 32c",
                "address2": null,
                "city": null,
                "country": {
                    "description": "Netherlands",
                    "id": "4d4661c4-0fbd-493b-a790-1d6011ac0f46"
                },
                "postalCode": null,
                "state": null
            },
            "mailingLanguage": "en",
            "name": "Fiona BV",
            "tags": [],
            "vatNumber": null,
            "yearOfFoundation": 0
        }

### Delete [DELETE]

+ Parameters
    + id - Unique id of the company

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

## All communication items for a company [/company/{companyId}/communicationItems]

Communication items are available for both people and companies. An item is defined by two lookup values: a communicationItemType and communicationItemSubType.

The available communicationItemTypes are:
+ unknown
+ phone
+ email
+ online

The communicationItemSubType is only applicable in the context a given communicationItemType. For each subType, a groupId has been given. This groupId refers to the id of a communicationItemType.

+ Attributes
    + company - Unique id and description the company.
    + id - Unique id of the communication item
    + isDefault (boolean) - If true, the communication item is the default phone / email / online address
    + notes
    + sortOrder (number)
    + subType (lookupValue)
    + type (lookupValue)
    + value - Phone number, email address or online address

### Read all [GET]

+ Parameters
    + companyId - Unique id of the company

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
                "company": {
                    "description": "Fiona BV",
                    "id": "21bfd932-a849-45f3-8c5e-cdabf2f06abf"
                },
                "id": "092edaa3-d31a-4654-89d2-060dc94b8c48",
                "isDefault": false,
                "notes": "this is an example",
                "sortOrder": 0,
                "subType": {
                    "description": "Work",
                    "id": "8ae48193-3f7e-4420-ab2a-aa2f27ed1bbc"
                },
                "type": {
                    "description": "Email",
                    "id": "ebff119f-b1e3-426e-bd72-b117265fb8da"
                },
                "value": "hello@fiona-festival.com"
            }
        ]

## Existing communication item on id [/company/{companyId}/communicationItem/{communicationItemId}]

### Read [GET]

+ Parameters
    + companyId - Unique id of the company
    + communicationItemId - Unique id of the communication item

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
            "company": {
                "description": "Fiona BV",
                "id": "21bfd932-a849-45f3-8c5e-cdabf2f06abf"
            },
            "id": "092edaa3-d31a-4654-89d2-060dc94b8c48",
            "isDefault": false,
            "notes": "this is an example",
            "sortOrder": 0,
            "subType": {
                "description": "Work",
                "id": "8ae48193-3f7e-4420-ab2a-aa2f27ed1bbc"
            },
            "type": {
                "description": "Email",
                "id": "ebff119f-b1e3-426e-bd72-b117265fb8da"
            },
            "value": "hello@fiona-festival.com"
        }

### Update [POST]

+ Parameters
    + companyId - Unique id of the company
    + communicationItemId - Unique id of the communication item

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            {
                "company": {
                    "description": "Fiona BV",
                    "id": "21bfd932-a849-45f3-8c5e-cdabf2f06abf"
                },
                "id": "092edaa3-d31a-4654-89d2-060dc94b8c48",
                "isDefault": true,
                "notes": "this is an example",
                "sortOrder": 0,
                "subType": {
                    "description": "Work",
                    "id": "8ae48193-3f7e-4420-ab2a-aa2f27ed1bbc"
                },
                "type": {
                    "description": "Email",
                    "id": "ebff119f-b1e3-426e-bd72-b117265fb8da"
                },
                "value": "hello@fiona-festival.com"
            }

+ Response 200 (application/json)

            {
                "company": {
                    "description": "Fiona BV",
                    "id": "21bfd932-a849-45f3-8c5e-cdabf2f06abf"
                },
                "id": "092edaa3-d31a-4654-89d2-060dc94b8c48",
                "isDefault": true,
                "notes": "this is an example",
                "sortOrder": 0,
                "subType": {
                    "description": "Work",
                    "id": "8ae48193-3f7e-4420-ab2a-aa2f27ed1bbc"
                },
                "type": {
                    "description": "Email",
                    "id": "ebff119f-b1e3-426e-bd72-b117265fb8da"
                },
                "value": "hello@fiona-festival.com"
            }

### Delete [DELETE]

+ Parameters
    + companyId - Unique id of the company
    + communicationItemId - Unique id of the communication item

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

## Add new communication item [/company/{companyId}/communicationItem]

### Create [POST]

+ Parameters
    + companyId - Unique id of the company

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            {
                "company": {
                    "description": "Fiona BV",
                    "id": "21bfd932-a849-45f3-8c5e-cdabf2f06abf"
                },
                "isDefault": false,
                "notes": "this is an example",
                "sortOrder": 0,
                "subType": {
                    "description": "Work",
                    "id": "8ae48193-3f7e-4420-ab2a-aa2f27ed1bbc"
                },
                "type": {
                    "description": "Phone",
                    "id": "a409fe44-1448-42ff-a902-2d7149fb7efb"
                },
                "value": "31102801111"
            }

+ Response 200 (application/json)

        {
            "company": {
                "description": "Fiona BV",
                "id": "21bfd932-a849-45f3-8c5e-cdabf2f06abf"
            },
            "id": "3d219bc8-6be7-4f62-a2ec-9e27b204c4b3",
            "isDefault": false,
            "notes": "this is an example",
            "sortOrder": 0,
            "subType": {
                "description": "Work",
                "id": "8ae48193-3f7e-4420-ab2a-aa2f27ed1bbc"
            },
            "type": {
                "description": "Phone",
                "id": "a409fe44-1448-42ff-a902-2d7149fb7efb"
            },
            "value": "31102801111"
        }

# Group Company profiles

## All Company profiles on Guestbook id [/guestbook/{guestbookId}/companyProfiles]

Get all Company profiles in a single guestbook

### Get all [GET]

+ Parameters
    + guestbookId (guid) - Id of the guestbook

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
                "createdOn": "2017-10-28T10:52:02.3875829+00:00",
                "updatedOn": "2017-10-31T10:09:12.6124971+00:00",
                "description": "3po LLP",
                "id": "882cfdb7-cfb4-4ace-bd28-ffdcc49d26cb"
            },
            {
                "createdOn": "2017-10-30T09:16:59.1867147+00:00",
                "updatedOn": "2017-10-31T15:36:49.5079942+00:00",
                "description": "Nederlands Film Festival",
                "id": "46552e06-0baa-42ff-bcea-6c61fa0937d7"
            },
            {
                "createdOn": "2017-10-31T10:22:31.8224517+00:00",
                "updatedOn": "2017-10-31T14:11:19.8800949+00:00",
                "description": "gemeente rotterdam",
                "id": "7c2895c0-f199-4897-bfe6-2383bef21239"
            },
        ]

## Company profile on id [/companyProfile/{companyProfileId}]

All details from one company profile.

### Get one on id [GET]

+ Parameters
    + companyProfileId (guid) - Id of the company profile

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
            "id": "882cfdb7-cfb4-4ace-bd28-ffdcc49d26cb",
            "company": {
                "description": "3po LLP",
                "Iid": "ecf6db77-32d4-466d-9122-39e6ff38ef97"
            },
            "companyFocus": [
                {
                    "description": "Documentaries",
                    "id": "c995f6f6-ba0a-454b-ab91-99bddf8d8b42"
                }
            ],
            "guestbook": {
                "description": "Guestbook IFFR test",
                "id": "a9c97cb6-988a-4485-8880-eb3d58171490"
            },
            "mainTerritories": [
                {
                    "description": "Latin America",
                    "id": "5a9d247f-8a11-4d52-b0b6-eefe36d87f1b"
                }
            ],
            "mainWorkingSector": {
                "description": "Distribution",
                "id": "babc4fc2-39aa-4975-87b9-8d959aac3276"
            },
            "otherWorkingSectors": [
                {
                    "description": "TV-acquisitions",
                    "id": "5d98fe2c-61fb-451f-926d-bcae61c66f3f"
                },
                {
                    "description": "Festival / Market",
                    "id": "90470977-9c01-4372-91c6-a54af75a784f"
                }
            ]
        }

# Group Custom Fields

## Introduction

For several entities in Fiona custom fields are available. These custom fields can be defined in Fiona. Through this API you can read, update and delete the values of these custom fields.

The following ownerTypes are available:
+ film
+ accreditation
+ company
+ person
+ show

## Custom field definitions [/{ownerType}/customfields]

E.g.: `/film/customfields`

First; you need to know which custom fields are available. You learn this through this endpoint.

+ Attributes
    + editionType (object) - Description and unique id of the editionType, this custom field belongs to. Only relevant for film
    + id - Unique id of the custom field
    + key - Key to recognize the custom field
    + options (array) - Only filled if the type is select or multiselect.
    + type (object) - Type of custom field [(lookup value - CustomFieldType)](#reference/lookups/lookup-values-on-id)

### Read all [GET]

+ Parameters
    + ownerType (string) - Type of the owner (film or accreditation)

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
                "editionType": {
                    "description": "IDFA",
                    "id": "062db1a5-924d-492d-9f6a-ad757b4a0def"
                },
                "id": "df50ecfe-86ce-404c-a500-34a052e1835a",
                "key": "film-production-details-single-select",
                "options": [
                    {
                        "id": "87feca56-6f09-4d18-872d-4a0ef57baea7",
                        "key": "option-A",
                        "sortOrder": 1,
                        "translations": [
                            {
                                "label": "Option A",
                                "language": "en"
                            },
                            {
                                "label": "Optie A",
                                "language": "nl"
                            }
                        ]
                    },
                    {                    {
                        "id": "87feca56-6f09-4d18-872d-4a0ef57baea7",
                        "key": "option-B",
                        "sortOrder": 2,
                        "translations": [
                            {
                                "label": "Option B",
                                "language": "en"
                            },
                            {
                                "label": "Optie B",
                                "language": "nl"
                            }
                        ]
                    }
                ],
                "type": {
                    "description": "Select",
                    "id": "c9908763-7854-485b-8fd3-2abfb7949b0b"
                }
            },
            {
                "editionType": {
                    "description": "IDFA Forum",
                    "id": "4df6f918-6927-44b2-9de3-22a3fb3de780"
                },
                "id": "5be7cd37-0c21-4ae8-82fb-4583fc8c1c34",
                "key": "film-titles-extra-title",
                "options": [],
                "type": {
                    "description": "Text",
                    "id": "053857f3-0656-4b36-b50f-80dba5cc98ba"
                }
            },
            {
                "editionType": {
                    "description": "IDFA Docs for Sale",
                    "id": "ebf100e1-4bc6-4293-86fb-bba333090b8b"
                },
                "id": "62863a64-4e96-4484-960b-97173cb533ee",
                "key": "film-titels-engelse-titel",
                "options": [],
                "type": {
                    "description": "Text",
                    "id": "053857f3-0656-4b36-b50f-80dba5cc98ba"
                }
            }
        ]

## Custom field values [/{ownerType}/{ownerId}/customfields]

E.g.: `/film/{filmId}/customfields`

Get all the values of all the customfields for a specific owner..

### Read all [GET]

+ Parameters
    + ownerType (string) - Type of the owner (film or accreditation)
    + ownerId (guid) - Unique id of the owner

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
                "CustomField": "film-productie-projectstatus",
                "Options": [
                    "e7cd2844-9553-4fc9-8ba8-a3985335bb8c"
                ],
                "Value": null
            },
            {
                "CustomField": "film-titles-extra-title",
                "Options": null,
                "Value": "Text"
            },
            {
                "CustomField": "film-titles-another-title",
                "Options": null,
                "Value": "Another text"
            }
        ]

## Custom field on id [/{ownerType}/{ownerId}/customfield/{customFieldId}]

E.g.: `/film/{filmId}/customfield/{customFieldId}`

After you know which custom fields are available, you can get or update the values of a specific custom field, for a specific film or accreditation. To clear a custom field, use the "delete".

Fiona supports the following field types:

+ Text
+ Numeric
+ Textarea
+ DatePicker
+ DatetimePicker
+ Select
+ Multiselect
+ Checkbox

All values are presented and accepted in the form of an array of strings, commonly with only one item like `["Green"]` .
'Multiselect' field type supports multiple options, for example `["a60edeb8-5e33-4a34-be03-b4b7f4d8d263","00a582ab-769b-4cf2-b10f-456f4a902bb7"]`
For field type 'Checkbox' the values "0" or "1" represent unchecked and checked: `["0"]`

### Read [GET]

+ Parameters
    + ownerType (string) - Type of the owner (film or accreditation)
    + ownerId (guid) - Unique id of the owner
    + customFieldId (guid) - Unique id of the customfield

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            "value": "Green"
            // or for checkbox
            ["0"] or ["1"]
            // or for (multi)select
            "value": ["03916f17-7b9c-4ad0-9cfe-89e031a09ddc","0da8911e-7a82-4f64-a63d-359a7bcba0a6"]
        ]

### Update [POST]

+ Parameters
    + ownerType (string) - Type of the owner (film or accreditation)
    + ownerId (guid) - Id of the owner
    + customFieldId (guid) - Unique id of the customfield

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            (array of values the same as the GET response body)

+ Response 200 (application/json)

        (array of values the same as the GET response body)

### Delete [DELETE]

+ Parameters
    + ownerType (string) - Type of the owner (film or accreditation)
    + ownerId (guid) - Id of the owner
    + customFieldId (guid) - Unique id of the customfield

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

# Group Deliveries

## Introduction

Keep track of how DCP files, digital files and other films get delivered to your festival.
A film can have one or more deliveries, from one of the following types (lookup DeliveryViaType):
+ FilmFetch
+ Digital delivery
+ Other

Each delivery type has its own status list (lookup DeliveryStatus). For FilmFetch, the statuses you can use are:
+ Upload requested (id = 62497624-c67c-46fb-8bb2-89218848a55f)
+ Upload available (id = ac39adf5-b518-4e5f-881b-f57f06ce8c1f)
+ Upload busy (id = b284c62d-ad33-4a28-85a9-3cec1c416017)
+ Upload paused (id = 2edc6f14-7d03-4987-afb9-a5bda5bd7e25)
+ Upload waiting for check (id = b6d78a79-4d1a-4351-8f43-785eb2fef6b6)
+ Upload ok checked (id = 8229e6a6-e170-4b6c-a79f-36d79a836d8d)
+ Upload error (id = fb11fdcb-b50e-496d-9875-c4ecd63a90e0)
+ Upload cancelled (id = 364e6757-f957-4280-8b55-462c27f870de)

After the delivery has been succesfully received, use the [Received film screening copies](#reference/received-film-screening-copies) to administrate the received CPL files or hardcopy material you received.

## List of deliveries within an edition [/edition/{editionId}/deliveries/{deliveryTypeId}/{deliveryStatusId}]
`/edition/{editionId}/deliveries/{deliveryTypeId}/{deliveryStatusId}
e.g. Type = FilmFetch - Status = Upload requested
/edition/{editionId}/deliveries/c85ae886-26ca-471a-9f13-5241ed1e0b92/62497624-c67c-46fb-8bb2-89218848a55f`

Returns a list of all films within the given edition, based on delivery type and status.

+ Attributes
    + description - Title of the delivery
    + id - Unique id of the delivery

### Read [GET]

+ Parameters
    + deliveryTypeId (guid) - Unique id of the delivery type (platform) [(lookup value - DeliveryViaType)](#reference/lookups/lookup-values-on-id)
    + deliveryStatusId (guid) - Unique id of the status [(lookup value - DeliveryStatus)](#reference/lookups/lookup-values-on-id)

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
          {
              "Description": "FilmFetch",
              "Id": "b076cbee-c00d-4790-a1da-16e7282768b4"
          },
          {
              "Description": "FilmFetch",
              "Id": "1d5f3892-7b95-4bef-b6ca-58db42dc7bef"
          },
          {
              "Description": "FilmFetch",
              "Id": "27b8c0c0-3921-48cb-b9a2-2863e793d28d"
          },
          {
              "Description": "FilmFetch",
              "Id": "dd8cec39-d554-48cc-a094-98a57fc42095"
          }
        ]

## List of deliveries for one film [/film/{filmId}/deliveries/]
`e.g. /film/5d5f3606-98b0-4940-8063-41b2605f8d27/deliveries`

Returns a list of all the deliveries for one film.

+ Attributes
    + description - Title of the delivery
    + id - Unique id of the delivery

### Read [GET]

+ Parameters
    + filmId (guid) - Unique id of the film

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
          {
              "description": "FilmFetch (1234)",
              "id": "5d5f3606-98b0-4940-8063-41b2605f8d27"
          },
          {
              "description": "test digital delivery",
              "id": "f4b4891a-5160-476c-9f69-ee5add826f49"
          },
          {
              "description": "test other delivery",
              "id": "c86e62c3-7b14-40c3-a5b2-b99510f43098"
          }
        ]

## Delivery on id [/delivery/{deliveryId}/]

Get one delivery on its id.

+ Attributes
    + Id - Unique id for the delivery (used in url for FilmFetch)
    + Status (object) - Status of the delivery [(lookup value - DeliveryStatus)](#reference/lookups/lookup-values-on-id)
    + Type (object) -  Through which platform the film will be delivered [(lookup value - DeliveryType)](#reference/lookups/lookup-values-on-id)
    + Film (object) - The film that owns this delivery. Id can be used for creating received film screening copies.
    + RequestForType (object) - Used for FilmFetch deliveries; either DCP, Vimeo, VOD (Non)-DRM or Any [(lookup value - DeliveryRequestForType)](#reference/lookups/lookup-values-on-id)
    + ContentType (object) - To define the type of content [lookup value - AttachmentContentType](#reference/lookups/lookup-values-on-id)
    + Remarks (string) - Remarks
    + ExternalTag (string) - Human readable tag given by Filmfetch
    + Url (string) - Unique link to upload the DCP files on Filmfetch, or for other digital deliveries.

### Read [GET]

+ Parameters
    + deliveryId (guid) - Id of the delivery

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
            "id": "5d5f3606-98b0-4940-8063-41b2605f8d27",
            "status": {
                "description": "Upload requested",
                "id": "62497624-c67c-46fb-8bb2-89218848a55f"
            },
            "type": {
                "description": "FilmFetch",
                "id": "c85ae886-26ca-471a-9f13-5241ed1e0b92"
            },
            "film": {
                "description": "127 Hours",
                "id": "f84eb77b-8331-4da4-b65a-6e440bd8a641"
            },
            "remarks": "test",
            "requestForType": {
                "description": "DCP",
                "id": "5255a869-534a-436c-b107-9d4e8708d005"
            },
            "contentType": null,
            "externalTag": "1234",
            "url": "https://send.filmfetch.net/5d5f3606-98b0-4940-8063-41b2605f8d27"
        }

### Update [POST]

+ Parameters
    + deliveryId (guid) - Id of the delivery

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            {
              "status": {
                  "id": "30a9f210-8a2e-46e8-b541-c13b7a5f7390"
              },
              "remarks": "More remarks",
              "externalTag": "100.1",
            }

+ Response 200 (application/json)

        (same as the Delivery GET response body)

### Delete [DELETE]

+ Parameters
    + deliveryId (guid) - Id of the delivery

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

# Group EditionTypes and Editions

## All EditionTypes [/editiontypes]

`/editiontypes`

A festival can be divided into different parts, for example a public part with films and events, a market for professionals, a film fund.
In our API these festival parts an be found under EditionTypes.

EditionTypes contain editions. An edition within Fiona Festival is the seasonal happening, when the festival takes places. It has a clear start and end date.
All selection, programming and publiction is done in the context of an edition.

+ Attributes
    + description - Description of the editionType
    + id - Unique id of the editionType

### Get all EditionTypes [GET]

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
          {
            "description": "IDFA Forum",
            "id": "4df6f918-6927-44b2-9de3-22a3fb3de780"
          },
          {
            "description": "International Documentary Filmfestival Amsterdam",
            "id": "062db1a5-924d-492d-9f6a-ad757b4a0def"
          },
          {
            "description": "IDFA Docs for Sale",
            "id": "ebf100e1-4bc6-4293-86fb-bba333090b8b"
          },
          {
            "description": "IDFA Bertha Fund",
            "id": "a02529a2-d096-4af7-a7a7-e5e830b39758"
          }
        ]

## EditionType on id [/editiontype/{editiontypeId}]

`/editiontype/{editiontypeId}`

+ Attributes
    + abbreviation
    + active (boolean)
    + activeEdition (object) - The edition that is marked as active. There can only be 1 active Edition at a time within an EditionType.
        + id - Unique id of the ActiveEdition
        + description - Description of the ActiveEdition
    + description - Description of the EditionType
    + editions (array) - List of alle editions within this editionType
        + (object)
            + endFestivalEvent - End date of this Edition, as specified in Fiona.
            + endFestivalYear - End date of the year, this festival takes place in.
            + isActiveEdition (boolean)
            + startFestivalEvent - Start date of this Edition, as specified in Fiona.
            + startFestivalYear - Start date of the year, this festival takes place in.
            + year (number)
            + description
            + id - Unique id of the edition
    + id - Unique id of the editionType
    + name - Name of the EditionType
    + startsInMonth (number)

### Get editionType on id [GET]

+ Parameters
    + editiontypeId (guid) - Id of the EditionType

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
          "abbreviation": "IDFA",
          "active": true,
          "activeEdition": {
            "description": "IDFA 2017",
            "id": "35b3ec3d-9b21-43e0-bcbb-945c032c35b0"
          },
          "description": "IDFA Publieksfestival",
          "editions": [
            {
              "endFestivalEvent": "2017-11-18T00:00:00+01:00",
              "endFestivalYear": "2017-12-30T00:00:00+01:00",
              "isActiveEdition": true,
              "startFestivalEvent": "2017-01-01T00:00:00+01:00",
              "startFestivalYear": "2017-11-28T00:00:00+01:00",
              "year": 2017,
              "description": null,
              "id": "35b3ec3d-9b21-43e0-bcbb-945c032c35b0"
            },
            {
              "endFestivalEvent": "2016-11-18T00:00:00+01:00",
              "endFestivalYear": "2016-12-30T00:00:00+01:00",
              "isActiveEdition": false,
              "startFestivalEvent": "2016-01-01T00:00:00+01:00",
              "startFestivalYear": "2016-11-28T00:00:00+01:00",
              "year": 2016,
              "description": null,
              "id": "6877d436-9b4e-4d2d-8b02-2e438403e8cd"
            }
          ],
          "id": "062db1a5-924d-492d-9f6a-ad757b4a0def",
          "name": "International Documentary Filmfestival Amsterdam",
          "startsInMonth": 11
        }

## All Editions from one EditionType [/editions/{editionTypeId}]

`/editions/{editionTypeId}`

Within an EditionTypes you will find editions. An edition within Fiona Festival is the seasonal happening, when the festival takes place. It has a clear start and end date.
All selection, programming and publiction is done within an edition.

To get all editions within a specifc EditionType, use this endpoint.

+ Attributes
    + description - Description of the edition
    + id - Unique id of the edition

### Get all editions [GET]

+ Parameters
    + editionTypeId (guid) - Id of the editionType

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
          {
            "description": "IDFA 2014",
            "id": "26b71c37-d3d6-403e-8a24-1b1ea9ca5f6e"
          },
          {
            "description": "IDFA 2015",
            "id": "053ffc85-17ed-4908-990e-8fb65d907c82"
          },
          {
            "description": "Test frank",
            "id": "d7e2059f-28a9-47d4-a726-f28bf128f923"
          },
          {
            "description": "IDFA 2016",
            "id": "6877d436-9b4e-4d2d-8b02-2e438403e8cd"
          },
          {
            "description": "IDFA 2017",
            "id": "35b3ec3d-9b21-43e0-bcbb-945c032c35b0"
          }
        ]

## Edition on id [/edition/{editionId}]

`/edition/{editionId}`

Get all the information from one specific Edition.

+ Attributes
    + editionType
        + description - Description of the editionType
        + id - Unique id of the editionType
    + endFestivalEvent - End date of this Edition, as specified in Fiona.
    + endFestivalYear - End date of the year, this festival takes place in.
    + guestbook (object) - Guestbook this edition takes part in.
    + id - Unique id of the editionType
    + name - Name of the edition
    + round
    + sequenceNumber
    + startFestivalEvent - Start date of this Edition, as specified in Fiona.
    + startFestivalYear - Start date of the year, this festival takes place in
    + year

### Get edition on id [GET]

+ Parameters
    + editionId (guid) - Id of the edition

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
          "editionType": {
            "description": "International Documentary Filmfestival Amsterdam",
            "id": "062db1a5-924d-492d-9f6a-ad757b4a0def"
          },
          "endFestivalEvent": "2015-11-18T00:00:00+01:00",
          "endFestivalYear": "2015-12-31T00:00:00+01:00",
          "guestbook": {
                "description": "Gastenboek 3po - 2017",
                "id": "cf2accb4-0aea-4103-a3f9-f025ee0d5c9f"
          },
          "id": "053ffc85-17ed-4908-990e-8fb65d907c82",
          "isActiveEdition": false,
          "name": "IDFA 2015",
          "round": "1",
          "sequenceNumber": 49,
          "startFestivalEvent": "2015-01-01T00:00:00+01:00",
          "startFestivalYear": "2015-11-28T00:00:00+01:00",
          "year": 2015
        }

# Group Entries

## Entries [/entries/{providerName}/{externalIdentification}/]
`/entries/{providerName}/{externalIdentification}`

This endpoint contains all entry forms (both film and accreditation), filled out by a filmmaker on the service platform.

To create a link to an entry, use one of the following formats (depending on your festival's settings):
https://yourorganisation-forms.fiona-app.com/forms/{formId}?entryId={entryId}&entityId={entityId} or
https://customdomain.com/forms/{formId}?entryId={entryId}&entityId={entityId}

### Get all on account [GET]

+ Parameters
    + providerName (string) - name of the provider
    + externalIdentification (string) - external identification of the filmmaker

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
         {
            "EndsOn": "2018-11-24T23:00:00+00:00",
            "Entity": {
              "Description": "3po test form",
              "Id": "a18f92bf-ca30-49e3-9b59-0066da2f736b"
            },
            "Form": {
                "EndsOn": "2018-11-24T23:00:00+00:00",
                "Id": "3b11b65b-bceb-49b7-a536-354edc01b161",
                "StartsOn": "2018-05-17T00:00:00+02:00",
                "Translations": [
                    {
                        "Description": null,
                        "Key": "add-your-own-key",
                        "Language": "en",
                        "Title": "Accreditation form 2018"
                    }
                ]
            },
            "FullTitle": "3po test form",
            "Id": "44a721c7-96f4-4df3-a883-da4d5ed33578",
            "InvoiceId": "05734488-0727-4554-b1e5-5044444e0584",
            "InvoiceNumber": "20180097",
            "InvoiceStatus": "Paid",
            "InvoiceUri": "https://forms.yourwebsite.com/invoice/pay?id=05734488-0727-4554-b1e5-5044444e0584",
            "SortedTitle": "3po test form, ",
            "SubmittedOn": "2018-08-22T08:35:11.5006034+00:00"
          },
          {
            "EndsOn": "2017-12-30T23:00:00+00:00",
            "Entity": {
              "Description": "Another filled out entry form",
              "Id": "bfd48131-5403-4e3e-91e2-9ff952cc3053"
            },
            "Form": {
                "EndsOn": "2017-12-30T23:00:00+00:00",
                "Id": "39de18d5-3c63-48e2-b923-918609068e7c",
                "StartsOn": "2017-05-17T00:00:00+02:00",
                "Translations": [
                    {
                        "Description": null,
                        "Key": "put-another-key-here",
                        "Language": "en",
                        "Title": "Accreditation form 2018"
                    }
                ]
            },
            "FullTitle": "Another filled out entry form",
            "Id": "4bfc6271-a76b-4c6c-a2df-301eb91f68ea",
            "InvoiceId": null,
            "InvoiceNumber": null,
            "InvoiceStatus": null,
            "InvoiceUri": null,
            "SortedTitle": "Another filled out entry form, ",
            "SubmittedOn": "2017-12-11T08:40:44.7317633+00:00"
          }
        ]

# Group External accounts

## Introduction

A person in Fiona can have an account section, with one or more external authentications.

With external authentication, you can connect an external account to a person in Fiona. Connect your MyFestival-login on your website to the Fiona forms platform, for example.
Or connect your ticketing system, to update badges from accredited guests in your ticketing system.

## External authentications [/person/{personId}/{providerName}/externalauthentications]
E.g. `/person/{personId}/SRO/externalauthentications`

Get all the available external authentications of a person, for a specific authentication provider.

+ Attributes
    + id - Unique id of external authentication
    + createdOn - Created date of the authentication in Fiona
    + externalIdentification - external id from the external authentication provider

### Read all [GET]

+ Parameters
    + personId - Unique id of the person
    + providerName (string) - Name of the provider. Please note, the naming is case sensitive

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
                "id": "c0bd5333-d6e2-483d-b54e-c21cb557f430",
                "createdOn": "2017-12-06T09:53:48.0239577+00:00",
                "externalIdentification": "9BD92851-639D-4A6F-ADBB-9370EB01E7D5"
            }
        ]

## Existing external authentication [/person/{personId}/{providerName}/externalauthentication/{externalAuthenticationId}]
E.g. `/person/{personId}/SRO/externalauthentication/{externalAuthenticationId}`

Update or delete external authentication for a person.

### Update [POST]

+ Parameters
    + personId - Unique id of the person
    + providerName (string) - Name of the provider. Please note, the naming is case sensitive
    + externalAuthenticationId - Unique id of the external authentication

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            {
              "externalIdentification": "9BD92851-639D-4A6F-ADBB-9370EB01E7D5"
            }

+ Response 200 (application/json)

        [
            {
                "id": "c0bd5333-d6e2-483d-b54e-c21cb557f430",
                "createdOn": "2017-12-06T09:53:48.0239577+00:00",
                "externalIdentification": "9BD92851-639D-4A6F-ADBB-9370EB01E7D5"
            }
        ]

### Delete [DELETE]

+ Parameters
    + personId - Unique id of the person
    + providerName (string) - Name of the provider. Please note, the naming is case sensitive

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

## Add external authentication [/person/{personId}/{providerName}/externalauthentication]
E.g. `/person/{personId}/SRO/externalauthentication`

Add external authentication for a person.
Please note that externalIdentification has to be unique and can only be added to one person.

### Create [POST]

+ Parameters
    + personId - Unique id of the person
    + providerName (string) - Name of the provider. Please note, the naming is case sensitive

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            {
              "externalIdentification": "9BD92851-639D-4A6F-ADBB-9370EB01E7D5"
            }

+ Response 200 (application/json)

        [
            {
                "id": "c0bd5333-d6e2-483d-b54e-c21cb557f430",
                "createdOn": "2017-12-06T09:53:48.0239577+00:00",
                "externalIdentification": "9BD92851-639D-4A6F-ADBB-9370EB01E7D5"
            }
        ]

# Group Films

## Introduction

A film can have one of these three statusses (See Lookup FilmStatus:

+ Entry (applicable only for film festivals)
+ Collection (or Research)
+ InEdition

For a collection or research film, the edition must be set to null.

For an online entry (festivals only) an edition is required.

For films 'In Edition' an edition is required.

## All films in an edition [/films/{editionId}]

`/films/{editionId}`

Use this endpoint to get a list of all available films within one specific edition, regardless of their selection status (finalRecommendation).
For more information about each film, use the endpoint "film on id".

+ Attributes
    + createdOn - Created date of the film
    + updatedOn - Update date of the film
    + description - Description of the film
    + id - Unique id of the film

### Get all films [GET]

+ Parameters
    + editionId (guid) - Id of the edition

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
                "createdOn": "2017-10-11T12:03:42.4787682+00:00",
                "updatedOn": "2017-11-03T08:58:56.254739+00:00",
                "description": "Taxi Driver",
                "id": "71e8abbb-fef0-46ac-9055-e42eebc83459"
            },
            {
                "createdOn": "2017-10-11T12:03:28.6340222+00:00",
                "updatedOn": "2017-10-30T10:16:18.0695598+00:00",
                "description": "A Streetcar Named Desire",
                "id": "60710aab-6754-4ba3-a3eb-00abe63d9bd5"
            }
        ]

## Add film [/film]

`/film`

### Create [POST]

+ Request (application/json)

    + Headers

            Api-Key: [key]

    + Body

            {
                "appliedForFestivals": [],
                "archivedOn": null,
                "assignedTo": null,
                "category": {
                    "id": "ec429c4a-5c47-49ad-82d1-3e8cfba4bdbc"
                },
                "colour": {
                    "id": "bbb15dee-74a8-424e-9222-ba67c41c28b4"
                },
                "completed": true,
                "countriesLookingForPartner": [
                    {
                        "sortOrder": 1,
                        "id": "8012fb79-5cd9-4214-a945-a8c8823f2c70"
                    },
                    {
                        "sortOrder": 2,
                        "id": "b7a4debe-4534-4691-97fa-792a1cb9a5e7"
                    }
                ],
                "countriesOfProduction": [
                    {
                        "sortOrder": 1,
                        "id": "1e671191-88d3-416c-a375-488226184a27"
                    }
                ],
                "countriesSold": [
                    {
                        "sortOrder": 1,
                        "id": "415a3efc-9202-4198-a429-e4581d9093cb"
                    }
                ],
                "edition": {
                    "id": "6427f032-5f7f-4aca-b9be-45b21da2c305"
                },
                "eligibleFors": [],
                "filmRatings": [],
                "financingInPlace": 20000,
                "finalRecommendation": {
                    "description": "Selected",
                    "id": "46b114d3-e574-4d34-8fb0-853efc7fb42b"
                },
                "firstScreenedAt": null,
                "firstScreenedOn": "0001-01-01T00:00:00+00:00",
                "format": {
                    "id": "d7745f88-7617-4e56-9b39-a370e1a44bd5"
                },
                "genre": {
                    "id": "4b9f072b-d747-4ddc-ad8c-f75ff4ffbcf7"
                },
                "internationalArticle": null,
                "internationalTitle": "Grease",
                "lengthAdditionalSeconds": 0,
                "lengthInMinutes": 90,
                "monthOfProduction": 0,
                "noDialogue": true,
                "numberOfEpisodes": 0,
                "originalArticle": null,
                "originalTitle": null,
                "preliminaryRecommendation": {
                    "id": "e38bc7bb-0138-4d04-b17a-066f2a871551"
                },
                "premiere": {
                    "id": "6ecb56ea-d633-45b8-a1ee-e3cbbd260018"
                },
                "priority": null,
                "requestedFinancing": 5000,
                "round": "1",
                "screenedOnFestivals": [],
                "sections": [],
                "source": {
                    "id": "85b0c79f-b85d-4d67-a719-cbe7b48a409d"
                },
                "spokenLanguages": [],
                "statusLookup": {
                    "id": "584263ac-87e0-4aca-b599-db2231dec371"
                },
                "tags": [],
                "totalBudget": 100000,
                "useOriginalTitle": false,
                "yearOfProduction": 2018,
            }

+ Response 200 (application/json)

        (same as the film GET response body)

## Existing film [/film/{filmId}]

`/film/{filmId}`

Get, update or delete a film, based on the film id. You cannot delete films with the finalRecommendation "Selected".

Note:

To update a film, always send the _complete_ film object when you post a film on id. All empty (or forgotten) fields will be emptied in the database.
When you want to update fields that are lookup values, you only need to send the id (and for arrays, the sort order).
For example:

```
"countriesOfProduction": [
        {
            "sortOrder": 1,
            "id": "4d4661c4-0fbd-493b-a790-1d6011ac0f46"
        },
        {
            "sortOrder": 2,
            "id": "8012fb79-5cd9-4214-a945-a8c8823f2c70"
        }
]
```

+ Attributes
    + appliedForFestivals (array) - List of festivals, this film also sent an application to [(lookup value - Festival)](#reference/lookups/lookup-values-on-id)
    + archivedOn - Date the film got the finalRecommendation "archived"
    + assignedTo (object) - Description and unique id of the handler of the film
    + category (lookupValue) - Film category [(lookup value - FilmCategory)](#reference/lookups/lookup-values-on-id)
    + colour (lookupValue) - Colour of the Film [(lookup value - FilmColour)](#reference/lookups/lookup-values-on-id)
    + completed: false (boolean) - Whether the Film is already completed, or it is still a project / work in progress
    + countriesLookingForPartner (array) - List of Countries, including sort order [(lookup value - Country)](#reference/lookups/lookup-values-on-id)
    + countriesOfProduction (array) - List of Countries, including sort order [(lookup value - Country)](#reference/lookups/lookup-values-on-id)
    + countriesSold (array) - List of Countries, including sort order [(lookup value - Country)](#reference/lookups/lookup-values-on-id)
    + editionId (object) - Description and unique id of the edition where the film is programmed in.
    + eligibleFors (array) - List of competitions this film is eligible for
    + filmRatings (array) - List of film ratings
    + financingInPlace (number) - Amount of financing, this film project already has
    + finalRecommendation (object) - Description and unique id of the finalRecommendation of the film [(lookup value - FilmFinalRecommendation)](#reference/lookups/lookup-values-on-id)
    + firstScreenedAt - Where the film had its premiere
    + firstScreenedOn - When the film had its premiere
    + format (object) - the original format the film has been shot on / will be shot on [(lookup value - FilmFormat)](#reference/lookups/lookup-values-on-id)
    + genre (object) - genre of the film [(lookup value - FilmGenre)](#reference/lookups/lookup-values-on-id)
    + id - Unique id of the film
    + inEditionSequenceNumber (number)
    + internationalArticle: The - Article belonging to the internationTitle.
    + internationalTitle: Title - Combined with the internationalArticle, this makes up the international title of the film.
    + lengthAdditionalSeconds (number) - Extra seconds to add to the lengthInMinutes. Together they form the length of the film.
    + lengthInMinutes (number) - Length of the film.
    + memo
    + monthOfProduction (number)
    + noDialogue (boolean) - If true, the film does not have any dialogue
    + numberOfEpisodes (number) - In case of series, this indicates how many episodes there are
    + originalArticle: De - Article belonging to the originalTitle.
    + originalTitle: Titel - Combined with the originalArticle, this makes up the international title of the film.
    + preliminaryRecommendation (object) - preliminary recommendation of the film [(lookup value - FilmResearchRecommendation)](#reference/lookups/lookup-values-on-id)
    + premiere (object) - Type of premiere of the film [(lookup value - FilmPremiere)](#reference/lookups/lookup-values-on-id)
    + priority (object) - Research priority of the film [(lookup value - FilmResearchPriority)](#reference/lookups/lookup-values-on-id).
    + requestedFinancing (number) - Amount the film project requests
    + round - Research round
    + screenedOnFestivals (object) - Festivals this film has also been screened [(lookup value - Festival)](#reference/lookups/lookup-values-on-id).
    + screeningCopies (array) - List of screening copies for the film, description and id.
    + sections (array) - List of editionSections in which the film is programmed, including sort order.
    + selectionSequenceNumber (number)
    + source (object) - Source of the film [(lookup value - FilmResearchSource)](#reference/lookups/lookup-values-on-id).
    + spokenLanguages (array) - Spoken languages in the film, including sort order[(lookup value - Language)](#reference/lookups/lookup-values-on-id).
    + statusLookup (object) - For films in edition, this is always "In edition" [(lookup value - FilmStatus)](#reference/lookups/lookup-values-on-id)
    + tags (array) - Tags for this film, see [tags](/#reference/tags) for more information
    + totalBudget (number) - Total budget of the film
    + useOriginalTitle: false (boolean) - Indicates whether to use the OriginalTitle or the InternationalTitle as PreferredTitle.
    + yearOfProduction - (number)
    + createdBy (object) - Description and unique id of the user who has created the film in Fiona.
    + createdOn - Created date of the film
    + updatedBy (object) - Description and unique id of the user who updated the film in Fiona.
    + updatedOn - Updated date of the film
    + fullInternationalTitle: The Title - International title, starting with an article (if present)
    + fullOriginalTitle: De titel - Original title, starting with an article (if present)
    + fullPreferredTitle: The Title - The preferred title, as marked in Fiona, starting with the article (if present)

### Read [GET]

+ Parameters
    + filmId (guid) - Unique id of the film

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
          "appliedForFestivals": [],
          "archivedOn": null,
          "assignedTo": null,
          "category": null,
          "colour": null,
          "completed": false,
            "countriesLookingForPartner": [
                {
                    "sortOrder": 2,
                    "description": "France",
                    "id": "b7a4debe-4534-4691-97fa-792a1cb9a5e7"
                },
                {
                    "sortOrder": 1,
                    "description": "Belgium",
                    "id": "8012fb79-5cd9-4214-a945-a8c8823f2c70"
                }
            ],
            "countriesOfProduction": [
                {
                    "sortOrder": 1,
                    "description": "Denmark",
                    "id": "1e671191-88d3-416c-a375-488226184a27"
                }
            ],
            "countriesSold": [
                {
                    "sortOrder": 1,
                    "description": "Denmark",
                    "id": "1e671191-88d3-416c-a375-488226184a27"
                }
            ],
          "edition": {
            "Description": "IDFA 2015",
            "Id": "053ffc85-17ed-4908-990e-8fb65d907c82"
          },
          "eligibleFors": [],
          "filmRatings": [],
          "financingInPlace": 20000,
          "finalRecommendation": {
            "description": "Selected",
            "id": "23fae673-f3a7-4978-9398-d569d2167f64"
          },
          "firstScreenedAt": null,
          "firstScreenedOn": "0001-01-01T00:00:00+00:00",
          "format": null,
          "genre": null,
          "id": "2a0c93bc-ea88-43c0-a7a2-1eabecab9af1",
          "inEditionSequenceNumber": 2,
          "internationalArticle": null,
          "internationalTitle": null,
          "lengthAdditionalSeconds": 0,
          "lengthInMinutes": 0,
          "memo": null,
          "monthOfProduction": 0,
          "noDialogue": false,
          "numberOfEpisodes": 0,
          "originalArticle": null,
          "originalTitle": "Reservoir Dogs",
          "preliminaryRecommendation": {
            "description": "Selection",
            "id": "e38bc7bb-0138-4d04-b17a-066f2a871551"
          },
          "premiere": null,
          "priority": null,
          "requestedFinancing": 5000,
          "round": "1",
          "screenedOnFestivals": [],
          "screeningCopies": [
                {
                    "Description": "#0001",
                    "Id": "d098320c-f2ec-4e2e-9ed0-9398452d3fc8"
                },
                {
                    "Description": "#0005",
                    "Id": "d4be08f9-e547-4604-86f3-5ac4aaa48973"
                },
                {
                    "Description": "#0002",
                    "Id": "f58910b4-4c15-416f-a4c1-6a6d2abc73c0"
                }
            ],
          "sections": [],
          "selectionSequenceNumber": 5,
          "source": {
            "description": "Entry",
            "id": "2e6e26b5-6278-4084-b9bb-39a0bca5c491"
          },
          "spokenLanguages": [],
          "statusLookup": {
                "description": "In edition",
                "id": "584263ac-87e0-4aca-b599-db2231dec371"
          },
          "tags": [
                {
                    "description": "Little bit scary",
                    "id": "3a241387-77f0-4746-a35f-7569280181cb"
                },
                {
                    "description": "Very scary",
                    "id": "dc16068c-c8a0-4996-a416-c1415da2c2cc"
                }
          ],
          "totalBudget": 10000,
          "useOriginalTitle": true,
          "yearOfProduction": 0,
          "createdBy": {
            "description": "Digna van Nielen",
            "id": "5e65837e-317d-42c2-8c48-2f92022e1bd4"
          },
          "createdOn": "2017-06-27T08:19:50.5271597+00:00",
          "updatedBy": {
            "description": "Digna van Nielen - met account",
            "id": "5e65837e-317d-42c2-8c48-2f92022e1bd4"
          },
          "updatedOn": "2017-06-27T08:21:22.9052468+00:00",
          "fullInternationalTitle": null,
          "fullOriginalTitle": "Credits import 2",
          "fullPreferredTitle": "Credits import 2"
        }

### Update a film [POST]

+ Parameters
    + filmId (guid) - Unique id of the film

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            (same as the film GET request body)

+ Response 200 (application/json)

        (same as the film POST response body)

### Delete a film [DELETE]

+ Parameters
    + filmId (guid) - Unique id of the film

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

## Group Film Credits
### Introduction

You can add  credits to films. Credits refer to a person, a company or a combination of a person and a company.
Please add one contact and set the sourceType of this contact and the selectedSourceType of the credit to 1.

## All credits [/film/{filmId}/credits]

### Read all [GET]

+ Parameters
    + filmId (guid) - Id of the film

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
                "contacts": [
                    {
                        "company": null,
                        "person": {
                            "description": "Steven Spielberg",
                            "id": "699a8a92-678c-45cf-99a1-a2ef6dc9b59f"
                        },
                        "sourceType": 1
                    }
                ],
                "id": "a6c28172-220e-41a2-b15c-360c7363a9f2",
                "isContactPerson": true,
                "publishContactDetails": true,
                "role": {
                    "description": "Attending contact",
                    "id": "c30a4af7-e2e1-44f9-b9ba-e4c9c6f131bc"
                },
                "selectedSourceType": 1,
                "sortOrder": 1
            }
        ]

## Existing credit [/film/{filmId}/credit/{creditId}]

### Read [GET]

+ Parameters
    + filmId (guid) - Unique id of the film
    + creditId (guid) - Unique id of the credit

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
            "contacts": [
                {
                    "company": null,
                    "person": {
                        "description": "Steven Spielberg",
                        "id": "699a8a92-678c-45cf-99a1-a2ef6dc9b59f"
                    },
                    "sourceType": 1
                }
            ],
            "id": "a6c28172-220e-41a2-b15c-360c7363a9f2",
            "isContactPerson": true,
            "publishContactDetails": true,
            "role": {
                "description": "Attending contact",
                "id": "c30a4af7-e2e1-44f9-b9ba-e4c9c6f131bc"
            },
            "selectedSourceType": 1,
            "sortOrder": 1
        }

### Update [POST]

+ Parameters
    + filmId (guid) - Id of the owner
    + creditId (guid) - Id of the credit

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            {
                "contacts": [
                    {
                        "company": null,
                        "person": {
                            "description": "Steven Spielberg",
                            "id": "699a8a92-678c-45cf-99a1-a2ef6dc9b59f"
                        },
                        "sourceType": 1
                    }
                ],
                "id": "a6c28172-220e-41a2-b15c-360c7363a9f2",
                "isContactPerson": true,
                "publishContactDetails": true,
                "role": {
                    "description": "Attending contact",
                    "id": "c30a4af7-e2e1-44f9-b9ba-e4c9c6f131bc"
                },
                "selectedSourceType": 1,
                "sortOrder": 1
            }

+ Response 200 (application/json)

        (same as the credit GET response body)

### Delete [DELETE]

+ Parameters
    + filmId (guid) - Id of the film
    + creditId (guid) - Id of the credit

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

## Add credit [/film/{filmId}/credit]

Note: More information about People and Companies will be added later on.

### Create [POST]

+ Parameters
    + filmId (guid) - Id of the owner

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            {
              "contacts": [
                {
                  "company": null,
                  "person": {
                    "id": "d6f4c9a0-9ba2-4031-bfe8-332af26ab4d5",
                  },
                  "sourceType": 1
                }
              ],
              "isContactPerson": true,
              "publishContactDetails": true,
              "role": {
                "id": "f90e751a-53e1-4c87-bf74-86baf6a2f0c0"
              },
              "selectedSourceType": 1,
              "sortOrder": 0
            }

+ Response 200 (application/json)

        (same as the credit GET response body)

# Group Film Control

## Introduction

In Fiona, you register raid sets within a film control edition. A raid set has a period (start/end date) and a location. A film control edition is connected to a programme schedule.

## All Film Control Editions [/filmControlEditions/]

Get a list of all available film control editions in Fiona.

+ Attributes
    + description - Name of the edition
    + id - Unique id (guid) of the FilmControlEdition

### Get all [GET]

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
                "description": "FilmControle 2016",
                "id": "679284cb-c875-4541-86c0-ddffcb1cc086"
            },
            {
                "description": "Filmcontrole 2017",
                "id": "7815561a-e4e8-4fcc-80a0-0ccbb6fcfa01"
            },
            {
                "description": "Filmcontrole 2018",
                "id": "beccb848-f853-455b-bead-da6aa4926504"
            }
        ]

## All active Film Control Editions [/filmControlEditions/active]

Get a list of all __active__ film control editions in Fiona.

+ Attributes
    + description - Name of the edition
    + id - Unique id (guid) of the FilmControlEdition

### Get all [GET]

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
                "description": "Filmcontrole 2017",
                "id": "7815561a-e4e8-4fcc-80a0-0ccbb6fcfa01"
            },
            {
                "description": "Filmcontrole 2018",
                "id": "beccb848-f853-455b-bead-da6aa4926504"
            }
        ]

## Film Control Edition [/filmControlEdition/{filmControlEditionId}]

Get the information of one film control edition.

+ Attributes
    + schedules (reference) - The screening schedule this edition is connected to. To learn more about schedules, read [this](/#reference/schedules)
    + raidSets (reference) - All the raid sets for this edition
    + endsOn - End date of the edition
    + id - Unique id (guid) of the FilmControlEdition
    + isActive (boolean) - If true, this edition is active
    + name - Name of the edition
    + startsOn - Start date of the edition

+ Parameters
    + filmControlEditionId (guid) - Id of the filmControlEditionId

### Get one on id [GET]

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
            "schedules": [
                {
                    "description": "IDFA 2018",
                    "id": "6c5b9516-0553-4e6d-9f94-69d769cd107e"
                }
            ],
            "raidSets": [
                {
                    "description": "Raidset #1",
                    "id": "4c86a2e6-39d9-4ed9-a276-2051296ba2e2"
                },
                {
                    "description": "Raidset #2",
                    "id": "735b8ee6-207c-4222-8072-cac3d689138f"
                },
                {
                    "description": "Raidset #3",
                    "id": "c542731a-3462-4fbc-ab7a-bc8598406d56"
                }
            ],
            "endsOn": "2018-09-26T00:00:00+02:00",
            "id": "beccb848-f853-455b-bead-da6aa4926504",
            "isActive": true,
            "name": "Filmcontrole 2018",
            "startsOn": "2018-09-12T00:00:00+02:00"
        }

# Group Film Financiers
## Introduction

Financiers are available in the "finance" section of a film card in Fiona. It is a list of financiers who already invested in the film or film project. They do not refer to persons or companies in Fiona.

## All financiers [/film/{filmId}/financiers]

### Read all [GET]

+ Parameters
    + filmId (guid) - Id of the film

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
                "contribution": 10000,
                "id": "89980ddb-c91f-4ed1-91a8-be1fd616446f",
                "name": "Fonds",
                "sortOrder": 0
            },
            {
                "contribution": 35000,
                "id": "d468aedc-ebfa-47e5-835c-64f093289095",
                "name": "Filmfonds",
                "sortOrder": 1
            }
        ]

## Existing financiers [/film/{filmId}/financier/{financierId}]

### Read [GET]

+ Parameters
    + filmId (guid) - Unique id of the film
    + financierId (guid) - Unique id of the financier

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
            "contribution": 35000,
            "id": "2f9de144-1477-473f-a3bf-32d76bae0aa0",
            "name": "Filmfonds",
            "sortOrder": 1
        }

### Update [POST]

+ Parameters
    + filmId (guid) - Id of the film
    + financierId (guid) - Id of the financier

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            {
                "contribution": 35000,
                "id": "2f9de144-1477-473f-a3bf-32d76bae0aa0",
                "name": "Filmfonds",
                "sortOrder": 1
            }

+ Response 200 (application/json)

        (same as the financier GET response body)

### Delete [DELETE]

+ Parameters
    + filmId (guid) - Id of the owner
    + financierId (guid) - Id of the financier

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

## Add financier [/film/{filmId}/financier]

### Create [POST]

+ Parameters
    + filmId (guid) - Id of the film

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            {
                "contribution": 30000,
                "name": "Filmfonds",
                "sortOrder": 1
            }

+ Response 200 (application/json)

            (same as the financier GET response body)

# Group Film Recommendations
## Introduction

With recommendations, you can read or add the reviews of viewers.

## All recommendations [/film/{filmId}/recommendations]

### Read all [GET]

+ Parameters
    + filmId (guid) - Id of the film

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
                "id": "28d973fc-6eee-4131-b63b-1e79625cebce",
                "account": {
                    "description": "Digna van Nielen",
                    "id": "5e65837e-317d-42c2-8c48-2f92022e1bd4"
                },
                "recommendation": {
                    "description": "-",
                    "id": "2c2601fa-972a-49a7-8949-d07974185781"
                },
                "review": "This is a review text",
                "createdBy": {
                    "description": "Digna van Nielen",
                    "id": "5e65837e-317d-42c2-8c48-2f92022e1bd4"
                },
                "createdOn": "2017-11-22T10:53:44.574263+00:00",
                "updatedBy": {
                    "description": "Digna van Nielen",
                    "id": "5e65837e-317d-42c2-8c48-2f92022e1bd4"
                },
                "updatedOn": "2017-11-22T10:53:50.3926159+00:00"
            }
        ]

## Existing recommendations [/film/{filmId}/recommendation/{recommendationId}]

### Read [GET]

+ Parameters
    + filmId (guid) - Unique id of the film
    + recommendationId (guid) - Unique id of the recommendation

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
            "id": "28d973fc-6eee-4131-b63b-1e79625cebce",
            "account": {
                "description": "Digna van Nielen",
                "id": "5e65837e-317d-42c2-8c48-2f92022e1bd4"
            },
            "recommendation": {
                "description": "-",
                "id": "2c2601fa-972a-49a7-8949-d07974185781"
            },
            "review": "This is a review text",
            "createdBy": {
                "description": "Digna van Nielen",
                "id": "5e65837e-317d-42c2-8c48-2f92022e1bd4"
            },
            "createdOn": "2017-11-22T10:53:44.574263+00:00",
            "updatedBy": {
                "description": "Digna van Nielen",
                "id": "5e65837e-317d-42c2-8c48-2f92022e1bd4"
            },
            "updatedOn": "2017-11-22T10:53:50.3926159+00:00"
        }

### Update [POST]

+ Parameters
    + filmId (guid) - Unique id of the film
    + recommendationId (guid) - Unique id of the recommendation

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            {
                "id": "28d973fc-6eee-4131-b63b-1e79625cebce",
                "account": {
                    "description": "Digna van Nielen - met account",
                    "id": "5e65837e-317d-42c2-8c48-2f92022e1bd4"
                },
                "recommendation": {
                    "id": "4b0a18c8-faf3-47d7-a68a-008ad46684ac"
                },
                "review": "This is a review text",
            }

+ Response 200 (application/json)

        (same as the recommendation GET response body)

### Delete [DELETE]

+ Parameters
    + filmId (guid) - Unique id of the film
    + recommendationId (guid) - Unique id of the recommendation

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

## Add recommendation [/film/{filmId}/recommendation]

### Create [POST]

+ Parameters
    + filmId (guid) - Id of the film

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            {
                "account": {
                    "description": "Digna van Nielen - met account",
                    "id": "5e65837e-317d-42c2-8c48-2f92022e1bd4"
                },
                "recommendation": {
                    "id": "4b0a18c8-faf3-47d7-a68a-008ad46684ac"
                },
                "review": "This is a review text",
            }

+ Response 200 (application/json)

            (same as the recommendation GET response body)

# Group Film publication privileges

## Introduction

Publication privileges can be added to films. The website or other viewing platforms can interpret these privileges and check the logged in users against these privileges to give them more access to film information, for example.
A publication privilege is either added for one specific account, or for an account group.

## All Publication privileges [/{ownerType}/{ownerId}/publicationprivileges]

E.g.: `/film/{filmId}/publicationprivileges`

+ Attributes
    + account (object) - If null, this privilege is for a accountGroup. Otherwise, you will see the description and unique id of the account
    + accountGroup (object) - If null, this privilege is for an account. Otherwise, you will see the description and unique id of the accountGroup
    + endDate - If null, the privilege is ongoing
    + id - Unique id of this publicationPrivilege
    + publicationPrivilege (object) - Type of privilege this account or accountGroup gets [(lookup value - PublicationPrivilegeType)](#reference/lookups/lookup-values-on-id)
    + startDate - If null, this privilege starts immediately

### Read all [GET]

+ Parameters
    + ownerType (string) - Type of the owner (film)
    + ownerId (guid) - Id of the owner

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
                "account": {
                    "description": "Digna van Nielen - met account",
                    "id": "5e65837e-317d-42c2-8c48-2f92022e1bd4"
                },
                "accountGroup": null,
                "endDate": "2018-10-10T02:00:00",
                "id": "9a886be1-9c0c-4c24-a416-a271fdb866f8",
                "publicationPrivilege": {
                    "description": "Bekijk film",
                    "id": "8b5b19e6-9705-4b08-9535-fdb8ff68f0c8"
                },
                "startDate": null
            },
            {
                "account": null,
                "accountGroup": {
                    "description": "DocsViewers",
                    "id": "e1ac33ee-e0b9-4847-8658-a7128d9603db"
                },
                "endDate": "2018-10-10T02:00:00",
                "id": "e9dc9fe8-f784-4a7f-aa29-912214b5b337",
                "publicationPrivilege": {
                    "description": "Bekijk film",
                    "id": "8b5b19e6-9705-4b08-9535-fdb8ff68f0c8"
                },
                "startDate": null
            }
        ]

## Existing Publication privileges [/{ownerType}/{ownerId}/publicationprivilege/{publicationPrivilegeId}]

E.g.: `/film/{filmId}/publicationprivilege/{publicationPrivilegeId}`

A publication privilege can have a start and/or end date. They both can be "null".

+ Attributes
    + account (object) - If null, this privilege is for a accountGroup. Otherwise, you will see the description and unique id of the account
    + accountGroup (object) - If null, this privilege is for an account. Otherwise, you will see the description and unique id of the accountGroup
    + endDate - If null, the privilege is ongoing
    + id - Unique id of this publicationPrivilege
    + publicationPrivilege (object) - Type of privilege this account or accountGroup gets [(lookup value - PublicationPrivilegeType)](#reference/lookups/lookup-values-on-id)
    + startDate - If null, this privilege starts immediately

### Read [GET]

+ Parameters
    + ownerType (string) - Type of the owner (film)
    + ownerId (guid) - Unique id of the owner
    + publicationPrivilegeId (guid) - Unique id of the publicationPrivilege

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
            "account": null,
            "accountGroup": {
                "description": "DocsViewers",
                "id": "e1ac33ee-e0b9-4847-8658-a7128d9603db"
            },
            "endDate": null,
            "id": "e9dc9fe8-f784-4a7f-aa29-912214b5b337",
            "publicationPrivilege": {
                "description": "Bekijk film",
                "id": "8b5b19e6-9705-4b08-9535-fdb8ff68f0c8"
            },
            "startDate": null
        }

### Update [POST]

+ Parameters
    + ownerType (string) - Type of the owner (film)
    + ownerId (guid) - Id of the owner
    + publicationPrivilegeId (guid) - Unique id of the publicationPrivilege

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            {
                "account": null,
                "accountGroup": {
                    "id": "e1ac33ee-e0b9-4847-8658-a7128d9603db"
                },
                "endDate": "2018-10-10T00:00:00+00:00",
                "publicationPrivilege": {
                    "id": "8b5b19e6-9705-4b08-9535-fdb8ff68f0c8"
                },
                "startDate": null
            }

+ Response 200 (application/json)

        (same as the publicationPrivilege GET response body)

### Delete [DELETE]

+ Parameters
    + ownerType (string) - Type of the owner (film)
    + ownerId (guid) - Id of the owner
    + publicationPrivilegeId (guid) - Id of the publicationPrivilege

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

## Add Publication privilege [/{ownerType}/{ownerId}/publicationPrivilege]

E.g.: `/film/{filmId}/publicationPrivilege`

### Create [POST]

+ Parameters
    + ownerType (string) - Type of the owner (film)
    + ownerId (guid) - Id of the owner

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            {
                "account": null,
                "accountGroup": {
                    "id": "e1ac33ee-e0b9-4847-8658-a7128d9603db"
                },
                "endDate": "2018-10-10T00:00:00+00:00",
                "publicationPrivilege": {
                    "id": "8b5b19e6-9705-4b08-9535-fdb8ff68f0c8"
                },
                "startDate": null
            }

+ Response 200 (application/json)

            (same as the publicationPrivilege GET response body)

# Group Forms

## Forms [/forms]
Forms returns all available forms on the service platform: all forms with the status "online" in Fiona Online.
The format of a form url: https://yourorganisation-forms.fiona-app.com/forms/{formId} or https://customdomain.com/forms/{formsId}
(depending on your festival's settings)

### Get all [GET]

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
          {
            "EndsOn": "2016-09-30T22:00:00+00:00",
            "Id": "cc17df09-c269-4cda-8cc9-1cadbd5a5da6",
            "StartsOn": "2016-09-21T11:49:59.481+00:00",
            "Translations": [
              {
                "Description": null,
                "Key": null,
                "Language": "en",
                "Title": "AIFF Accreditation Form 2018"
              }
            ]
          },
          {
            "EndsOn": "2016-12-25T00:00:00+01:00",
            "Id": "764a0378-c0a9-492d-bc61-fd54c68a5c9f",
            "StartsOn": "2016-11-24T00:00:00+01:00",
            "Translations": [
              {
                "Description": null,
                "Key": null,
                "Language": "en",
                "Title": "AIFF Entry Form 2018"
              },
              {
                "Description": null,
                "Key": null,
                "Language": "nl",
                "Title": "AIFF Inschrijfformulier 2018"
              }
            ]
          }
        ]

## Filmentry [/filmentry/{filmEntryId}/]
Returns the entry form (film), filled out by a filmmaker on the service platform. If the LinkedFilmId is not available, the film entry has not been processed yet by the festival.

### Get one on id [GET]

+ Parameters
    + filmEntryId (guid) - Id of the FilmEntry

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
              "Directors": [
              "Ethan Coen",
              "Joel Coen"
              ],
              "Edition": {
                "Description": "AIFF 2018",
                "Id": "053ffc85-17ed-4908-990e-8fb65d907c82"
              },
              "FormName": "AIFF Entry Form 2018",
              "FullPreferredTitle": "The next big hit",
              "LengthInMinutes": 90,
              "LinkedFilmId": "03b8f467-b88e-4b22-80e0-a057d706d95e",
              "CountriesOfProduction": null,
              "SubmittedBy": {
                "EmailAddress": "name@domain.net",
                "Name": "Digna van Nielen"
              }
            }
        ]

# Group Guestbooks
Just like all the films for one year can be found within an edition, all guests are collected in a guestbook. A guestbook also has a start and endatem just like an edition.
You can connect editions from different edition types to a guestbook. All your guests come together, whether they come for the co production market or just to see films.

Once you know the guestbookId, get the accreditations (guests) and company profiles with the endpoints below.

## All Guestbooks [/guestbooks]

`guestbooks`

Get all available guestbooks

### Get all Guestbooks [GET]

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
                "createdOn": "2017-09-14T13:21:22.3389705+00:00",
                "updatedOn": "2017-09-24T07:04:10.2515731+00:00",
                "description": "Gastenboek - 2017",
                "id": "cf2accb4-0aea-4103-a3f9-f025ee0d5c9f"
            },
            {
                "createdOn": "2015-09-14T13:21:22.3389705+00:00",
                "updatedOn": "2016-09-24T07:04:10.2515731+00:00",
                "description": "Gastenboek - 2016",
                "id": "3b8e5967-e519-401a-9025-16d14c5e82ab"
            }
        ]

## All Guestbooks on Edition id [/edition/{editionId}/guestbooks]

`/edition/{editionId}/guestbooks`

If you want to know which guestbook is related to a specific edition, use this endpoint. Note; an edition can only belong to one guestbook, but a guestbook can contain several editions.

### Get all [GET]

+ Parameters
    + editionId (guid) - Id of the edition

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
                "description": "Gastenboek - 2017",
                "id": "cf2accb4-0aea-4103-a3f9-f025ee0d5c9f"
            }
        ]

## Guestbook on id [/guestbook/{guestbookId}]

`/guestbook/{guestbookId}`

Get all the information from  one guestbook.

### Get one on id [GET]

+ Parameters
    + guestbookId (guid) - Id of the guestbook

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
            "accreditationProfiles": [
                {
                    "description": "Standaard",
                    "id": "aece5db8-8d80-4be2-8a5d-9f885075f10c"
                }
            ],
            "editions": [
                {
                    "description": "IDFA 2017",
                    "id": "35b3ec3d-9b21-43e0-bcbb-945c032c35b0"
                },
                {
                    "description": "IDFA Forum 2017",
                    "id": "60a632b2-1993-4054-81c1-67f028290c54"
                }
            ],
            "badges": [
                {
                    "description": "Industry badge",
                    "id": "1df3a806-4fb0-4704-a816-efc25e7ada18"
                },
                {
                    "description": "Press badge",
                    "id": "da07439f-b79a-4bdc-8cc1-d4a5eb70767e"
                },
                {
                    "description": "Festival badge",
                    "id": "f4d78903-6c02-442f-9055-1a4b74f9d5f2"
                }
            ],
            "endsOn": "2017-10-01T00:00:00+02:00",
            "id": "cf2accb4-0aea-4103-a3f9-f025ee0d5c9f",
            "isActive": true,
            "name": "Gastenboek 3po - 2017",
            "startsOn": "2017-09-14T00:00:00+02:00"
        }

# Group Invoices

An invoice consists of one or more invoice lines and payment information. The invoice line is connected to either a film or an accreditation, and describes a product, price and VAT percentage.
The payment status of an invoice can be determined by the fields "isFulfilled" and "isRefunded". An invoice has been paid as soon as it is fulfilled, but not refunded.

## All invoice lines for owner [/{ownerType}/{ownerTypeId}/invoicelines]
`e.g. /accreditation/{accreditationId}/invoicelines`

To get all the available invoice lines for a specific accreditation or film.
Ownertype is either "accreditation" or "film".

### Read all [GET]

+ Parameters
    + ownerType (string) - Type of the owner, either "accreditation" or "film".
    + ownerTypeId (guid) - Unique id of the owner

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
                "Id": "48e18f9e-797b-42c4-9c1b-fdd898dd06ff",
                "AlwaysChargeVat": false,
                "Amount": 10.0,
                "DiscountPercentage": 0,
                "Quantity": 1,
                "Description": "Victoria Abril",
                "ProductVariant": {
                    "Description": "Accreditation entry",
                    "Id": "31d3cc8a-f142-42a1-8bc3-6b7b8befae53"
                },
                "Discount": 0.0,
                "VatPercentage": 6.0,
                "Invoice": {
                    "Id": "466318ba-a1fe-485b-9b49-e73a3d325b64",
                    "IsFulfilled": true,
                    "IsRefunded": false,
                    "OrderNumberString": "ORDERD-000009",
                    "InvoiceNumberString": "INVOICE-000008"
                }
            },
            {
                "Id": "f7dde9cd-a872-4ada-9cd8-2f5bbfb6761c",
                "AlwaysChargeVat": false,
                "Amount": 15.51,
                "DiscountPercentage": 0,
                "Quantity": 1,
                "Description": "Victoria Abril",
                "ProductVariant": {
                    "Description": "Accreditation entry",
                    "Id": "31d3cc8a-f142-42a1-8bc3-6b7b8befae53"
                },
                "Discount": 0.0,
                "VatPercentage": 6.0,
                "Invoice": {
                    "Id": "5a019ee0-ab68-478e-bba3-0c5b31a47ed7",
                    "IsFulfilled": false,
                    "IsRefunded": false,
                    "OrderNumberString": "ORDERD-000006",
                    "InvoiceNumberString": null
                }
            }
        ]

## Invoice line on id [/{ownerType}/{ownerTypeId}/invoiceline/{invoiceLineId}]

### Read [GET]

+ Parameters
    + ownerType (string) - Type of the owner, either "accreditation" or "film".
    + ownerTypeId (guid) - Unique id of the owner
    + invoiceLineId (guid) - Unique id of the invoice line

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
            "Id": "48e18f9e-797b-42c4-9c1b-fdd898dd06ff",
            "AlwaysChargeVat": false,
            "Amount": 10.0,
            "DiscountPercentage": 0,
            "Quantity": 1,
            "Description": "Victoria Abril",
            "ProductVariant": {
                "Description": "Accreditation entry",
                "Id": "31d3cc8a-f142-42a1-8bc3-6b7b8befae53"
            },
            "Discount": 0.0,
            "VatPercentage": 6.0,
            "Invoice": {
                "Id": "466318ba-a1fe-485b-9b49-e73a3d325b64",
                "IsFulfilled": true,
                "IsRefunded": false,
                "OrderNumberString": "ORDERD-000009",
                "InvoiceNumberString": "INVOICE-000008"
            }
        }

## Invoice on id  [/invoice/{invoiceId}]

### Read [GET]

+ Parameters
    + invoiceId (guid) - Unique id of the invoice

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
            "Id": "466318ba-a1fe-485b-9b49-e73a3d325b64",
            "IsFulfilled": true,
            "IsRefunded": false,
            "CreatedOn": "2019-09-27T07:35:48.3524488+00:00",
            "DueOn": "2019-10-27T00:00:00+02:00",
            "FulFilledOn": "2020-01-13T08:34:54.0121581+00:00",
            "RefundedOn": null,
            "DroppedOn": null,
            "OrderNumber": 9,
            "OrderNumberString": "ORDERD-000009",
            "InvoiceNumberString": "INVOICE-000008",
            "SummedAmountExcludingVat": 10.0,
            "SummedAmountVat": 0.0,
            "SummedAmountIncludingVat": 10.0,
            "InvoiceLines": [
                {
                    "Description": "Victoria Abril",
                    "Id": "48e18f9e-797b-42c4-9c1b-fdd898dd06ff"
                }
            ]
        }

# Group Lookups

## Lookups list [/lookups]
`/lookups`

Fiona Online offers several lookup lists. Some are customizable, others are fixed (system lists).
Each list contains one or more translated values.

We have an [overview of the fields of all entities](https://docs.google.com/spreadsheets/d/1ke-hS1S_ZVdARp5HgzGCrbOSxz9sxWmLlAX4PnsdX3M/edit?usp=sharing) that refer to a lookup lists.

For now you have to maintain the lookups by using the Fiona web interface. In the future, lookups will be editable via the API.

For some lookups, a groupId has been given for each value. This groupId refers to a lookup value from another lookup. This means that this value is only applicable in context of the referred parent value.
For example: CommunicationItemSubTypes are grouped in CommunicationItemTypes and ConflictTypes are grouped in ConflictCategories.

Note: the example response does not contain all possible lookups!

+ Attributes (lookupValue)

### Get all lookup lists [GET]

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
                "description": "ProgrammeStatus",
                "id": "997d7ef9-db1d-4b01-a2e6-15b2f2f3d400"
            },
            {
                "description": "FilmStatus",
                "id": "4e584a0b-1c17-48e5-b83a-965b0feeeb3b"
            },
            {
                "description": "FilmRating",
                "id": "c03abbfb-ec7a-4fed-878a-540d5f16cadb"
            },
            {
                "description": "ProgrammeType",
                "id": "1722214a-fba3-4c24-878f-d0db1f18506d"
            },
            {
                "description": "Territory",
                "id": "0c3363e0-f3bb-4865-a6ff-6e2b86cbc5a5"
            },
            {
                "description": "EditionPhase",
                "id": "40243429-08eb-4df0-814c-dc5de2ddb916"
            },
            {
                "description": "AlternativeContentType",
                "id": "ce237ef4-1d15-4669-9222-0bb5bab4303a"
            },
            {
                "description": "AttachmentContentType",
                "id": "d29b549b-4a03-4d6d-8988-9dad8dc6904e"
            },
            {
                "description": "FilmParticipationType",
                "id": "a08dce2a-6cf1-4ab6-aeae-2448a7aa787f"
            },
            {
                "description": "FilmAwardType",
                "id": "d4478cd5-969b-4ae6-98e9-13a2ac5f76fd"
            },
            {
                "description": "Month",
                "id": "8681b43f-9df8-4bc3-8d08-4419ad774ad8"
            }
        ]

## Lookup Values on id [/lookup/{lookupId}]
`/lookup/lookupId`

To retrieve all information and Lookup Values for one specific Lookup.

+ Attributes
    + defaultLookupValueId - Unique id of the default lookup value, for this list
    + isCustomizable: false (boolean) - To indicate if it is possible to customize this list in the Fiona web interface
    + lookupValues (array) - List of lookup values
        + (object)
            + groupId - Unique id of the group [see lookups list for more info](#reference/lookups/lookups-list)
            + id - Unique id of the lookup value
            + indexNumber - Sort order of the value, within this list
            + key - Key of the lookup value
            + translations (array) - Dutch (nl) and English (en) translation of the lookup value, with both the abbreviation and the text

### Get all lookup values for one list [GET]

+ Parameters
    + lookupId - Unique id of the lookup

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
            "defaultLookupValueId": "da9d63e8-3616-4d5c-a033-b64a09490531",
            "isCustomizable": false,
            "lookupValues": [
                {
                    "groupId": null,
                    "id": "da9d63e8-3616-4d5c-a033-b64a09490531",
                    "indexNumber": 0,
                    "isActive": true,
                    "key": "document",
                    "translations": [
                        {
                            "abbreviation": "D",
                            "language": "nl",
                            "text": "Document"
                        },
                        {
                            "abbreviation": "D",
                            "language": "en",
                            "text": "Document"
                        }
                    ]
                },
                {
                    "groupId": null,
                    "id": "233d9d0f-4020-43aa-9703-286cb21c6437",
                    "indexNumber": 1,
                    "isActive": true,
                    "key": "image",
                    "translations": [
                        {
                            "abbreviation": "A",
                            "language": "nl",
                            "text": "Afbeelding"
                        },
                        {
                            "abbreviation": "I",
                            "language": "en",
                            "text": "Image"
                        }
                    ]
                },
                {
                    "groupId": null,
                    "id": "7ed1af6a-20cd-4c41-860d-0591389b582c",
                    "indexNumber": 2,
                    "isActive": true,
                    "key": "url",
                    "translations": [
                        {
                            "abbreviation": "U",
                            "language": "nl",
                            "text": "URL"
                        },
                        {
                            "abbreviation": "U",
                            "language": "en",
                            "text": "URL"
                        }
                    ]
                },
                {
                    "groupId": null,
                    "id": "af584d48-4a0f-46f8-999c-40a57052b81f",
                    "indexNumber": 3,
                    "isActive": true,
                    "key": "hardcopy",
                    "translations": [
                        {
                            "abbreviation": "H",
                            "language": "en",
                            "text": "Hard copy"
                        },
                        {
                            "abbreviation": "H",
                            "language": "nl",
                            "text": "Hardcopy"
                        }
                    ]
                },
                {
                    "groupId": null,
                    "id": "70d94641-c076-40a5-b229-1c4eb1209aeb",
                    "indexNumber": 4,
                    "isActive": true,
                    "key": "video",
                    "translations": [
                        {
                            "abbreviation": "V",
                            "language": "nl",
                            "text": "Online video"
                        },
                        {
                            "abbreviation": "V",
                            "language": "en",
                            "text": "Online video"
                        }
                    ]
                },
                {
                    "groupId": null,
                    "id": "cd7437c2-1cb5-4ab0-a585-937c479f7588",
                    "indexNumber": 5,
                    "isActive": true,
                    "key": "memo",
                    "translations": [
                        {
                            "abbreviation": "M",
                            "language": "en",
                            "text": "Memo"
                        },
                        {
                            "abbreviation": "M",
                            "language": "nl",
                            "text": "Memo"
                        }
                    ]
                }
            ]
        }

## New lookup value [/lookup/{id}/value]

`/lookup/{id}/value`

You can add new values to a lookup. Some lookups support extended properties. You can add these properties to the root of your document, like 'isoCode' in this example:

`{
  "indexNumber": 1,
  "isActive": true,
  "key": "fantasyland",
  "isoCode": "FL",
  "translations": [...]
}`

<!----
+ ActivityTypes
    + defaultIsInternal (bool)
    + defaultShowInPublications (bool)
    + defaultLengthInMinutes (int)
    + colour (string like "#ff00cd")

+ CompositionType
    + colour (string like "#ff00cd")
--->

+ Countries
    + isoCode (string like "US")

+ Languages
    + isoCode (string like "NL")

<!----
+ TextTypes
    + autoCreateOnFilm (bool)
--->

The supported languages for translation of lookup values depends on the setup of your Fiona. Contact <a href="mailto:support@fiona-festival.com">support@fiona-festival.com</a> for more information about your setup.

### Create [POST]

+ Parameters
    + id (string) - Id of the lookup

+ Request (application/json)

    + Headers

            Api-Key: [key]

    + Body

            {
              "indexNumber": 8,
              "isActive": true,
              "key": "performance",
              "translations": [
                {
                  "abbreviation": "Perf.",
                  "language": "en",
                  "text": "Performance"
                },
                {
                  "abbreviation": "Optr.",
                  "language": "nl",
                  "text": "Optreden"
                }
              ]
            }

+ Response 201 (application/json)

        {
          "id": "ab94c6c6-f055-4b5c-a1a0-bd064097edb9",
          "key": "performance",
          "translations": [
            {
              "abbreviation": "Optr.",
              "language": "nl",
              "text": "Optreden"
            },
            {
              "abbreviation": "Perf.",
              "language": "en",
              "text": "Performance"
            }
          ]
        }

## Existing lookup value [/lookup/{lookupId}/value/{lookupvalueId}]

`/lookup/{id}/value/{id}`

### Delete [DELETE]

+ Parameters
    + lookupId (guid) - Key of the lookup
    + lookupvalueId (guid) - Id of the lookup value

+ Request (application/json)

    + Headers

            Api-Key: [key]

+ Response 204 (application/json)

# Group People

## Introduction

A person in Fiona contains some information, like name and address. A person can be added to a film as a [film credit](#reference/film-credits),
or can be added to a [guestbook](https://fionaonlinexapi.docs.apiary.io/#reference/guestbooks).

You cannot search on people in the API. You can search for a personId in an overview of people, through the front end of Fiona.

## Existing person [/person/{personId}]

Get all the available information of a person

+ Attributes
    + id - Unique id of the person
    + address (address) - Private address of the person
    + dateOfBirth
    + firstName
    + lastName
    + mailingLanguage
    + mailToCompanyPerson - If `null`, the mail should go to the address of the person. Otherwise id and description of the Company.
    + nationality (lookupValue)
    + noCorrespondence (boolean) - If true, this person doesn't want to receive any correspondence
    + noCorrespondenceReason - Reason why you cannot send correspondence
    + prefix
    + profession (lookupValue)
    + pronouns (lookupValue)
    + salutation (lookupValue)
    + tags - Empty array, not in use
    + title (lookupValue)

### Read [GET]

+ Parameters
    + personId - Unique id of the person

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
            "id": "91254aa4-5da8-4b7a-94a9-b395ee4a9252",
            "address": {
                "address1": "Scheepmakershaven 32c",
                "address2": null,
                "city": null,
                "country": {
                    "description": "Netherlands",
                    "id": "4d4661c4-0fbd-493b-a790-1d6011ac0f46"
                },
                "postalCode": null,
                "state": null
            },
            "dateOfBirth": null,
            "firstName": "Digna",
            "lastName": "Nielen - heeft nog geen FestivalAccount",
            "mailingLanguage":"en",
            "mailToCompanyPerson": null,
            "nationality": {
                "description": "-",
                "id": "f66b3986-f31e-4805-a8db-9fafac590b80"
            },
            "noCorrespondence": false,
            "noCorrespondenceReason": null,
            "prefix": "van",
            "profession": {
                "description": "-",
                "id": "e41b4d2c-637f-4770-b861-1a99898bcde6"
            },
            "salutation": {
                "description": "-",
                "id": "49015016-8f85-46e9-92c4-0d91290f17f4"
            },
            "tags": [],
            "title": {
                "description": "Msc",
                "id": "d90f6ec3-e7d4-4145-af84-047ec722070e"
            }
        }

### Update [POST]

+ Parameters
    + personId - Unique id of the person

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + body

            {
                "address": {
                    "address1": "Scheepmakershaven 32c",
                    "address2": null,
                    "city": null,
                    "country": {
                        "id": "4d4661c4-0fbd-493b-a790-1d6011ac0f46"
                    },
                    "postalCode": null,
                    "state": null
                },
                "dateOfBirth": null,
                "firstName": "Digna",
                "lastName": "Nielen - heeft nog geen FestivalAccount",
                "mailingLanguage": "en",
                "mailToCompanyPerson": {
                    "id": "3297f06a-6282-4260-9d2d-ebf67f5033a7"
                },
                "nationality": {
                    "id": "f66b3986-f31e-4805-a8db-9fafac590b80"
                },
                "noCorrespondence": false,
                "noCorrespondenceReason": null,
                "prefix": "van",
                "profession": {
                    "id": "e41b4d2c-637f-4770-b861-1a99898bcde6"
                },
                "Pronouns": [
                {
                     "Description": "she/her/hers",
                     "Id": "8a513f7c-5de9-4b7c-bd83-51c440d7d63b"
                 }
                "salutation": {
                    "id": "49015016-8f85-46e9-92c4-0d91290f17f4"
                },
                "title": {
                    "id": "d90f6ec3-e7d4-4145-af84-047ec722070e"
                }
            }

+ Response 200 (application/json)

        (same as the person GET response)

### Delete [DELETE]

+ Parameters
    + personId - Unique id of the person

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

## Add new person [/person]

Create a new person.

### Create [POST]

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + body

            {
                "address": {
                    "address1": null,
                    "address2": null,
                    "city": null,
                    "country": null,
                    "postalCode": null,
                    "state": null
                },
                "dateOfBirth": null,
                "firstName": "Digna",
                "lastName": "Nielen - via de xAPI2",
                "mailingLanguage": "en",
                "mailToCompanyPerson": null,
                "nationality": {
                    "description": "-",
                    "id": "f66b3986-f31e-4805-a8db-9fafac590b80"
                },
                "noCorrespondence": false,
                "noCorrespondenceReason": null,
                "prefix": "van",
                "profession": {
                    "description": "-",
                    "id": "e41b4d2c-637f-4770-b861-1a99898bcde6"
                },
                "salutation": {
                    "description": "-",
                    "id": "49015016-8f85-46e9-92c4-0d91290f17f4"
                },
                "tags": [],
                "title": {
                    "description": "Msc",
                    "id": "d90f6ec3-e7d4-4145-af84-047ec722070e"
                }
            }

+ Response 200 (application/json)

        (same as the person GET response)

## Related companies to a person [/person/{personId}/companies]

To learn if there are any companies / which companies are related to a person.

Get all the available information of a person

+ Attributes
    + id - Unique id of the person-company relation (companyPersonId)
    + company (object) - Description and unique id of the company
    + department
    + role (lookupValue)

### Read all [GET]

+ Parameters
    + personId - Unique id of the person

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
                "id": "3297f06a-6282-4260-9d2d-ebf67f5033a7",
                "company": {
                    "description": "Fiona Festival",
                    "id": "ecf6db77-32d4-466d-9122-39e6ff38ef97"
                },
                "department": null,
                "role": {
                    "description": "manager",
                    "id": "68143832-91e4-40cd-a4ba-fbc0367edc89"
                }
            }
        ]

## Existing relation [/person/{personId}/company/{companyPersonId}]

### Get [GET]

+ Parameters
    + personId - Unique id of the person
    + companyPersonId - Unique id of the person-company relation

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
            "id": "3297f06a-6282-4260-9d2d-ebf67f5033a7",
            "company": {
                "description": "Fiona Festival",
                "id": "ecf6db77-32d4-466d-9122-39e6ff38ef97"
            },
            "department": null,
            "role": {
                "description": "manager",
                "id": "68143832-91e4-40cd-a4ba-fbc0367edc89"
            }
        }

### Update [POST]

+ Parameters
    + personId - Unique id of the person
    + companyPersonId - Unique id of the person-company relation

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + body

            {
                "id": "3297f06a-6282-4260-9d2d-ebf67f5033a7",
                "company": {
                    "description": "Fiona Festival",
                    "id": "ecf6db77-32d4-466d-9122-39e6ff38ef97"
                },
                "department": "support",
                "role": {
                    "description": "manager",
                    "id": "68143832-91e4-40cd-a4ba-fbc0367edc89"
                }
            }

+ Response 200 (application/json)

        (same as the GET response)

### Delete [DELETE]

+ Parameters
    + personId - Unique id of the person
    + companyPersonId - Unique id of the person-company relation

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

## All communication items [/person/{personId}/communicationItems]

Communication items are available for both people and companies. An item is defined by two lookup values: a communicationItemType and communicationItemSubType.

The available communicationItemTypes are:
+ unknown
+ phone
+ email
+ online

The communicationItemSubType is only applicable in the context a given communicationItemType. For each subType, a groupId has been given. This groupId refers to the id of a communicationItemType.

+ Attributes
    + companyPerson - Unique id of the companyPerson, filled out if the communication item is related to e.g. a person's work phone number.
    + id - Unique id of the communication item
    + isDefault (boolean) - If true, the communication item is the default phone / email / online address
    + notes
    + sortOrder (number)
    + subType (lookupValue)
    + type (lookupValue)
    + value - Phone number, email address or online address

### Read all [GET]

+ Parameters
    + personId - Unique id of the person

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
                "companyPerson": null,
                "id": "8ae62e27-48ff-41d3-a712-33516a436e15",
                "isDefault": false,
                "notes": "this is an example",
                "sortOrder": 0,
                "subType": {
                    "description": "Work",
                    "id": "8ae48193-3f7e-4420-ab2a-aa2f27ed1bbc"
                },
                "type": {
                    "description": "Phone",
                    "id": "a409fe44-1448-42ff-a902-2d7149fb7efb"
                },
                "value": "31102801111"
            }
        ]

## Existing communication item on id [/person/{personId}/communicationItem/{communicationItemId}]

### Read [GET]

+ Parameters
    + personId - Unique id of the person
    + communicationItemId - Unique id of the communication item

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
            "companyPerson": null,
            "id": "8ae62e27-48ff-41d3-a712-33516a436e15",
            "isDefault": false,
            "notes": "this is an example",
            "sortOrder": 0,
            "subType": {
                "description": "Work",
                "id": "8ae48193-3f7e-4420-ab2a-aa2f27ed1bbc"
            },
            "type": {
                "description": "Phone",
                "id": "a409fe44-1448-42ff-a902-2d7149fb7efb"
            },
            "value": "31102801111"
        }

### Update [POST]

+ Parameters
    + personId - Unique id of the person
    + communicationItemId - Unique id of the communication item

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            {
                "companyPerson": {
                    "id": "d36a977f-82ca-4dc4-9664-2f3f4f74d439"
                },
                "id": "8ae62e27-48ff-41d3-a712-33516a436e15",
                "isDefault": false,
                "notes": "this is an example",
                "sortOrder": 0,
                "subType": {
                    "description": "Work",
                    "id": "8ae48193-3f7e-4420-ab2a-aa2f27ed1bbc"
                },
                "type": {
                    "description": "Phone",
                    "id": "a409fe44-1448-42ff-a902-2d7149fb7efb"
                },
                "value": "31102801111"
            }

+ Response 200 (application/json)

        {
            "companyPerson": {
                "description": "Fiona BV",
                "id": "d36a977f-82ca-4dc4-9664-2f3f4f74d439"
            },
            "id": "8ae62e27-48ff-41d3-a712-33516a436e15",
            "isDefault": false,
            "notes": "this is an example",
            "sortOrder": 0,
            "subType": {
                "description": "Work",
                "id": "8ae48193-3f7e-4420-ab2a-aa2f27ed1bbc"
            },
            "type": {
                "description": "Phone",
                "id": "a409fe44-1448-42ff-a902-2d7149fb7efb"
            },
            "value": "31102801111"
        }

### Clear [DELETE]

+ Parameters
    + personId - Unique id of the person
    + communicationItemId - Unique id of the communication item

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

## Add new communication item [/person/{personId}/communicationitem]

### Create [POST]

+ Parameters
    + personId - Unique id of the person

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            {
                "companyPerson": {
                    "id": "d36a977f-82ca-4dc4-9664-2f3f4f74d439"
                },
                "isDefault": false,
                "notes": "this is an example",
                "sortOrder": 0,
                "subType": {
                    "description": "Work",
                    "id": "8ae48193-3f7e-4420-ab2a-aa2f27ed1bbc"
                },
                "type": {
                    "description": "Phone",
                    "id": "a409fe44-1448-42ff-a902-2d7149fb7efb"
                },
                "value": "31102801111"
            }

+ Response 200 (application/json)

        {
            "companyPerson": {
                "description": "Fiona BV",
                "id": "d36a977f-82ca-4dc4-9664-2f3f4f74d439"
            },
            "id": "6316b941-e55b-41a8-9cd3-92463667cb87",
            "isDefault": false,
            "notes": "this is an example",
            "sortOrder": 0,
            "subType": {
                "description": "Work",
                "id": "8ae48193-3f7e-4420-ab2a-aa2f27ed1bbc"
            },
            "type": {
                "description": "Phone",
                "id": "a409fe44-1448-42ff-a902-2d7149fb7efb"
            },
            "value": "31102801111"
        }

# Group Raid sets

## Raid set [/raidSet/{raidSetId}]
Get all the information for a raid set, including the (suggested) screening copies.

+ Attributes
      + id - Unique id (guid) of the raid set
      + name - Name of the raid set
      + startsOn - Start date of the raid set
      + endsOn - End date of the raid set
      + autoFill (boolean) - If true, Fiona adds screening copies to the raid set which should be on the raid set according to the screenings & raid set information
      + capacity - Capacity of the raid set, in Gb
      + locationServer (reference) - The location where the raid set will be used
      + remarks - Remarks made in Fiona about this raid set
      + status (lookupValue) - Status of the raid set (lookup list RaidSetStatus)
      + DCPs (array) - All the (suggested) DCPs for this raid set, including their ingest status
        + (object)
          + id - Unique id (guid) of the film screening copy
          + ingestStatus (lookupValue) - Status of the raid set part (lookup list FilmScreeningCopyIngestStatus) If null then the copy is a suggested screening copy without an ingest status
          + contentTitle - Content title from the CPL file. If null, there is no CPL file available (yet) for this DCP
          + filmTitle - Title of the film
          + name - Name or print number in format #1234
          + uuid - UUID from the CPL file (if available, otherwise this will be "00000000-0000-0000-0000-000000000000")
          + firstScreeningOn - First usage of this screening copy, on the location of this raid set
          + lastScreeningOn - Last usage of this screening copy, on the location of this raid set

+ Parameters
    + raidSetId (guid) - Id of the raid set

### Get one on id [GET]

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
            "id": "4c86a2e6-39d9-4ed9-a276-2051296ba2e2",
            "name": "Raidset #1",
            "startsOn": "2018-09-12T00:00:00+02:00",
            "endsOn": "2018-09-26T00:00:00+02:00",
            "autoFill": true,
            "capacity": 0,
            "locationServer": {
                "description": "Locatie 1 > abc12345653",
                "id": "44bc1627-633b-4d2d-8424-826e7c5d712f"
            },
            "remarks": null,
            "status": {
                "description": "Pending",
                "id": "3c3d1703-2ca1-489d-8568-484049b22f38"
            },
            "DCPs": [
                {
                    "id": "b872c739-1f46-4733-b327-bdae8d635b79",
                    "ingestStatus": {
                        "description": "Ingested",
                        "id": "5b8884ee-cdab-43fc-947f-95b16b9e1b07"
                    },
                    "contentTitle": null,
                    "filmTitle": "A Clockwork Orange",
                    "name": "#0002",
                    "uuid": "00000000-0000-0000-0000-000000000000",
                    "firstScreeningOn": "2018-09-12T09:45:00+00:00",
                    "lastScreeningOn": "2018-09-12T09:45:00+00:00"
                }
            ]
        }

## Update ingest status [/raidSet/{id}/copy/{filmScreeningCopyId}/status/{ingestStatusId}]
You can update the ingest status of a DCP on a raid set. This only works for autoFill raid sets

+ Parameters
      + id (guid) - Unique id of the raid set
      + filmScreeningCopyId (guid) - Unique id of the screening copy
      + ingestStatusId (guid) - Status of the raid set part (lookup list FilmScreeningCopyIngestStatus)

### Update one on id [POST]

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
              false when the raid set is not found or raid set is not marked as autoFill, otherwise true
        }

## Reset ingest status [/raidSet/{id}/copy/{filmScreeningCopyId}/status]
You can reset the ingest status of a DCP on a raid set. This only works for autoFill raid sets

+ Parameters
      + id (guid) - Unique id of the raid set
      + filmScreeningCopyId (guid) - Unique id of the screening copy

### Reset one on id [DELETE]

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
              false when the raid set is not found or raid set is not marked as autoFill, otherwise true
        }

# Group Received film screening copies

## Introduction

Keep track of the received film screening copies on your festival.
A film can have one or more received film screening copy, from one of the following types (lookup MediumType):
+ DCP / CPL
+ Digital file
+ Special
+ Vimeo

Each medium type has its own status list (lookup ReceivedScreeningCopyDownloadStatus). For CPLs, the statuses you can use are:
+ Download available (id = f11c60af-342a-4448-9941-c8bd2603f6f8)
+ Download busy (id = 3c7082c7-3287-4920-9ea1-1df995e96d90)
+ Download ok (id = ed2bccc6-1f0d-46ae-9af9-8afd77a00a8b)
+ Download not ok (id = c0d0edd2-04c2-447d-903d-b914f6e6f111)
+ Processed by Filmcontrol (id = cbfd73d0-502f-4660-8de8-f80abd910231)
+ Conversion needed (id = d8b7aeac-6669-4b7b-854f-3cda374f2064)
+ Conversion done (id = 0b290000-189a-43d0-8e26-8cf1c433e204)

For Vimeo videos, the available statuses are:
+ Wait for approval (id = bc924be3-8e10-45fc-9fbc-f99790f5d501)
+ Approved (id = 9b4b9304-ccfe-44d1-a7c3-b73af2afa1db)
+ Approved with warnings (id = 99acbb02-10b2-4855-8b80-64b14ce4d8af)
+ Disapproved (id = 90fb8dfe-beec-4cd6-99e8-10db39553b70)

## List received screening copies for a film [/film/{filmId}/receivedfilmscreeningcopies]

Returns a list of all the received screening copies for this film. A received film screening copy can have a [delivery](/#reference/deliveries/delivery-on-id) as a source.

+ Attributes
    + value (string) - Content title, URL, Id or file name
    + description (string)
    + delivery (object) - Source of the received film screening copy (optional)
      + description - Title of the delivery
      + id - Unique id of the delivery
    + film (object)
      + description - Title of the film
      + id - Unique id of the film
    + frameRate (string) - frame rate of the cpl file
    + id - Unique id of the received film screening copy
    + isEncrypted (boolean) - whether the cpl file is encrypted or not
    + issueDate - issue date, read from CPL file
    + isUnusable (boolean) - if true, this received film screening copy cannot be connected to a screening copy.
    + mediumType (object) - [(lookup value - MediumType)](#reference/lookups/lookup-values-on-id)
    + contentType (object) - To define the type of content [lookup value - AttachmentContentType](#reference/lookups/lookup-values-on-id)
    + status (object) - Status of the received screening copy [(lookup value - ReceivedScreeningCopyDownloadStatus)](#reference/lookups/lookup-values-on-id)
    + uuid (string) - Unique UUID, read from file
    + qualityControlReportUrl (string) - URL to quality report

### Read [GET]

+ Parameters
    + filmId (guid) - Id of the film

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
                "Value": "FIONA_FESTIVAL_TEST_MOVIE-EN_FTR_F-177_NL-EN_51_2K_20150127_CMNL_VF-2",
                "Delivery": null,
                "Film": {
                    "Description": "My First Vimeo",
                    "Id": "b677decb-a169-4873-bf96-218e0eaa84a6"
                },
                "FrameRate": "25 1",
                "Id": "7b1d07f0-62f9-429b-bea1-bc5731bd3aba",
                "IsEncrypted": false,
                "IssueDate": "2015-01-27T13:35:44+01:00",
                "IsUnusable": false,
                "MediumType": {
                    "Description": "DCP",
                    "Id": "8f34ffe1-bc79-4250-b1a9-6e1b5c416735"
                },
                "ContentType": null,
                "Status": {
                    "Description": "Download beschikbaar",
                    "Id": "f11c60af-342a-4448-9941-c8bd2603f6f8"
                },
                "Uuid": "729240a5-1175-46be-bc83-1d49e400932b",
                "QualityControlReportUrl": null
            },
            {
                "Value": "https://vimeo.com/22527131",
                "Delivery": {
                    "Description": "FilmFetch (700.265)",
                    "Id": "4d5238cf-c4ca-4ad7-8c98-26c7e27b28d6"
                },
                "Film": {
                    "Description": "My First Vimeo",
                    "Id": "b677decb-a169-4873-bf96-218e0eaa84a6"
                },
                "FrameRate": null,
                "Id": "8e64d2c2-b64f-429e-b2c4-1e8a08279da3",
                "IsEncrypted": false,
                "IssueDate": null,
                "IsUnusable": false,
                "MediumType": {
                    "Description": "Vimeo",
                    "Id": "d498e125-238d-4dc6-8ce1-fd5e5a14d2a6"
                },
                "ContentType": {
                    "Description": "Trailer",
                    "Id": "d246b26c-4b0e-492b-ac03-de4f812ae8cb"
                },
                "Status": {
                    "Description": "Goedgekeurd",
                    "Id": "9b4b9304-ccfe-44d1-a7c3-b73af2afa1db"
                },
                "Uuid": null,
                "QualityControlReportUrl": null
            }
        ]

## Received film screening copy on id [/receivedfilmscreeningcopy/{receivedFilmScreeningCopyId}]

Returns one received film screening copy.
You can update the following fields of a received film screening copy:
+ Delivery
+ isUnusable
+ Status

+ Attributes
    + contentTitle (string) - **renamed** Content title renamed to Value
    + value (string) - **new** Formerly content title
    + description (string)
    + delivery (object) - Source of the received film screening copy
      + description - Title of the delivery
      + id - Unique id of the delivery
    + film (object)
      + description - Title of the film
      + id - Unique id of the film
    + frameRate (string) - frame rate of the cpl file
    + id - Unique id of the received film screening copy
    + isEncrypted (boolean) - whether the cpl file is encrypted or not
    + issueDate - issue date, read from CPL file
    + isUnusable (boolean) - if true, this received film screening copy cannot be connected to a screening copy.
    + mediumType (object) - [(lookup value - MediumType)](#reference/lookups/lookup-values-on-id)
    + contentType (object) - **new** To define the type of content [lookup value - AttachmentContentType](#reference/lookups/lookup-values-on-id)
    + status (object) - Status of the received screening copy [(lookup value - ReceivedScreeningCopyDownloadStatus)](#reference/lookups/lookup-values-on-id)
    + uuid (string) - Unique UUID, read from file
    + qualityControlReportUrl (string) - **new**

### Read [GET]

+ Parameters
    + receivedFilmScreeningCopyId (guid) - Id of the received screening copy

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
            "Value": "https://vimeo.com/22527131",
            "Delivery": {
                "Description": "FilmFetch (700.265)",
                "Id": "4d5238cf-c4ca-4ad7-8c98-26c7e27b28d6"
            },
            "Film": {
                "Description": "My First Vimeo",
                "Id": "b677decb-a169-4873-bf96-218e0eaa84a6"
            },
            "FrameRate": null,
            "Id": "8e64d2c2-b64f-429e-b2c4-1e8a08279da3",
            "IsEncrypted": false,
            "IssueDate": null,
            "IsUnusable": false,
            "MediumType": {
                "Description": "Vimeo",
                "Id": "d498e125-238d-4dc6-8ce1-fd5e5a14d2a6"
            },
            "ContentType": {
                "Description": "Trailer",
                "Id": "d246b26c-4b0e-492b-ac03-de4f812ae8cb"
            },
            "Status": {
                "Description": "Goedgekeurd",
                "Id": "9b4b9304-ccfe-44d1-a7c3-b73af2afa1db"
            },
            "Uuid": null,
            "QualityControlReportUrl": null
        }

### Update [POST]

+ Parameters
    + receivedFilmScreeningCopyId (guid) - Id of the received screening copy

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            {
                "isUnusable": true,
                "status": {
                    "Id": "c0d0edd2-04c2-447d-903d-b914f6e6f111"
                }
            }

+ Response 200 (application/json)

        (same as the Received screening copy GET response body)

### Delete [DELETE]

+ Parameters
    + receivedFilmScreeningCopyId (guid) - Id of the received screening copy

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

## Received film screening copies on editionId and uuid [/edition/{editionId}/receivedfilmscreeningcopies/{uuid}]
`e.g. /edition/fa7c7cb5-e59d-4516-a278-b6a99113b01b/receivedfilmscreeningcopies/729240a5-1175-46be-bc83-1d49e400932a `

Find a list of received film screening copies, based on the uuid of a CPL file.

+ Attributes
    + contentTitle (string) - **renamed** Content title renamed to Value
    + value (string) - **new** Formerly content title
    + description (string)
    + delivery (object) - Source of the received film screening copy (optional)
      + description - Title of the delivery
      + id - Unique id of the delivery
    + film (object)
      + description - Title of the film
      + id - Unique id of the film
    + frameRate (string) - frame rate of the cpl file
    + id - Unique id of the received film screening copy
    + isEncrypted (boolean) - whether the cpl file is encrypted or not
    + issueDate - issue date, read from CPL file
    + isUnusable (boolean) - if true, this received film screening copy cannot be connected to a screening copy.
    + mediumType (object) - [(lookup value - MediumType)](#reference/lookups/lookup-values-on-id)
    + contentType (object) - **new** To define the type of content [lookup value - AttachmentContentType](#reference/lookups/lookup-values-on-id)
    + status (object) - Status of the received screening copy [(lookup value - ReceivedScreeningCopyDownloadStatus)](#reference/lookups/lookup-values-on-id)
    + uuid (string) - Unique UUID, read from file
    + qualityControlReportUrl (string) - **new**

### Read [GET]

+ Parameters
    + editionId - id of the edition
    + uuid - uuid of a CPL

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
          {
              "Value": "https://vimeo.com/22527131",
              "Delivery": {
                  "Description": "FilmFetch (700.265)",
                  "Id": "4d5238cf-c4ca-4ad7-8c98-26c7e27b28d6"
              },
              "Film": {
                  "Description": "My First Vimeo",
                  "Id": "b677decb-a169-4873-bf96-218e0eaa84a6"
              },
              "FrameRate": null,
              "Id": "8e64d2c2-b64f-429e-b2c4-1e8a08279da3",
              "IsEncrypted": false,
              "IssueDate": null,
              "IsUnusable": false,
              "MediumType": {
                  "Description": "Vimeo",
                  "Id": "d498e125-238d-4dc6-8ce1-fd5e5a14d2a6"
              },
              "ContentType": {
                  "Description": "Trailer",
                  "Id": "d246b26c-4b0e-492b-ac03-de4f812ae8cb"
              },
              "Status": {
                  "Description": "Goedgekeurd",
                  "Id": "9b4b9304-ccfe-44d1-a7c3-b73af2afa1db"
              },
              "Uuid": null,
              "QualityControlReportUrl": null
          }
        ]

## New received film screening copy [/film/{filmId}/receivedfilmscreeningcopy]
You can create new received film screening copies of medium type DCP and Vimeo.
**new** If you want to create a received film screening copy of the medium type DCP, do this first before uploading a CPL file.

### Create DCP [POST]

+ Parameters
    + filmId (guid) - Id of the film

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            {
              "Value": "LeTestFilm_FTR-1_F_IT-NL-OCAP_NL-NR_51_2K_ABC_20150106_HFD_IOP_OV",
              "Description": "Le test film DCP",
              "Delivery": {
                "Id": "4a6f11aa-c4b9-46f9-916a-2205626cd86c"
                },
              "MediumType": {
                "Id": "8f34ffe1-bc79-4250-b1a9-6e1b5c416735"
                },
              "ContentType": null,
              "QualityControlReportUrl": "filmfetch.net/test-report-1234556"
            }

+ Response 200 (application/json)

        (same as the Received screening copy GET response body)

### Create Digital [POST]

+ Parameters
    + filmId (guid) - Id of the film

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            {
              "Value": "test.mpg",
              "Description": "A digital file",
              "Delivery": {
                "Id": "4a6f11aa-c4b9-46f9-916a-2205626cd86c"
                },
              "MediumType": {
                "Id": "b7e654de-e2a5-4187-8cc9-3723366944d0"
                },
              "ContentType": null,
              "QualityControlReportUrl": "filmfetch.net/test-report-1234556"
            }

+ Response 200 (application/json)

        (same as the Received screening copy GET response body)

### Create Online [POST]

+ Parameters
    + filmId (guid) - Id of the film

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            {
              "Value": "https://vimeo.com/22523431",
              "Description": "https://vimeo.com/22527131",
              "Delivery": {
                "Id": "4d5238cf-c4ca-4ad7-8c98-26c7e27b28d6"
                },
              "MediumType": {
                "Id": "d498e125-238d-4dc6-8ce1-fd5e5a14d2a6"
                },
              "ContentType": {
                "Id": "d246b26c-4b0e-492b-ac03-de4f812ae8cb"
                },
              "QualityControlReportUrl": "filmfetch.net/test-report-789123"
            }

+ Response 200 (application/json)

        (same as the Received screening copy GET response body)

## Add CPL to received film screening copy [/receivedfilmscreeningcopy/{receivedFilmScreeningCopyId}/upload-cpl]
**new** You must first create a received film screening copy, before you can upload a CPL file to it.

### Upload CPL [POST]

+ Parameters
    + receivedFilmScreeningCopyId (guid) - Id of the received fim screening copy

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            (form-data file upload)

+ Response 200 (application/json)

        (same as the Received screening copy GET response body)

# Group RSVP Events
All RSVP events are connected to a schedule.

## All RSVP events per schedule [/schedule/{scheduleId}/rsvpevents]

`/schedule/{{scheduleId}}/rsvpevents`

Get all RSVP events in a schedule

### Get all RSVP events per schedule [GET]

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)
        [
            {
                "CreatedOn": "2024-12-18T09:14:14.4865798+00:00",
                "UpdatedOn": "2025-08-06T12:47:01.3046152+00:00",
                "Description": "Opening night",
                "Id": "d39e57fa-a76b-4050-9dae-78e1d1d03abf"
            },
            {
                "CreatedOn": "2025-01-21T14:48:53.5502378+00:00",
                "UpdatedOn": "2025-01-21T14:49:00.0190402+00:00",
                "Description": "Closing night",
                "Id": "296e85a4-f37f-46d0-9602-7d14a43728e3"
            },
            {
                "CreatedOn": "2025-03-21T00:26:56.7619074+00:00",
                "UpdatedOn": "2025-06-24T13:19:49.4492183+00:00",
                "Description": "Closing Night",
                "Id": "f5521831-1ae7-48e5-bc49-8e9d2dec25d4"
            },
            {
                "CreatedOn": "2025-06-24T13:19:25.1814032+00:00",
                "UpdatedOn": "2025-06-24T13:19:25.1814032+00:00",
                "Description": "Special drinks",
                "Id": "f9aee5a9-e19e-4eaa-be1a-8883c17dc7a5"
            },
            {
                "CreatedOn": "2025-06-24T13:22:27.4789901+00:00",
                "UpdatedOn": "2025-06-24T13:22:27.4789901+00:00",
                "Description": "Closing Night",
                "Id": "117100d9-d84b-4f26-82ac-52afacd80b09"
            }
        ]

## RSVP Event [/rsvpevent/{id}]

`/rsvpevent/{id}`

Get all information about a RSVP event.

### Get RSVP Event [GET]

+ Response 200 (application/json)

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

            [
        {
            "Name": "Opening night",
            "DisplayName": null,
            "Date": "2025-09-12T00:00:00",
            "StartsOn": "20:00:00",
            "EndsOn": "23:00:00",
            "Id": "d39e57fa-a76b-4050-9dae-78e1d1d03abf",
            "NumberedSeats": false,
            "AutomaticTransferOfInvitees": false,
            "ContactDetailsVerificationEnabled": true,
            "OpensOn": "2024-12-31T23:00:00+00:00",
            "ClosesOn": "2026-01-14T23:00:00+00:00",
            "AllowAnonymousFormSubmissions": false,
            "Location": {
                "Description": "City Cinema",
                "Id": "4b1fc025-97d0-478a-b4b7-0e72dcb7b1a7"
            },
            "Schedule": {
                "Description": "Festival 2025",
                "Id": "7f70b3c6-f730-44ca-b7b3-84604bcfc9d5"
            },
            "People": [
                {
                    "Person": {
                        "Description": "Ben Affleck",
                        "Id": "17cada5e-fcf0-4b0d-8e43-4f91f3f45e16"
                    },
                    "TargetGroup": {
                        "Description": "VIP",
                        "Id": "554890a1-eed8-4100-a645-04213859ba4a"
                    }
                },
                {
                    "Person": {
                        "Description": "Erik Anders",
                        "Id": "cfc8b48f-9979-41ba-8cdc-86a12e41f53e"
                    },
                    "TargetGroup": {
                        "Description": "VIP",
                        "Id": "554890a1-eed8-4100-a645-04213859ba4a"
                    }
                },
                {
                    "Person": {
                        "Description": "Jantje van Beton",
                        "Id": "af4ccd6c-0cd5-4425-a693-95f369ee39a4"
                    },
                    "TargetGroup": {
                        "Description": "VIP",
                        "Id": "554890a1-eed8-4100-a645-04213859ba4a"
                    }
                },
                {
                    "Person": {
                        "Description": "Lotte Kok",
                        "Id": "f4f708ef-955c-4c5e-a649-0dd341f58677"
                    },
                    "TargetGroup": {
                        "Description": "VIP",
                        "Id": "554890a1-eed8-4100-a645-04213859ba4a"
                    }
                },
                {
                    "Person": {
                        "Description": "Mek van 't Hoff",
                        "Id": "cfe46717-5029-41a0-bd28-69e7c073ff6e"
                    },
                    "TargetGroup": {
                        "Description": "VIP",
                        "Id": "554890a1-eed8-4100-a645-04213859ba4a"
                    }
                },
                {
                    "Person": {
                        "Description": "Roland van Putten",
                        "Id": "0e5f2f3f-e27c-4cf0-b116-0597d9d2e585"
                    },
                    "TargetGroup": {
                        "Description": "VIP",
                        "Id": "554890a1-eed8-4100-a645-04213859ba4a"
                    }
                },
                {
                    "Person": {
                        "Description": "Saartjes Allegaartjes",
                        "Id": "50c3002e-99de-4131-a10f-53d15574b62e"
                    },
                    "TargetGroup": {
                        "Description": "VIP",
                        "Id": "554890a1-eed8-4100-a645-04213859ba4a"
                    }
                },
                {
                    "Person": {
                        "Description": "Scarlet Johanson",
                        "Id": "a2641a34-c1e4-4f2d-a986-6cab6c139481"
                    },
                    "TargetGroup": {
                        "Description": "VIP",
                        "Id": "554890a1-eed8-4100-a645-04213859ba4a"
                    }
                }
            ],
            "CreatedBy": {
                "Description": "Roland van Putten",
                "Id": "ccfa2edd-f3df-4803-98a2-b72abd540d23"
            },
            "CreatedOn": "2024-12-18T09:14:14.4865798+00:00",
            "UpdatedBy": {
                "Description": "Support & advice @ Fiona",
                "Id": "6a3d5072-9ae7-45b5-9885-7dcad5321320"
            },
            "UpdatedOn": "2025-08-06T12:47:01.3046152+00:00"
        }
                ]

# Group Schedules
There are two different schedule types: ProgrammeSchedule, a regular programming schedule and AppointmentSchedule, a schedule with appointments for a market.
Shows can be created within a programming schedule.

## All Schedules per Edition [/edition/{editionId}/schedules]

`/edition/{editionId}/schedules`

Get all available schedules within an edition

### Get all schedules [GET]

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
          {
              "createdOn": "2017-09-14T13:33:53.0382122+00:00",
              "updatedOn": "2018-05-28T18:16:30.3843054+00:00",
              "description": "IDFA 2017",
              "id": "1a2d8aa8-1d98-4606-9b03-67e1ba4be9e5"
          }
        ]

## All Shows per Schedule [/schedule/{scheduleId}/shows]

`/schedule/{scheduleId}/shows`

Retrieves all the shows for one schedule.

### Get all [GET]

+ Parameters
    + scheduleId (guid) - Id of the schedule

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
          {
              "createdOn": "2017-09-18T14:41:44.1397674+00:00",
              "updatedOn": "2018-04-05T08:36:11.0725913+00:00",
              "description": "A Place in the Sun",
              "id": "d4d35ff2-9275-47ba-9e3f-14e583739400"
          },
          {
              "createdOn": "2017-09-18T14:47:42.7033166+00:00",
              "updatedOn": "2018-01-23T11:30:38.4417075+00:00",
              "description": "Titanic - test Digna",
              "id": "f7c5ae42-2ae1-49c7-aa54-ed804d574a7b"
          },
          {
              "createdOn": "2017-11-27T10:14:55.2248933+00:00",
              "updatedOn": "2018-05-02T13:46:13.9516448+00:00",
              "description": "The African Queen",
              "id": "4ac0d00c-4e45-4bd0-a4b6-39b99f401f86"
          }
        ]

## All Shows per Schedule per day [/schedule/{scheduleId}/shows/{showDate}]

`/schedule/{scheduleId}/shows/{showDate}`

Get all the information from  one guestbook.

### Get all [GET]

+ Parameters
    + scheduleId (guid) - Id of the schedule
    + showDate:`2017-11-24` - Date of the show.

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
          {
              "createdOn": "2017-10-04T11:14:04.8967308+00:00",
              "updatedOn": "2018-05-02T13:46:13.9516448+00:00",
              "description": "The African Queen",
              "id": "3052476b-2d14-46aa-bc88-da2b1bca4e43"
          }
        ]

# Group Screening copies
The received film screening copies are files, films etc that you receive for a film. You keep track of your external logistics with them.
After they come in, you can create screening copies you want to show during your festival. Each film can have one or more screening copies.
Screening copies always have a type and status.
The possible medium types are (lookup MediumType):
+ DCP / CPL
+ Digital file
+ Special

There are 2 statuses possible (lookup FilmScreeningCopyStatus):
* Requested; a mini screening copy card with basic information. The version your programme department requested from the film maker, sales agent, producer..
* Active; an active screening copy card has multiple sections for technical information.

The combination of medium type and status determines which fields can be filled out.

To read more about adding attachments, go to [attachments in this document](#reference/attachments).
To read more about changing status lists, go to [status lists in this document](#reference/status-lists).

## All screening copies in an edition [/edition/{editionId}/filmscreeningcopies]
`/edition/{editionId}/filmscreeningcopies`

Get a list of all the screening copies created within an edition.

+ Attributes
    + filmTitle - Title of the film, this screening copy is connected to.
    + contentTitle - Content title of the attached CPL file
    + uuid - Uuid of the attached CPL file
    + mediumType (lookupValue) - Description of the film [(lookup value - MediumType)](#reference/lookups/lookup-values-on-id)
    + printNumber (number) - Sequence number of the screening copy
    + createdOn - Created date of the screening copy
    + updatedOn - Updated date of the screening copy
    + description - Title of the screening copy
    + id - Unique id of the screening copy

### Get all [GET]

+ Parameters
    + editionId (guid) - Id of the edition

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
          {
              "FilmTitle": "127 Hours",
              "ContentTitle": null,
              "Uuid": null,
              "MediumType": {
                  "Description": "Digital file",
                  "Id": "b7e654de-e2a5-4187-8cc9-3723366944d0"
              },
              "PrintNumber": 123,
              "CreatedOn": "2019-08-01T12:22:07.6541824+00:00",
              "UpdatedOn": "2019-10-01T10:10:33.4295895+00:00",
              "Description": "#0001",
              "Id": "095ca883-275e-4c52-b2c8-77d4a7781109"
          },
          {
              "FilmTitle": "127 Hours",
              "ContentTitle": "127Hours_FTR-1_F_IT-NL-OCAP_NL-NR_51_2K_ABC_20150106_HFD_IOP_OV",
              "Uuid": "30b810f2-4f17-4fb5-b0f1-1598b7e57cac",
              "MediumType": {
                  "Description": "DCP",
                  "Id": "8f34ffe1-bc79-4250-b1a9-6e1b5c416735"
              },
              "PrintNumber": 124,
              "CreatedOn": "2019-08-01T12:22:07.6541824+00:00",
              "UpdatedOn": "2019-10-30T13:58:22.8616455+00:00",
              "Description": "#0003",
              "Id": "5c78ae6b-a8e8-4e7c-9eff-ceb57fc2a379"
          },
          {
              "FilmTitle": "A Cat in Paris",
              "ContentTitle": null,
              "Uuid": null,
              "MediumType": {
                  "Description": "DCP",
                  "Id": "8f34ffe1-bc79-4250-b1a9-6e1b5c416735"
              },

              "PrintNumber": 125,
              "CreatedOn": "2019-08-01T12:36:11.7889397+00:00",
              "UpdatedOn": "2019-09-26T10:01:46.0936673+00:00",
              "Description": "#0002",
              "Id": "ca516ca7-e84d-42ec-9314-cf0f9bca3d33"
          },
          {
              "FilmTitle": "Alpha and Omega",
              "ContentTitle": null,
              "Uuid": null,
              "MediumType": {
                  "Description": "Special",
                  "Id": "5600d8b6-b2a2-41c5-8db5-25b3f0b5cf9b"
              },

              "PrintNumber": 128,
              "CreatedOn": "2019-08-01T12:44:21.6844434+00:00",
              "UpdatedOn": "2019-10-07T10:23:40.8631773+00:00",
              "Description": "#0004",
              "Id": "478bb689-d193-4e9f-b671-024cc3f7c67c"
          }
        ]

## All screening copies for one film [/film/{filmId}/filmscreeningcopies]
`/film/{filmId}/filmscreeningcopies`

Get a list of all the screening copies created for one film.

+ Attributes
    + filmTitle - Title of the film, this screening copy is connected to.
    + contentTitle - Content title of the attached CPL file
    + uuid - Uuid of the attached CPL file
    + mediumType (lookupValue) - Description of the film [(lookup value - MediumType)](#reference/lookups/lookup-values-on-id)
    + printNumber (number) - Sequence number of the screening copy
    + createdOn - Created date of the screening copy
    + updatedOn - Updated date of the screening copy
    + description - Title of the screening copy
    + id - Unique id of the screening copy

### Get all [GET]

+ Parameters
    + filmId (guid) - Id of the film

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
          {
              "FilmTitle": "127 Hours",
              "ContentTitle": null,
              "Uuid": null,
              "MediumType": {
                  "Description": "Digital file",
                  "Id": "b7e654de-e2a5-4187-8cc9-3723366944d0"
              },
              "PrintNumber": 123,
              "CreatedOn": "2019-08-01T12:22:07.6541824+00:00",
              "UpdatedOn": "2019-10-01T10:10:33.4295895+00:00",
              "Description": "#0001",
              "Id": "095ca883-275e-4c52-b2c8-77d4a7781109"
          },
          {
              "FilmTitle": "127 Hours",
              "ContentTitle": "127Hours_FTR-1_F_IT-NL-OCAP_NL-NR_51_2K_ABC_20150106_HFD_IOP_OV",
              "Uuid": "30b810f2-4f17-4fb5-b0f1-1598b7e57cac",
              "MediumType": {
                  "Description": "DCP",
                  "Id": "8f34ffe1-bc79-4250-b1a9-6e1b5c416735"
              },
              "PrintNumber": 124,
              "CreatedOn": "2019-08-01T12:22:07.6541824+00:00",
              "UpdatedOn": "2019-10-30T13:58:22.8616455+00:00",
              "Description": "#0003",
              "Id": "5c78ae6b-a8e8-4e7c-9eff-ceb57fc2a379"
          }
        ]

## All screening copies on uuid [/edition/{editionId}/filmscreeningcopies/{uuid}]
`/edition/{editionId}/filmscreeningcopies/{uuid}s`

Get a list of all the screening copies with a specific uuid, within an edition.

+ Attributes
    + filmTitle - Title of the film, this screening copy is connected to.
    + contentTitle - Content title of the attached CPL file
    + uuid - Uuid of the attached CPL file
    + mediumType (lookupValue) - Description of the film [(lookup value - MediumType)](#reference/lookups/lookup-values-on-id)
    + printNumber (number) - Sequence number of the screening copy
    + createdOn - Created date of the screening copy
    + updatedOn - Updated date of the screening copy
    + description - Title of the screening copy
    + id - Unique id of the screening copy

### Get all [GET]

+ Parameters
    + editionId (guid) - Id of the edition
    + uuid (guid) - Uuid you want to search on

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
          {
              "FilmTitle": "127 Hours",
              "ContentTitle": null,
              "Uuid": null,
              "MediumType": {
                  "Description": "Digital file",
                  "Id": "b7e654de-e2a5-4187-8cc9-3723366944d0"
              },
              "PrintNumber": 123,
              "CreatedOn": "2019-08-01T12:22:07.6541824+00:00",
              "UpdatedOn": "2019-10-01T10:10:33.4295895+00:00",
              "Description": "#0001",
              "Id": "095ca883-275e-4c52-b2c8-77d4a7781109"
          },
          {
              "FilmTitle": "127 Hours",
              "ContentTitle": "127Hours_FTR-1_F_IT-NL-OCAP_NL-NR_51_2K_ABC_20150106_HFD_IOP_OV",
              "Uuid": "30b810f2-4f17-4fb5-b0f1-1598b7e57cac",
              "MediumType": {
                  "Description": "DCP",
                  "Id": "8f34ffe1-bc79-4250-b1a9-6e1b5c416735"
              },
              "PrintNumber": 124,
              "CreatedOn": "2019-08-01T12:22:07.6541824+00:00",
              "UpdatedOn": "2019-10-30T13:58:22.8616455+00:00",
              "Description": "#0003",
              "Id": "5c78ae6b-a8e8-4e7c-9eff-ceb57fc2a379"
          }
        ]

## Screening copy on id [/filmscreeningcopy/{filmScreeningCopyId}]
`filmscreeningcopy/{filmScreeningCopyId}`

Get one screening copy on id and update it.
The specs per medium type are different - read below how to update a DCP, Digital and Special screening copy.

Please note: while updating a screening copy through the xAPI, all fields you do not post will be emptied in Fiona.

+ Attributes
  + id - Unique id of the screening copy
  + filmTitle - Title of the film, this screening copy is connected to.
  + name - Title of the screening copy
  + mediumType (lookupValue) - Description of the film [(lookup value - MediumType)](#reference/lookups/lookup-values-on-id)
  + contentTitle - Content title of the attached CPL file
  + uuid - Uuid of the attached CPL file
  + status (lookupValue) - Status of the screening copy. Either active or requested [(lookup value - FilmScreeningCopyStatus)](#reference/lookups/lookup-values-on-id)
  + assignedReceivedFilmScreeningCopy (object) - A screening copy can be assigned to 1 received film screening copy, which is its the source.
    + description
    + id - Unique id the received film screening copy
  + lengthInMinutes (number)
  + is3D (boolean)
  + fileSize (number) - Size in Gb
  + dcpSchema (lookupValue) - [(lookup value - dcpSchema)](#reference/lookups/lookup-values-on-id)
  + dciRemarks
  + technicalRemarks
  + projectionRemarks
  + fileName
  + container (lookupValue) - [(lookup value - FilmScreeningCopyContainer)](#reference/lookups/lookup-values-on-id)
  + codec (lookupValue) - [(lookup value - FilmScreeningCopyCodec)](#reference/lookups/lookup-values-on-id)
  + frameRate (lookupValue) - [(lookup value - FilmScreeningCopyFrameRate)](#reference/lookups/lookup-values-on-id)
  + carrier (lookupValue) - [(lookup value - FilmScreeningCopyCarrier)](#reference/lookups/lookup-values-on-id)
  + specialType (lookupValue) - [(lookup value - FilmScreeningCopySpecialType)](#reference/lookups/lookup-values-on-id)
  + archive (boolean)
  + projectionTechnologies (array) - List of projection technologies, including sort order [(lookup value - FilmControlProjectionTechnology)](#reference/lookups/lookup-values-on-id)
  + storages (array) - List of storages, including sort order [(lookup value - FilmScreeningCopyStorageType)](#reference/lookups/lookup-values-on-id)
  + screenRatio (lookupValue) - [(lookup value - FilmScreenRatio)](#reference/lookups/lookup-values-on-id)
  + dcpContainerSize (lookupValue) - [(lookup value - DcpContainerSize)](#reference/lookups/lookup-values-on-id)
  + blackBefore
  + blackAfter
  + resolution (lookupValue) - [(lookup value - FilmScreeningCopyResolution)](#reference/lookups/lookup-values-on-id)
  + audioType (lookupValue) - [(lookup value - FilmScreeningCopyAudioType)](#reference/lookups/lookup-values-on-id)
  + audioChannels (number)
  + loudestPeak
  + spokenLanguages (array) - Spoken languages of the screening copy, including sort order [(lookup value - Language)](#reference/lookups/lookup-values-on-id).
  + subtitleLanguages (array) - Subtitle languages of the screening copy, including sort order [(lookup value - Language)](#reference/lookups/lookup-values-on-id).
  + hasNoSubtitles (boolean)
  + subtitlingType (lookupValue) - [(lookup value - FilmScreeningCopySubtitlingType)](#reference/lookups/lookup-values-on-id)
  + subtitleRemarks
  + geoSettings (array)
    + (object)
      + id - Unique id of the geo setting
      + countries - List of ISO codes of the assigned countries
      + endDate
      + geoAccessType (lookupValue)
      + startDate
  + createdBy (object) - Description & id of the user who created the screening copy
  + createdOn - Created date of the screening copy
  + updatedBy (object) - Description & id of the user who created the screening copy
  + updatedOn - Created date of the screening copy

### Get one on id [GET]
+ Parameters
    + filmScreeningCopyId (guid) - Unique id of the screening copy

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
            "id": "5c78ae6b-a8e8-4e7c-9eff-ceb57fc2a379",
            "filmTitle": "127 Hours",
            "name": "#0017",
            "mediumType": {
                "description": "DCP",
                "id": "8f34ffe1-bc79-4250-b1a9-6e1b5c416735"
            },
            "contentTitle": "LeMeraviglie_FTR-1_F_IT-NL-OCAP_NL-NR_51_2K_ABC_20150106_HFD_IOP_OV",
            "uuid": "30b810f2-4f17-4fb5-b0f1-1598b7e57cac",
            "status": {
                "description": "Active",
                "id": "84748464-d8a9-485b-8053-822f8c98ade3"
            },
            "assignedReceivedFilmScreeningCopy": {
                "description": "LeMeraviglie_FTR-1_F_IT-NL-OCAP_NL-NR_51_2K_ABC_20150106_HFD_IOP_OV",
                "id": "8e5ac8f3-a314-4714-bc81-34d3db1a1464"
            },
            "lengthInMinutes": 95,
            "is3D": false,
            "fileSize": 0,
            "dcpSchema": {
                "description": "SMTP",
                "id": "24629854-064b-4005-995a-46a860f4cf51"
            },
            "dciRemarks": null,
            "technicalRemarks": null,
            "projectionRemarks": null,
            "fileName": null,
            "container": null,
            "codec": null,
            "frameRate": null,
            "carrier": null,
            "specialType": null,
            "archive": null,
            "projectionTechnologies": [
                {
                    "sortOrder": 1,
                    "description": "window",
                    "id": "6cb0fe07-0cd8-48b7-b415-f14b118d0569"
                }
            ],
            "storages": [
                {
                    "sortOrder": 1,
                    "description": "Sebastiaan",
                    "id": "e4053abf-82af-4fc6-9f0b-2470cf60103b"
                }
            ],
            "screenRatio": {
                "description": "Academy (1:1.37)",
                "id": "e5b8a517-c50a-43db-809d-83bcf9c5668c"
            },
            "dcpContainerSize": {
                "description": "2K",
                "id": "1f083294-1e63-4fc2-87cf-15a60f5f481b"
            },
            "blackBefore": "1234",
            "blackAfter": "1234",
            "resolution": null,
            "audioType": null,
            "audioChannels": 3,
            "loudestPeak": null,
            "spokenLanguages": [
                {
                    "sortOrder": 1,
                    "description": "Afar",
                    "id": "b952a0fe-f6d9-429d-829f-9cab420dc2be"
                },
                {
                    "sortOrder": 2,
                    "description": "Afrikaans",
                    "id": "e1b94f25-4356-4b07-9afc-f53e8f83cc9d"
                }
            ],
            "subtitleLanguages": [],
            "hasNoSubtitles": true,
            "subtitlingType": {
                "description": "-",
                "id": "60f01f80-f989-4ce0-a63e-335936a133f4"
            },
            "subtitleRemarks": null,
            "geoSettings": [
                 {
                     "countries": [
                         "BE",
                         "DE",
                         "DK",
                         "EE",
                         "FR",
                         "GR",
                         "NL"
                     ],
                     "endDate": "2020-11-21T23:00:00+00:00",
                     "geoAccessType": {
                         "key": "s-vod",
                         "translations": [
                             {
                                 "abbreviation": "SVOD",
                                 "language": "nl",
                                 "text": "S-VOD"
                             },
                             {
                                 "abbreviation": "SVOD",
                                 "language": "en",
                                 "text": "S-VOD"
                             }
                         ]
                     },
                     "startDate": "2020-11-15T23:00:00+00:00"
                 },
                 {
                     "countries": [
                         "BE",
                         "DE",
                         "DK",
                         "EE",
                         "FR",
                         "GR"
                     ],
                     "endDate": "2020-11-27T14:00:00+00:00",
                     "geoAccessType": {
                         "key": "t-vod",
                         "translations": [
                             {
                                 "abbreviation": "TVOD",
                                 "language": "en",
                                 "text": "T-VOD"
                             },
                             {
                                 "abbreviation": "TVOD",
                                 "language": "nl",
                                 "text": "T-VOD"
                             }
                         ]
                     },
                     "startDate": null
                 },
                 {
                     "countries": [
                         "BE",
                         "DE",
                         "DK",
                         "EE",
                         "FR",
                         "GR",
                         "NL"
                     ],
                     "endDate": null,
                     "geoAccessType": {
                         "key": "t-vod",
                         "translations": [
                             {
                                 "abbreviation": "TVOD",
                                 "language": "en",
                                 "text": "T-VOD"
                             },
                             {
                                 "abbreviation": "TVOD",
                                 "language": "nl",
                                 "text": "T-VOD"
                             }
                         ]
                     },
                     "startDate": null
                 }
             ],
            "createdBy": {
                "description": "Digna van Nielen",
                "id": "9bb3e137-9556-40ea-a626-e252b134b289"
            },
            "createdOn": "2019-08-01T12:22:07.6541824+00:00",
            "updatedBy": {
                "description": "Digna van Nielen",
                "id": "9bb3e137-9556-40ea-a626-e252b134b289"
            },
            "updatedOn": "2019-10-30T13:58:22.8616455+00:00"
        }

### Create a screening copy [POST]
This is an example to create a DCP screening copy. For other examples (Digital file, special, online), see the update endpointws below.

+ Parameters
    + filmScreeningCopyId (guid) - Unique id of the filmScreeningCopyId

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            {
              "mediumType": {
                  "Id": "8f34ffe1-bc79-4250-b1a9-6e1b5c416735"
              },
              "status": {
                  "Id": "84748464-d8a9-485b-8053-822f8c98ade3"
              },
              "lengthInMinutes": 99,
              "is3D": true,
              "fileSize": 2,
              "dcpSchema": {
                  "id": "24629854-064b-4005-995a-46a860f4cf51"
              },
              "dciRemarks": "test",
              "technicalRemarks": "aaa",
              "projectionRemarks": "bbb",
              "projectionTechnologies": [
                  {
                      "id": "6cb0fe07-0cd8-48b7-b415-f14b118d0569"
                  },
                  {
                      "id": "b4630b8c-f04e-4fcb-8d4f-2c96a9099df7"
                  }
              ],
              "storages": [
                  {
                      "id": "91921752-0fb9-4763-848d-70a89664aa82"
                  }
              ],
              "screenRatio": {
                  "id": "e5b8a517-c50a-43db-809d-83bcf9c5668c"
              },
              "dcpContainerSize": {
                  "id": "1f083294-1e63-4fc2-87cf-15a60f5f481b"
              },
              "blackBefore": "01:01:01",
              "blackAfter": "23:03:49",
              "audioChannels": 2,
              "loudestPeak": "12:12:06",
              "spokenLanguages": [
                  {
                      "id": "da47d3fc-2b06-4be3-b6f1-d6dde2768810"
                  },
                  {   "id": "b952a0fe-f6d9-429d-829f-9cab420dc2be"
                  }
              ],
              "hasNoSubtitles": false,
              "subtitlingType": {
                  "id": "0aab9b84-e9f6-4f94-89a7-00eb3b2c6d0d"
              },
              "subtitleLanguages": [
                  {
                      "id": "847878c2-e371-44ea-8aa2-184f744a50c5"
                  },
                  {
                      "id": "ac3fa608-3217-42dd-bcd8-745ff260cc7f"
                  }
              ],
              "subtitleRemarks": "An example of the subtitles"
            }

+ Response 200 (application/json)

        (same as the screening copy GET response body)

### Update a screening copy - DCP [POST]

+ Parameters
    + filmScreeningCopyId (guid) - Unique id of the filmScreeningCopyId

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            {
              "mediumType": {
                  "Id": "8f34ffe1-bc79-4250-b1a9-6e1b5c416735"
              },
              "status": {
                  "Id": "84748464-d8a9-485b-8053-822f8c98ade3"
              },
              "lengthInMinutes": 99,
              "is3D": true,
              "fileSize": 2,
              "dcpSchema": {
                  "id": "24629854-064b-4005-995a-46a860f4cf51"
              },
              "dciRemarks": "test",
              "technicalRemarks": "aaa",
              "projectionRemarks": "bbb",
              "projectionTechnologies": [
                  {
                      "id": "6cb0fe07-0cd8-48b7-b415-f14b118d0569"
                  },
                  {
                      "id": "b4630b8c-f04e-4fcb-8d4f-2c96a9099df7"
                  }
              ],
              "storages": [
                  {
                      "id": "91921752-0fb9-4763-848d-70a89664aa82"
                  }
              ],
              "screenRatio": {
                  "id": "e5b8a517-c50a-43db-809d-83bcf9c5668c"
              },
              "dcpContainerSize": {
                  "id": "1f083294-1e63-4fc2-87cf-15a60f5f481b"
              },
              "blackBefore": "01:01:01",
              "blackAfter": "23:03:49",
              "audioChannels": 2,
              "loudestPeak": "12:12:06",
              "spokenLanguages": [
                  {
                      "id": "da47d3fc-2b06-4be3-b6f1-d6dde2768810"
                  },
                  {   "id": "b952a0fe-f6d9-429d-829f-9cab420dc2be"
                  }
              ],
              "hasNoSubtitles": false,
              "subtitlingType": {
                  "id": "0aab9b84-e9f6-4f94-89a7-00eb3b2c6d0d"
              },
              "subtitleLanguages": [
                  {
                      "id": "847878c2-e371-44ea-8aa2-184f744a50c5"
                  },
                  {
                      "id": "ac3fa608-3217-42dd-bcd8-745ff260cc7f"
                  }
              ],
              "subtitleRemarks": "An example of the subtitles"
            }

+ Response 200 (application/json)

        (same as the screening copy GET response body)

### Update a screening copy - Digital file [POST]

+ Parameters
    + filmScreeningCopyId (guid) - Unique id of the filmScreeningCopyId

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            {
              "mediumType": {
                  "id": "b7e654de-e2a5-4187-8cc9-3723366944d0"
              },
              "contentTitle": null,
              "uuid": null,
              "status": {
                  "id": "84748464-d8a9-485b-8053-822f8c98ade3"
              },
              "assignedReceivedFilmScreeningCopy": null,
              "lengthInMinutes": 89,
              "fileSize": 5,
              "technicalRemarks": "111",
              "projectionRemarks": "222",
              "fileName": "Test.wmf12312",
              "container": {
                  "id": "5e78fd91-90cd-4630-8e9b-45cafc0c7fe6"
              },
              "codec": {
                  "id": "1abcdcff-d6b4-4c0b-9969-cdffebe75ea3"
              },
              "frameRate": {
                  "id": "b0534eef-4f18-4089-b836-a4f80754fbb1"
              },
              "carrier": {
                  "id": "dc02a662-d97f-4821-93de-847dd2cae22b"
              },
              "projectionTechnologies": [
                  {
                      "id": "6cb0fe07-0cd8-48b7-b415-f14b118d0569"
                  },
                  {
                      "id": "b4630b8c-f04e-4fcb-8d4f-2c96a9099df7"
                  }
              ],
              "storages": [
                  {
                      "id": "e4053abf-82af-4fc6-9f0b-2470cf60103b"
                  },
                  {
                      "id": "987ff727-9f60-4822-87ba-6b49f7cc2376"
                  }
              ],
              "screenRatio": {
                  "id": "2bc9019b-553e-417e-bb04-5d1c3a2c1019"
              },
              "resolution": {
                  "id": "bce04199-ad45-468a-b6f5-1ca797904d07"
              },
              "audioType": {
                  "id": "3d09dff7-e54d-4104-bf9e-b788b99b8049"
              },
              "audioChannels": 6,
              "spokenLanguages": [],
              "subtitleLanguages": [
                  {
                      "sortOrder": 1,
                      "description": "Cambodjaans",
                      "id": "ac3fa608-3217-42dd-bcd8-745ff260cc7f"
                  }
              ],
              "hasNoSubtitles": false,
              "subtitlingType": {
                  "description": "Burned in",
                  "id": "0aab9b84-e9f6-4f94-89a7-00eb3b2c6d0d"
              },
              "subtitleRemarks": null
            }

+ Response 200 (application/json)

        (same as the screening copy GET response body)

### Update a screening copy - Special [POST]

+ Parameters
    + filmScreeningCopyId (guid) - Unique id of the filmScreeningCopyId

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            {
              "mediumType": {
                  "id": "5600d8b6-b2a2-41c5-8db5-25b3f0b5cf9b"
              },
              "status": {
                  "id": "84748464-d8a9-485b-8053-822f8c98ade3"
              },
              "lengthInMinutes": 94,
              "technicalRemarks": "rrrr",
              "projectionRemarks": "eeee",
              "frameRate": {
                  "id": "b0534eef-4f18-4089-b836-a4f80754fbb1"
              },
              "specialType": {
                  "id": "df12c6dc-3cf2-4f76-aa90-4eb830da4b61"
              },
              "archive": false,
              "projectionTechnologies": [
                  {
                      "id": "56a11199-afd6-40de-b0b3-68a618c7006d"
                  }
              ],
              "storages": [],
              "screenRatio": {
                  "id": "3f47d858-6f52-4a9e-af6d-8fdbfd4d526c"
              },
              "audioType": {
                  "description": "Gedempt",
                  "id": "bc822a24-37af-4fb2-bda9-aad6cdb9c96d"
              },
              "spokenLanguages": [
                  {
                      "sortOrder": 1,
                      "description": "Afar (Hamitisch)",
                      "id": "b952a0fe-f6d9-429d-829f-9cab420dc2be"
                  }
              ],
              "subtitleLanguages": [
                  {
                      "sortOrder": 1,
                      "description": "Cebuano",
                      "id": "494c3bce-ec29-46f5-b784-836e0920e31d"
                  }
              ],
              "hasNoSubtitles": false,
              "subtitlingType": {
                  "description": "-",
                  "id": "60f01f80-f989-4ce0-a63e-335936a133f4"
              },
              "subtitleRemarks": null
            }

+ Response 200 (application/json)

        (same as the screening copy GET response body)

# Group Shows
Shows are created within a schedule. A show always has a start date and a location. The length of a show is based on the length of the show parts. A show part can be either a film or an activity.
A show can also be based on a composition, which on its turn contains films and/or activities.

## Add show [/show]

`/show`

First create a show, then add show parts.

+ Attributes
    + article - Article of the show title
    + audience (lookupValue) - Audience type
    + location (object) - Unique id of the location of the show
    + programSchedule (object) - Unique id of the schedule of the show
    + startOn - Date and time (in UTC) the show starts on
    + title - Title of the show, without the article
    + type (lookupValue) - Show type

### Create [POST]

+ Request (application/json)

    + Headers

            Api-Key: [key]

    + Body

            {
                "article": "The",
                "audience": {
                    "id": "f7feaa52-0359-4993-b5a3-c14062d382b0"
                },
                "location": {
                    "id": "4e8f2ae7-48fc-445a-9a8b-021b32123204"
                },
                "programSchedule": {
                    "id": "1a2d8aa8-1d98-4606-9b03-67e1ba4be9e5"
                },
                "startOn": "2017-10-24T09:30:00+00:00",
                "title": "African Queen",
                "type": {
                    "id": "0fb62dfb-9df9-4677-b42e-f9fe0c820a1d"
                },
            }

+ Response 200 (application/json)

        (same as the show GET response body)

## Existing show [/show/{showId}]

`/show/{showId}`

Get, update or delete a show, based on the show id.

+ Attributes
    + id - Unique id of the show
    + article - Article of the show title
    + audience (lookupValue) - Audience type
    + geoSettings (array)
      + (object)
        + id - Unique id of the geo setting
        + countries - List of ISO codes of the assigned countries
        + endDate
        + geoAccessType (lookupValue)
        + startDate
    + hasAudienceVoting (boolean)
    + isLocked (boolean)
    + isOfficialSelection (boolean)
    + isPremiere (boolean)
    + keepPartsInSyncWithComposition (boolean)
    + keepTitleInSync (boolean)
    + location (object) - Unique id and description of the location of the show
    + noSale (boolean)
    + notes
    + programme - Not in use for festival version
    + programSchedule (object) - Unique id and description of the schedule of the show
    + publish (boolean)
    + section (object) **Deleted - use Sections instead**
    + sections (array)
    + sourceComposition (object)
    + startOn - Date and time (in UTC) the show starts on
    + tags (array) - Returns an empty array
    + technicalRemarks
    + ticketSaleId
    + title - Title of the show, without the article
    + type (lookupValue) - Show type
    + useShowSpecificGeoSettings (boolean) - To overrule the geo settings in show parts
    + internalLeadInMinutes
    + internalLeadOutMinutes
    + internalLengthInMinutes
    + lengthInMinutes - Length in minutes of the show, based on all the non-productional items
    + fullLengthInMinutes - Total length of the show, including all show parts
    + fullTitle: The African Queen - Full title of the show, starting with an article (if present)
    + sortedTitle:`African Queen, The` - Sorted title of the show, with the aricle in the end (if present)
    + createdBy (object) - Unique id and description the user who created the show
    + createdOn
    + updatedBy (object) - Unique id and description the user who updated the show
    + updatedOn

### Get one [GET]

+ Parameters
    + showId (guid) - Unique id of the show

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
          "id": "0a392dc6-3d6e-4e58-9593-40a769e966c5",
          "article": "The",
          "audience": {
              "description": "-",
              "id": "f7feaa52-0359-4993-b5a3-c14062d382b0"
          },
          "geoSettings": [
               {
                   "countries": [
                       "AAAA",
                       "BE",
                       "DE",
                       "DK",
                       "FR"
                   ],
                   "endDate": null,
                   "geoAccessType": {
                       "key": "s-vod",
                       "translations": [
                           {
                               "abbreviation": "SVOD",
                               "language": "nl",
                               "text": "S-VOD"
                           },
                           {
                               "abbreviation": "SVOD",
                               "language": "en",
                               "text": "S-VOD"
                           }
                       ]
                   },
                   "startDate": null
               }
           ],
          "hasAudienceVoting": false,
          "isLocked": false,
          "isOfficialSelection": false,
          "isPremiere": false,
          "keepPartsInSyncWithComposition": false,
          "keepTitleInSync": false,
          "location": {
              "description": "Locatie 1",
              "id": "4e8f2ae7-48fc-445a-9a8b-021b32123204"
          },
          "noSale": false,
          "notes": null,
          "programme": null,
          "programSchedule": {
              "description": "IDFA 2017",
              "id": "1a2d8aa8-1d98-4606-9b03-67e1ba4be9e5"
          },
          "publish": false,
          "sections": [
                {
                    "description": "Section1",
                    "id": "a361d8ad-4157-443e-856d-c17e81f8e24f"
                },
                {
                    "description": "Section2",
                    "id": "138a1c36-fc6e-4265-a9b1-26fc6a291ee9"
                }
          ],
          "sourceComposition": null,
          "startOn": "2017-10-24T09:30:00+00:00",
          "tags": [],
          "technicalRemarks": null,
          "ticketSaleId": null,
          "title": "African Queen",
          "type": {
              "description": "-",
              "id": "0fb62dfb-9df9-4677-b42e-f9fe0c820a1d"
          },
          "useShowSpecificGeoSettings": true,
          "internalLeadInMinutes": 0,
          "internalLeadOutMinutes": 0,
          "endOn": "2017-10-24T09:30:00+00:00",
          "internalLeadStartOn": "2017-10-24T09:30:00+00:00",
          "internalLeadOutEndOn": "2017-10-24T09:30:00+00:00",
          "internalLengthInMinutes": 0,
          "lengthInMinutes": 0,
          "fullLengthInMinutes": 0,
          "fullTitle": "The African Queen",
          "sortedTitle": "African Queen, The",
          "createdBy": {
              "description": "System",
              "id": "42000000-0000-0000-0000-000000000001"
          },
          "createdOn": "2018-06-12T09:27:54.6139187+00:00",
          "updatedBy": {
              "description": "System",
              "id": "42000000-0000-0000-0000-000000000001"
          },
          "updatedOn": "2018-06-12T09:27:54.6139187+00:00"
        }

### Update a show [POST]

+ Parameters
    + showId (guid) - Unique id of the show

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            (same as the show GET request body)

+ Response 200 (application/json)

        (same as the show POST response body)

### Delete a show [DELETE]

+ Parameters
    + showId (guid) - Unique id of the show

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

## Show parts per show [/show/{showId}/showparts]

`/show/{showId}/showparts`

Get all show parts for one show.

### Get all [GET]

+ Parameters
    + showId (guid) - Id of the show

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
                "Activity": {
                    "Description": "intro",
                    "Id": "7bd70888-4329-4a71-9e77-5e852d8b78d4"
                },
                "AlternativeLocation": null,
                "Film": null,
                "FilmScreeningCopy": null,
                "Id": "311cd6c2-aae6-49b5-a622-64b89cf4f9b8",
                "IsInternal": false,
                "IsPremiere": false,
                "IsViewingMandatory": false,
                "LengthInMinutes": 5,
                "ProductionDetails": null,
                "RtmpUrl": null,
                "ShowInPublications": false,
                "ShowInTitle": false,
                "SortOrder": 1,
                "TechnicalRemarks": null,
                "Title": "Trailer"
            },
            {
                "Activity": {
                    "Description": "q-a",
                    "Id": "d313f7d5-391b-4794-884a-baf651bc548a"
                },
                "AlternativeLocation": null,
                "Film": null,
                "FilmScreeningCopy": null,
                "Id": "4129d52c-a0bc-4535-acea-ea0f5b3d1899",
                "IsInternal": false,
                "IsPremiere": false,
                "IsViewingMandatory": false,
                "LengthInMinutes": 20,
                "ProductionDetails": null,
                "RtmpUrl": null,
                "ShowInPublications": true,
                "ShowInTitle": false,
                "SortOrder": 3,
                "TechnicalRemarks": null,
                "Title": "Q&A"
            },
            {
                "Activity": null,
                "AlternativeLocation": null,
                "Film": {
                    "Description": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
                    "Id": "31a7d1e0-df26-4a65-aa7a-8b9ad7d7cf05"
                },
                "FilmScreeningCopy": {
                    "Description": "#0006",
                    "Id": "60ab8781-76f7-44d6-9bce-99a7046c1bdc"
                },
                "Id": "4acb2687-186c-4dd9-bc56-251b0e5c5ebe",
                "IsInternal": false,
                "IsPremiere": false,
                "IsViewingMandatory": false,
                "LengthInMinutes": 90,
                "ProductionDetails": null,
                "RtmpUrl": null,
                "ShowInPublications": true,
                "ShowInTitle": false,
                "SortOrder": 2,
                "TechnicalRemarks": null,
                "Title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb"
            },
            {
                "Activity": {
                    "Description": "intro",
                    "Id": "011302da-aaf0-4515-a1b2-2d2ce47c5071"
                },
                "AlternativeLocation": null,
                "Film": null,
                "FilmScreeningCopy": null,
                "Id": "87b2aa84-766d-438a-8465-cb17552e21d9",
                "IsInternal": false,
                "IsPremiere": false,
                "IsViewingMandatory": false,
                "LengthInMinutes": 15,
                "ProductionDetails": null,
                "RtmpUrl": null,
                "ShowInPublications": false,
                "ShowInTitle": false,
                "SortOrder": 0,
                "TechnicalRemarks": null,
                "Title": "Welcome and Introduction"
            }
        ]

## Add show parts [/show/{showId}/showpart]

`/show/{showId}/showpart`

After you created a show, you can add show parts. A show part is either an activity or a film.
For a film a screening copy is optional.

+ Attributes
    + activity (object) - Unique id and description of the activity. If `null`, this show part is a film
    + alternativeLocation
    + film (object) - Unique id and description of the film. If `null`, this show part is a activity
    + filmScreeningCopy (object, optional) - Screening copy of the film.
    + isInternal (boolean) - If true, this is productional time
    + isPremiere (boolean)
    + lengthInMinutes (number) - Length of the show part. For films, this is the length of the used filmScreeningCopy. If a screening copy isn't filled out, the length of the film will be used.
    + showInPublications (boolean) - If true, this show part will be available in the publication API, after the show has been published.
    + showInTitle (boolean)
    + sortOrder
    + title - Title of the show part. For films, this is the same as the full film title.

### Create [POST]

+ Request (application/json)

    + Headers

            Api-Key: [key]

    + Body

            {
              "activity": null,
              "alternativeLocation": null,
              "film": {
                  "id": "dad26c14-5c21-4bbc-86fe-f57d5ca8b73d"
              },
              "filmScreeningCopy": {
                  "description": "DCP #0005",
                  "id": "a2838a07-fd90-47af-b865-cfb139e6b288"
              },
              "isInternal": false,
              "isPremiere": true,
              "lengthInMinutes": 135,
              "showInPublications": false,
              "showInTitle": true,
              "sortOrder": 1,
              "technicalRemarks": null,
              "title": "The African Queens"
            }

+ Response 200 (application/json)

        (same as the show GET response body)

## Existing show part [/show/{showId}/showpart/{showPartId}]

`/show/{showId}/showPartId`

Get, update or delete a show part, based on the show id and show part id.

+ Attributes
    + id - Unique id of the show part
    + activity (object) - Unique id and description of the activity. If `null`, this show part is a film
    + alternativeLocation
    + film (object) - Unique id and description of the film. If `null`, this show part is a activity
    + filmScreeningCopy (object, optional) - Screening copy of the film.
    + isInternal (boolean) - If true, this is productional time
    + isPremiere (boolean)
    + lengthInMinutes (number) - Length of the show part. For films, this is the length of the used filmScreeningCopy. If a screening copy isn't filled out, the length of the film will be used.
    + productionDetails
    + showInPublications (boolean) - If true, this show part will be available in the publication API, after the show has been published.
    + showInTitle (boolean)
    + sortOrder
    + technicalRemarks
    + title - Title of the show part. For films, this is the same as the full film title.

### Get one [GET]

+ Parameters
    + showId (guid) - Unique id of the show
    + showPartId (guid) - Unique id of the show part

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
            "Activity": {
                "Description": "intro",
                "Id": "7bd70888-4329-4a71-9e77-5e852d8b78d4"
            },
            "AlternativeLocation": null,
            "Film": null,
            "FilmScreeningCopy": null,
            "Id": "311cd6c2-aae6-49b5-a622-64b89cf4f9b8",
            "IsInternal": false,
            "IsPremiere": false,
            "IsViewingMandatory": false,
            "LengthInMinutes": 5,
            "ProductionDetails": null,
            "RtmpUrl": null,
            "ShowInPublications": false,
            "ShowInTitle": false,
            "SortOrder": 1,
            "TechnicalRemarks": null,
            "Title": "Trailer"
        }

### Update a show  part [POST]

+ Parameters
    + showId (guid) - Unique id of the show
    + showPartId (guid) - Unique id of the show part

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            (same as the show part GET request body)

+ Response 200 (application/json)

        (same as the show part POST response body)

### Delete a show part [DELETE]

+ Parameters
    + showId (guid) - Unique id of the show
    + showPartId (guid) - Unique id of the show part

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

## Contributor roles per show [/account/{providerName}/show/{showId}/contributorroles]

Returns all contributor roles for show, including external authentication Id's.

+ Attributes
    + providerName (string) - Name of the provider
    + showId - Id of the show

### Get all [GET]

+ Parameters
    + providerName (string) - Name of the provider
    + showId (guid) - Id of the show

+ Response 200 (application/json)

        [
            {
                "FullName": "Billy the Kid",
                "ExternalIdentification": "adf3gdfa-5cac-4372-ac1a-cf3efee46e3a",
                "Role": {
                    "Key": "editor",
                    "Translations": [
                        {
                            "Abbreviation": "Er.",
                            "Language": "nl",
                            "Text": "Eindredacteur"
                        },
                        {
                            "Abbreviation": "Ed.",
                            "Language": "en",
                            "Text": "Editor"
                        }
                    ]
                }
            },
            {
                "FullName": "Hans Anders",
                "ExternalIdentification": "95fe7f7c-d0d0-4c0d-9985-a452ae733bdc",
                "Role": {
                    "Key": "translator",
                    "Translations": [
                        {
                            "Abbreviation": "Vert.",
                            "Language": "nl",
                            "Text": "Vertaler"
                        },
                        {
                            "Abbreviation": "Tr.",
                            "Language": "en",
                            "Text": "Translator"
                        }
                    ]
                }
            }
        ]

## Attendees per show part [/account/{providerName}/showpart/{showPartId}/attendees]
Returns all attendees linked to a show part, within a show part, including external authentication Id's.

+ Parameters
    + providerName (string) - Name of the provider
    + showPartId (guid) - Id of the show part

### Get all [GET]

+ Response 200 (application/json)

        [
            {
                "FullName": "Dirk Broek",
                "ExternalIdentification": "66g3f4d2-f9eb-e811-9a14-005056890da2",
                "Role": {
                    "Key": "decision-maker",
                    "Translations": [
                        {
                            "Abbreviation": "dm",
                            "Language": "en",
                            "Text": "Decision maker"
                        },
                        {
                            "Abbreviation": "dm",
                            "Language": "nl",
                            "Text": "Decision maker"
                        }
                    ]
                }
            },
            {
                "FullName": "Hans de Grote",
                "ExternalIdentification": "74fge9e9-5cac-4372-ac1a-cf3a05233e4a",
                "Role": {
                    "Key": "owner",
                    "Translations": [
                        {
                            "Abbreviation": null,
                            "Language": "nl",
                            "Text": "Eigenaar"
                        },
                        {
                            "Abbreviation": null,
                            "Language": "en",
                            "Text": "Owner"
                        }
                    ]
                }
            }
        ]

# Group Status lists

## Status list definitions [/{ownerType}/statuslistvalues]

E.g.: `/film/statuslistvalues`

All the available statusses, for one entity (for example film)

You can get, create, update and delete attachments for the following ownerTypes:
+ film
+ accreditation
+ volunteer
+ filmscreeningcopy

+ Attributes
    + id - Unique id of the status list value
    + editionType (object) - Description and unique id of the editionType, this statusbelongs to. Only relevant for film
    + key - Key to recognize the status
    + section - Section in which the status can be found
    + sortOrder - Sort order of the status

### Read all [GET]

+ Parameters
    + ownerType (string) - Type of the owner

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
                "id": "6e5589aa-482f-4621-aac7-1e973c4e8329",
                "editionType": {
                    "description": "International Documentary Filmfestival Amsterdam",
                    "id": "062db1a5-924d-492d-9f6a-ad757b4a0def"
                },
                "key": "film-international-documentary-filmfestival-amsterdam-entry-status-1",
                "section": "FilmData",
                "sortOrder": 1,
                "translations": [
                    {
                        "label": "Status 1",
                        "language": "en"
                    },
                    {
                        "label": "Status 1",
                        "language": "nl"
                    }
                ]
            },
            {
                "id": "8c8ad90a-584c-461e-a6d9-d2b58fd640da",
                "editionType": {
                    "description": "International Documentary Filmfestival Amsterdam",
                    "id": "062db1a5-924d-492d-9f6a-ad757b4a0def"
                },
                "key": "film-international-documentary-filmfestival-amsterdam-entry-status-2",
                "section": "FilmData",
                "sortOrder": 2,
                "translations": [
                    {
                        "label": "Status 2",
                        "language": "en"
                    },
                    {
                        "label": "Status 2",
                        "language": "nl"
                    }
                ]
            },
            {
                "id": "45e93104-e647-4590-b02f-636c2312d17f",
                "editionType": {
                    "description": "International Documentary Filmfestival Amsterdam",
                    "id": "062db1a5-924d-492d-9f6a-ad757b4a0def"
                },
                "key": "film-international-documentary-filmfestival-amsterdam-entry-status-3",
                "section": "FilmData",
                "sortOrder": 3,
                "translations": [
                    {
                        "label": "Status 3",
                        "language": "en"
                    },
                    {
                        "label": "Status 3",
                        "language": "nl"
                    }
                ]
            },
            {
                "id": "d09b62bd-adc1-4edb-a2e7-d18073732fe1",
                "editionType": {
                    "description": "International Documentary Filmfestival Amsterdam",
                    "id": "062db1a5-924d-492d-9f6a-ad757b4a0def"
                },
                "key": "film-international-titels-titles-checked",
                "section": "Title",
                "sortOrder": 6,
                "translations": [
                    {
                        "label": "Titles checked",
                        "language": "en"
                    },
                    {
                        "label": "Titels gecontroleerd",
                        "language": "nl"
                    }
                ]
            }
        ]

## Applied status list values [/{ownerType}/{ownerId}/statuslistvalues]

E.g.: `/film/{filmId}/statuslistvalues`

Get all applied status list values for a specific owner. These are all the statusses that have been applied for the owner.
You can update a status or delete it for this owner.

+ Attributes
    + id - Unique id of the applied status list value
    + checkedBy (object) - Description and unique id of the user who checked the status
    + checkedOn - Date on which the status has been set
    + value (object) - Description and unique id of the status list value

### Read all [GET]

+ Parameters
    + ownerType (string) - Type of the owner (film or accreditation)
    + ownerId (guid) - Unique id of the owner

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
                "id": "e4673881-31ce-4bf8-b4d7-cfe722ad66d8",
                "checkedBy": {
                    "description": "Digna van Nielen",
                    "id": "5e65837e-317d-42c2-8c48-2f92022e1bd4"
                },
                "checkedOn": "2017-11-28T08:28:02.9074106+00:00",
                "value": {
                    "description": "film-international-documentary-filmfestival-amsterdam-entry-status-2",
                    "id": "8c8ad90a-584c-461e-a6d9-d2b58fd640da"
                }
            },
            {
                "id": "e4673881-31ce-4bf8-b4d7-cfe722ad66d8",
                "checkedBy": {
                    "description": "Digna van Nielen",
                    "id": "5e65837e-317d-42c2-8c48-2f92022e1bd4"
                },
                "checkedOn": "2017-12-07T010:31:02.9074106+00:00",
                "value": {
                    "description": "film-international-titels-titles-checked",
                    "id": "d09b62bd-adc1-4edb-a2e7-d18073732fe1"
                }
            }
        ]

## Applied status list value on id [/{ownerType}/{ownerId}/statuslistvalue/{statuslistvalueId}]

E.g.: `/film/{filmId}/statuslistvalue/{statuslistvalueId}`

### Read [GET]

+ Parameters
    + ownerType (string) - Type of the owner
    + ownerId (guid) - Unique id of the owner
    + statuslistvalueId (guid) - Unique id of the applied status

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

            {
                "id": "e4673881-31ce-4bf8-b4d7-cfe722ad66d8",
                "checkedBy": {
                    "description": "Digna van Nielen",
                    "id": "5e65837e-317d-42c2-8c48-2f92022e1bd4"
                },
                "checkedOn": "2017-11-28T08:28:02.9074106+00:00",
                "value": {
                    "description": "film-international-documentary-filmfestival-amsterdam-entry-status-2",
                    "id": "8c8ad90a-584c-461e-a6d9-d2b58fd640da"
                }
            }

### Delete [DELETE]

+ Parameters
    + ownerType (string) - Type of the owner
    + ownerId (guid) - Unique id of the owner
    + statuslistvalueId (guid) - Unique id of the applied status

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

## Add new status list value [/{ownerType}/{ownerId}/statuslistvalue]

E.g.: `/film/{filmId}/statuslistvalue`

If you want to set a specific status for an owner, you have to create a new status list value. Add the user, date and the id of the status list you want to set in the body of the request.

### Create [POST]

+ Parameters
    + ownerType (string) - Type of the owner
    + ownerId (guid) - Unique id of the owner

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            {
                "checkedBy": {
                    "id": "5e65837e-317d-42c2-8c48-2f92022e1bd4"
                },
                "checkedOn": "2017-10-28T08:28:02.9074106+00:00",
                "value": {
                    "id": "8c8ad90a-584c-461e-a6d9-d2b58fd640da"
                }
            }

+ Response 200 (application/json)

            (same as GET response)

# Group Tags

## Tags list [/tags]
`/tags`

Tags can be added to films, to add some extra publication information. Tags are divided in tag groups.

+ Attributes
        + description - Description of the lookup
        + id - Unique id of the lookup

### Get all tags [GET]

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        [
            {
                "description": "notscary-at-all",
                "id": "f88fb144-d36e-4e43-9e40-383e7948df28"
            },
            {
                "description": "little-bit-scary",
                "id": "3a241387-77f0-4746-a35f-7569280181cb"
            },
            {
                "description": "very-scary",
                "id": "dc16068c-c8a0-4996-a416-c1415da2c2cc"
            },
            {
                "description": "elderly",
                "id": "8c0814fa-df58-446b-bf96-44ed3f0aeff8"
            },
            {
                "description": "kids",
                "id": "f4b1b31e-2680-4084-820a-44f84c5aa523"
            },
            {
                "description": "adults",
                "id": "4b57c7ae-fd8b-4b5a-80b4-6950630b5a5c"
            }
        ]

## Tags on id [/tag/{tagId}]
`/tag/tagId`

To retreive all information for one tag.

+ Attributes
    + enabled (boolean)
    + id - Unique id of the tag
    + key - Key of the tag
    + translations (array) - Dutch (nl) and English (en) translation of the tag, with both the abbreviation and the text
    + tagGroup - Unique id and description of the tagGroup this tag belongs to

### Get all lookups [GET]

+ Parameters
    + tagId - Unique id of the tag

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

        {
            "enabled": true,
            "id": "f88fb144-d36e-4e43-9e40-383e7948df28",
            "key": "notscary-at-all",
            "translations": [
                {
                    "abbreviation": null,
                    "language": "nl",
                    "text": "Geen spanning"
                },
                {
                    "abbreviation": null,
                    "language": "en",
                    "text": "Not scary at all"
                }
            ],
            "tagGroup": {
                "description": "horror_factor",
                "id": "13413a0d-8703-4b0f-8092-04fed714240b"
            }
        }

# Group Texts

## Introduction

You can add and update publication texts to companies and films, or delete them.

## All texts [/{ownerType}/{ownerId}/texts]

E.g.: `/company/{companyId}/texts`

### Read all [GET]

+ Parameters
    + ownerType (string) - Type of the owner (film or company)
    + ownerId (guid) - Id of the owner

+ Request (application/json)

    + Headers

            Api-Key: [key]

+ Response 200 (application/json)

        (array of objects the same as the text GET response body)

## Add text [/{ownerType}/{ownerId}/text]

E.g.: `/company/{companyId}/text`

### Create [POST]

+ Parameters
    + ownerType (string) - Type of the owner (film or company)
    + ownerId (guid) - Id of the owner

+ Request (application/json)

    + Headers

            Api-Key: [key]

    + Body

            {
              "type": {
                "id": "738a3469-9b28-4c06-a349-94be8f5ed65e"
              },
              "translations": [
                {
                  "html": "OG3NE slaagde er donderdagavond tijdens de tweede halve finale in een plek te behalen in de finale van het liedjesfestijn in het Oekraïense Kiev. De zusjes zijn zaterdagavond als zesde aan de beurt met hun liedje Lights and Shadows, een eerbetoon aan hun ongeneeslijk zieke moeder. Aan de eindstrijd doen in totaal 26 landen mee. Twintig daarvan hebben zich tijdens de halve finales gekwalificeerd. De vijf landen die het meest betalen, staan direct in de finale, evenals gastland Oekraïne.",
                  "language": "nl"
                },
                {
                  "html": "OG3NE managed to finish in the final of the song festival in Ukrainian Kiev on Thursday evening during the second semifinal. The sisters are sixth in the evening with their song Lights and Shadows, a tribute to their incurably sick mother. In the final contest a total of 26 countries participate. Twenty of them qualified during the semifinals. The five most paying countries are in the final, as well as the host country Ukraine.",
                  "language": "en"
                }
              ]
            }

+ Response 201 (application/json)

        (same as the text GET response body)

## Existing text [/{ownerType}/{ownerId}/text/{textId}]

E.g.: `/company/{companyId}/text/{textId}`

### Read [GET]

+ Parameters
    + ownerType (string) - Type of the owner (film or person)
    + ownerId (guid) - Id of the owner
    + textId (guid) - Id of the text

+ Request (application/json)

    + Headers

            Api-Key: [key]

+ Response 200 (application/json)

        {
          "id": "f81aa25d-5aa4-44c1-ad87-da08d96d5172",
          "createdOn": "2017-05-12T19:07:59.0123484+00:00",
          "type": {
            "id": "738a3469-9b28-4c06-a349-94be8f5ed65e",
            "key": "filmography",
            "translations": [
              {
                "abbreviation": "FILMO",
                "language": "nl",
                "text": "Filmografie"
              },
              {
                "abbreviation": "FILMO",
                "language": "en",
                "text": "Filmography"
              }
            ]
          },
          "translations": [
            {
              "html": "OG3NE managed to finish in the final of the song festival in Ukrainian Kiev on Thursday evening during the second semifinal. The sisters are sixth in the evening with their song Lights and Shadows, a tribute to their incurably sick mother. In the final contest a total of 26 countries participate. Twenty of them qualified during the semifinals. The five most paying countries are in the final, as well as the host country Ukraine.",
              "language": "en"
            },
            {
              "html": "OG3NE slaagde er donderdagavond tijdens de tweede halve finale in een plek te behalen in de finale van het liedjesfestijn in het Oekraïense Kiev. De zusjes zijn zaterdagavond als zesde aan de beurt met hun liedje Lights and Shadows, een eerbetoon aan hun ongeneeslijk zieke moeder. Aan de eindstrijd doen in totaal 26 landen mee. Twintig daarvan hebben zich tijdens de halve finales gekwalificeerd. De vijf landen die het meest betalen, staan direct in de finale, evenals gastland Oekraïne.",
              "language": "nl"
              }
            }
          ]
        }

### Update [POST]

+ Parameters
    + ownerType (string) - Type of the owner (film or person)
    + ownerId (guid) - Id of the owner
    + textId (guid) - Id of the text

+ Request (application/json)

    + Headers

            Api-Key: [key]

    + Body

            ( same as the text CREATE request body)

+ Response 200 (application/json)

        (same as the text GET response body)

### Delete [DELETE]

+ Parameters
    + ownerType (string) - Type of the owner (film or person)
    + ownerId (guid) - Id of the owner
    + textId (guid) - Id of the text

+ Request (application/json)

    + Headers

            Api-Key: [key]

+ Response 204 (application/json)

# Group Ticket info

## Update ticket id [/showticket]
Update the ticket id for a show in Fiona Online. It takes a JSON dictionary containing a show id and ticketSaleId.
If the ticket id is updated correctly, the response contains the same values as the request.

+ Attributes
    + Id - Unique id of the show
    + TicketSaleId - Id of the ticketing provider

### Post one on id [POST]

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

    + Body

            {
                "Id": "63f086fa-7a0e-4914-bd02-7b1c182be2e3",
                "TicketSaleId": "1abcd6789"
            }

+ Response 200 (application/json)

        {
            "Id": "63f086fa-7a0e-4914-bd02-7b1c182be2e3",
            "TicketSaleId": "1abcd6789"
        }

# Group Volunteers
Every year/edition you can add a group of volunteers who help you out during the festival. All the volunteers for one edition can be found in a VolunteerEdition.
A volunteer is always connected to a person. The person holds the "ongoing" information like contact details and address, the volunteer contains the information that is relevant for a specific edition: the job, badge, status et cetera.

Read more about attachments [(here)](#reference/attachments) and about status lists [(here)](/#reference/status-lists).

## All Volunteer Editions [/volunteereditions]

### Get all Volunteer Editions [GET]

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

            [
                {
                    "description": "Volunteers 2018",
                    "id": "d59fb0de-de04-4b29-b958-45e7da896f27"
                },
                {
                    "description": "Volunteers 2019",
                    "id": "11712b2b-e1a5-445a-814a-f1cbef06f5a8"
                }
            ]

## Volunteer Edition on id [/volunteeredition/{volunteerEditionId}]

### Get one on id [GET]

+ Parameters
    + volunteerEditionId (guid) - Id of the volunteer edition

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

            {
                "endsOn": "2018-09-10T14:08:46.2327436+02:00",
                "id": "11712b2b-e1a5-445a-814a-f1cbef06f5a8",
                "isActive": true,
                "name": "Vrijwilligers 2019",
                "startsOn": "2018-09-10T14:08:46.2327436+02:00"
            }

## All volunteers in one edition [/volunteeredition/{volunteerEditionId}/volunteers]

Get all the volunteers in one edition (regardless of their status)

### Get all Volunteers [GET]

+ Parameters
    + volunteerEditionId (guid) - Id of the volunteer edition

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

            [
                {
                    "createdOn": "2018-09-11T09:07:31.9965347+00:00",
                    "updatedOn": "2018-11-27T10:32:13.1278192+00:00",
                    "description": "Joe Cole",
                    "id": "6b21d6ac-8f7b-4d91-a48c-b726052f7e70"
                }
            ]

## Volunteer on id [/volunteer/{volunteerId}]

### Get one on id [GET]

+ Parameters
    + volunteerId (guid) - Id of the volunteer

+ Request (application/json)

    + Headers

            X-ApiKey: [X-ApiKey]

+ Response 200 (application/json)

            {
                "AssignedPosition": {
                    "Description": "Box office",
                    "Id": "6946c0c6-cfa9-439a-80bb-750b3d944652"
                },
                "Badge": {
                    "Description": "Crew",
                    "Id": "5510683d-babd-4a5b-ae61-ec5b2c25f947"
                },
                "ExternalAccountId": null,
                "Extras": [],
                "HasDriversLicence": false,
                "Id": "10ebd43e-9f05-4f82-a04b-db3fee781056",
                "IsWillingToWorkMore": true,
                "Languages": [],
                "Person": {
                    "Description": "Digna van Niëlen *",
                    "Id": "6bca9b32-c1b9-4171-987b-8321c614cc1b"
                },
                "Remarks": null,
                "Status": {
                    "Description": "Volunteer",
                    "Id": "431b82d0-571d-4dfe-bb74-2197653356fe"
                },
                "VolunteerEdition": {
                    "Description": "Vrijwilligers 2022",
                    "Id": "796efb5a-7956-462b-869e-3f0e769d5c96"
                },
                "DietType": null,
                "DriversLicenseType": null,
                "ShirtSize": null,
                "FavoriteImageAttachment": {
                    "Category": 2,
                    "ContentType": null,
                    "CreatedOn": "2022-07-20T14:35:38.2160876+00:00",
                    "Id": "ecbfdbbb-2a8c-4913-b8f0-6a1619507204",
                    "OriginalFileName": "Digna.png",
                    "Password": null,
                    "SerialNumber": 0,
                    "Title": "Digna.png",
                    "Type": {
                        "Description": "Image",
                        "Id": "233d9d0f-4020-43aa-9703-286cb21c6437"
                    },
                    "Value": "UzMBEABmaW9uYS1vbmxpbmUtZGV2NABhdHRhY2htZW50cy84MDQ5ZDc1Ny1hMjI0LTQ1MTUtODE0OC0wYjEwZDNjODZiYjYucG5n"
                },
                "CreatedBy": {
                    "Description": "Digna van Niëlen *",
                    "Id": "9bb3e137-9556-40ea-a626-e252b134b289"
                },
                "CreatedOn": "2022-02-16T09:48:34.6432178+00:00",
                "UpdatedBy": {
                    "Description": "Digna van Niëlen *",
                    "Id": "9bb3e137-9556-40ea-a626-e252b134b289"
                },
                "UpdatedOn": "2022-07-20T14:35:38.2160876+00:00"
            }

### Set External Identification [POST /volunteer/{volunteerId}/{providerName}/externalIdentification/{externalIdentification}]

+ Parameters
    + volunteerId (guid)
    + providerName
    + externalIdentification

+ Request

    + Headers

            X-ApiKey: [X-ApiKey]

# Data Structures

## address (object)
+ id - Unique id of the address
+ address1 - Address line 1
+ address2 - Address line 2
+ city - City
+ country (lookupValue) - Country (lookup value - Countries)
+ postalCode - Postal code
+ state - State or province

## awards (array)
+ (object)
    + id - Unique id of the award
    + company (object) - Unique id and description of the nominated / awarded company
    + person (object)  - Unique id and description of the nominated / awarded person
    + film (object) - Unique id and description of the nominated / awarded film
    + awardedDate - Date the award was received
    + awardType (lookupValue) - Type of award (lookup value - FilmAwardTypes)
    + category (lookupValue) - Category of the prize (lookup value - FilmAwardForTypes)
    + isAwarded (boolean) - If false, this is a nomation. If true, this is an award
    + year (number) - Year of the nomation / award

## lookupValue (object)
+ description - description of the lookup value
+ id - unique id of the lookup value

## translations (array)
+ (object)
    + abbreviavtion
    + language - Dutch (nl) or English (en)
    + text

## reference (object)
+ description - Description or name
+ id - Unique id (guid)
