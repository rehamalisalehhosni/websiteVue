<template>
<div>
<slot name="title"></slot>
<h1>Iam form helper</h1>
<slot name="paragraph"></slot>

<hr/>
<h1>Please fill Form</h1>
<div id="form-header">
  <slot name="form-header"></slot>
</div>
<div id="form-fields">
  <slot name="form-fields"></slot>
</div>
<div id="form-controls">
  <slot name="form-controls"></slot>
</div>
<div id="useful-links">
  <ul>
    <li><a href=''>Link</a></li>
    <li><a href=''>Link</a></li>
    <li><a href=''>Link</a></li>
    <li><a href=''>Link</a></li>
    <li><a href=''>Link</a></li>
  </ul>
</div>
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

},

}
</script>
<style scoped>
h1{
}

</style>
