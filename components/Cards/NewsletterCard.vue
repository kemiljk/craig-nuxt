<template>
  <a :href="newsletter.metadata.url" class="cursor-pointer">
    <button
      class="bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 p-4 rounded-md text-left w-full md:1/2 focus:outline-none focus:ring-2 focus:ring-white transition ease-linear duration-200"
      v-if="newsletter.metadata"
    >
    <div class="flex items-center">
      <img :src="newsletter.metadata.hero.imgix_url" class="w-24 h-24 mr-4 rounded">
        <div>
          <header>
            <file-text-icon size="1x" class="text-blue-600 dark:text-blue-400" />
            <h1 class="text-black dark:text-white text-lg py-2 font-bold">
              {{ newsletter.title }}
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
            {{ newsletter.metadata.author }}
          </span>
        </div>
      </div>
    </button>
  </a>
</template>

<script>
import { FileTextIcon } from 'vue-feather-icons'

export default {
  name: "Blog",
  components: {
    FileTextIcon,
  },
  props: {
    newsletter: {
      type: Object,
      default: () => {
        "No posts are loaded";
      },
    },
  },
};
</script>
