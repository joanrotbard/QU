<template>
  <div class="header">
    <nav class="navbar navbar-dark bg-darkgrey navbar-expand-lg">
      <div class="container">
      <img alt="Qu" data-src="https://www.qubeyond.com/wp-content/uploads/2018/07/Qu_logo_raster2x.png" class="hide-mobile-view light-logo lazyloaded" src="https://www.qubeyond.com/wp-content/uploads/2018/07/Qu_logo_raster2x.png">
		  <router-link class="navbar-brand" to="/">Star Wars Api</router-link>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>
		</div>
	</nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-brand {
  color: #a8ff60;
}
.hide-mobile-view{
  max-width: 100px !important;
}
.bg-darkgrey{
  background: #5d5f5e;
}
</style>
