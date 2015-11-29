#pragma strict

var player : GameObject ;
var bullet : GameObject ;
private var attackCoolTime : float ;
private var timer : float ;
var hp : float;


function Start () {
	attackCoolTime = 0.5 ;
    timer = 0 ;
 	Attack() ;
 	hp=2;
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

    if (enterCollider.gameObject.name == "npc1") {

        Destroy (enterCollider.gameObject) ;
        if (hp==0){
        Destroy (gameObject) ;
 		}
        if (hp==1){
    
        hp--;
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
	if (enterCollider.gameObject.name == "npcbullet1") {

        Destroy (enterCollider.gameObject) ;
        if (hp==0){
        Destroy (gameObject) ;
 		}
        if (hp==1){
  
        hp--;
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
