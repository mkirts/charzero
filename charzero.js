function hasZero() {
  const list = [];
  return _.some(_.find(list, '0'));
}

console.log(hasZero(['foo', 'bar bar', 'baz baz 0']));
console.log(hasZero(['a', 'b', 'c', 'zero']));

function numMan() {
  return _.find(_.some('man'));
}

console.log(numMan(['I', 'was taught', 'a month ago']));
