<template>
    <NuxtLink :to="linkLocation"
        class="flex flex-row justify-start w-max mt-4 text-black hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-50 dark:bg-gray-900 dark:text-white rounded-xl px-4 py-2"
      >
        <slot></slot>
        <arrow-right-icon
          class="text-gray-700 dark:text-gray-300 ml-2"
        ></arrow-right-icon>
      </NuxtLink>
</template>

<script>
import { ArrowRightIcon } from "vue-feather-icons";

export default {
props: ['link'],
components: {
    ArrowRightIcon,
  },
  computed: {
    linkLocation() {
      return {
      home: "/",
      about: "/about",
      thoughts: "/thoughts",
      uses: "/uses",
      }[this.link]
    },
  },
};
</script>