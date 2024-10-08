import dotenv from "dotenv";
import path, { format } from "path";
import axios from "axios";
import {
  formatAutocompleteLocation,
  extractFlightData,
} from "../helpers/helpers";

dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

export const getCityCountryListService = async (userQuery: string) => {
  const token = process.env.API_AUTOCOMPLETE_TOKEN;

  const response = await axios.get(
    `https://api.locationiq.com/v1/autocomplete?q=${userQuery}`,
    {
      params: { key: token, tag: "place:city" },
    }
  );

  return formatAutocompleteLocation(response.data);
};

export const searchFlightsService = async (
  adults: string,
  destination: string,
  departureDate: string,
  origin: string
) => {
  const token = process.env.FLIGHTS_TOKEN;

  const response = await axios.get(
    "https://flights-sky.p.rapidapi.com/flights/search-one-way",
    {
      headers: {
        "X-RapidAPI-Key": token,
        "X-RapidAPI-Host": "flights-sky.p.rapidapi.com",
      },
      params: {
        fromEntityId: origin,
        toEntityId: destination,
        wholeMonthDepart: departureDate,
        adults: adults,
        currency: "USD",
        countryCode: "US",
        market: "US",
      },
    }
  );

  const formatedArray = extractFlightData(
    response.data.data.flightQuotes.results
  );
  formatedArray.sort((a, b) => {
    const dateA = parseInt(a.depDate.slice(9, 11));
    const dateB = parseInt(b.depDate.slice(9, 11));
    return dateA - dateB;
  });

  return formatedArray;
};

export const getCityCode = async (queryLocation: string) => {
  const token = process.env.FLIGHTS_TOKEN;
  const locationData = await axios.get(
    `https://skyscanner80.p.rapidapi.com/api/v1/flights/auto-complete?query=${queryLocation}`,
    {
      headers: {
        "X-RapidAPI-Key": token,
        "X-RapidAPI-Host": "skyscanner80.p.rapidapi.com",
      },
    }
  );

  if (!locationData.data) {
    console.log("error");
    throw new Error("The fromEntityId is not available");
  }

  return locationData.data.data[0].navigation.relevantFlightParams.skyId;
};

