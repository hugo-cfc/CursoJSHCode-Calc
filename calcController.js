class CalcController {
    constructor() {
        this._operation = []
        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector('#display')
        this._dateEl = document.querySelector('#data')
        this._timeEl = document.querySelector('#hora')
        this._currentDate 
        this.initialize()
        this.initButtonsEvents()
    }

    initialize() {
        this.setDisplayDateTime()
        setInterval(() => {
            this.setDisplayDateTime()
        }, 1000)        
    }

    addEventListenerAll(element, events, callback) {
        events.split(' ').forEach(event => {
            element.addEventListener(event, callback, false)
        })
    }

    clearAll() {
        this._operation = []
    }

    cancelEntry() {
        this._operation.pop()
    }

    getLastOperation() {
        return this._operation[this._operation.length - 1]
    }

    addOperation(value) {
        this.addOperation.push(value)
    }

    setError() {
        this.displayCalc = "Error"
    }

    execButton(value) {
        switch (value) {
            case 'ac':
                this.clearAll()        
                break
            
            case 'ce':
                this.cancelEntry()
                break
            
            case 'soma':
                
                break
                
            case 'subtracao':
                
                break

            case 'divisao':
                
                break

            case 'multiplicacao':
                
                break

            case 'porcento':
                
                break

            case 'igual':
                
                break
            
            case '.': 
                break
            
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value))
                break

            default: 
                this.setError()
                break
        }
                

    }

    initButtonsEvents() {
        const buttons = document.querySelectorAll('#buttons > g, #parts > g')

        buttons.forEach(button => {
            this.addEventListenerAll(button, 'click drag', e => {
                const textButton = console.log(button.className.baseVal.replace('btn-', ''))
                this.execButton(textButton)
            })

            this.addEventListenerAll(button, 'mouseover mouseup mousedown', e => {
                button.style.cursor = 'pointer'
            })
        })


    }

    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {day: '2-digit', month: 'long', 
    year: 'numeric'})
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
    }

    get displayTime() {
        return this._timeEl.innerHTML
    }

    set displayTime(value) {
        this._timeEl.innerHTML = value
    }

    get displayDate() {
        return this._dateEl.innerHTML
    
    }
    set displayDate(value) {
        this._dateEl.innerHTML = value
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value 
    }

    get currentDate() {
        return new Date
    }

    set currentDate(value) {
        this._currentDate = value
    }
}