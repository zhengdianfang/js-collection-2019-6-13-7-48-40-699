'use strict';

function grouping_count(collection) {
    return collection.reduce((prev, next) => {
      prev[`${next}`] = prev[`${next}`] + 1 || 1;
      return prev;
    }, {});

}

module.exports = grouping_count;
