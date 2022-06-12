import { _decorator, Component, Node, Label, Prefab, audioEngine } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('game')
export class game extends Component {

    @property(Label)
    base: Label = null;
    @property(Label)
    roomId: Label = null;
    @property(Label)
    multiple: Label = null;
    @property(Prefab)
    playerProfile: Prefab = null
    @property([Node])
    playerSeats: [Node] = []

    start() {
        // register events
        this._registerLocalEvents()
        this._registerRemoteEvents()

        // enter room, refresh room and player information
        this._enterRoom()
        // play audio
        this._playerGameAudio()
    }


    _registerRemoteEvents() {}
    _registerLocalEvents() {}
    _enterRoom() {
        console.log("enter room")

        this.base.string = this.base.toString().split(":")[0] + " " + "2";
        this.roomId.string = this.roomId.toString().split(":")[0] + " " + "101";
        this.multiple.string = this.multiple.toString().split(":")[0] + " " + "2";


    }
    _playerGameAudio() {
        cc.audioEngine.stopAll()
        cc.audioEngine.play(cc.url.raw("resources/sound/bg.mp3"),true)
    }
}

