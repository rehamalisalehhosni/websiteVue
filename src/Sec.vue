<template>
<div>
<h1>Rooooooooooot</h1>
<ul>
   <li v-for='d in data'>{{d}}</li>
</ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      data: ['reham','ali','sale']
    }
  }
}
</script>
<style scoped>
  h1{
    color:green;
  }

</style>
