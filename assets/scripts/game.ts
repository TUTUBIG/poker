import { _decorator, Component, Node, Label, Prefab, AudioSource, director } from 'cc'; // variables
import {  assert, instantiate } from 'cc'; // functions
import { eventName, eventTarget } from './event_name';
import { player_controller, playerInformation, gameStatus, playerRole } from './player_controller';
import { roomContext } from './game_context'
const { ccclass, property } = _decorator;

@ccclass('game')
export class game extends Component {

    @property(Label)
    base: Label = null
    @property(Label)
    roomId: Label = null
    @property(Label)
    multiple: Label = null
    @property(Prefab)
    playerProfile: Prefab = null
    // @property([Node])
  //  playerSeats: [Node] = null

    _audioSource: AudioSource = null

    onLoad() {
        console.log("game sence loading...")
        const audioSource = this.node.getComponent(AudioSource)
        assert(audioSource)
        this._audioSource = audioSource

        // register events
        this._registerLocalEvents()
        this._registerRemoteEvents()
    }

    start() {
        // enter room, get room and player information
        this._enterRoom()

        // play audio
        this._playerGameAudio()
    }


    _registerRemoteEvents() {}
    _registerLocalEvents() {}
    
    
    _enterRoom() {
        console.log("enter room")

        //TODO replace with response data from backend

        // room information
        this.base.string = this.base.string.split(":")[0] + " " + "2";
        this.roomId.string = this.roomId.string.split(":")[0] + " " + "101";
        this.multiple.string = this.multiple.string.split(":")[0] + " " + "2";

        const playerList:  playerInformation[] = [
            {
                id: "1028",
                nickName: "alvin",
                avatarImageURI: "",
                assetBalance: 1000,
                role: playerRole.player,
                isLanlord: true
            },
            {
                id: "1029",
                nickName: "alvin-1",
                avatarImageURI: "",
                assetBalance: 100,
                role: playerRole.up,
                isLanlord: false
            },
            {
                id: "1027",
                nickName: "alvin-2",
                avatarImageURI: "",
                assetBalance: 500,
                role: playerRole.down,
                isLanlord: false
            }
        ]

        // players information
        for(let i = 0;i < playerList.length;i++) {
            this._addPlayerNode(playerList[i])
        }

        // promot start game dialogue
        let isRoomOwner: boolean = true
        eventTarget.emit(eventName.enterRoom,isRoomOwner)
        const gameBeforeNode = this.node.getChildByName("BeforeGame")

        gameBeforeNode.emit(eventName.enterRoom)
    }
    _playerGameAudio() {
        this._audioSource.play()
    }

    _addPlayerNode(player: playerInformation) {
        let playerProfile = instantiate(this.playerProfile)
        playerProfile.active = false
        playerProfile.parent = this.node
         
        const playerProfileControler: player_controller = playerProfile.getComponent("player_controller") as player_controller
        
        playerProfileControler.init(player,gameStatus.notReady)
    }
}

