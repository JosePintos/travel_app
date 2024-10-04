import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "czpsw3qwiekm",
    accessToken: "Abo_PJgb0r-wJTcOmIozVi73C9sthVIV8TUgH_Jn1-o",
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
