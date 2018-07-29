<template>
    <div id="add-blog">
        <h1>Add new Blog</h1>
        <form v-if='!submitted'>
            <label>Title</label>
            <input type='text' name='title' v-model.lazy="blog.title"/>
            <label>Content</label>
            <textarea v-model.lazy="blog.content"></textarea>
             <div id="checkboxs">
              <label>Ninga</label>
              <input type="checkbox"value="Ninga" v-model="blog.categories" />
              <label>Ninga1</label>
              <input type="checkbox" value="Ninga1" v-model="blog.categories"/>
              <label>Ninga3</label>
              <input type="checkbox" value="Ninga3" v-model="blog.categories"/>
              <label>Ninga4</label>
              <input type="checkbox" value="Ninga4" v-model="blog.categories"/>
            </div>
            <p>Author</p>
            <select v-model="blog.author">
                 <option v-for="author in authors">{{author}}</option>
            </select>
            <button v-on:click.prevent='post'>Add Blog</button>
        </form>
        <div v-if="submitted">
            <h3>thanks</h3>
        </div>
        <div id="preview">
            <p>Blog Title</p>
            <div>{{blog.title}}</div>
            <p>Blog Content</p>
            <div>{{blog.content}}</div>
            <p>Blog Categories</p>
            <ul>
                <li v-for="category in blog.categories">{{category}}</li>
            </ul>
            <p>Blog Author</p>
            <div>{{blog.author}}</div>

        </div>
    </div>
</template>
<script>
export default {
    components: {
    },
    data() {
        return {
           blog:{
               id:1,
               title:'',
               content:'',
               categories:[],
               author:''
           },
           authors:['name1','name2','name3'],
           submitted:false
        }
    },
    methods:{
        post:function(){
            this.$http.post('https://fir-aebcb.firebaseio.com/posts.json',this.blog).then(
                function(data){
                    console.log(data);
                    this.submitted=true;
                }
            );
        }
    /*    post:function(){
            this.$http.post('https://fir-aebcb.firebaseio.com/posts.json',{
                title:this.blog.title,
                body:this.blog.content,
            }).then(
                function(data){
                    console.log(data);
                    this.submitted=true;
                }
            );
        }*/
    }
}

</script>
