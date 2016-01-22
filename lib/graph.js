var graph = {};
graph.UndirectedGraph = function(){
    this.graph = {};
}
graph.UndirectedGraph.prototype = {
    addVertex : function(vertex){
        this.graph[vertex] = [];
    },
    addEdge : function(from, to){
        this.graph[from].push(to);
        this.graph[to].push(from);
    },
    hasEdgeBetween : function(from, to){
        var oneWay = this.graph[from].indexOf(to) != -1;
        var otherWay = this.graph[to].indexOf(from) != -1;
        return oneWay && otherWay;
    }
}
module.exports = graph;
