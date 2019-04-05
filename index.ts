// Null
let a: null = null;

// String
let b: string = 'Hi Hax0r';

// Object
let c: object = {};

// Number
let d: number = 1 || 0b111001 || 0o436 || 0xadf0d;

// Undefined
let e: undefined;

// Boolean
let f: boolean | Boolean = true || false;

// Array
let g: Array<string> | string[] = [] || [b];

// Function
let h: Function | (void) = (): void => {};

// Tuple
let i: [string, number] = ['Hax0r', 24];


// Never
let j: Function = (): never => {
  while(true) {
    console.log(Date.toString());
  }
};

// Enum
enum PaymentFlag {
  Fail,
  InProgress,
  Success
}
let k: PaymentFlag = PaymentFlag.Success;

// Void
let l: void = undefined;

// Custom
type response = {
  statusCode: number;
  body: string;
};

let m: response = {
  statusCode: 200,
  body: ''
};

(): response => {
  return {
    statusCode: 200,
    body: ''
  }
};

// Any
let o: any = a || b || c || d || e || f || g || h || i;

console.log('o', o);
