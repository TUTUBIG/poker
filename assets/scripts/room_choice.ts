import { _decorator, Component, Node, director, CCObject } from 'cc';
const { ccclass, property } = _decorator;

enum _roomLevel {
    junior = 1,
    intermediate,
    senior,
    master,
}

@ccclass('room_choice')
export class room_choice extends Component {

    start() {

    }

    update(deltaTime: number) {
        
    }

    _createRoom(level: number) {
        console.debug("create room, level: ",level)

        //todo playerdata bottom & rate
        director.loadScene('game')
    }

    choseRoom(event: any,customData: any) {
        switch (customData) {
            case 'junior':
                console.info("junior room chosen")
                this._createRoom(_roomLevel.junior)
                break
            case 'intermediate':
                console.info("intermediate room chosen")
                this._createRoom(_roomLevel.intermediate)
                break
            case 'senior':
                console.info("senior room chosen")
                this._createRoom(_roomLevel.senior)
                break
            case 'master':
                console.info("master room chosen")
                this._createRoom(_roomLevel.master)
                break
            default:
                console.error("not supported room chosen")
        }
    }
}

