<template>
  <div class="relative mx-auto">
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/blogs" isActive id="BLOG" v-scroll-to="'#BLOG'">
        Blog
      </NavItem>
    </Nav>
    <div class="max-w-3xl mx-auto px-4 pt-16">
      <SubscribeCard class="max-w-2xl mx-auto" />
      <div class="flex mt-4 mx-auto justify-center">
        <div
          class="top-16 flex flex-row py-4 space-x-2 overflow-x-auto scrollbar-hidden"
        >
          <button
            v-for="tab in tabs"
            :key="tab"
            @click="selected = tab"
            class="block px-4 py-2 text-gray-400 dark:text-gray-500 border-b-2 border-transparent hover:border-gray-400 dark:hover:border-gray-500"
            :class="[{ active: selected === tab }]"
          >
            {{ tab }}
          </button>
        </div>
      </div>
      <component :is="selected" class="tab mt-8"></component>
    </div>
  </div>
</template>

<script>
import getSiteMeta from "~/utils/getSiteMeta.js";
import All from "../../components/Tabs/All";
import Posts from "../../components/Tabs/Posts";
import Videos from "../../components/Tabs/Videos";

export default {
  components: {
    All,
    Posts,
    Videos
  },
  data() {
    return {
      loading: false,
      tabs: ["All", "Posts", "Videos"],
      selected: "All"
    };
  },
  computed: {
    meta() {
      const metaData = {
        title: "Craig Turner | Blog",
        description: "A blog about me",
        url: "https://www.craigturner.me",
        mainImage:
          "https://res.cloudinary.com/kejk/image/upload/v1611777093/Meta_Image_kequ00.png"
      };
      return getSiteMeta(metaData);
    },
    blogs() {
      let blogs = this.$store.getters.getBlog;
      let blogList = [];

      blogs.forEach(function(blog) {
        blogList.push(blog);
      });

      return { blogList: blogList };
    },
    head() {
      return {
        title: "Craig Turner | Blog",
        meta: [...this.meta],
        link: [{ rel: "canonical", href: "https://www.craigturner.me" }]
      };
    }
  }
};
</script>
