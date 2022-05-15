import birdControl from "./birdControl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class bgControl extends cc.Component {

    @property
    speed: number = 5

    @property
    width: number = 288

    @property(birdControl)
    bird: birdControl = null

    onLoad() {
        
        
    }
    start () {
        this.node.on(cc.Node.EventType.TOUCH_START,()=>{
            console.log("hello");
            if(this.bird.flag == true) {
                this.bird.fly()
            }
        })
    }
    update (dt) {
        if(this.bird.flag == true) {
            for(let bg of this.node.children) {
                bg.x -= this.speed * dt
                if(bg.x < -288) {
                    bg.x += this.width * 2
                }
            }
        }else {
            setTimeout(()=>{
                for(let bg of this.node.children) {
                    bg.removeComponent(cc.PhysicsBoxCollider)
                }
            },100)
        }
    }
}