const flightData = {
  data: {
    countryOrigin: {
      context: {
        status: "complete",
        sessionId: "UNFOCUSED_SESSION_ID",
        totalResults: 9,
      },
      features: {
        flightsIndicative: "AVAILABLE",
      },
      buckets: [
        {
          id: "CHEAPEST_FLIGHTS",
          label: "Cheapest flights",
          category: "NON_CATEGORIZED",
          resultIds: [
            "location-27536465",
            "location-27539889",
            "location-27547274",
            "location-27546149",
            "location-31735492",
          ],
          flightQuotes: "cheapest",
          hotelQuotes: "standard",
        },
        {
          id: "ALL_LOCATIONS",
          label: "All available locations",
          category: "NON_CATEGORIZED",
          resultIds: [
            "location-27536465",
            "location-27539889",
            "location-27544892",
            "location-31735492",
            "location-27546158",
            "location-27546204",
            "location-27546379",
            "location-27546149",
            "location-27547274",
          ],
          flightQuotes: "cheapest",
          hotelQuotes: "standard",
        },
      ],
      results: [
        {
          id: "location-27536465",
          type: "LOCATION",
          content: {
            location: {
              id: "27536465",
              skyCode: "BUEA",
              name: "Buenos Aires",
              type: "City",
            },
            flightQuotes: {
              cheapest: {
                price: "$431",
                rawPrice: 431,
                direct: false,
              },
            },
            flightRoutes: {
              directFlightsAvailable: false,
            },
          },
          entityId: "eyJlIjoiMjc1MzY0NjUiLCJzIjoiQlVFQSIsInQiOiJDaXR5In0=",
          skyId: "BUEA",
        },
        {
          id: "location-27539889",
          type: "LOCATION",
          content: {
            location: {
              id: "27539889",
              skyCode: "CORA",
              name: "Cordoba",
              type: "City",
            },
            flightQuotes: {
              cheapest: {
                price: "$516",
                rawPrice: 516,
                direct: false,
              },
            },
            flightRoutes: {
              directFlightsAvailable: false,
            },
          },
          entityId: "eyJlIjoiMjc1Mzk4ODkiLCJzIjoiQ09SQSIsInQiOiJDaXR5In0=",
          skyId: "CORA",
        },
        {
          id: "location-27547274",
          type: "LOCATION",
          content: {
            location: {
              id: "27547274",
              skyCode: "TUCA",
              name: "Tucuman",
              type: "City",
            },
            flightQuotes: {
              cheapest: {
                price: "$648",
                rawPrice: 648,
                direct: false,
              },
            },
          },
          entityId: "eyJlIjoiMjc1NDcyNzQiLCJzIjoiVFVDQSIsInQiOiJDaXR5In0=",
          skyId: "TUCA",
        },
        {
          id: "location-27546149",
          type: "LOCATION",
          content: {
            location: {
              id: "27546149",
              skyCode: "RELA",
              name: "Trelew",
              type: "City",
            },
            flightQuotes: {
              cheapest: {
                price: "$709",
                rawPrice: 709,
                direct: false,
              },
            },
          },
          entityId: "eyJlIjoiMjc1NDYxNDkiLCJzIjoiUkVMQSIsInQiOiJDaXR5In0=",
          skyId: "RELA",
        },
        {
          id: "location-31735492",
          type: "LOCATION",
          content: {
            location: {
              id: "31735492",
              skyCode: "IGRA",
              name: "Puerto Iguazú",
              type: "City",
            },
            flightQuotes: {
              cheapest: {
                price: "$749",
                rawPrice: 749,
                direct: false,
              },
            },
          },
          entityId: "eyJlIjoiMzE3MzU0OTIiLCJzIjoiSUdSQSIsInQiOiJDaXR5In0=",
          skyId: "IGRA",
        },
        {
          id: "location-27544892",
          type: "LOCATION",
          content: {
            location: {
              id: "27544892",
              skyCode: "MDZA",
              name: "Mendoza",
              type: "City",
            },
            flightRoutes: {
              directFlightsAvailable: false,
            },
          },
          entityId: "eyJlIjoiMjc1NDQ4OTIiLCJzIjoiTURaQSIsInQiOiJDaXR5In0=",
          skyId: "MDZA",
        },
        {
          id: "location-27546158",
          type: "LOCATION",
          content: {
            location: {
              id: "27546158",
              skyCode: "RGLA",
              name: "Rio Gallegos",
              type: "City",
            },
            flightRoutes: {
              directFlightsAvailable: false,
            },
          },
          entityId: "eyJlIjoiMjc1NDYxNTgiLCJzIjoiUkdMQSIsInQiOiJDaXR5In0=",
          skyId: "RGLA",
        },
        {
          id: "location-27546204",
          type: "LOCATION",
          content: {
            location: {
              id: "27546204",
              skyCode: "ROSA",
              name: "Rosario",
              type: "City",
            },
            flightRoutes: {
              directFlightsAvailable: false,
            },
          },
          entityId: "eyJlIjoiMjc1NDYyMDQiLCJzIjoiUk9TQSIsInQiOiJDaXR5In0=",
          skyId: "ROSA",
        },
        {
          id: "location-27546379",
          type: "LOCATION",
          content: {
            location: {
              id: "27546379",
              skyCode: "SLAA",
              name: "Salta",
              type: "City",
            },
            flightRoutes: {
              directFlightsAvailable: false,
            },
          },
          entityId: "eyJlIjoiMjc1NDYzNzkiLCJzIjoiU0xBQSIsInQiOiJDaXR5In0=",
          skyId: "SLAA",
        },
      ],
    },
    context: {
      status: "complete",
      sessionId: "UNFOCUSED_SESSION_ID",
      totalResults: 0,
    },
  },
  status: true,
  message: "Successful",
};

