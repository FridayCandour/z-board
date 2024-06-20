const s = `

project.version = 1.0.0;

project.info = {
name: "PayPaddy"
description: "fintech"
amount: 250
};
 
project.tasks = [
{
name: "design the pages skeleton"
}
];

`;

// this var hold unfinished chunk of data

class ara {
  unfinished_chuck = "";
  file: null;
  constructor() { }
  parse(input: string = "") {
    const breaks = input.replaceAll("\n", "").split("=").filter((line) => line.trim().length > 0);
    console.log({ breaks });
    const obj = {};
    let i = 0;

    // try {
    // } catch (error) {
    //   throw new Error(" unable parser [syntax error] where " + breaks[i]);
    // }
    return obj;
  }
  stringify(value: Record<string, unknown>, name: string,) {
  }
}

const Board = new ara();

const configs = Board.parse(s);

console.log(configs
);
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
