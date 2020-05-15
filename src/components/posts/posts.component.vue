<template>
    <div class="ion-text-center ion-padding">
        {{type}} posts
    </div>
</template>

<script>
export default {
    name: 'PostsComponent',
    props: {
        type: String
    }
}
</script>

<style lang="sass" scoped>
</style>