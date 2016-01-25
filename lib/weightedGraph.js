var ld= require('lodash');

var graphs = {};
module.exports = graphs;

graphs.WeightedGraph = function(){
    this.graph = {}
}

graphs.WeightedGraph.prototype = {
    addVertex : function(vertex){
        this.graph[vertex] = {
            edges : [],
            weight : Infinity
        };
    },
    addEdge : function(edge){
        this.graph[edge.from].edges.push(edge);
    },
    shortestPath : function(from, to, visited){
        var visited = visited || [];
        if(!visited)
            this.graph[from].weight = 0;
        for(var index = 0; index < this.graph[from].edges.length; index++){
            var edge = this.graph[from].edges[index];
            if(to == edge.to)
                return visited.concat(edge);
            var totalWeight = this.graph[from].weight + edge.weight;
            if(this.graph[edge.to].weight > totalWeight){
                this.graph[edge.to].weight = totalWeight;
                visited = shortestPath(edge.to, to, visited.concat(edge));
            }
        }
        return visited;
    }
}

graphs.Edge = function(edge, from, to, weight){
    this.edge = edge;
    this.from = from;
    this.to = to;
    this.weight = weight;
}