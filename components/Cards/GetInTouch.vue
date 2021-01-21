<template>
  <div
    class="justify-center bg-white dark:bg-black sm:pt-0 border-2 border-gray-100 dark:border-gray-900 rounded-xl"
  >
    <div class="max-w-5xl mx-auto">
      <div class="overflow-hidden">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div
            class="p-6 sm:mr-2 bg-gray-100 dark:bg-gray-900 rounded-tl-lg rounded-tr-lg sm:rounded-tr-none sm:rounded-bl-lg"
          >
            <h1
              class="text-xl sm:text-2xl text-gray-800 dark:text-white font-bold tracking-tight"
            >
              Get in touch.
            </h1>
            <p
              class="text-medium text-lg sm:text-xl font-medium text-gray-500 dark:text-gray-400 mt-2"
            >
              Fill in the form to start a conversation
            </p>

            <div
              class="flex items-center mt-8 text-gray-600 dark:text-gray-400"
            >
              <check-icon size="1.5x" class="text-teal-500"></check-icon>
              <div class="ml-4 text-md font-medium w-100">Ask me anything</div>
            </div>
            <div
              class="flex items-center mt-4 text-gray-600 dark:text-gray-400"
            >
              <check-icon size="1.5x" class="text-teal-500"></check-icon>
              <div class="ml-4 text-md font-medium w-100">
                Enquire about design or development work
              </div>
            </div>
            <div
              class="flex items-center mt-4 text-gray-600 dark:text-gray-400"
            >
              <check-icon size="1.5x" class="text-teal-500"></check-icon>
              <div class="ml-4 text-md font-medium w-100">
                Ask a specific question about this site
              </div>
            </div>
            <div
              class="flex items-center mt-4 text-gray-600 dark:text-gray-400"
            >
              <check-icon size="1.5x" class="text-teal-500"></check-icon>
              <div class="ml-4 text-md font-medium w-100">
                Report an error/issue
              </div>
            </div>
          </div>

          <form
            class="p-6 flex flex-col justify-center"
            action="https://formcarry.com/s/mGfGBUrWtY"
            method="POST"
            accept-charset="UTF-8"
          >
            <div class="flex flex-col">
              <label for="name" class="font-medium text-black dark:text-white"
                >Name</label
              >
              <input
                type="name"
                name="name"
                id="name"
                placeholder="e.g. Arnold Schwarzenegger"
                class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-medium focus:border-teal-500 focus:border-4 focus:outline-none"
                required
              />
            </div>

            <div class="flex flex-col mt-2">
              <label for="email" class="font-medium text-black dark:text-white"
                >Email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                placeholder="e.g. arnold@schwarzenegger.com"
                class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-medium focus:border-teal-500 focus:border-4 focus:outline-none"
                required
              />
            </div>

            <div class="flex flex-col mt-2">
              <label
                for="message"
                class="font-medium text-black dark:text-white"
                >Your message</label
              >
              <textarea
                type="text"
                name="message"
                id="message"
                rows="4"
                placeholder="Ask me anything"
                class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-medium focus:border-teal-500 focus:border-4 focus:outline-none"
                required
              />
            </div>
            <input type="hidden" name="_gotcha" />

            <button
              id="submitbutton"
              type="submit"
              class="mt-8 md:w-32 bg-teal-500 hover:bg-teal-600 dark:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition ease-in-out duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CheckIcon } from "vue-feather-icons";

export default {
  name: "GetInTouch",
  components: {
    CheckIcon,
  },
};
</script>
