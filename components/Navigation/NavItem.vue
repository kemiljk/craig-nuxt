<template>
  <li class="flex space-x-4 m-0">
    <NuxtLink
      :to="`${to}`"
      :class="[
        'w-full flex items-center justify-center font-medium md:block px-4 py-2 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-900 transition ease-in-out duration-200 md:rounded',
        {
          'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-900 text-black dark:text-white transition ease-in-out duration-200 md:rounded': isActive,
        },
      ]"
    >
      <slot />
    </NuxtLink>
  </li>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    isActive: Boolean,
  },
};
</script>
