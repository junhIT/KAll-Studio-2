#pragma strict

var player : GameObject ;
var bullet : GameObject ;
var attackCoolTime : float ;
private var timer : float ;
public var hp : int;
private var bulletType : float ;
private var temp_hp : int ;
private var super_timer : float ;
private var super_cooltime : float ;





function Start () {
    timer = 0 ;
    super_timer = 4;
 	Attack() ;
 	bulletType = 0;
 	temp_hp = 0;
 	super_cooltime = 3;
}

function Update () {

 	timer += Time.deltaTime ;
 	super_timer += Time.deltaTime;

    if (timer >= attackCoolTime) {

        Attack() ;
        timer = 0 ;

    }

    if (super_timer >= 3 && super_timer <= 3.5) {
        hp=temp_hp;
		
    }

    if (Input.GetKey("left")) {

        // 왼쪽 키가 눌리면 실행할 내용
         if (player.transform.position.x >= -0.5) {
        player.transform.position.x -= 0.015 ;
        }

    }
    else if (Input.GetKey("right")) {

        // 오른쪽 키가 눌리면 실행할 내용
        if (player.transform.position.x <= 0.5) {
        player.transform.position.x += 0.015 ;
        }

    }

}

function Attack () {

    var currentBullet : GameObject ;
    var currentBullet2 : GameObject ;
    var currentBullet3 : GameObject ;
    
	if(bulletType == 0)	{
    	currentBullet = Instantiate (bullet, player.transform.position,  Quaternion.identity) ;
    }
    else if(bulletType == 1)    {
    	currentBullet = Instantiate (bullet, player.transform.position,  Quaternion.Euler(0,0,-10)) ;
    	currentBullet2 = Instantiate (bullet, player.transform.position,  Quaternion.Euler(0,0,10)) ;
    }
	else if(bulletType >= 2)    {
    	currentBullet = Instantiate (bullet, player.transform.position,  Quaternion.Euler(0,0,-15)) ;
    	currentBullet2 = Instantiate (bullet, player.transform.position,  Quaternion.Euler(0,0,0)) ;
    	currentBullet3 = Instantiate (bullet, player.transform.position,  Quaternion.Euler(0,0,15)) ;
    }
	

}

function OnTriggerEnter (enterCollider : Collider) {

    if (enterCollider.gameObject.name == "npc1"||enterCollider.gameObject.name == "npcbullet1"||enterCollider.gameObject.name == "npc2"||enterCollider.gameObject.name == "npcbullet2"
    ||enterCollider.gameObject.name == "npc3"||enterCollider.gameObject.name == "npcbullet3"||enterCollider.gameObject.name == "boss"||enterCollider.gameObject.name == "bossbullet") {

        Destroy (enterCollider.gameObject) ;
        if (hp==1){
         Application.LoadLevel("select_ch") ;
        	  
 		}
 		if (hp==2){
        	hp--;
        	bulletType=0;
        	temp_hp=hp;
			hp=100;
        	super_timer=2;
 		}
 		if (hp==3){
        	hp--;
        	bulletType=0;
        	temp_hp=hp;
			hp=100;
        	super_timer=2;
 		}
 		if (hp==4){
        	hp--;
        	bulletType=0;
        	temp_hp=hp;
			hp=100;
        	super_timer=2;
 		}
 		if (hp==5){
        	hp--;
        	bulletType=0;
        	temp_hp=hp;
			hp=100;
        	super_timer=2;
 		}
    }
		  if (enterCollider.gameObject.name == "item_hp"){
		  			if(hp<5){
						hp++;
					}
					Destroy (enterCollider.gameObject) ;
			}
		 if (enterCollider.gameObject.name == "item_multishot"){
					bulletType++;
					Destroy (enterCollider.gameObject) ;
			}
		 if (enterCollider.gameObject.name == "item_super"){
					temp_hp=hp;
					hp=100;
					super_timer=0;
					Destroy (enterCollider.gameObject) ;
			}	
}

 
    
 


