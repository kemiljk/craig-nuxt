<template>
  <a :href="hobby.metadata.url" class="cursor-pointer">
    <button
      class="bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 p-4 rounded-md text-left w-full focus:outline-none focus:ring-2 focus:ring-white transition ease-linear duration-200"
      v-if="hobby.metadata"
    >
    <div class="flex items-center">
      <img :src="hobby.metadata.hero.imgix_url" class="w-24 h-24 mr-4 rounded">
        <div>
          <header>
            <h1 class="text-black dark:text-white text-lg pb-2 font-bold">
              {{ hobby.title }}
            </h1>
          </header>
          <!-- <p class="text-gray-500 dark:text-gray-400 pt-0 font-medium">
            {{ blog.published_at | moment("from", "now") }}
          </p> -->
          <!-- <div class="flex space-x-2 pb-4">
            <Tag color="teal">
              {{ blog.metadata.tag }}
            </Tag>
          </div> -->
          <span class="text-gray-700 dark:text-gray-300 text-sm">
            {{ hobby.metadata.snippet }}
          </span>
        </div>
      </div>
    </button>
  </a>
</template>

<script>
import { ArrowRightIcon } from "vue-feather-icons";

export default {
  name: "Blog",
  components: {
    ArrowRightIcon,
  },
  props: {
    hobby: {
      type: Object,
      default: () => {
        "No posts are loaded";
      },
    },
  },
};
</script>
