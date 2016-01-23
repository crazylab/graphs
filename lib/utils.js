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
utils.pathBetween = function(from, to, visiting){
    var visiting = visiting || [from];
    if(visiting.indexOf(to) != -1)
        return visiting;
    for(index = 0; index < this.graph[from].length; index++){
        var vertex = this.graph[from][index];
        if(visiting.indexOf(vertex)==-1)
            var path = this.pathBetween(vertex, to, visiting.concat(vertex));
        if(path && path.indexOf(to) != -1)
        return path;
    }
    return [];
}
module.exports = utils;
