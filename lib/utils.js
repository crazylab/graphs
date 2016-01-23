var utils = {};

utils.addVertex = function(vertex){
    this.graph[vertex] = [];
}
utils.hasEdgeBetween = function(from, to){
    return  this.graph[from].indexOf(to) != -1;
}
utils.order = function(){
    return Object.keys(this.graph).length;
}

module.exports = utils;
