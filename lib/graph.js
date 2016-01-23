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
        this.graph[from] = this.graph[from] ? this.graph[from] : [];
        this.graph[to] = this.graph[to] ? this.graph[to] : [];

        this.graph[from].push(to);
        this.graph[to].push(from);
    },
    hasEdgeBetween : utils.hasEdgeBetween,
    order : utils.order,
    size : function(){
        var count = 0;
        for(edge in this.graph)
            count += this.graph[edge].length;
        return count/2;
    },
    pathBetween : utils.pathBetween,
    farthestVertex : utils.farthestVertex
}

graph.DirectedGraph.prototype = {
    addVertex : utils.addVertex,
    addEdge : function(from, to){
        this.graph[from].push(to);
    },
    hasEdgeBetween : utils.hasEdgeBetween,
    order : utils.order,
    size : function(){
        var count = 0;
        for(edge in this.graph)
            count += this.graph[edge].length;
        return count;
    },
    pathBetween : utils.pathBetween,
    farthestVertex : utils.farthestVertex
}
module.exports = graph;
