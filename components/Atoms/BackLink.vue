<template>
  <NuxtLink
    :to="backLink"
    class="text-black hover:bg-gray-50 dark:hover:bg-gray-900 dark:text-white border-2 border-gray-500 rounded-xl px-4 py-2 btn btn-primary transition ease-in-out duration-200"
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