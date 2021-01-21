<template>
  <header class="pt-4 pb-4 max-w-xl mx-auto">
    <p class="text-xl text-center">
      <slot name="text" />
    </p>
    <div class="flex flex-col md:flex-row justify-center mt-6">
      <slot name="buttons" />
    </div>
  </header>
</template>
