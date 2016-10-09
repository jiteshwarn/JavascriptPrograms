function quicksort(list) {
  if(list.length === 0) { return []; }
  
  var head = list[0],
      tail = list.slice().splice(1),
      elemsLess = tail.filter(function(elem) { return elem < head; }),
      elemsGreater = tail.filter(function(elem) { return elem >= head; });

  return quicksort(elemsLess).concat(head, quicksort(elemsGreater));
}
