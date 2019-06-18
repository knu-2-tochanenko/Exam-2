<template>
    <div>
		Generte array with size of <input v-model="hashsize" type="number">
        <button @click="initHash(hashsize)">Generate</button><br><br>
        <input v-model="hashvalue" type="number">
		<button @click="addKey(nodevalue)">Add</button>
		<button @click="findKey(nodevalue)">Find</button>

        <table ref="hashtable"></table>
    </div>
</template>

<script>
    module.exports = {
        name: "hash",
        data: function() {
            return {
                hashsize : "1",
                hashvalue : "1",
                cuckoo: null
            }
        },
        methods: {
            addKey(value) {

            },
            findKey(value) {

            },
            initHash(value) {
                let n = parseInt(hashsize);
                for (let i = 0; i < n; i++) {
                    
                }
            }
        }
    };
</script>

<style scoped>
    
</style>