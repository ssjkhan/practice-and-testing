import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "tnd8sdi8",
  dataset: "production",
  useCdn: true,
});
