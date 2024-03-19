<script>
export default{
    props:[
        "person"
    ]
}
</script>

<template>
    <div class="textShow">
        {{ this.person }}
    </div>
</template>

<style lang="scss" scoped>
.textShow{
    width: 600px;
    height: 600px;
    border: 1px solid #000000;
}
</style>