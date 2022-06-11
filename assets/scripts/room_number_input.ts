import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('room_number_input')
export class room_number_input extends Component {

    @property([Label])
    inputNumbers: Label[] = [];

    start() {
        console.log("room number input start")
        this.inputNumbers = []
    }

    update(deltaTime: number) {
        
    }

    onButtonClick(event,customData){
        console.debug("custom data",customData)
        console.debug("input numbers",this.inputNumbers.toString())
        // input element is numbers
        if(customData.length === 1 && customData >= 0 && customData <= 9 ) {
            this.inputNumbers.push(customData);

            // input completed, send room numbers to server
            if (this.inputNumbers.length >= 6) {
                console.log("room number specified: ",this.inputNumbers);
            }

            console.log("input number: ",customData);
            return
        }
        switch(customData){
            case "back":
               this.inputNumbers.pop();
               break;
            case "clear":
               this.inputNumbers = [];
               break;
            case "close":
                this.node.destroy()
                break;
            default:
                console.error("invalid input element: ",customData);
        }
    }
}

