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
    hasEdgeBetween : utils.hasEdgeBetween,
    order : utils.order,
    size : function(){
        var count = 0;
        for(edge in this.graph)
            count += this.graph[edge].length;
        return count/2;
    },
    pathBetween : function(from, to){
        var path = [from];
        for(index = 0; index < this.graph[from].length; index++){
            if(this.graph[from].indexOf(to) != -1){
                path.push(to);
                return path;
            }
            if(this.graph[this.graph[from][index]].indexOf(from) == -1){
                var visiting = this.pathBetween(this.graph[from][index], to);
                path = path.concat(visiting);
            }
            if(path[path.length - 1] == to)
                return path;
        }
        return [];
    }
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
    pathBetween : function(from, to, path){
        var path = [from];
        for(index = 0; index < this.graph[from].length; index++){
            if(this.graph[from].indexOf(to) != -1){
                path.push(to);
                return path;
            }
            if(this.graph[this.graph[from][index]].indexOf(from) == -1){
                var visiting = this.pathBetween(this.graph[from][index], to);
                path = path.concat(visiting);
            }
            if(path[path.length - 1] == to)
                return path;
        }
        return [];
    }
}
module.exports = graph;
