const s = `
project info {
name: "PayPaddy"
description: "fintech"
amount: 250
}

task.prototype {
title: ""
description: "money"
status: "not stated"
source: "derek"
days: 3
for: "friday"
create date: "02-08-2023"
deadline: "25-8-2023"
isInprogress: true
}

task {
design the pages skeleton
}

task {
design the page styling
}

task {
design the functionality
}

task {
integrate api
} 

task {  
 test and wait
}

`;

// this var hold unfinished chunk of data

class Z_BOARD {
  unfinished_chuck = "";
  file: null;
  constructor() {}
  read(input: string) {
    const lines = input.split("\n").filter((line) => line.trim().length > 0);
    const obj = {};
    let currentKey = "";
    let currentPrototype = {};
    let currentPrototypeKeys: string[] = [];
    let PrototypeKeyIndex = 0;
    let PrototypeIndex = 0;
    let isPrototype = false;
    let i = 0;
    try {
      for (; i < lines.length; i++) {
        const line = lines[i].trim();
        // if (line.startsWith("#")) {
        //   continue;
        // } else {
        if (line.endsWith("{")) {
          // prototype
          if (line.includes(".prototype")) {
            currentKey = line.split(".prototype")[0];
            obj[currentKey] = [];
            currentPrototype = {};
            PrototypeIndex = 0;
            isPrototype = true;
          } else {
            // not a prototype
            isPrototype = false;
            currentKey = line.slice(0, -1).trim();
            if (!obj[currentKey]) {
              obj[currentKey] = {};
              PrototypeIndex = 0;
            } else {
              if (Array.isArray(obj[currentKey])) {
                PrototypeIndex += 1;
                obj[currentKey].push(currentPrototype);
              }
            }
          }
          //
        } else if (line.endsWith("}")) {
          currentKey = "";
          PrototypeKeyIndex = 0;
          isPrototype = false;
        } else {
          const [key, value] = line.split(":").map((part) => part.trim());
          if (isPrototype && key) {
            currentPrototype[key] = isNaN(value as unknown as number)
              ? JSON.parse(value)
              : Number(value);
            currentPrototypeKeys = Object.keys(currentPrototype);
          } else {
            if (currentKey && key && value) {
              obj[currentKey][key] = isNaN(value as unknown as number)
                ? JSON.parse(value)
                : Number(value);
            } else {
              if (currentKey) {
                obj[currentKey][PrototypeIndex - 1][
                  currentPrototypeKeys[PrototypeKeyIndex]
                ] = line.trim();
                PrototypeKeyIndex += 1;
              }
            }
          }
        }
      }
      // }
    } catch (error) {
      console.error(lines[i]);
      throw new Error(" unable parser syntax error at line " + i);
    }
    return obj;
  }
  save() {}
  // add(value: Record<string, unknown> | string) {}
  // parse(value: string) {}
  // stringify(value: Record<string, unknown>) {}
  // compress() {}
  expand() {}
}

const Zboard = new Z_BOARD();

const configs = Zboard.read(s);

console.log(configs);
