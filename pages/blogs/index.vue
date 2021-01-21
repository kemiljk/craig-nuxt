<template>
  <div class="relative mx-auto">
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/blogs" isActive id="BLOG" v-scroll-to="'#BLOG'">
        Blog
      </NavItem>
    </Nav>
    <div class="max-w-3xl mx-auto px-4">
      <Header>Blog</Header>
      <Subheader>
        <template #text> Craig loves bacon. </template>
        <template #buttons>
          <SubscribeCard class="max-w-3xl px-8" />
        </template>
      </Subheader>
      <div class="flex mt-4 mx-auto justify-center">
        <div
          class="grid grid-row xs:grid-cols-1 sm:grid-cols-2 gap-8"
          v-if="blogs.blogList"
        >
          <div v-for="(blog, index) in blogs.blogList" :key="index">
            <keep-alive>
              <BlogCard :blog="blog" />
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getSiteMeta from "~/utils/getSiteMeta.js";
import BlogCard from "../../components/Cards/BlogCard";

export default {
  components: {
    BlogCard,
  },
  computed: {
    meta() {
      const metaData = {
        title: "KEJK | Thoughts",
        description:
          "Thoughts on Design and Development from here and around the web.",
        url: "https://kejk.tech/thoughts",
        mainImage:
          "https://res.cloudinary.com/kejk/image/upload/q_auto,f_auto/v1610305389/OG_Image_wlile7.png",
      };
      return getSiteMeta(metaData);
    },
    blogs() {
      let blogs = this.$store.getters.getBlog;
      let blogList = [];

      blogs.forEach(function (blog) {
        blogList.push(blog);
      });

      return { blogList: blogList };
    },
    head() {
      return {
        title: "KEJK | Thoughts",
        meta: [...this.meta],
        link: [{ rel: "canonical", href: "https://kejk.tech/thoughts" }],
      };
    },
    data() {
      return {
        loading: false,
      };
    },
  },
};
</script>
