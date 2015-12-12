#pragma strict

private var npcSpeed : float;
var bullet : GameObject ;
private var attackCoolTime : float ;
private var timer : float ;
var npc : GameObject ;

function Start () {

	npcSpeed = 20;
	//gameObject.GetComponent(Rigidbody).AddForce(transform.up * npcSpeed * -1);
	attackCoolTime = 2 ;
    timer = 0 ;
 	Attack() ;

}

function Update () {

    if (gameObject.transform.position.y <= -0.2) {

        Destroy (gameObject) ;

    }
    	timer += Time.deltaTime ;

    if (timer >= attackCoolTime) {

        Attack() ;
        timer = 0 ;

    }

}

function Attack () {

    var currentBullet1 : GameObject ;
	var currentBullet2 : GameObject ;
	var currentBullet3 : GameObject ;
	var currentBullet4 : GameObject ;
	var currentBullet5 : GameObject ;

 	currentBullet1 = Instantiate (bullet, npc.transform.position,  Quaternion.identity) ;
	currentBullet2 = Instantiate (bullet, npc.transform.position,  Quaternion.Euler(0,0,20)) ;
	currentBullet3 = Instantiate (bullet, npc.transform.position,  Quaternion.Euler(0,0,10)) ;
	currentBullet4 = Instantiate (bullet, npc.transform.position,  Quaternion.Euler(0,0,-20)) ;
	currentBullet5 = Instantiate (bullet, npc.transform.position,  Quaternion.Euler(0,0,-10)) ;
	

	currentBullet1.name="npcbullet1";
	currentBullet2.name="npcbullet1";
	currentBullet3.name="npcbullet1";
	currentBullet4.name="npcbullet1";
	currentBullet5.name="npcbullet1";
}