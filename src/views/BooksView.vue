<template>
  <div class="container-xxl">
    <div class="row">
      <div class="col new-book-box d-flex flex-column align-items-md-center">
        <h1>Add new Book</h1>
        <form action="" class="d-flex flex-column justify-content-center p-5 position-relative">
          <div class="form d-flex flex-column position-relative w-100">
            <input type="text" name="fTitle" id="fTitle" class="py-1" required v-model="title">
            <label for="fTitle" class="position-absolute fw-semibold">Book Title</label>
          </div>
          <div class="form d-flex flex-column position-relative w-100">
            <input type="text" name="fAuthor" id="fAuthor" class="py-1" required v-model="author">
            <label for="fTitle" class="position-absolute fw-semibold">Book Author</label>
          </div>
          <div class="form d-flex flex-column position-relative w-100">
            <input type="text" name="fDesc" id="fDesc" class="py-1" required v-model="desc">
            <label for="fDesc" class="position-absolute fw-semibold">Book Author</label>
          </div>
          <button class="btn btn-primary" @click="addNewBook($event)">Submit your Book</button>
        </form>
      </div>
      <div class="col">
        <h1>Our Books</h1>
        <div class="row">
          <div class="col">
            <div class="row row-cols-3">
              <div @click="open($event)" v-for="(book) in books" :key="book.id">
                <gt-book-card type="button" :book="book" ></gt-book-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gtBookCard from "@/components/books/gt-BookCard";

export default {
  name: "BooksView",
  components: {
    gtBookCard,
  },
  data() {
    return {
      title: "",
      author: "",
      desc: "",
      clicked: [],
      books: []
    };
  },
  methods: {
    addNewBook(e) {
      e.preventDefault();
      let book = {
        id : this.books.length + 1,
        title: this.title,
        author: this.author,
        desc: this.desc,
      };
      this.books.push(book);
    },

    // addChild(e) {
    //   let push = true;
    //   if (this.clicked.length > 0) {
    //     this.clicked.forEach((el) => {
    //       if(el === e.currentTarget) {
    //         e.currentTarget.style.zIndex = 0;
    //         this.clicked.splice(this.clicked.indexOf(el), 1);
    //         push = false;
    //       }
    //     });
    //   }
    //   if (push) {
    //     this.clicked.push(e);
    //   }
    //   e.currentTarget.style.zIndex = this.clicked.length + 1;
    // },
  },

}
</script>

<style scoped>

form {
  background-color: #00154d;
  border-radius: 10px;
  width: 80%;
}

.form {

}

.form input {
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  background: transparent;
  outline: none;
}

.form input ~ label {
  top: 0;
  color: white;
  transition: .5s;
  pointer-events: none;
}

input:valid ~ label,
input:focus ~ label {
  top: -15px;
  left: 0;
  font-size: 12px;
  color: #03e9f4;
}

</style>