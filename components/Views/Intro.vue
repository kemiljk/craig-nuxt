<template>
  <div v-if="intro.metadata">
    <img
      :src="intro.metadata.hero.imgix_url"
      class="h-80 w-full md:w-80 mx-auto rounded-md object-cover"
    />
    <div class="max-w-3xl mx-auto">
      <header class="container pb-2 max-w-xl mx-auto">
        <h1 class="pt-16 pb-8 text-center">
          {{ intro.title }}
        </h1>
      </header>
      <header class="pb-4 max-w-xl mx-auto">
        <p class="text-xl text-center" v-html="intro.content" />
        <div class="flex flex-col md:flex-row justify-center mt-6">
          <div class="flex flex-col md:flex-row md:space-x-2 pt-4">
            <a href="https://www.facebook.com/craig.turner7">
              <Button color="lighterBlue" class="mt-2 md:mt-0">
                <template #icon>
                  <facebook-icon
                    size="1x"
                    class="inline-block mr-2 dark:text-white"
                  />
                </template>
                <template #label> Facebook </template>
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/craigturner7">
              <Button color="blue" class="mt-2 md:mt-0">
                <template #icon>
                  <linkedin-icon
                    size="1x"
                    class="inline-block mr-2 text-white"
                  />
                </template>
                <template #label> LinkedIn </template>
              </Button>
            </a>
            <a href="mailto:craig@confidotalent.com">
              <Button color="grey" class="mt-2 md:mt-0">
                <template #icon>
                  <mail-icon
                    size="1x"
                    class="inline-block mr-2 text-gray-800 dark:text-white"
                  />
                </template>
                <template #label> Email </template>
              </Button>
            </a>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
import {
  InfoIcon,
  LinkedinIcon,
  FacebookIcon,
  MailIcon,
} from "vue-feather-icons";

export default {
  name: "HomeBody",
  components: {
    InfoIcon,
    MailIcon,
    LinkedinIcon,
    FacebookIcon,
  },
  props: {
    intro: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
