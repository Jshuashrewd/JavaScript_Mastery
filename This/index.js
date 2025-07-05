//Constructor Function

function Counter (){
    this.count = 0;

    this.increment = function (){
        this.count++;
        console.log(`The value of Constructor increment count is: ${this.count}`);
        console.log(this)
    };

    this.decrement = function (){
        this.count--;
        console.log(`The value of Constructor decrement count is: ${this.count}`);
    };
}

const counter1 = new Counter();
counter1.increment();

const inc = counter1.increment;
inc(); // What happens?


counter1.decrement();



//Factory Function

function createCounter() {
    return {
        count: 0,
        increment() {
            this.count++;
            console.log(`The value of Factory increment count is: ${this.count}`);
        },
        decrement() {
            this.count--;
            console.log(`The value of Factory decrement count is: ${this.count}`);
        }
    };
}

const counter2 = createCounter();
counter2.increment();

const inc2 = counter2.increment;
inc2(); // What happens?


counter2.decrement();


//Callback Issue 

const user = {
    name: 'Joshua',
    greet(){
        console.log(`Hi my name is ${this.name}`);
    },
    delayedGreet(){
        setTimeout(() => {
            console.log(`Hi, I'm ${this.name} this is a delayed greeting`);
        }, 1000);//fix with .bind() or use an arrow function.
    }
};

user.greet();
user.delayedGreet();