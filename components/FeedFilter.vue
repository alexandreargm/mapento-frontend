<template>
  <div class="feed-filter">
    <div class="feed-filter__buttons flex overflow-x-auto px-4 pt-4 pb-1 space-x-2 -mb-2">
      <slot name="buttons" />
    </div>

    <div class="feed-filter__modals">
      <slot name="modals" />
    </div>
  </div>
</template>
