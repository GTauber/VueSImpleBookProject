<template>
  <div class="wraper">
    <div class="perspective-text">
      <div class="perspective-line">
        <p></p>
        <p>Books</p>
      </div>
      <div class="perspective-line">
        <p>Books</p>
        <p>For</p>
      </div>
      <div class="perspective-line">
        <p>For</p>
        <p>All</p>
      </div>
      <div class="perspective-line">
        <p>All</p>
        <p> Pirates </p>
      </div>
      <div class="perspective-line">
        <p> Pirates </p>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gt-HeaderTitle",

}
</script>

<style scoped>
.wraper {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.perspective-text {
  padding: 50px 200px 80px 50px;
  color: #000000;
  font-size: 58px;
  font-weight: 900;
  letter-spacing: -2px;
  text-transform: uppercase;
}

.perspective-line {
  height: 50px;
  overflow: hidden;
  position: relative;
}

p {
  padding: 0 20px;
  margin: 0;
  height: 50px;
  line-height: 50px;
  transition: all 0.5s ease-in-out;
}

.perspective-line:nth-child(odd) {
  transform: skew(60deg, -30deg) scaleY(0.667);
}

.perspective-line:nth-child(even) {
  transform: skew(0deg, -30deg) scaleY(1.337);
}

.perspective-text:hover p {
  transform: translate(0, -50px);
}

.perspective-line:nth-child(1) {
  left: 29px;
}

.perspective-line:nth-child(2) {
  left: 58px;
  background: #f07e6e;
}

.perspective-line:nth-child(3) {
  left: 87px;
  background: #84cdfa;
}

.perspective-line:nth-child(4) {
  left: 116px;
  background: #5ad1cd;
}

.perspective-line:nth-child(5) {
  left: 145px;
}

</style>