<template>
  <div class="container pt-8 max-w-xl mx-auto text-center">
    <header>
      <h2 class="text-3xl">
        {{ about.title }}
      </h2>
    </header>
  <section v-html="about.content" class="text-black dark:text-gray-300" />
  </div>
</template>

<script>

export default {
  name: "AboutBody",
  props: {
    about: {
      type: Object,
      default: () => {}
    }
  },
};
</script>
