<template>
  <div class="relative mx-auto">
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about" isActive id="ABOUT" v-scroll-to="'#ABOUT'"
        >About</NavItem
      >
      <NavItem to="/blogs">Blog</NavItem>
    </Nav>
    <div class="max-w-3xl mx-auto px-4">
      <Header>About Craig</Header>
      <div class="flex flex-row pt-8">
        <keep-alive>
          <About :about="about" />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import getSiteMeta from "~/utils/getSiteMeta.js";

const Cosmic = require("cosmicjs");
const api = Cosmic();
const bucket = api.bucket({
  slug: "craig",
  read_key: "iHIswEFFeDTFbP1XKoLC3gEV2fCSXgtXPXzC9OQNStzwqX0FdM",
});

export default {
  computed: {
    meta() {
      const metaData = {
        title: "KEJK | About",
        description:
          "Karl is a Product Designer, crafting intelligent interfaces for the web, mobile and meta services.",
        url: "https://kejk.tech/about",
        mainImage:
          "https://res.cloudinary.com/kejk/image/upload/q_auto,f_auto/v1610305389/OG_Image_wlile7.png",
      };
      return getSiteMeta(metaData);
    },
  },
  head() {
    return {
      title: "KEJK | About",
      meta: [...this.meta],
      link: [{ rel: "canonical", href: "https://kejk.tech/about" }],
    };
  },
  data() {
    return {
      loading: false,
      about: {},
    };
  },
  created() {
    this.fetchAboutData();
  },
  methods: {
    async fetchAboutData() {
      this.loading = true;
      await bucket
        .getObject({
          slug: "about",
          props: "slug,title,content",
        })
        .then((data) => {
          this.about = data.object;
          this.loading = false;
        });
    },
  },
};
</script>
