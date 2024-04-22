function* range(start:number,end:number,step:number){
    let currentNumber = start;
    while (currentNumber<=end) {
      yield currentNumber;
      currentNumber=currentNumber+step
    }
}
for (const value of range(0, 10, 1)) {
    console.log(value)
	
}

console.log([...range(1, 10, 1)]);

const iterator = range(1, 10, 1);

console.log(iterator.next());