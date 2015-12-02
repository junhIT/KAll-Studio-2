#pragma strict

var player : GameObject ;
var bullet : GameObject ;
private var attackCoolTime : float ;
private var timer : float ;
public var hp : int;






function Start () {
	attackCoolTime = 0.1 ;
    timer = 0 ;
 	Attack() ;
 	hp=3;
}

function Update () {

 	timer += Time.deltaTime ;

    if (timer >= attackCoolTime) {

        Attack() ;
        timer = 0 ;

    }

    if (Input.GetKey("left")) {

        // 왼쪽 키가 눌리면 실행할 내용
         if (player.transform.position.x >= -0.5) {
        player.transform.position.x -= 0.01 ;
        }

    }
    else if (Input.GetKey("right")) {

        // 오른쪽 키가 눌리면 실행할 내용
        if (player.transform.position.x <= 0.5) {
        player.transform.position.x += 0.01 ;
        }

    }

}

function Attack () {

    var currentBullet : GameObject ;

    currentBullet = Instantiate (bullet, player.transform.position,  Quaternion.identity) ;


}

function OnTriggerEnter (enterCollider : Collider) {

    if (enterCollider.gameObject.name == "npc1"||enterCollider.gameObject.name == "npcbullet1"||enterCollider.gameObject.name == "npc2"||enterCollider.gameObject.name == "npcbullet2"
    ||enterCollider.gameObject.name == "npc3"||enterCollider.gameObject.name == "npcbullet3"||enterCollider.gameObject.name == "boss"||enterCollider.gameObject.name == "bossbullet") {

        Destroy (enterCollider.gameObject) ;
        if (hp==1){
        	Destroy (gameObject) ;
 		}
 		if (hp==2){
        	hp--;
 		}
 		if (hp==3){
        	hp--;
 		}
 		if (hp==4){
        	hp--;
 		}
 		if (hp==5){
        	hp--;
 		}
    }
}
