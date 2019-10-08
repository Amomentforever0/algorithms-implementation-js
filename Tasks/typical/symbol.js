class AlertService {
    constructor() {
        this[Symbol('length')] = 0;
        this.alerts = {};
    }

    addAlert(id, text) {
        this.alerts[id] = text;
    }

    removeAlert(id) {
        delete this.alerts[id];
    }
}

const alertService = new AlertService();

class MyComponent {
    constructor(identificator) {
        this[Symbol('length')] = 0;
        this.id = Symbol(identificator);
    }

    errorHandler(txt) {
        alertService.addAlert(this.id, txt);
        setTimeout(() => {
            alertService.removeAlert(this.id);
            console.log(this, 'Alert was removed');
        }, 2000);
    }
}

const list = new MyComponent('listComponent');
const list2 = new MyComponent('listComponent');
console.log(list);
console.log(Object.getOwnPropertySymbols(list));
list.errorHandler('Warning, we are in danger...');
list2.errorHandler('Warning, we are in danger...');
