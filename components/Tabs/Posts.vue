<template>
  <div>
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
</template>

<script>
export default {
  name: "PostsTab",
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
};
</script>
