import Cosmic from "cosmicjs";
const api = Cosmic();
const bucket = api.bucket({
  slug: "craig",
  read_key: "iHIswEFFeDTFbP1XKoLC3gEV2fCSXgtXPXzC9OQNStzwqX0FdM",
});

function getBlogs() {
  const params = {
    type_slug: "blogs",
    props: "slug,title,content,metadata,modified_at,order",
    limit: "20",
  };
  return bucket.getObjectsByType(params);
}

export default { getBlogs };
