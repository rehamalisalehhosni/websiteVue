<template>
<div>
  <app-header></app-header>
  <router-view></router-view>
<!--<hr/>
<app-header v-bind:title='title' ></app-header>
<app-content v-bind:data='data'></app-content>
<hr/>
<form-helper>
  <h1 slot="title">{{title}}</h1>
  <p slot="paragraph">Iam use Tags yarab  arhmni we sa3dnii </p>
  <div slot="form-header">
     <h1> form title</h1>
     <p> form description</p>
   </div>
  <div slot="form-fields">
   <input type='text' name="name" placeholder="Name" />
   <input type='password' name="password" placeholder="Password" />
   </div>
  <div slot="form-controls">
    <button v-on:click="" >Submit</button>
   </div>
</form-helper>
<hr/>
<keep-alive>
<component v-bind:is='component' ></component>
</keep-alive>
<button v-on:click="component='form1'">show form 1</button>
<button v-on:click="component='form2'">show form 2</button>

--></div>

</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Content from './components/content.vue'
import formHelper from './components/formHelper.vue'
import form1 from './components/form1.vue'
import form2 from './components/form2.vue'

export default {
  components: {
    'form1':form1,
    'form2':form2,
    'form-helper':formHelper,
    'app-header':Header,
    'app-footer':Footer,
    'app-content':Content,
  },
  data () {
    return {
      data: [
        {name:'rehma',job:'dev',show:false},
        {name:'rehma2',job:'dev2',show:false},
        {name:'rehma3',job:'dev3',show:false},
        {name:'rehma4',job:'dev4',show:false},
        {name:'rehma5',job:'dev5',show:false},
        {name:'rehma6',job:'dev6',show:false},
        {name:'rehma7',job:'dev7',show:false},
      ],
      title:'Iam use Tagsssssss',
      component:'form1'
    }
  }
}
</script>
<style scoped>
  h1{
    color:purple;
  }

</style>
