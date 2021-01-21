<template>
  <div class="relative mx-auto">
    <Nav>
      <NavItem to="/" isActive id="HOME" v-scroll-to="'#HOME'">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/blogs">Blog</NavItem>
    </Nav>
    <div class="max-w-3xl mx-auto px-4">
      <Header>I'm Craig Turner and I am extremely cool.</Header>
      <Subheader>
        <template #text>I like to help people find new jobs and stuff</template>
        <template #buttons>
          <div class="flex flex-col md:flex-row md:space-x-2">
            <NuxtLink to="/about">
              <Button color="teal">
                <template #icon>
                  <info-icon size="1x" class="inline-block mr-2 text-white" />
                </template>
                <template #label> More about me </template>
              </Button>
            </NuxtLink>
            <a href="#" v-scroll-to="'#GET_IN_TOUCH'">
              <Button color="grey" class="mt-2 md:mt-0">
                <template #icon>
                  <mail-icon
                    size="1x"
                    class="inline-block mr-2 text-gray-800 dark:text-white"
                  />
                </template>
                <template #label> Get in touch </template>
              </Button>
            </a>
          </div>
        </template>
      </Subheader>
      <div class="flex justify-center items-center pt-16">
        <H2Header>Latest posts. </H2Header>
      </div>
      <Divider />
    </div>
    <div class="flex mt-4 mx-auto justify-center">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
        <div v-for="blog in blogs" :key="blog._id">
          <keep-alive>
            <BlogCard :blog="blog" />
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { InfoIcon, MailIcon, ArrowRightIcon } from "vue-feather-icons";
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
        title: "KEJK | Home",
        description:
          "A Product and Frontend Designer, building for the web with Vue, Nuxt and Tailwind, building for mobile with SwiftUI.",
        url: "https://kejk.tech/",
        mainImage:
          "https://res.cloudinary.com/kejk/image/upload/q_auto,f_auto/v1610305389/OG_Image_wlile7.png",
      };
      return getSiteMeta(metaData);
    },
  },
  head() {
    return {
      title: "KEJK | Home",
      meta: [...this.meta],
      link: [{ rel: "canonical", href: "https://kejk.tech/" }],
    };
  },
  components: {
    InfoIcon,
    MailIcon,
    ArrowRightIcon,
  },
  data() {
    return {
      loading: false,
      blogs: {},
      slug: "",
    };
  },
  created() {
    this.slug = this.$route.params.slug;
    this.getBlogsData();
  },
  methods: {
    async getBlogsData() {
      this.error = this.blog = null;
      this.loading = true;
      await bucket
        .getObjects({
          limit: 2,
          type: "blogs",
          props: "_id,slug,title,content,metadata,created_at,published_at",
          sort: "-created_at",
        })
        .then((data) => {
          const blogs = data.objects;
          this.loading = false;
          this.blogs = blogs;
        });
    },
  },
};
</script>
