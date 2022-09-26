<template>
  <div class="card d-flex position-relative" @click="toggleMenu()" :class="{isOpen}">
    <div class="card-body">
      <h5 class="card-title">{{ book.title }}</h5>
      <p class="card-text">{{ book.desc }}</p>
      <gt-book-info v-show="isOpen"></gt-book-info>
    </div>
  </div>
</template>

<script>
import gtBookInfo from "@/components/books/gt-bookInfo";

export default {
  name: "gt-BookCard",
  components: {
    gtBookInfo,
  },
    data() {
      return {
        isOpen: false,
      }
    },
    props: {
      book: {
        required: true,
        type: Object,
      }
    },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
}
</script>

<style scoped>
.isOpen {
  background-color: lightgray;
  z-index: 1;
}
</style>