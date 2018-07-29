<template>
    <div id="show" >
      <h2>All blog Articles</h2>
      <input type="text" v-model='search' placeholder="search" />
      <div v-for="blog in filterBlogs" class="single-blog" v-theme:column="'wide'">
          <router-link v-bind:to="'/blog/'+blog.id"><h2 v-rainbow>{{blog.title|toUpperCase}}</h2></router-link>
          <p>{{blog.body | snippt}}</p>
      </div>
    </div>
</template>
<script>
import searchMixins from '../mixins/searchMixins';

export default {
    components: {
    },
    data() {
        return {
            blogs:[],
            search:''
        }
    },
    methods:{
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
            console.log(data);
            this.blogs=data.body.slice(0,10);
        });
    },
    computed:{
      /*  filterBlogs:function(){
           return this.blogs.filter((blog)=>{
               return blog.title.match(this.search);
           })
        }*/
    },
    filters:{
        'toUpperCase':function(value){
            return value.toUpperCase()
        }
    },
    directives:{
        'rainbow':{
            bind(el,binding,vnode){
                el.style.color='#fff';
            }
        }
    },
    mixins:[searchMixins]
}

</script>
