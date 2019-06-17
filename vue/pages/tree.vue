<template>
    <div>
        деревья
		<div id="container">
            <div id="graph-container"></div>
        </div>
		<button @click="addNode">New Node</button>
    </div>
</template>

<script>
    module.exports = {
		name: "tree",
		data: function() {
			return {
				count: 0,
				s: null
			}
		},
		methods: {
			addNode() {
				this.s.graph.addNode({
					id: 'n' + this.count++,
					label: 'Node ' + this.count,
					x: this.count,
					y: 1,
					size: 5,
					color: '#123456'
				});
				this.s.graph.addEdge({
					id: 'e' + this.count,
					source: 'n' + (this.count - 2),
					target: 'n' + (this.count - 1),
					size: 2,
					color: 'orange'
				});
				this.s.refresh();
			}
		},
        mounted() {
			this.s = new sigma({
					graph: {
						nodes: [],
						edges: []
					},
					container: 'graph-container'
				})
			this.s.graph.addNode({
					id: 'n' + this.count++,
					label: 'Node ' + this.count,
					x: this.count,
					y: 1,
					size: 5,
					color: 'red'
				});
				
        }
    };
</script>

<style scoped>
#graph-container {
                top: 120px;
                bottom: 0;
                left: 0;
                right: 0;
                position: absolute;
              }
</style>