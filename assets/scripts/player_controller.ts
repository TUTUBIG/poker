import { _decorator, Component, Node, Label, Sprite, Widget } from 'cc';
const { ccclass, property } = _decorator;

export enum gameStatus {
    notReady,
    ready,
    start
}

export enum playerRole {
    up,
    player,
    down,
}

export interface playerInformation {
    id: string
    nickName: string
    avatarImageURI: string
    assetBalance: number
    role: playerRole
    isLanlord: boolean
}

@ccclass('player_controller')
export class player_controller extends Component {

    @property(Label)
    id: Label = null
    @property(Label)
    nickName: Label = null
    @property(Sprite)
    avatar: Sprite = null
    @property(Label)
    assets: Label = null
    @property(Node)
    readySign: Node = null

    _id: string = ""

    start() {

    }

    update(deltaTime: number) {
        
    }

    init(player: playerInformation,status: gameStatus) {
        if (this._id === "") {
            this._id = player.id
            this.id.string = player.id
        } else if (this._id !== player.id) {
            console.error("player id can not be modified",this._id,player.id)
            return
        }

        this.nickName.string = player.nickName
        this.assets.string = player.assetBalance.toString()

        if (status === gameStatus.ready) {
            this.readySign.active = true
        }

        let widget: Widget = this.node.getComponent(Widget)
        widget.isAlignBottom = false
        widget.isAlignLeft = false
        widget.isAlignTop = false
        widget.isAlignRight = false

        widget.isAbsoluteBottom = true
        widget.isAbsoluteLeft = true
        widget.isAbsoluteTop = true
        widget.isAbsoluteRight = true

        switch (player.role) {
            case playerRole.up:
                widget.left = 50
                widget.isAlignLeft = true
                widget.top = 120
                widget.isAlignTop = true
                break;
            case playerRole.player:
                widget.left = 70
                widget.isAlignLeft = true
                widget.bottom = 70
                widget.isAlignBottom = true
                break;
            case playerRole.down:
                widget.right = 50
                widget.isAlignRight = true
                widget.top = 200
                widget.isAlignTop = true
                break;
            default:
                console.error('invalid player role: ',player.role)
        }

        widget.target = this.node.parent
        widget.updateAlignment

        //TODO change avatar sprite

        if (player.isLanlord) {
            this.node.getChildByName("Avatar").getChildByName("LanlordSign").active = true
        }
        this.node.active = true

        console.log(this.node)
    }
}

