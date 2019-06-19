<template>
    <div>
        деревья
        <modal-window v-show="modalShow" @datapassed="passData"></modal-window>
    </div>
</template>

<script>
    module.exports = {
        name: "tree",
        data: function() {
            return {
                modalShow: false
            }
        },
        methods: {
            async passData(value) {
                // * Value has 4 fields which are accessable via value.param1 .. value.param4
                console.log(value);
                await new Promise(resolve => setTimeout(resolve, 1000));
                this.modalShow = false;
            }
        }
    }
</script>

<style scoped>

</style>