const flightsCity = {
  data: {
    flightQuotes: {
      buckets: [
        {
          id: "CHEAPEST_FLIGHT_QUOTES",
          label: "Cheapest flights",
          resultIds: [
            "{bl}:202410022042*I*AEP*LAX*20241029*arus*JA",
            "{bl}:202410041957*I*EZE*LAX*20241030*arus*AV",
            "{bl}:202410061108*I*EZE*LAX*20241023*copa*CM",
            "{bl}:202410051040*I*EZE*LAX*20241026*copa*CM",
            "{bl}:202410052151*I*EZE*LAX*20241024*copa*CM",
            "{bl}:202410021758*I*EZE*LAX*20241031*dela*DL",
            "{bl}:202410030116*I*EZE*LAX*20241027*dela*DL",
            "{bl}:202410051957*I*EZE*LAX*20241015*uair*UA",
            "{bl}:202410052151*I*EZE*LAX*20241028*dela*DL",
          ],
        },
        {
          id: "DIRECT_FLIGHT_QUOTES",
          label: "Direct flights",
          resultIds: [],
        },
      ],
      results: [
        {
          id: "{bl}:202410052151*I*EZE*LAX*20241028*dela*DL",
          type: "FLIGHT_QUOTE",
          content: {
            price: "$470",
            rawPrice: 470,
            direct: false,
            outboundLeg: {
              originAirport: {
                id: "95673318",
                skyCode: "EZE",
                name: "EZE",
                type: "Airport",
              },
              destinationAirport: {
                id: "95673368",
                skyCode: "LAX",
                name: "LAX",
                type: "Airport",
              },
              localDepartureDate: "2024-10-28",
              localDepartureDateLabel: "Mon, Oct 28",
            },
          },
          entityId: "eyJlIjoiOTU2NzMzNjgiLCJzIjoiTEFYIiwidCI6bnVsbH0=",
          skyId: "LAX",
        },
        {
          id: "{bl}:202410041957*I*EZE*LAX*20241030*arus*AV",
          type: "FLIGHT_QUOTE",
          content: {
            price: "$448",
            rawPrice: 448,
            direct: false,
            outboundLeg: {
              originAirport: {
                id: "95673318",
                skyCode: "EZE",
                name: "EZE",
                type: "Airport",
              },
              destinationAirport: {
                id: "95673368",
                skyCode: "LAX",
                name: "LAX",
                type: "Airport",
              },
              localDepartureDate: "2024-10-30",
              localDepartureDateLabel: "Wed, Oct 30",
            },
          },
          entityId: "eyJlIjoiOTU2NzMzNjgiLCJzIjoiTEFYIiwidCI6bnVsbH0=",
          skyId: "LAX",
        },
        {
          id: "{bl}:202410061108*I*EZE*LAX*20241023*copa*CM",
          type: "FLIGHT_QUOTE",
          content: {
            price: "$466",
            rawPrice: 466,
            direct: false,
            outboundLeg: {
              originAirport: {
                id: "95673318",
                skyCode: "EZE",
                name: "EZE",
                type: "Airport",
              },
              destinationAirport: {
                id: "95673368",
                skyCode: "LAX",
                name: "LAX",
                type: "Airport",
              },
              localDepartureDate: "2024-10-23",
              localDepartureDateLabel: "Wed, Oct 23",
            },
          },
          entityId: "eyJlIjoiOTU2NzMzNjgiLCJzIjoiTEFYIiwidCI6bnVsbH0=",
          skyId: "LAX",
        },
        {
          id: "{bl}:202410051957*I*EZE*LAX*20241015*uair*UA",
          type: "FLIGHT_QUOTE",
          content: {
            price: "$469",
            rawPrice: 469,
            direct: false,
            outboundLeg: {
              originAirport: {
                id: "95673318",
                skyCode: "EZE",
                name: "EZE",
                type: "Airport",
              },
              destinationAirport: {
                id: "95673368",
                skyCode: "LAX",
                name: "LAX",
                type: "Airport",
              },
              localDepartureDate: "2024-10-15",
              localDepartureDateLabel: "Tue, Oct 15",
            },
          },
          entityId: "eyJlIjoiOTU2NzMzNjgiLCJzIjoiTEFYIiwidCI6bnVsbH0=",
          skyId: "LAX",
        },
        {
          id: "{bl}:202410030116*I*EZE*LAX*20241027*dela*DL",
          type: "FLIGHT_QUOTE",
          content: {
            price: "$467",
            rawPrice: 467,
            direct: false,
            outboundLeg: {
              originAirport: {
                id: "95673318",
                skyCode: "EZE",
                name: "EZE",
                type: "Airport",
              },
              destinationAirport: {
                id: "95673368",
                skyCode: "LAX",
                name: "LAX",
                type: "Airport",
              },
              localDepartureDate: "2024-10-27",
              localDepartureDateLabel: "Sun, Oct 27",
            },
          },
          entityId: "eyJlIjoiOTU2NzMzNjgiLCJzIjoiTEFYIiwidCI6bnVsbH0=",
          skyId: "LAX",
        },
        {
          id: "{bl}:202410052151*I*EZE*LAX*20241024*copa*CM",
          type: "FLIGHT_QUOTE",
          content: {
            price: "$466",
            rawPrice: 466,
            direct: false,
            outboundLeg: {
              originAirport: {
                id: "95673318",
                skyCode: "EZE",
                name: "EZE",
                type: "Airport",
              },
              destinationAirport: {
                id: "95673368",
                skyCode: "LAX",
                name: "LAX",
                type: "Airport",
              },
              localDepartureDate: "2024-10-24",
              localDepartureDateLabel: "Thu, Oct 24",
            },
          },
          entityId: "eyJlIjoiOTU2NzMzNjgiLCJzIjoiTEFYIiwidCI6bnVsbH0=",
          skyId: "LAX",
        },
        {
          id: "{bl}:202410021758*I*EZE*LAX*20241031*dela*DL",
          type: "FLIGHT_QUOTE",
          content: {
            price: "$467",
            rawPrice: 467,
            direct: false,
            outboundLeg: {
              originAirport: {
                id: "95673318",
                skyCode: "EZE",
                name: "EZE",
                type: "Airport",
              },
              destinationAirport: {
                id: "95673368",
                skyCode: "LAX",
                name: "LAX",
                type: "Airport",
              },
              localDepartureDate: "2024-10-31",
              localDepartureDateLabel: "Thu, Oct 31",
            },
          },
          entityId: "eyJlIjoiOTU2NzMzNjgiLCJzIjoiTEFYIiwidCI6bnVsbH0=",
          skyId: "LAX",
        },
        {
          id: "{bl}:202410022042*I*AEP*LAX*20241029*arus*JA",
          type: "FLIGHT_QUOTE",
          content: {
            price: "$431",
            rawPrice: 431,
            direct: false,
            outboundLeg: {
              originAirport: {
                id: "128668190",
                skyCode: "AEP",
                name: "AEP",
                type: "Airport",
              },
              destinationAirport: {
                id: "95673368",
                skyCode: "LAX",
                name: "LAX",
                type: "Airport",
              },
              localDepartureDate: "2024-10-29",
              localDepartureDateLabel: "Tue, Oct 29",
            },
          },
          entityId: "eyJlIjoiOTU2NzMzNjgiLCJzIjoiTEFYIiwidCI6bnVsbH0=",
          skyId: "LAX",
        },
        {
          id: "{bl}:202410051040*I*EZE*LAX*20241026*copa*CM",
          type: "FLIGHT_QUOTE",
          content: {
            price: "$466",
            rawPrice: 466,
            direct: false,
            outboundLeg: {
              originAirport: {
                id: "95673318",
                skyCode: "EZE",
                name: "EZE",
                type: "Airport",
              },
              destinationAirport: {
                id: "95673368",
                skyCode: "LAX",
                name: "LAX",
                type: "Airport",
              },
              localDepartureDate: "2024-10-26",
              localDepartureDateLabel: "Sat, Oct 26",
            },
          },
          entityId: "eyJlIjoiOTU2NzMzNjgiLCJzIjoiTEFYIiwidCI6bnVsbH0=",
          skyId: "LAX",
        },
      ],
      months: [
        {
          year: 2024,
          month: 10,
          monthLabel: "Oct",
          selected: true,
        },
        {
          year: 2024,
          month: 11,
          monthLabel: "Nov",
          selected: false,
        },
        {
          year: 2024,
          month: 12,
          monthLabel: "Dec",
          selected: false,
        },
        {
          year: 2025,
          month: 1,
          monthLabel: "Jan",
          selected: false,
        },
        {
          year: 2025,
          month: 2,
          monthLabel: "Feb",
          selected: false,
        },
        {
          year: 2025,
          month: 3,
          monthLabel: "Mar",
          selected: false,
        },
        {
          year: 2025,
          month: 4,
          monthLabel: "Apr",
          selected: false,
        },
        {
          year: 2025,
          month: 5,
          monthLabel: "May",
          selected: false,
        },
        {
          year: 2025,
          month: 6,
          monthLabel: "Jun",
          selected: false,
        },
        {
          year: 2025,
          month: 7,
          monthLabel: "Jul",
          selected: false,
        },
        {
          year: 2025,
          month: 8,
          monthLabel: "Aug",
          selected: false,
        },
        {
          year: 2025,
          month: 9,
          monthLabel: "Sep",
          selected: false,
        },
      ],
      context: {
        status: "complete",
        sessionId: "UNFOCUSED_SESSION_ID",
        totalResults: 9,
      },
    },
    differentDestination: {
      location: {
        id: "29475437",
        skyCode: "US",
        name: "United States",
        type: "Nation",
      },
      context: {
        status: "complete",
        sessionId: "UNFOCUSED_SESSION_ID",
        totalResults: 0,
      },
    },
    context: {
      status: "complete",
      sessionId: "UNFOCUSED_SESSION_ID",
      totalResults: 0,
    },
  },
  status: true,
  message: "Successful",
};
