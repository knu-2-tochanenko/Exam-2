<template>
    <div>
        <side-menu-container></side-menu-container>
    </div>
</template>

<script>
    module.exports = {
        name: "container",
        components: {
            'side-menu-container': httpVueLoader('../components/sidemenucontainer.vue')
        }
    };
</script>

<style scoped>
        
</style>