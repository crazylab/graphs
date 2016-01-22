var utils = {};

utils.addVertex = function(vertex){
    this.graph[vertex] = [];
}
utils.hasEdgeBetween = function(from, to){
    return  this.graph[from].indexOf(to) != -1;
}

module.exports = utils;
