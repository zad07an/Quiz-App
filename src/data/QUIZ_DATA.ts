export interface QuizDataProps {
  id: number;
  question: string;
  options: string[];
  answer: string;
  userAnswer?: string | undefined;
}

const QUIZ_DATA: QuizDataProps[] = [
  {
    id: 1,
    question: "Ով է ստեղծել JavaScript ծրագրավորման լեզուն?",
    options: ["Brendan Eich", "Guido van Rossum", "Bjarne Stroustrup", "James Gosling"],
    answer: "Brendan Eich"
  },
  {
    id: 2,
    question: "Որ թվականին է ստեղծվել JavaScript ծրագրավորման լեզուն?",
    options: ["1991", "1995", "1985", "2000"],
    answer: "1995"
  },
  {
    id: 3,
    question: 'JavaScript-ը "Ինտերպրետացվող" թե "Կոմպիլացվող" լեզու է?',
    options: ["Interpreted", "Compiled"],
    answer: "Interpreted"
  },
  {
    id: 4,
    question: "Ինչ է console-ը JavaScript-ում?",
    options: ["Object", "Function", "Keyword"],
    answer: "Object"
  },
  {
    id: 5,
    question: `Ինչ կտպի արդյունքում?
    let a = 5;
    let b = "7";
    let c = 10;
    console.log(a + b + c);`,
    options: ["22", "5710"],
    answer: "5710"
  },
  {
    id: 6,
    question: `Ինչ կտպի արդյունքում?
    console.log(Math.pow(3, 3));`,
    options: ["9", "27", "6"],
    answer: "27"
  },
  {
    id: 7,
    question: `Քանի անգամ կտպի "I love JavaScript!"?
    let i = 0;
    while (i < 10) {
      if (5 == "5") {
        i++;
      }
      console.log("I love JavaScript!");
    }`,
    options: ["Անվերջ", "10 անգամ", "Error", "Մեկ անգամ"],
    answer: "10 անգամ"
  },
  {
    id: 8,
    question: `Որ մեթոդն է վերադարձնում է առաջին ինդեքսը, որի դեպքում տվյալ տարրը կարելի է գտնել զանգվածում?`,
    options: ["indexOf()", "lastIndexOf()", "find()", "filter()"],
    answer: "indexOf()"
  },
  {
    id: 9,
    question: `Ինչ կտպի արդյունքում?
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evenNumbers = numbers.map((value) => value % 2 === 0);
    console.log(evenNumbers);`,
    options: [
      "[2, 4, 6, 8, 10]",
      "Error",
      "[false, true, false, true, false, true, false, true, false, true]",
      "[undefined, 2, undefined, 4, undefined, 6, undefined, 8, undefined, 10]"
    ],
    answer: "[false, true, false, true, false, true, false, true, false, true]"
  },
  {
    id: 10,
    question: `Ինչ կտպի արդյունքում?
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evenNumbers = numbers.forEach((value) => {
      if (value % 2 === 0) {
        return value;
      }
    });
    console.log(evenNumbers);`,
    options: [
      "[undefined, 2, undefined, 4, undefined, 6, undefined, 8, undefined, 10]",
      "[false, true, false, true, false, true, false, true, false, true]",
      "undefined",
      "[2, 4, 6, 8, 10]"
    ],
    answer: "undefined"
  }
];

export default QUIZ_DATA;
