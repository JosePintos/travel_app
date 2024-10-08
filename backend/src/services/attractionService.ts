import {
  createClient,
  Entry,
  EntryCollection,
  EntryFieldTypes,
} from "contentful";
import { formatDestinationDetails } from "../helpers/helpers";
import dotenv from "dotenv";

dotenv.config();

interface AttractionEntrySkeleton {
  contentTypeId: "attraction";
  fields: {
    attractionTitle: EntryFieldTypes.Text;
    attractionImage: EntryFieldTypes.AssetLink;
    attractionText: EntryFieldTypes.Text;
  };
}

interface DestinationEntrySkeleton {
  contentTypeId: "destinationDetails";
  fields: {
    destinationName: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    heroImage: EntryFieldTypes.AssetLink;
    attractions: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<AttractionEntrySkeleton>
    >;
  };
}

const space = process.env.CONTENTFUL_SPACE as string;
const token = process.env.CONTENTFUL_TOKEN as string;

const client = createClient({
  space: space,
  accessToken: token,
});

export const getDestinationDetails = async (
  destinationName: string
): Promise<any> => {
  const specificDestination: EntryCollection<DestinationEntrySkeleton> =
    await client.withoutLinkResolution.getEntries<DestinationEntrySkeleton>({
      content_type: "destinationDetails",
      "fields.destinationName[match]": destinationName,
    });

  if (!specificDestination.items || specificDestination.items.length === 0) {
    throw new Error("No destinations found");
  }

  return formatDestinationDetails(specificDestination);
};
