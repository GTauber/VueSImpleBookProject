<template>

    <div class="row">
      <div class="col d-flex flex-column align-items-md-center justify-content-around">
        <gt-header-title class="headerEffect"></gt-header-title>
        <gt-home-search></gt-home-search>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut delectus est facere laudantium, sunt unde.
          Accusamus aliquam aliquid, dignissimos ex illo, impedit laudantium natus numquam odit perferendis reprehenderit,
          sunt.
        </h4>
      </div>
      <div class="col d-flex flex-column align-items-md-center gy-2 justify-content-center">
        <div class="pirate">
<!--          <img src="./../assets/pirates.png" alt="" class="pirate " >-->
        </div>
      </div>
    </div>
</template>

<script>
import gtHeaderTitle from "@/components/gt-HeaderTitle";
import gtHomeSearch from "@/components/gt-HomeSearch";
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    gtHeaderTitle,
    gtHomeSearch,
  },
}
</script>

<style scoped>

.pirate {
  background-image: url(./../assets/pirates.png);
  background-size: 100%;
  background-repeat: no-repeat;
  box-shadow: 12px 12px 25px 0 white inset, -12px -12px 25px 0 white inset;
  min-height: 90vh;
  min-width: 85%;
  border-radius: 100px;
}

</style>
