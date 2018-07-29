

<template>

<div>
    <add-blog></add-blog>
    <show-blogs></show-blogs>
    <list-blog></list-blog>
</div>

</template>

<script>

import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue';
export default {
    components: {
        'add-blog': addBlog,
        'show-blogs': showBlogs,
        'list-blog': listBlogs,
    },
    data() {
        return {

        }
    }
}

</script>
