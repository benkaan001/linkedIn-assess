const data = [
  {
    id: 1,
    question:
      'Which operator returns true if the two compared values are not equal?',
    answers: [
      {
        text: '<>',
        correct: false,
      },
      {
        text: '!==',
        correct: true,
      },
      {
        text: '~',
        correct: false,
      },
      {
        text: '==!',
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question:
      'Which statement is the correct way to create a variable called rate and assign it the value 100?',
    answers: [
      {
        text: 'let rate = 100;',
        correct: true,
      },
      {
        text: 'let 100 = rate;',
        correct: false,
      },
      {
        text: '100 = let rate;',
        correct: false,
      },
      {
        text: 'rate = 100;',
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: 'Which statement creates a new Person object called “student”?',
    answers: [
      {
        text: 'var student = construct Person();',
        correct: false,
      },
      {
        text: 'var student = Person();',
        correct: false,
      },
      {
        text: 'var student = construct Person;',
        correct: false,
      },
      {
        text: 'var student = new Person();',
        correct: true,
      },
    ],
  },
  {
    id: 4,
    question: ' How does a function create a closure?',
    answers: [
      {
        text: 'It reloads the document whenever the value changes.',
        correct: false,
      },
      {
        text: 'It returns a reference to a variable in its parent scope.',
        correct: true,
      },
      {
        text: 'It completes execution without returning.',
        correct: false,
      },
      {
        text: 'It copies a local variable to the global scope.',
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: 'Which statement creates a new function called discountPrice?',
    answers: [
      {
        text: 'let discountPrice = function(price) { return price * 0.85; };',
        correct: true,
      },
      {
        text: 'let discountPrice(price) { return price * 0.85; };',
        correct: false,
      },
      {
        text: 'let function = discountPrice(price) { return price * 0.85; };',
        correct: false,
      },
      {
        text: 'discountPrice = function(price) { return price * 0.85; };',
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question:
      ' What is the result of running this statement? console.log(typeof(42));',
    answers: [
      {
        text: 'float',
        correct: false,
      },
      {
        text: 'value',
        correct: false,
      },
      {
        text: 'number',
        correct: true,
      },
      {
        text: 'integer',
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question:
      'Which property references the DOM object that dispatched an event?',
    answers: [
      {
        text: 'self',
        correct: false,
      },
      {
        text: 'object',
        correct: false,
      },
      {
        text: 'target',
        correct: true,
      },
      {
        text: 'source',
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question: 'Which method converts JSON data to a JavaScript object?',
    answers: [
      {
        text: 'JSON.fromString();',
        correct: false,
      },
      {
        text: 'JSON.parse()',
        correct: true,
      },
      {
        text: 'JSON.toObject()',
        correct: false,
      },
      {
        text: 'JSON.stringify()',
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question:
      ' Which Object method returns an iterable that can be used to iterate over the properties of an object?',
    answers: [
      {
        text: 'Object.get()',
        correct: false,
      },
      {
        text: 'Object.loop()',
        correct: false,
      },
      {
        text: 'Object.each()',
        correct: false,
      },
      {
        text: 'Object.keys()',
        correct: true,
      },
    ],
  },
  {
    id: 10,
    question:
      'After the following code, what is the value of a.length? var a = [‘dog’, ‘cat’, ‘hen’]; a[100] = ‘fox’;console.log(a.length);',
    answers: [
      {
        text: '101',
        correct: true,
      },
      {
        text: '3',
        correct: false,
      },
      {
        text: '4',
        correct: false,
      },
      {
        text: '100',
        correct: false,
      },
    ],
  },
  {
    id: 11,
    question: ' 0 && hi',
    answers: [
      {
        text: 'ReferenceError',
        correct: false,
      },
      {
        text: 'True',
        correct: false,
      },
      {
        text: '0',
        correct: true,
      },
      {
        text: 'false',
        correct: false,
      },
    ],
  },
  {
    id: 12,
    question: ' Which of the following is not a keyword in JavaScript',
    answers: [
      {
        text: 'this',
        correct: false,
      },
      {
        text: 'catch',
        correct: false,
      },
      {
        text: 'function',
        correct: false,
      },
      {
        text: 'array',
        correct: true,
      },
    ],
  },
  {
    id: 13,
    question:
      'Which variable is an implicit parameter for every function in JavaScript?',
    answers: [
      {
        text: 'Arguments',
        correct: true,
      },
      {
        text: 'args',
        correct: false,
      },
      {
        text: 'argsArray',
        correct: false,
      },
      {
        text: 'argumentsList',
        correct: false,
      },
    ],
  },
  {
    id: 14,
    question: 'What does the following expression evaluate to? [ ] == [ ];',
    answers: [
      {
        text: 'True',
        correct: false,
      },
      {
        text: 'undefined',
        correct: false,
      },
      {
        text: '[]',
        correct: false,
      },
      {
        text: 'False',
        correct: true,
      },
    ],
  },
  {
    id: 15,
    question: 'Which statement is true about Functional Programming?',
    answers: [
      {
        text: 'Every object in the program has to be a function.',
        correct: false,
      },
      {
        text: 'Code is grouped with the state it modifies.',
        correct: false,
      },
      {
        text: 'Date fields and methods are kept in units.',
        correct: false,
      },
      {
        text: 'Side effects are not allowed.',
        correct: true,
      },
    ],
  },
];

export default data;
