<template>
    <div>
		<div id="container">
            <div id="graph-container"></div>
        </div>
		<input v-model="nodevalue" type="number">
		<button @click="addNode_begin(nodevalue)">Add to Begin</button>
		<button @click="addNode_end(nodevalue)">Add to End</button>
		<button @click="addNode_index(nodevalue)">Add after Index</button>
		<button @click="deleteNode(nodevalue)">Delete</button>
		<button @click="findNode(nodevalue)">Find</button>
		<button @click="changeNode(nodevalue)" disabled>Change</button>

		<modal-window v-show="modalShow" @datapassed="passData"></modal-window>
    </div>
</template>

<script>
    module.exports = {
		name: "list-container",
		data: function() {
			return {
				nodesCount: 0,
				edgesCount: 0,
				s: null,
				nodevalue: "1",
      			listView: null,
                modalShow: false,
				param1: "",
				param2: "",
				param3: "",
				param4: "",
				key: 0,
				afterkey: 1,
				type: 0
			}
		},
		methods: {
			passData(value) {
				this.param1 = value.param1;
				this.param2 = value.param2;
				this.param3 = value.param3;
				this.param4 = value.param4;
				this.modalShow = false;
			},
			addNode_begin(key) {
				this.type = 1;
				this.key = key;
				this.modalShow = true;
				this.checkFlag();
			},
			addNode_end(key) {
				this.type = 2;
				this.key = key;
				this.modalShow = true;
				this.checkFlag();
			},
			addNode_index(key) {
				let afterValue = prompt("After key:", 1);
				this.type = 3;
				this.key = key;
				this.afterkey = afterValue;
				this.modalShow = true;
				this.checkFlag();
			},
			async addNode_index(value) {
				let afterValue = prompt("After value:", 1);
				let result = this.listView.addNode_after(value, afterValue);
				let index = this.listView.searchNode(afterValue);
				if (index != undefined && index != -1) {
					await this.findNode(afterValue);
					this.generateFromArray(result);
				}
			},
			async deleteNode(value) {
				let index = this.listView.searchNode(value);
				if (index != undefined && index != -1) {
					this.s.graph.nodes()[index].color = '#ff0000';
					this.s.refresh();
					await new Promise(resolve => setTimeout(resolve, 2500));
					this.generateFromArray(this.listView.deleteNode(value));
				}
			},
			addNode(key, value) {
			this.s.graph.addNode({
					id: "n" + this.nodesCount++,
					label:
					key +
					"\n" +
					value.param1 +
					" " +
					value.param2 +
					" " +
					value.param3 +
					" " +
					value.param4,
					x: this.nodesCount,
					y: 1,
					size: 10,
					color: "#D500F9"
				});
				if (this.nodesCount > 1) {
					this.s.graph.addEdge({
					id: "e" + this.edgesCount++,
					source: "n" + (this.nodesCount - 2),
					target: "n" + (this.nodesCount - 1),
					size: 2,
					color: "#AA00FF"
					});
				}
				this.s.refresh();
			},
			checkFlag() {
				if (this.modalShow == true) {
					window.setTimeout(
					this.checkFlag,
					100
					); /* this checks the flag every 100 milliseconds*/
				} else {
					let value = {
						param1: this.param1,
						param2: this.param2,
						param3: this.param3,
						param4: this.param4
					};
					switch (this.type) {
					case 1:
						this.generateFromArray(
						t	his.listView.addNode_begin(this.key, value)
						);
						break;
					case 2:
						this.generateFromArray(this.listView.addNode_end(this.key, value));
						break;
					case 3:
						console.log(typeof this.afterkey);
						let result = this.listView.addNode_after(
							this.key,
							value,
							this.afterkey
						);
						let index = this.listView.searchNode(this.afterkey);
						if (index != undefined && index != -1) {
							this.findNode(this.afterkey);
							this.generateFromArray(result);
						}
						break;
					}
					this.refresh();
				}
			},
			async findNode(value) {
				let index = this.listView.searchNode(value);
				if (index != undefined && index != -1) {
					this.s.graph.nodes()[index].color = '#00E676'
					this.s.refresh();
					await new Promise(resolve => setTimeout(resolve, 1000));
					this.s.graph.nodes()[index].color = '#D500F9'
					this.s.refresh();
				}
			},
			changeNode(value) {
				let newValue = parseInt(prompt("Enter new value", 1));
			},
			generateFromArray(array) {
				this.s.kill();
				this.s = new sigma({
					graph: {
					nodes: [],
					edges: []
					},
					container: "graph-container"
				});
				this.nodesCount = 0;
				this.edgesCount = 0;
				if (array.length > 0) {
					let tmp = "n" + this.nodesCount++;
					this.s.graph.addNode({
					id: tmp,
					label:
						array[0].key +
						"\n" +
						array[0].value.param1 +
						" " +
						array[0].value.param2 +
						" " +
						array[0].value.param3 +
						" " +
						array[0].value.param4,
					x: this.nodesCount,
					y: 1,
					size: 10,
					color: "#D500F9"
					});
					this.s.refresh();
				}
				for (let i = 1; i < array.length; i++) {
					this.addNode(array[i].key, array[i].value);
				}
			},
			refresh() {
				this.param1 = "";
				this.param2 = "";
				this.param3 = "";
				this.param4 = "";
				this.key = 0;
				this.afterkey=0;
				this.type=0;
			}
		},
        mounted() {
			this.listView = new ListView();
			this.s = new sigma({
				graph: {
					nodes: [],
					edges: []
				},
				container: 'graph-container'
			});
        },
        components: {
            'modal-window': httpVueLoader('../components/modalWindow.vue')
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