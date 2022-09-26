<template>
<div class="input-border">
  <input type="text" placeholder="Search your book here" class="form-control">
  <a href=""><i class="fa-sharp fa-solid fa-magnifying-glass"></i></a>
</div>
</template>

<script>
export default {
  name: "gt-HomeSearch"
}
</script>

<style scoped>
.input-border {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 5px;
  margin-top: 20px;
  width: 80%;
}
input {
  border: none;
  padding: 10px;
}

 .form-control:focus {

   box-shadow: none;
}

.fa-sharp {
  font-size: 2rem;
}

span {
  border-radius: 10px;
}
</style>