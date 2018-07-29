<template>
<div>
<ul>
<li v-for='d in data' v-on:click="d.show=!d.show" >
<h1>{{d.name}}</h1>
<h3 v-show='d.show'>{{d.job}}</h3>
</li>
</ul>
<input type='button' v-on:click='deleteItem' value="Delete ">
</div>
</template>

<script>
export default {
  props:['data'],
  data () {
    return {

    }
  },
  methods:{
    deleteItem:function(){
      this.data.pop();

    }
  },
  //Before created
  beforeeCreate(){
//    alert('before Create');
  },
  created(){
//   alert('Created');
  },
  beforeMount(){
  // alert('beforeMount');
  },
  beforeMount(){
//   alert('Mounted');
  },
  beforeUpdate(){
//   alert('beforeUpdate');
  },
  updated(){
  // alert('Updated');
  },
}
</script>
<style scoped>
h1{
  color:#000;

}
h3{
  color:red;
}

</style>
