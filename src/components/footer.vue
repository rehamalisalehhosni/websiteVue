<template>
  <footer>
      <h1>{{text}} {{title}}</h1>
  </footer>
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
      text: 'footer'
    }
  },
  created(){
    bus.$on('changeTitle',(data)=>{
      this.title=data;
    });
  }
}
</script>
<style scoped>
footer{
  background:#222;
  color:#222;
  padding:10px;
  width:100%;
  text-align:center;
}
h1{
  color:lightgreen;
}

</style>
