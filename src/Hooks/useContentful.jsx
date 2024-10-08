import axios from "axios";

const useContentful = () => {
  const getDestinationDetails = async (destName) => {
    try {
      const attractionDetails = await axios.get(
        "http://localhost:3000/content/attraction_content",
        { params: { destinationName: destName } }
      );
      return attractionDetails.data;
    } catch (error) {
      console.log(`Error fetching destination details: ${error}`);
      throw error;
    }
  };

  return { getDestinationDetails };
};

export default useContentful;
