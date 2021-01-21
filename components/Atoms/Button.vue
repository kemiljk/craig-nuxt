<template>
  <button
    class="flex justify-center items-center text-center font-medium w-full rounded-lg px-6 py-3 transition duration-500 ease focus:outline-none focus:ring-2 focus:ring-white"
    :class="colorClasses"
  >
    <slot name="icon" />
    <slot name="label" />
  </button>
</template>

<script>
export default {
  props: ["color"],
  computed: {
    colorClasses() {
      return {
        red: "text-red-50 bg-red-500 hover:bg-red-600",
        blue: "bg-blue-500 text-white hover:bg-blue-600",
        purple: "bg-purple-900 hover:bg-purple-700 text-purple-100",
        teal: "text-teal-50 bg-teal-600 hover:bg-teal-700",
        grey:
          "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-white",
      }[this.color];
    },
  },
};
</script>
