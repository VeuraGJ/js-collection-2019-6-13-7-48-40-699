'use strict';

function grouping_count(collection) {
  return collection.reduce(function(pre,cur){
    pre[cur] ? pre[cur]++ : pre[cur] = 1;
    return pre;
  },{});
}

module.exports = grouping_count;
