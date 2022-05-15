import scoreControl from "./scoreControl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class vbirControl extends cc.Component {
    @property(scoreControl)
    score: scoreControl = null

    count: number = 0

    flag: boolean = true
    onLoad () {
        //开启物理引擎
        cc.director.getPhysicsManager().enabled = true
        //开启碰撞监听
        this.node.getComponent(cc.RigidBody).enabledContactListener = true
    }

    start () {


    }

    fly() {
        //给小鸟一个向上的线性速度
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0,150)
    }
    
    // 碰撞监听
    onBeginContact(contact,self,other) {
        // console.log(other.tag);
        if(other.tag == 10) {
            this.count++
            this.score.getComponent(cc.Label).string = this.count.toString()
        }else {
            this.flag = false
            // this.node.getComponent(cc.RigidBody).type = cc.RigidBodyType.Kinematic
            console.log(this.node);
            var newNode= new cc.Node("Button");
            setTimeout(()=>{
                this.node.parent.getChildByName("resetButton").active = true
            },2000)
        }
    }
}
