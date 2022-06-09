import { _decorator, Component, Node, Label, Sprite, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('hall')
export class hall extends Component {

    @property(Label)
    nickname: Label = null;
    @property(Sprite)
    avatar: Sprite = null;
    @property(Label)
    assertBalance: cc.Label = null;
/*    @property(Prefab)
    createRoom: Prefab = null;
    @property(Prefab)
    joinRoom: Prefab = null;*/


    onLoad() {
        console.log("load hall")
    }

    start() {
        console.log("start hall")
        this.nickname.string = 'Alvin2'
        this.assertBalance.string = '0'
    }

    update(deltaTime: number) {
        // console.log("update hall ",deltaTime)
    }

    onButtonClick(event,customData) {
        switch (customData) {
            case 'create_room':
                console.log("create room event")
                /*var createRoom = cc.instantiate(this.createRoom)
                createRoom.parent = this.node*/
                return
            case 'join_room':
                console.log("join room event")
                /*var joinRoom = cc.instantiate(this.joinRoom)
                joinRoom.parent = this.node*/
                return
            default:
                console.log("unkown button click event")
        }
    }
}

