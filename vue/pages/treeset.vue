<template>
    <div class="tree-page">
        <canvas-panel></canvas-panel>
    </div>
</template>

<script>
    module.exports = {
        name: "tree-set",
        components: {
            'canvas-panel': httpVueLoader('../components/canvasPanel.vue')
        }
    }
</script>

<style scoped>
    .tree-page {
        position: absolute;
        height: calc(100% - 40px - 80px);
        width: calc(100% - 32px);
        margin: 0px 16px;
    }
</style>