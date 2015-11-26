/**
 * 数组转对象 用来定义类型
 */
function createConstants(...constants) {
  return constants.reduce((acc, constant) => {
    acc[constant] = constant;
    return acc;
  }, {});
}

console.log(createConstants('A','B','C'));

// 结果 { A: 'A', B: 'B', C: 'C' }

const filter = data => {
  if (typeof(data) !== 'object') {
    return data;
  }
  if (!data) {
    return;
  }

  var proto = (data || {}).constructor.name;

  if (proto != 'Object') {
    data = {};
  }
  if (data.data) {
    data.data = filter(data.data);
  }

  return data;
};


var fn = filter(function () {
  console.log('function')
});

console.log(
  "filter('a') 结果",
  filter('a'),
  '\n',
  filter(),
  filter(['ab']),
  (function () {
    console.log('function')
  }),
  fn()


);

