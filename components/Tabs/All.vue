<template>
  <div>
    <header>
      <h2
        class="inline-block pt-4 border-b-2 border-gray-100 dark:border-gray-800 max-w-max"
      >
        Posts.
      </h2>
    </header>
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
    <Divider class="mt-10" />
    <div>
      <header>
        <h2
          class="inline-block border-b-2 border-gray-100 dark:border-gray-800 max-w-max"
        >
          Videos.
        </h2>
      </header>
      <div class="grid grid-row xs:grid-cols-1 sm:grid-cols-2 gap-8">
        <div v-for="video in videos" :key="video._id">
          <keep-alive>
            <VideoCard :video="video" />
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cosmic from "cosmicjs";
const api = Cosmic();
const bucket = api.bucket({
  slug: "craig",
  read_key: "iHIswEFFeDTFbP1XKoLC3gEV2fCSXgtXPXzC9OQNStzwqX0FdM",
});

export default {
  name: "AllTab",
  props: ["selected"],
  computed: {
    blogs() {
      let blogs = this.$store.getters.getBlog;
      let blogList = [];

      blogs.forEach(function (blog) {
        blogList.push(blog);
      });

      return { blogList: blogList };
    },
  },
  data() {
    return {
      videos: {},
    };
  },
  created() {
    this.getVideosData();
  },
  methods: {
    async getVideosData() {
      this.loading = true;
      await bucket
        .getObjects({
          type: "videos",
          props: "_id,slug,title,content,metadata,created_at",
          sort: "-created_at",
        })
        .then((data) => {
          const videos = data.objects;
          this.loading = false;
          this.videos = videos;
        });
    },
  },
};
</script>
