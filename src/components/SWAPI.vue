<template>
  <div class="products">
    <h3>Swapi <i v-on:click="playSound" class="fa fa-volume-up clickeable"></i></h3>

    <div class="card mt-5">
      <div class="card-header">
        <b>Planets</b>
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
            <tbody class="bdsp">
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
                <i v-on:click="getPlanets(planets.previous,'Prev')" class="fa fa-backward clickeable"><span> Prev</span> </i>
                <span> Next</span> <i v-on:click="getPlanets(planets.next,'Next')" class="fa fa-forward clickeable"></i>
                Showing page {{currentPage}}/{{totalPages}} on a total of {{planets.count}} records
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
      currentPage:1,
      totalPages: 1,
      rowsPerPage: 10,
      audio:{}
    }
  },
  created() {
    this.getPlanets(process.env.ROOT_API)
    this.audio = new Audio(process.env.AUDIO_PATH)
  },
  computed:{
  },
  methods: {
    getPlanets(url,pagination) {
      if(url){
        axios
        .get(url)
        .then(planets => {
          this.planets = planets.data
          this.totalPages = this.planets.count / this.rowsPerPage
        })
        if(pagination === 'Next'){
          this.currentPage ++
        }
        else if(pagination === 'Prev'){
          this.currentPage --
        }
      }
    },
    playSound(){
      this.audio.paused ? this.audio.play() : this.audio.pause()
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
