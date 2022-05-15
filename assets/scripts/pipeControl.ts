import birdControl from "./birdControl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class pipeControl extends cc.Component {

    @property
    speed: number = 30
    
    @property
    width: number = 288

    @property(birdControl)
    bird: birdControl = null

    start () {
        // console.log(this.node.children);
    }

    update (dt) {
        if(this.bird.flag == true) {
            for(let pipe of this.node.children) {
                pipe.x -= this.speed * dt
                if(pipe.x < -250) {
                    pipe.x += this.width * 2 - 120
                    pipe.y = Math.random() *  -200 + 120
                }
                
            }
        }else {
            for(let pipe of this.node.children) {
                pipe.removeComponent(cc.PhysicsBoxCollider)
            }
        }
    }
}
