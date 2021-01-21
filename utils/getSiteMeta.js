const type = "website";
const url = "https://kejk.tech";
const title = "Karl Emil James Koch";
const description = "Karl is a Product Designer, crafting intelligent interfaces for the web, mobile and meta services.";
const mainImage = "https://res.cloudinary.com/kejk/image/upload/v1610305389/OG_Image_wlile7.png";
const twitterSite = "@_kejk";
const twitterCard = "summary_large_image"
export default (meta) => {
  return [
    {
      hid: "description",
      name: "description",
      content: (meta && meta.description) || description,
    },
    {
      hid: "og:type",
      property: "og:type",
      content: (meta && meta.type) || type,
    },
    {
      hid: "og:url",
      property: "og:url",
      content: (meta && meta.url) || url,
    },
    {
      hid: "og:title",
      property: "og:title",
      content: (meta && meta.title) || title,
    },
    {
      hid: "og:description",
      property: "og:description",
      content: (meta && meta.description) || description,
    },
    {
      hid: "og:image",
      property: "og:image",
      content: (meta && meta.mainImage) || mainImage,
    },
    {
      hid: "twitter:url",
      name: "twitter:url",
      content: (meta && meta.url) || url,
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: (meta && meta.title) || title,
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: (meta && meta.description) || description,
    },
    {
      hid: "twitter:image:src",
      name: "twitter:image:src",
      content: (meta && meta.mainImage) || mainImage,
    },
    {
      hid: "twitter:site",
      name: "twitter:site",
      content: (meta && meta.twitterSite) || twitterSite,
    },
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: (meta && meta.twitterCard) || twitterCard,
    }
  ];
};
