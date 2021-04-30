<template>
  <div class="page-search">
    <header class="p-4 pt-0">
      <SearchBar />
    </header>
    <main class="">
      <div class="sm-section-heading px-4">
        Explore categories
      </div>
      <FeedList class="grid-cols-2 md:grid-cols-3">
        <CategoryCard
          v-for="category in categories"
          :key="category.id"
          :name="category.name"
        />
      </FeedList>
    </main>
  </div>
</template>

<script>
import { AllCategoriesQuery } from '~/graphql/category/queries'

export default {
  layout: 'search',
  data () {
    return {
      categories: null
    }
  },
  apollo: {
    categories: {
      query: AllCategoriesQuery,
      update: data => data.allCategories
    }
  }
}
</script>

<style>

</style>
