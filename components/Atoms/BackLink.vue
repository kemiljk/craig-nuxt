<template>
  <NuxtLink
    :to="backLink"
    class="text-gray-800 hover:text-black dark:hover:text-white dark:text-gray-400 py-4 transition ease-in-out duration-200"
  >
    <div class="flex items-center justify-between font-medium">
      <arrow-left-icon
        class="text-gray-700 dark:text-gray-300 mr-2"
      ></arrow-left-icon>
      <slot />
    </div>
  </NuxtLink>
</template>

<script>
import { ArrowLeftIcon } from "vue-feather-icons";

export default {
  props: ["link"],
  components: {
    ArrowLeftIcon,
  },
  computed: {
    backLink() {
      return {
        home: "/",
        about: "/about",
        blogs: "/blogs",
      }[this.link];
    },
  },
};
</script>