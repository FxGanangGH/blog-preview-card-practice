<template>
  <div
    class="w-screen h-full min-h-screen flex items-center justify-center bg-banana-500 px-6"
  >
    <div
      class="relative w-full max-w-blog-card-mobile xl:max-w-blog-card-desktop max-h-blog-card-mobile xl:max-h-blog-card-desktop"
    >
      <div
        class="size-full bg-white rounded-card flex flex-col p-6 gap-y-6 border border-stone-950 z-10 relative"
      >
        <img class="rounded-article" src="/images/illustration-article.svg" />
        <div class="flex flex-col gap-y-3 w-full">
          <span
            class="flex items-center justify-center px-3 py-1 font-extrabold font-figtree text-xs xl:text-sm bg-banana-500 w-min rounded-learning text-bone-950"
          >
            Learning
          </span>
          <span class="font-figtree text-xs xl:text-sm text-bone-950">
            Published 21 Dec 2023
          </span>
          <h1 class="font-figtree font-extrabold text-xl xl:text-2xl text-bone-950">
            HTML & CSS foundations
          </h1>
          <p class="font-figtree text-sm xl:text-base text-bone-500">
            These languages are the backbone of every website, defining structure,
            content, and presentation.
          </p>
        </div>
        <div class="flex items-center w-full gap-x-3">
          <span class="size-8">
            <img src="/images/image-avatar.webp" />
          </span>
          <span class="font-figtree font-extrabold text-sm text-bone-950">
            Greg Hooper
          </span>
        </div>
      </div>
      <div
        class="absolute z-0 size-full bg-stone-950 rounded-card flex flex-col p-6 gap-y-6 border border-stone-950 inset-y-0 translate-x-3 translate-y-3"
      >
        <img class="rounded-article" src="/images/illustration-article.svg" />
        <div class="flex flex-col gap-y-3 w-full">
          <span
            class="flex items-center justify-center px-3 py-1 font-extrabold font-figtree text-xs xl:text-sm bg-banana-500 w-min rounded-learning text-bone-950"
          >
            Learning
          </span>
          <span class="font-figtree text-xs xl:text-sm text-bone-950"
            >Published 21 Dec 2023</span
          >
          <h1 class="font-figtree font-extrabold text-xl xl:text-2xl text-bone-950">
            HTML & CSS foundations
          </h1>
          <p class="font-figtree text-sm xl:text-base text-bone-500">
            These languages are the backbone of every website, defining structure,
            content, and presentation.
          </p>
        </div>
        <div class="flex items-center w-full gap-x-3">
          <span class="size-8">
            <img src="/images/image-avatar.webp" />
          </span>
          <span class="font-figtree font-extrabold text-sm text-bone-950"
            >Greg Hooper</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
