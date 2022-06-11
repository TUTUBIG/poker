import { _decorator, Component, Node, Label, director, CCInteger } from 'cc';
const { ccclass, property } = _decorator;
const _inputNumbersLength = 6;

@ccclass('room_number_input')
export class room_number_input extends Component {

    @property([Label])
    inputNumbers: Label[] = [];

    start() {
        console.log("room number input start");
        this.inputNumbers.forEach(function (value: Label) {
            value.string = "";
        });
    }

    update(deltaTime: number) {

    }

    onButtonClick(event,customData){
        console.log("custom data",customData);
        let _numberInputIndex: number = 0;
        while(_numberInputIndex < _inputNumbersLength - 1) {
            if (this.inputNumbers[_numberInputIndex].string === "") {
                break
            }
            _numberInputIndex++
        }

        console.info("number input index",_numberInputIndex)

        switch(customData){
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
                this.inputNumbers[_numberInputIndex].string = customData;

                //todo input completed, send room numbers to server
                if (_numberInputIndex >= _inputNumbersLength - 1) {
                    console.log("room number specified: ",this.inputNumbers.toString());
                }

                break;
            case "back":
                if (_numberInputIndex >= _inputNumbersLength - 1 && this.inputNumbers[_numberInputIndex].string !== ""){
                    this.inputNumbers[_numberInputIndex].string = "";
                } else if (_numberInputIndex > 0) {
                    this.inputNumbers[_numberInputIndex -1 ].string = "";
                }

                break;
            case "clear":
                this.inputNumbers.forEach(function (value: Label) {
                    value.string = "";
                });
                break;
            case "close":
                let sence = director.getScene();
                let prefabContainer = sence.getChildByName("Canvas").getChildByName("PrefabContainer");
                prefabContainer.destroyAllChildren();
                break;
            default:
                console.error("invalid input element: ",customData);
        }
    }
}

