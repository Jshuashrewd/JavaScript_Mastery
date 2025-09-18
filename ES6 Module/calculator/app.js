import { Calculator } from "./calculator.js";
import { updateDisplay } from "./ui.js";

const calc = new Calculator();

document.querySelectorAll('[data-num]').forEach(btn => {
    btn.addEventListener('click', () => {
        calc.appendValue(btn.getAttribute('data-num'));
        updateDisplay(calc.getValue());
    });
})

document.getElementById('clearBtn').addEventListener('click', () => {
    calc.clear();
    updateDisplay('');
});

document.getElementById('equalsBtn').addEventListener('click', () => {
    const result = calc.evaluate();
    updateDisplay(result);
    calc.current = result.toString();
});