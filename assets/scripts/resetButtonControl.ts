const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Button)
    button: cc.Button = null

    loadScene() {
        cc.director.loadScene("game")
    }
    start () {

    }


    // update (dt) {}
}
