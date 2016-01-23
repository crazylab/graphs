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
utils.size = function(){
    var count = 0;
    for(edge in this.graph){
        count += this.graph[edge].length;
    }
    return count;
}
module.exports = utils;
