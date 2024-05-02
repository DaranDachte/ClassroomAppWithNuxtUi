import { defineStore } from "pinia";

export const useContactListStore = defineStore("contactList-store", () => {
  const contactsList = ref<ContactListModule[]>([
    {
      emailAddresses: [
        {
          metadata: {
            primary: true,
            source: {
              type: "DOMAIN_CONTACT",
              id: "_IkEfzJGWsxaTVizp2xJpUZuK89phqYp",
            },
            sourcePrimary: true,
          },
          value: "voldemar.prica@result.de",
          type: "work",
          formattedType: "Work",
          displayName: "PREFERRED_NAME",
        },
      ],
      names: [
        {
          metadata: {
            primary: true,
            source: {
              type: "DOMAIN_CONTACT",
              id: "_IkEfzJGWsxaTVizp2xJpUZuK89phqYp",
            },
          },
          displayName: "testing transresult",
          familyName: "transresult",
          givenName: "testing",
          displayNameLastFirst: "transresult, testing",
          unstructuredName: "testing transresult",
        },
      ],
      raw: {
        resourceName: "people/dCAUYrfzS84iE2adbMhUxMDIyOTU3MjAwMjcxOTY0MDY1OTg",
        etag: "%EggBAgkMLjc9PhoBCA==",
        names: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_CONTACT",
                id: "_IkEfzJGWsxaTVizp2xJpUZuK89phqYp",
              },
            },
            displayName: "testing transresult",
            familyName: "transresult",
            givenName: "testing",
            displayNameLastFirst: "transresult, testing",
            unstructuredName: "testing transresult",
          },
        ],
        emailAddresses: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_CONTACT",
                id: "_IkEfzJGWsxaTVizp2xJpUZuK89phqYp",
              },
              sourcePrimary: true,
            },
            value: "janik.becker@transresult.de",
            type: "work",
            formattedType: "Work",
            displayName: "PREFERRED_NAME",
          },
        ],
      },
    },
    {
      emailAddresses: [
        {
          metadata: {
            primary: true,
            verified: true,
            source: {
              type: "DOMAIN_PROFILE",
              id: "109219010542754985590",
            },
            sourcePrimary: true,
          },
          value: "schulwebinar@edu.accadis.com",
          type: "work",
          formattedType: "Work",
          displayName: "PREFERRED_NAME",
        },
      ],
      names: [
        {
          metadata: {
            primary: true,
            source: {
              type: "DOMAIN_PROFILE",
              id: "109219010542754985590",
            },
          },
          displayName: "Schul Webinar",
          familyName: "Webinar",
          givenName: "Schul",
          displayNameLastFirst: "Webinar, Schul",
          unstructuredName: "Schul Webinar",
        },
      ],
      raw: {
        resourceName: "people/109219010542754985590",
        etag: "%EggBAgkMLjc9PhoDAQcI",
        names: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_PROFILE",
                id: "109219010542754985590",
              },
            },
            displayName: "Schul Webinar",
            familyName: "Webinar",
            givenName: "Schul",
            displayNameLastFirst: "Webinar, Schul",
            unstructuredName: "Schul Webinar",
          },
        ],
        emailAddresses: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_PROFILE",
                id: "109219010542754985590",
              },
              sourcePrimary: true,
            },
            value: "schulwebinar@edu.accadis.com",
            type: "work",
            formattedType: "Work",
            displayName: "PREFERRED_NAME",
          },
        ],
      },
    },
    {
      emailAddresses: [
        {
          metadata: {
            primary: true,
            verified: true,
            source: {
              type: "DOMAIN_PROFILE",
              id: "104022007236275963139",
            },
            sourcePrimary: true,
          },
          value: "evaluierung@accadis.net",
          type: "work",
          formattedType: "Work",
          displayName: "Evaluierung",
        },
      ],
      names: [
        {
          metadata: {
            primary: true,
            source: {
              type: "DOMAIN_PROFILE",
              id: "104022007236275963139",
            },
          },
          displayName: "accadis Evaluierung",
          familyName: "Evaluierung",
          givenName: "accadis",
          displayNameLastFirst: "Evaluierung, accadis",
          unstructuredName: "accadis Evaluierung",
        },
      ],
      raw: {
        resourceName: "people/104022007236275963139",
        etag: "%EggBAgkMLjc9PhoDAQcI",
        names: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_PROFILE",
                id: "104022007236275963139",
              },
            },
            displayName: "accadis Evaluierung",
            familyName: "Evaluierung",
            givenName: "accadis",
            displayNameLastFirst: "Evaluierung, accadis",
            unstructuredName: "accadis Evaluierung",
          },
        ],
        emailAddresses: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_PROFILE",
                id: "104022007236275963139",
              },
              sourcePrimary: true,
            },
            value: "evaluierung@accadis.net",
            type: "work",
            formattedType: "Work",
            displayName: "Evaluierung",
          },
        ],
      },
    },
    {
      emailAddresses: [
        {
          metadata: {
            primary: true,
            verified: true,
            source: {
              type: "DOMAIN_PROFILE",
              id: "102336599833267208508",
            },
            sourcePrimary: true,
          },
          value: "dakota.kk@edu.accadis.com",
          type: "work",
          formattedType: "Work",
          displayName: "Dakota KK",
        },
      ],
      names: [
        {
          metadata: {
            primary: true,
            source: {
              type: "DOMAIN_PROFILE",
              id: "102336599833267208508",
            },
          },
          displayName: "dakota KK",
          familyName: "KK",
          givenName: "dakota",
          displayNameLastFirst: "KK, dakota",
          unstructuredName: "dakota KK",
        },
      ],
      raw: {
        resourceName: "people/102336599833267208508",
        etag: "%EggBAgkMLjc9PhoDAQcI",
        names: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_PROFILE",
                id: "102336599833267208508",
              },
            },
            displayName: "dakota KK",
            familyName: "KK",
            givenName: "dakota",
            displayNameLastFirst: "KK, dakota",
            unstructuredName: "dakota KK",
          },
        ],
        emailAddresses: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_PROFILE",
                id: "102336599833267208508",
              },
              sourcePrimary: true,
            },
            value: "dakota.kk@edu.accadis.com",
            type: "work",
            formattedType: "Work",
            displayName: "Dakota KK",
          },
        ],
        organizations: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_PROFILE",
                id: "102336599833267208508",
              },
            },
            jobDescription: "Postfach zum Versenden der KK-Daten über dakota",
          },
        ],
      },
    },
    {
      emailAddresses: [
        {
          metadata: {
            primary: true,
            verified: true,
            source: {
              type: "DOMAIN_PROFILE",
              id: "102016726687073520879",
            },
            sourcePrimary: true,
          },
          value: "backup@edu.accadis.com",
          type: "work",
          formattedType: "Work",
          displayName: "Backup Email",
        },
      ],
      names: [
        {
          metadata: {
            primary: true,
            source: {
              type: "DOMAIN_PROFILE",
              id: "102016726687073520879",
            },
          },
          displayName: "Backy Backup",
          familyName: "Backup",
          givenName: "Backy",
          displayNameLastFirst: "Backup, Backy",
          unstructuredName: "Backy Backup",
        },
      ],
      raw: {
        resourceName: "people/102016726687073520879",
        etag: "%EggBAgkMLjc9PhoDAQcI",
        names: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_PROFILE",
                id: "102016726687073520879",
              },
            },
            displayName: "Backy Backup",
            familyName: "Backup",
            givenName: "Backy",
            displayNameLastFirst: "Backup, Backy",
            unstructuredName: "Backy Backup",
          },
        ],
        emailAddresses: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_PROFILE",
                id: "102016726687073520879",
              },
              sourcePrimary: true,
            },
            value: "backup@edu.accadis.com",
            type: "work",
            formattedType: "Work",
            displayName: "Backup Email",
          },
        ],
      },
    },
    {
      emailAddresses: [
        {
          metadata: {
            primary: true,
            verified: true,
            source: {
              type: "DOMAIN_PROFILE",
              id: "112177158705100015905",
            },
            sourcePrimary: true,
          },
          value: "andreas.bechmann@accadis.net",
          type: "work",
          formattedType: "Work",
          displayName: "Work Email",
        },
      ],
      names: [
        {
          metadata: {
            primary: true,
            source: {
              type: "DOMAIN_PROFILE",
              id: "112177158705100015905",
            },
          },
          displayName: "Andreas Bechmann",
          familyName: "Bechmann",
          givenName: "Andreas",
          displayNameLastFirst: "Bechmann, Andreas",
          unstructuredName: "Andreas Bechmann",
        },
      ],
      raw: {
        resourceName: "people/112177158705100015905",
        etag: "%EggBAgkMLjc9PhoDAQcI",
        names: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_PROFILE",
                id: "112177158705100015905",
              },
            },
            displayName: "Andreas Bechmann",
            familyName: "Bechmann",
            givenName: "Andreas",
            displayNameLastFirst: "Bechmann, Andreas",
            unstructuredName: "Andreas Bechmann",
          },
        ],
        emailAddresses: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_PROFILE",
                id: "112177158705100015905",
              },
              sourcePrimary: true,
            },
            value: "andreas.bechmann@accadis.net",
            type: "work",
            formattedType: "Work",
            displayName: "Work Email",
          },
        ],
        organizations: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_PROFILE",
                id: "112177158705100015905",
              },
            },
            jobDescription: "Software Developer",
          },
        ],
      },
    },
    {
      emailAddresses: [
        {
          metadata: {
            primary: true,
            verified: true,
            source: {
              type: "DOMAIN_PROFILE",
              id: "102743539975496996611",
            },
            sourcePrimary: true,
          },
          value: "angelika.wolf@accadis.net",
          type: "work",
          formattedType: "Work",
          displayName: "Work Email",
        },
      ],
      names: [
        {
          metadata: {
            primary: true,
            source: {
              type: "DOMAIN_PROFILE",
              id: "102743539975496996611",
            },
          },
          displayName: "Angelika Wolf",
          familyName: "Wolf",
          givenName: "Angelika",
          displayNameLastFirst: "Wolf, Angelika",
          unstructuredName: "Angelika Wolf",
        },
      ],
      raw: {
        resourceName: "people/102743539975496996611",
        etag: "%EggBAgkMLjc9PhoDAQcI",
        names: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_PROFILE",
                id: "102743539975496996611",
              },
            },
            displayName: "Angelika Wolf",
            familyName: "Wolf",
            givenName: "Angelika",
            displayNameLastFirst: "Wolf, Angelika",
            unstructuredName: "Angelika Wolf",
          },
        ],
        emailAddresses: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_PROFILE",
                id: "102743539975496996611",
              },
              sourcePrimary: true,
            },
            value: "angelika.wolf@accadis.net",
            type: "work",
            formattedType: "Work",
            displayName: "Work Email",
          },
        ],
        organizations: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_PROFILE",
                id: "102743539975496996611",
              },
            },
            jobDescription: "Software Developer",
          },
        ],
      },
    },
    {
      emailAddresses: [
        {
          metadata: {
            primary: true,
            verified: true,
            source: {
              type: "DOMAIN_PROFILE",
              id: "100957816284752973421",
            },
            sourcePrimary: true,
          },
          value: "anna-zoe.jost@accadis.net",
          type: "work",
          formattedType: "Work",
          displayName: "Work Email",
        },
      ],
      names: [
        {
          metadata: {
            primary: true,
            source: {
              type: "DOMAIN_PROFILE",
              id: "100957816284752973421",
            },
          },
          displayName: "Anna-Zoe Jost",
          familyName: "Jost",
          givenName: "Anna-Zoe",
          displayNameLastFirst: "Jost, Anna-Zoe",
          unstructuredName: "Anna-Zoe Jost",
        },
      ],
      raw: {
        resourceName: "people/100957816284752973421",
        etag: "%EggBAgkMLjc9PhoDAQcI",
        names: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_PROFILE",
                id: "100957816284752973421",
              },
            },
            displayName: "Anna-Zoe Jost",
            familyName: "Jost",
            givenName: "Anna-Zoe",
            displayNameLastFirst: "Jost, Anna-Zoe",
            unstructuredName: "Anna-Zoe Jost",
          },
        ],
        emailAddresses: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_PROFILE",
                id: "100957816284752973421",
              },
              sourcePrimary: true,
            },
            value: "anna-zoe.jost@accadis.net",
            type: "work",
            formattedType: "Work",
            displayName: "Work Email",
          },
        ],
        organizations: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_PROFILE",
                id: "100957816284752973421",
              },
            },
            jobDescription: "Software Developer",
          },
        ],
      },
    },
    {
      emailAddresses: [
        {
          metadata: {
            primary: true,
            verified: true,
            source: {
              type: "DOMAIN_PROFILE",
              id: "105969681774403112016",
            },
            sourcePrimary: true,
          },
          value: "finn.meyer@accadis.net",
          type: "work",
          formattedType: "Work",
          displayName: "Work Email",
        },
      ],
      names: [
        {
          metadata: {
            primary: true,
            source: {
              type: "DOMAIN_PROFILE",
              id: "105969681774403112016",
            },
          },
          displayName: "Finn Meyer",
          familyName: "Meyer",
          givenName: "Finn",
          displayNameLastFirst: "Meyer, Finn",
          unstructuredName: "Finn Meyer",
        },
      ],
      raw: {
        resourceName: "people/105969681774403112016",
        etag: "%EggBAgkMLjc9PhoDAQcI",
        names: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_PROFILE",
                id: "105969681774403112016",
              },
            },
            displayName: "Finn Meyer",
            familyName: "Meyer",
            givenName: "Finn",
            displayNameLastFirst: "Meyer, Finn",
            unstructuredName: "Finn Meyer",
          },
        ],
        emailAddresses: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_PROFILE",
                id: "105969681774403112016",
              },
              sourcePrimary: true,
            },
            value: "finn.meyer@accadis.net",
            type: "work",
            formattedType: "Work",
            displayName: "Work Email",
          },
        ],
        organizations: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_PROFILE",
                id: "105969681774403112016",
              },
            },
            jobDescription: "Software Developer",
          },
        ],
      },
    },
    {
      emailAddresses: [
        {
          metadata: {
            primary: true,
            verified: true,
            source: {
              type: "DOMAIN_PROFILE",
              id: "117248347148643365763",
            },
            sourcePrimary: true,
          },
          value: "hannah.carthaus@accadis.net",
          type: "work",
          formattedType: "Work",
          displayName: "Work Email",
        },
      ],
      names: [
        {
          metadata: {
            primary: true,
            source: {
              type: "DOMAIN_PROFILE",
              id: "117248347148643365763",
            },
          },
          displayName: "Hannah Carthaus",
          familyName: "Carthaus",
          givenName: "Hannah",
          displayNameLastFirst: "Carthaus, Hannah",
          unstructuredName: "Hannah Carthaus",
        },
      ],
      raw: {
        resourceName: "people/117248347148643365763",
        etag: "%EggBAgkMLjc9PhoDAQcI",
        names: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_PROFILE",
                id: "117248347148643365763",
              },
            },
            displayName: "Hannah Carthaus",
            familyName: "Carthaus",
            givenName: "Hannah",
            displayNameLastFirst: "Carthaus, Hannah",
            unstructuredName: "Hannah Carthaus",
          },
        ],
        emailAddresses: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_PROFILE",
                id: "117248347148643365763",
              },
              sourcePrimary: true,
            },
            value: "hannah.carthaus@accadis.net",
            type: "work",
            formattedType: "Work",
            displayName: "Work Email",
          },
        ],
        organizations: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_PROFILE",
                id: "117248347148643365763",
              },
            },
            jobDescription: "Software Developer",
          },
        ],
      },
    },
    {
      emailAddresses: [
        {
          metadata: {
            primary: true,
            verified: true,
            source: {
              type: "DOMAIN_PROFILE",
              id: "106829761021538556459",
            },
            sourcePrimary: true,
          },
          value: "jonah.wonnenberg@accadis.net",
          type: "work",
          formattedType: "Work",
          displayName: "Work Email",
        },
      ],
      names: [
        {
          metadata: {
            primary: true,
            source: {
              type: "DOMAIN_PROFILE",
              id: "106829761021538556459",
            },
          },
          displayName: "Jonah Wonnenberg",
          familyName: "Wonnenberg",
          givenName: "Jonah",
          displayNameLastFirst: "Wonnenberg, Jonah",
          unstructuredName: "Jonah Wonnenberg",
        },
      ],
      raw: {
        resourceName: "people/106829761021538556459",
        etag: "%EggBAgkMLjc9PhoDAQcI",
        names: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_PROFILE",
                id: "106829761021538556459",
              },
            },
            displayName: "Jonah Wonnenberg",
            familyName: "Wonnenberg",
            givenName: "Jonah",
            displayNameLastFirst: "Wonnenberg, Jonah",
            unstructuredName: "Jonah Wonnenberg",
          },
        ],
        emailAddresses: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_PROFILE",
                id: "106829761021538556459",
              },
              sourcePrimary: true,
            },
            value: "jonah.wonnenberg@accadis.net",
            type: "work",
            formattedType: "Work",
            displayName: "Work Email",
          },
        ],
        organizations: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_PROFILE",
                id: "106829761021538556459",
              },
            },
            jobDescription: "Software Developer",
          },
        ],
      },
    },
    {
      emailAddresses: [
        {
          metadata: {
            primary: true,
            source: {
              type: "DOMAIN_CONTACT",
              id: "_IkEfzJGWsz0RtH8a6v7bJqA7rY1c6L8",
            },
            sourcePrimary: true,
          },
          value: "it@accadis.com",
          type: "work",
          formattedType: "Work",
          displayName: "PREFERRED_NAME",
        },
      ],
      names: [
        {
          metadata: {
            primary: true,
            source: {
              type: "DOMAIN_CONTACT",
              id: "_IkEfzJGWsz0RtH8a6v7bJqA7rY1c6L8",
            },
          },
          displayName: "Daniele Pelosi",
          familyName: "Pelosi",
          givenName: "Daniele",
          displayNameLastFirst: "Pelosi, Daniele",
          unstructuredName: "Daniele Pelosi",
        },
      ],
      raw: {
        resourceName: "people/dCAUYlOKEybibte0zMhUxMDIyOTU3MjAwMjcxOTY0MDY1OTg",
        etag: "%EggBAgkMLjc9PhoBCA==",
        names: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_CONTACT",
                id: "_IkEfzJGWsz0RtH8a6v7bJqA7rY1c6L8",
              },
            },
            displayName: "Daniele Pelosi",
            familyName: "Pelosi",
            givenName: "Daniele",
            displayNameLastFirst: "Pelosi, Daniele",
            unstructuredName: "Daniele Pelosi",
          },
        ],
        emailAddresses: [
          {
            metadata: {
              primary: true,
              source: {
                type: "DOMAIN_CONTACT",
                id: "_IkEfzJGWsz0RtH8a6v7bJqA7rY1c6L8",
              },
              sourcePrimary: true,
            },
            value: "it@accadis.com",
            type: "work",
            formattedType: "Work",
            displayName: "PREFERRED_NAME",
          },
        ],
      },
    },
  ]);
  return {
    contactsList,
  };
});
