<template>
  <div>
    <nav>
      <div class="right-items">
        <ul>
          <li class="icon-book"><router-link to="/"><i class="fa-solid fa-book-atlas"></i></router-link></li>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/Books">Books</router-link></li>
          <li><router-link to="/About">About Us</router-link></li>
        </ul>
      </div>
      <div class="left-items">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </nav>
    <div class="divisor"></div>
  </div>
</template>

<script>
export default {
  name: "gt-Header"
}
</script>

<style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    width: 95%;
    align-items: center;
    margin-bottom: 10px;
  }


  ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
  }

  li {
    width: 10vw;
    border-left: 1px solid gray;
  }

  .left-items:nth-child(n) {
    width: 10vw;
  }

  .fa-book-atlas {
    font-size: 2rem;
    color: #2c3e50;
  }

  .fa-magnifying-glass {
    font-size: 1.5rem;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  .left-items {
    border-left: 1px solid gray;
  }

  .icon-book {
    border-left: none;
  }

  .divisor {
    width: 95%;
    border-bottom: 1px solid gray;
    margin: 0 auto;
  }
</style>