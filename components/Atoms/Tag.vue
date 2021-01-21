<template>
  <span
    class="flex w-max justify-center  rounded-full px-3 py-1 text-xs"
    :class="colorClasses"
  >
    <slot />
  </span>
</template>

<script>
export default {
  props: ["color"],
  computed: {
    colorClasses() {
      return {
        yellow:
          "text-yellow-700 dark:text-yellow-400 border-2 border-yellow-700 dark:border-yellow-400",
        purple:
          "text-purple-700 dark:text-purple-400 border-2 border-purple-700 dark:border-purple-400",
        red:
          "text-red-700 dark:text-red-400 border-2 border-red-700 dark:border-red-400",
        pink:
          "text-pink-700 dark:text-pink-400 border-2 border-pink-700 dark:border-pink-400",
        teal:
          "text-teal-700 dark:text-teal-400 border-2 border-teal-700 dark:border-teal-400",
        indigo:
          "text-indigo-700 dark:text-indigo-400 border-2 border-indigo-700 dark:border-indigo-400",
        blue:
          "text-blue-700 dark:text-blue-400 border-2 border-blue-700 dark:border-blue-400",
      }[this.color];
    },
  },
};
</script>
