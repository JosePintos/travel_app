import { createClient } from "contentful";
import dotenv from "dotenv";

dotenv.config();

const useContentful = () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_TOKEN,
  });

  const getDestinationDetails = async (destinationName) => {
    try {
      const specificDestination = await client.getEntries({
        content_type: "destinationDetails",
        select: "fields",
      });

      if (
        !specificDestination.items ||
        specificDestination.items.length === 0
      ) {
        throw new Error("No destinations found");
      }

      const filteredEntry = specificDestination.items.find((item) =>
        item.fields.destinationName?.toLowerCase().includes(destinationName)
      );

      if (!filteredEntry) {
        throw new Error(
          `No destination found with the name ${destinationName}`
        );
      }

      return filteredEntry.fields;
    } catch (error) {
      console.log(`Error fetching destination details: ${error}`);
      throw error;
    }
  };

  return { getDestinationDetails };
};

export default useContentful;
