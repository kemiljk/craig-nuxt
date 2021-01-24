<template>
  <NuxtLink :to="`/blogs/${blog.slug}`" class="cursor-pointer">
    <button
      class="bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 py-2 px-8 rounded-md text-left w-full focus:outline-none focus:ring-2 focus:ring-white transition ease-linear duration-200"
      v-if="blog.metadata"
    >
      <header class="flex items-top justify-between pt-4 pb-2">
        <h1 class="text-black dark:text-white text-lg font-bold">
          {{ blog.title }}
        </h1>
        <!-- <arrow-right-icon
          class="text-gray-700 dark:text-gray-300"
        ></arrow-right-icon> -->
      </header>
      <p class="text-gray-500 dark:text-gray-400 pt-0 font-medium">
        {{ blog.published_at | moment("from", "now") }}
      </p>
      <!-- <div class="flex space-x-2 pb-4">
        <Tag color="teal">
          {{ blog.metadata.tag }}
        </Tag>
      </div> -->
      <p class="text-gray-700 dark:text-gray-300 pt-2 pb-4 font-medium mb-0">
        {{ blog.metadata.snippet }}
      </p>
      <p class="font-medium text-blue-600 dark:text-blue-400">Read more</p>
    </button>
  </NuxtLink>
</template>

<script>
import { ArrowRightIcon } from "vue-feather-icons";

export default {
  name: "Blog",
  components: {
    ArrowRightIcon,
  },
  props: {
    blog: {
      type: Object,
      default: () => {
        "No posts are loaded";
      },
    },
  },
};
</script>
