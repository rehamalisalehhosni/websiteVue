<template>
<header>
<h1 v-on:click='changeTitle'>{{title}}</h1>
<ul>
 <router-link to="/" exact>Home</router-link>
 <router-link to="/add" exact>add</router-link>
</ul>
</header>
</template>

<script>
import {bus} from '../main';
export default {
  props:{
    title:{
      type:String
    },
  },
  data () {
    return {
      text: 'Header'
    }
  },
  methods:{
    changeTitle:function(){
      this.title='change Title';
      bus.$emit('changeTitle','change Title');
    }
  }
}
</script>
<style scoped>
header{
  background:lightgreen;
  color:#222;
  padding:10px;
  width:100%;
  text-align:center;
}
h1{
  color:#222;
}

</style>
