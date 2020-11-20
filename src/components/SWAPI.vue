<template>
  <div class="products">
    <h3>SWAPI <i v-on:click="playSound" class="fa fa-volume-up clickeable"></i></h3>

    <div class="card mt-5">
      <div class="card-header">
        Planets
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Rotation Period</th>
                <th>Orbital Period</th>
                <th>Diameter</th>
                <th>Climate</th>
                <th>Gravity</th>
                <th>Terrain</th>
                <th>Surface Water</th>
                <th>Population</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="planet in planets.results" v-bind:key="planet.name">
                <template>
                  <td>{{planet.name}}</td>
                  <td>{{planet.rotation_period}}</td>
                  <td>{{planet.orbital_period}}</td>
                  <td>{{planet.diameter}}</td>
                  <td>{{planet.climate}}</td>
                  <td>{{planet.gravity}}</td>
                  <td>{{planet.terrain}}</td>
                  <td>{{planet.surface_water}}</td>
                  <td>{{planet.population}}</td>
                </template>
              </tr>
            </tbody>
          </table>
          <div id="paginator">
                <i v-on:click="changePage(planets.previous)" class="fa fa-backward clickeable"></i>
                <i v-on:click="changePage(planets.next)" class="fa fa-forward clickeable"></i>
                Showing 10 of {{planets.count}} records
            </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Planets',
  data () {
    return {
      planets: [],
    }
  },
  created() {
    this.getPlanets()
  },
  computed:{
  },
  methods: {
    getPlanets() {
      axios
      .get('https://swapi.dev/api/planets/')
      .then(planets => (this.planets = planets.data))
    },
    changePage(url){
      if(url){
        axios
        .get(url)
        .then(planets => (this.planets = planets.data))
      }
    },
    playSound(){
      var audio = new Audio('https://archive.org/download/StarWarsThemeSongByJohnWilliams/Star Wars Theme Song By John Williams.mp3');
      audio.play();
    }
  }
}
</script>

<style scoped>
h3{
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
  color: #a8ff60;
}
.icon{
  margin-right: 10px;
}
.icon i,.clickeable{
  cursor: pointer;
}
#paginator{
  text-align: center;
  padding-right: 10px;
}

#paginator i{
  margin-right: 30px;
}
</style>
