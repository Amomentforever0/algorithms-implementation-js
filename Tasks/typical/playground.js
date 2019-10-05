(() => {
    let aliveEntity = {
        alive: true,
        set fullName(name) {
            this.name = name;
        },

        get fullName() {
            return this.name;
        }
    };

    let animal = {
        eats: true,
    };

    let rabbit = {
        jumps: true,
    };

    animal.__proto__ = aliveEntity;
    rabbit.__proto__ = animal;

    console.log(rabbit.eats);
    console.log(rabbit.__proto__);
    console.log(aliveEntity.__proto__);

    console.log(Object.getPrototypeOf(animal));

    for(let key in rabbit) {
        if(rabbit.hasOwnProperty(key)) {
            console.log(key);
        }
    }

    console.log(rabbit.prototype);

    function Rabbit(name) {
        this.name = name;
    }

    Rabbit.prototype = animal;

    const rabbbit = new Rabbit('Arkadiy');

    console.log(rabbbit.__proto__);

    console.log(Array.prototype);

    if(!Function.prototype.defer) {
        Object.defineProperty(Function.prototype, 'defer', {
            value: function(ms) {
                return (str) => {
                    setTimeout(() => {
                        this(str);
                    }, ms);
                };
            }
        });
    }

    function hello(str = 'fines') {
        console.log(str);
    };

    hello.defer(500)('Hello');

    const deepClone = Object.create(Object.getPrototypeOf(rabbit), Object.getOwnPropertyDescriptors(rabbit));

    console.log(deepClone);


    class User {
        constructor(name, surname, age) {
            this.name = name;
            this.surname = surname;
            this.age = age;
        }

        get name() {
            return this._name;
        }

        set name(name) {
            this._name = name;
        }

        sayHello() {
            return `${this._name} says Hello!`;
        }

        run() {
            return 'run';
        }

        stop() {
            return 'stop';
        }
    }

    const user = new User('Shakhrat', 'Mikhalko', 25);

    console.log(user);
    console.log(user.sayHello());

    class Employee extends User {

        constructor(name, surname, age) {
            super(name, surname, age);
        }

        work() {
            return `${this._name} is doing work`;
        }

        stop() {
            super.stop();
        }

        run(){
            console.log('running');
            return this;
        }
    }

    const emp = new Employee('Alisher', 'Aubakirov', 27);
    console.log(emp.sayHello());


    class CoffeeMachine {        
        constructor(power) {
            this.power = power;
            console.log(`Создана кофеварка, ${power}`);
        }

        set power(power) {
            console.log('setter called');
            this._power = power;
        }

        get power() {
            return this._power;
        }
    }

    let coffeeMachine = new CoffeeMachine(50);
    coffeeMachine.power = 60;
    console.log(coffeeMachine.power);


    class EventMixin {
        on(eventName, handler) {
            if (!this._eventHandlers) {
                this._eventHandlers = {};
            }
            if (!this._eventHandlers[eventName]) {
                this._eventHandlers[eventName] = [];
            }
            this._eventHandlers[eventName].push(handler);
        }

        off(eventName, handler) {
            let handlers = this._eventHandlers && this._eventHandlers[eventName];
            if (!handlers) {
                return;
            }

            for(let i = 0; i<handlers.length; i++) {
                if (handlers[i] === handler) {
                    handlers[i].splice(i--, 1);
                }
            }
        }

        trigger(eventName, ...args) {
            if (!this._eventHandlers || !this._eventHandlers[eventName]) {
                return;
            }

            for(let i = 0; i<this._eventHandlers[eventName].length; i++) {
                this._eventHandlers[eventName][i](...args);
            }
        }
    };


    const subscribedGenerator = (sub) => {
        return class extends sub {}
    }


    class Menu extends EventMixin {
        choose(value) {
            this.trigger('select', value);
        }
    }

    let menu = new Menu();

    menu.on('select', (value) => {
        console.log(value);
    });

    menu.choose('Apples');


})();