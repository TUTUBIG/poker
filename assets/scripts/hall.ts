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
    @property(Prefab)
    createRoom: Prefab = null;
    @property(Prefab)
    joinRoom: Prefab = null;


    onLoad() {
        console.debug("load hall sence")
    }

    start() {
        console.info("start hall sence")
        this.nickname.string = 'Alvin2'
        this.assertBalance.string = '0'
    }

    update(deltaTime: number) {
        // console.log("update hall ",deltaTime)
    }

    onButtonClick(event,customData) {
        switch (customData) {
            case 'create_room':
                console.info("create room event")
                var createRoom = cc.instantiate(this.createRoom)
                createRoom.parent = this.node
                break
            case 'join_room':
                console.info("join room event")
                var joinRoom = cc.instantiate(this.joinRoom)
                joinRoom.parent = this.node
                break
            default:
                console.error("not supported button click event")
        }
    }
}

