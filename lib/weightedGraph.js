var ld= require('lodash');

var graphs = {};
module.exports = graphs;

graphs.WeightedGraph = function(){
    this.graph = {}
}

var getAllEdges = function(graph){
    var edges = [];
    for(vartex in graph)
        edges = edges.concat(graph[vartex]);
    return edges;
}
var setEachKey = function(graph, value){
    return ld.mapValues(graph, function(key){
        return key = value;
    });
};
var getLeastCostVartex = function(distances){
    var min = Infinity;
    var source;
    for(vartex in distances){
        if(distances[vartex] < min){
            min = distances[vartex];
            source = vartex;
        }
    }
    return source;
}
var updateCost = function(source, edges, distance, parent){
    for(var index = 0; index < edges.length; index++){
        var totalDistance = edges[index].weight + distance[source];
        var to = edges[index].to;
        if(totalDistance < distance[to]){
            distance[to] = totalDistance;
            parent[to] = edges[index];
        }
    }
}
graphs.WeightedGraph.prototype = {
    addVertex : function(vertex){
        this.graph[vertex] = [];
    },
    addEdge : function(edge){
        this.graph[edge.from].push(edge);
    },
    shortestPath : function(from, to){
        var parent = setEachKey(this.graph);
        var distance = setEachKey(this.graph, Infinity);
        distance[from] = 0;
        var edges = getAllEdges(this.graph);
        parent[from] = {from: from};
        while(edges.length != 0){
            var currentSource = getLeastCostVartex(distance);
            var currentEdges = this.graph[currentSource];
            updateCost(currentSource, currentEdges, distance, parent);
            edges = ld.differenceBy(edges, currentEdges, 'from');
            delete distance[currentSource];
        }
        var path = [];
        while(currentParent != from){
            path.unshift(parent[to]);
            var currentParent = parent[to].from;
            to = parent[currentParent].to;
        }
        return path;
    }
}

graphs.Edge = function(edge, from, to, weight){
    this.edge = edge;
    this.from = from;
    this.to = to;
    this.weight = weight;
}
