export default class Calculator {
    constructor({screen, buttons, enableLog = false}) {
        if(screen === null || screen === undefined)
            throw '[Calculator] screen must be a dom element';

        if(!Array.isArray([...buttons]))
            throw '[Calculator] buttons must be an array of dom elements';

        this.screen = screen;
        this.buttons = buttons;
        this.enableLog = enableLog;

        this.screen.style.borderColor = 'black';

        this.buttons.forEach(elem => {
            const value = elem.getAttribute('data-value');

            if(value === null || value === undefined) {
                console.error('[Calculator]', elem, "Doesn't have a data-value attribute")
                throw '[Calculator] All buttons must have a data-value attribute';
            }
            elem.addEventListener('click', evt => this.handleValue(value));
        })
    }
    
    calculate() {
        try {
            this.screen.value = eval(this.screen.value);

            if(this.enableLog)
                console.log("Resultado: ", this.screen.value);
        } catch (err) {
            if(this.enableLog)
                console.error(err);
            this.screen.style.borderColor = 'red';
        }
    }

    write(value) {
        this.screen.value = this.screen.value + value;
    }

    clear() {
        this.screen.value = '';
        this.screen.style.borderColor = 'black';
    }

    delete(){
        this.screen.value = this.screen.value.substring(0,this.screen.value.length-1);
    }

    handleValue(value) {
        if(this.screen.style.borderColor == 'red' && value !== 'clear')
            return;
        
        if(this.enableLog)
            console.log("Presionado: ", value);

        switch (value) {
            case '=':
                this.calculate();
                break;
            
            case 'delete':
                this.delete();
                break;

            case 'clear':
                this.clear();
                break;
    
            default:
                this.write(value);
                break;
        }
    }
}