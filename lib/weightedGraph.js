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
            cost : Infinity
        };
    },
    addEdge : function(edge){
        this.graph[edge.from].edges.push(edge);
    },
    shortestPath : function(from, to, visited, shortest_path){
        var visited = visited || [];
        var shortest_path = shortest_path || [];
        var currentEdge = ld.last(visited);
        var totalWeight;
        if(from == to)
            return visited || [];
        if(this.graph[from].cost === Infinity)
            this.graph[from].cost = 0;
        for(var index = 0; index < this.graph[from].edges.length; index++){
            currentEdge = this.graph[from].edges[index];
            totalWeight = this.graph[from].cost + currentEdge.weight;
            var targetNode =  this.graph[currentEdge.to];
            if(targetNode.cost > totalWeight)
                targetNode.cost = totalWeight;
            visited = this.shortestPath(currentEdge.to, to, visited.concat(currentEdge), shortest_path);
            if(totalWeight <= this.graph[to].cost)
                shortest_path = shortest_path.concat(visited);
        }
        return shortest_path;
    }
}

graphs.Edge = function(edge, from, to, weight){
    this.edge = edge;
    this.from = from;
    this.to = to;
    this.weight = weight;
}
