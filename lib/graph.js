var utils = require('./utils.js');
var graph = {};

graph.UndirectedGraph = function(){
    this.graph = {};
}
graph.DirectedGraph = function(){
    this.graph = {};
}

graph.UndirectedGraph.prototype = {
    addVertex : utils.addVertex,
    addEdge : function(from, to){
        this.graph[from].push(to);
        this.graph[to].push(from);
    },
    hasEdgeBetween : utils.hasEdgeBetween
}

graph.DirectedGraph.prototype = {
    addVertex : utils.addVertex,
    addEdge : function(from, to){
        this.graph[from].push(to);
    },
    hasEdgeBetween : utils.hasEdgeBetween
}
module.exports = graph;
