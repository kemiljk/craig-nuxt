<template>
  <div class="mt-0 pt-4">
    <div class="flex flex-row text-left" v-if="blog">
      <div class="flex flex-col col-span-full md:col-span-6">
        <h1>
          {{ blog.title }}
        </h1>
        <p class=" text-gray-500 dark:text-gray-400 pt-2">
          Updated {{ blog.published_at | moment("from", "now") }}
        </p>
        <!-- <p
          class="w-max  text-teal-700 dark:text-teal-400 border-2 border-teal-700 dark:border-teal-400 rounded-full px-3 py-1 text-xs"
        >
          {{ blog.metadata.tag }}
        </p> -->
      </div>
    </div>
    <div class="flex flex-row px-lg-12 pt-4">
      <div class="flex flex-col col-span-full md:col-span-6">
        <section v-html="blog.content" class="text-black dark:text-gray-300" />
      </div>
    </div>
  </div>
</template>

<script>
import getSiteMeta from "~/utils/getSiteMeta.js";

export default {
  name: "Blog",
  props: {
    blog: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    meta() {
      const metaData = {
        type: "blog",
        title: this.blog.title,
        description: this.blog.metadata.snippet,
        url: "https://craigturner.me/blogs/" + `${this.$route.params.id}`,
        mainImage: this.blog.metadata.hero.imgix_url,
      };
      return getSiteMeta(metaData);
    },
  },
  head() {
    return {
      title: this.blog.title,
      meta: [...this.meta],
      link: [
        {
          rel: "canonical",
          href: `https://kejk.tech/blogs/${this.$route.params.id}`,
        },
      ],
    };
  },
};
</script>
