import { _decorator, Component, Node, AudioSource, assert } from 'cc';
import { eventName, eventTarget } from './event_name';
const { ccclass, property } = _decorator;

@ccclass('game_before')
export class game_before extends Component {

    @property(Node)
    readyButton: Node = null
    @property(Node)
    startButton: Node = null
    @property(AudioSource)
    audioSource: AudioSource = null

    onLoad() {
        console.log("-game_before",this.node)
        this.audioSource.playOnAwake = false
        this._registerEvent()
    }

    start() {
        this.audioSource.playOneShot
        console.log("game_before start")
    }

    update(deltaTime: number) {
        
    }

    onButtonClick(event: any,customData: any){
        switch(customData){
            case "ready":
                console.log("ready TODO request backend server")
                // TODO request backend server
                break
            case "start":
                this.audioSource.play()
                console.log("start TODO request backend server")
                // TODO request backend server
                break    
            default:
                break
        }
    }

    _registerEvent() {
        // local events
        console.log("register event")
        eventTarget.on(eventName.enterRoom,(isOwner: boolean) => { 
            console.log("event trigger")
            //TODO whether if player is the room owner
            if (isOwner) {
                this.startButton.active = true
                this.readyButton.active = false
            } else {
                this.startButton.active = false
                this.readyButton.active = true
            }
        },this)
    }
}

