#pragma strict

private var npcSpeed : float;
var bullet : GameObject ;
private var attackCoolTime : float ;
private var timer : float ;
var npc : GameObject ;

function Start () {
	
	npcSpeed = 20;
	gameObject.GetComponent(Rigidbody).AddForce(transform.up * npcSpeed * -1);
	attackCoolTime = 0.5 ;
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

    var currentBullet : GameObject ;

    currentBullet = Instantiate (bullet, npc.transform.position,  Quaternion.identity) ;

	currentBullet.name="npcbullet1";
}