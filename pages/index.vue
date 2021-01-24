<template>
  <div class="relative mx-auto">
    <Nav>
      <NavItem to="/" isActive id="HOME" v-scroll-to="'#HOME'">Home</NavItem>
      <NavItem to="/blogs">Blog</NavItem>
    </Nav>
    <div class="max-w-full mx-auto px-4 md:px-0 py-16">
      <Intro :intro="intro" />
      <div class="flex justify-center items-center pt-16">
        <H2Header>Latest posts</H2Header>
      </div>
      <div class="flex max-w-2xl mt-4 mx-auto justify-center">
        <div class="grid w-full sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div v-for="blog in blogs" :key="blog._id">
            <keep-alive>
              <BlogCard :blog="blog" />
            </keep-alive>
          </div>
        </div>
      </div>
      <div class="mx-auto px-4">
        <div class="flex flex-row pt-8">
          <keep-alive>
            <About :about="about" />
          </keep-alive>
        </div>
      </div>
      <div class="flex justify-center items-center pt-16">
        <H2Header>Currently trying out</H2Header>
      </div>
      <div class="flex max-w-2xl mt-4 mx-auto justify-center">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div v-for="hobby in hobbies" :key="hobby._id">
            <keep-alive>
              <HobbyCard :hobby="hobby" />
            </keep-alive>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center pt-16">
        <H2Header>My recommendations</H2Header>
      </div>
      <div class="flex md:max-w-2xl mt-4 mx-auto justify-center">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 w-full gap-4"
        >
          <div v-for="book in books" :key="book._id">
            <keep-alive>
              <BookCard :book="book" />
            </keep-alive>
          </div>
        </div>
      </div>
      <div class="flex max-w-2xl mt-4 mx-auto justify-center">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 w-full gap-4"
        >
          <div v-for="podcast in podcasts" :key="podcast._id">
            <keep-alive>
              <PodcastCard :podcast="podcast" />
            </keep-alive>
          </div>
        </div>
      </div>
      <div class="flex max-w-2xl mt-4 mx-auto justify-center">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 w-full gap-4"
        >
          <div v-for="newsletter in newsletters" :key="newsletter._id">
            <keep-alive>
              <NewsletterCard :newsletter="newsletter" />
            </keep-alive>
          </div>
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
        title: "Craig Turner | Home",
        description: "Finding the best tech for good talent",
        url: "https://craigturner.me/",
        mainImage: "#",
      };
      return getSiteMeta(metaData);
    },
  },
  head() {
    return {
      title: "Craig Turner | Home",
      meta: [...this.meta],
      link: [{ rel: "canonical", href: "https://craigturner.me/" }],
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
      hobbies: {},
      books: {},
      podcasts: {},
      newsletters: {},
      about: {},
      intro: {},
      slug: "",
    };
  },
  created() {
    this.slug = this.$route.params.slug;
    this.getBlogsData();
    this.getHobbiesData();
    this.getBooksData();
    this.getPodcastsData();
    this.getNewslettersData();
    this.fetchAboutData();
    this.fetchIntroData();
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
    async getHobbiesData() {
      this.error = this.hobby = null;
      this.loading = true;
      await bucket
        .getObjects({
          limit: 2,
          type: "hobbies",
          props: "_id,slug,title,content,metadata,created_at,published_at",
          sort: "-created_at",
        })
        .then((data) => {
          const hobbies = data.objects;
          this.loading = false;
          this.hobbies = hobbies;
        });
    },
    async getBooksData() {
      this.error = this.book = null;
      this.loading = true;
      await bucket
        .getObjects({
          limit: 2,
          type: "books",
          props: "_id,slug,title,content,metadata,created_at,published_at",
          sort: "-created_at",
        })
        .then((data) => {
          const books = data.objects;
          this.loading = false;
          this.books = books;
        });
    },
    async getPodcastsData() {
      this.error = this.podcast = null;
      this.loading = true;
      await bucket
        .getObjects({
          limit: 2,
          type: "podcasts",
          props: "_id,slug,title,content,metadata,created_at,published_at",
          sort: "-created_at",
        })
        .then((data) => {
          const podcasts = data.objects;
          this.loading = false;
          this.podcasts = podcasts;
        });
    },
    async getNewslettersData() {
      this.error = this.newsletter = null;
      this.loading = true;
      await bucket
        .getObjects({
          limit: 2,
          type: "newsletters",
          props: "_id,slug,title,content,metadata,created_at,published_at",
          sort: "-created_at",
        })
        .then((data) => {
          const newsletters = data.objects;
          this.loading = false;
          this.newsletters = newsletters;
        });
    },
    async fetchAboutData() {
      this.loading = true;
      await bucket
        .getObject({
          slug: "about",
          props: "slug,title,content,metadata.categories",
        })
        .then((data) => {
          this.about = data.object;
          this.loading = false;
        });
    },
    async fetchIntroData() {
      this.loading = true;
      await bucket
        .getObject({
          slug: "intro",
          props: "slug,title,content,metadata.hero.imgix_url",
        })
        .then((data) => {
          this.intro = data.object;
          this.loading = false;
        });
    },
  },
};
</script>
