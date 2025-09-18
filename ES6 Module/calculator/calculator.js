export class Calculator {
    constructor() {
        this.current = '';
    }

    appendValue(value) {
        this.current += value;
    }

    clear() {
        this.current = '';
    }

    evaluate() {
        try {
            return new Function(`return ${this.current}`)();
        } catch {
            return 'Error';
        }
    }

    getValue() {
        return this.current;
    }
}