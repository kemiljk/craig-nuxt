<template>
  <div class="flex justify-center bg-gray-50 dark:bg-gray-900 rounded-md">
    <div class="max-w-5xl mx-auto py-8">
      <h1
        class="text-xl sm:text-2xl text-gray-800 dark:text-white font-bold pb-4"
      >
        Subscribe to stay up-to-date.
      </h1>
      <div class="flex flex-col md:flex-row">
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/REPLACE"
          method="post"
          target="popupwindow"
          onsubmit="window.open('https://buttondown.email/REPLACE', 'popupwindow')"
          class="embeddable-buttondown-form"
        >
          <div class="flex flex-col w-full md:w-max mt-4">
            <label
              for="bd-email"
              class="font-medium text-black dark:text-white pb-2"
              >Enter your email</label
            >
            <div class="flex flex-col md:flex-row md:space-x-2 w-full md:w-max">
              <input
                type="email"
                keyup.enter="submit"
                name="email"
                id="bd-email"
                placeholder="e.g. craig@iscool.com"
                class="py-3 px-3 w-full md:w-max rounded bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-medium focus:border-blue-500 focus:border-4 focus:outline-none"
                required
              />
              <input type="hidden" value="1" name="embed" />
              <Button type="submit" color="grey" class="mt-2 md:mt-0">
                <template #icon>
                  <mail-icon
                    size="1x"
                    class="inline-block mr-2 dark:text-white text-black"
                  />
                </template>
                <template #label> Subscribe for updates </template>
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { MailIcon } from "vue-feather-icons";

export default {
  components: {
    MailIcon,
  },
};
</script>
