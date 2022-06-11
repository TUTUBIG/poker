import { _decorator, Component, Node, Label, Sprite, Prefab, director, Camera } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('hall')
export class hall extends Component {

    @property(Label)
    private nickname: Label = null;
    @property(Sprite)
    private avatar: Sprite = null;
    @property(Label)
    private assertBalance: cc.Label = null;
    @property(Prefab)
    private createRoom: Prefab = null;
    @property(Prefab)
    private joinRoom: Prefab = null;


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

    constructor() {
        super();
        console.log("constructor",this.node)
    }

    onButtonClick(event,customData) {
        let sence = director.getScene()
        let prefabContainer = sence.getChildByName("Canvas").getChildByName("PrefabContainer")

        switch (customData) {
            case 'create_room':
                console.info("create room event",this.node)
                let createRoom = cc.instantiate(this.createRoom)
                createRoom.parent = prefabContainer
                break
            case 'join_room':
                console.info("join room event")
                let joinRoom = cc.instantiate(this.joinRoom)
                joinRoom.parent = prefabContainer
                break
            default:
                console.error("not supported button click event")
        }
    }
}

