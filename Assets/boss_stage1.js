#pragma strict

private var npcSpeed : float;
var bullet : GameObject ;
private var attackCoolTime : float ;
private var timer : float ;
var boss : GameObject ;
var hp : float;

function Start () {
	hp = 100;
	npcSpeed = 20;
	gameObject.GetComponent(Rigidbody).AddForce(transform.up * npcSpeed * -1);
	gameObject.GetComponent(Rigidbody).AddForce(transform.right * npcSpeed * -1);
	attackCoolTime = 3 ;
    timer = 0 ;
 	Attack() ;

}

function Update () {

    if (gameObject.transform.position.y <= 1.0) {

        gameObject.GetComponent(Rigidbody).AddForce(transform.up * npcSpeed * 1);

    }
	if (gameObject.transform.position.y >= 1.5) {

		gameObject.GetComponent(Rigidbody).AddForce(transform.up * npcSpeed * -1);

		}
		if (gameObject.transform.position.x >= 0.5) {

			gameObject.GetComponent(Rigidbody).AddForce(transform.right * npcSpeed * -1);

			}
			if (gameObject.transform.position.x <= -0.5) {

				gameObject.GetComponent(Rigidbody).AddForce(transform.right * npcSpeed * 1);

				}

    	timer += Time.deltaTime ;

    if (timer >= attackCoolTime) {

        Attack() ;
        timer = 0 ;

    }
    if (hp==0){
			Application.LoadLevel("stage2") ;   
		}

}

function Attack () {

    var currentBullet1 : GameObject ;
	var currentBullet2 : GameObject ;
	var currentBullet3 : GameObject ;
	var currentBullet4 : GameObject ;

	currentBullet1 = Instantiate (bullet, boss.transform.position,  Quaternion.Euler(0,0,15)) ;
	currentBullet2 = Instantiate (bullet, boss.transform.position,  Quaternion.Euler(0,0,5)) ;
	currentBullet3 = Instantiate (bullet, boss.transform.position,  Quaternion.Euler(0,0,-5)) ;
	currentBullet4 = Instantiate (bullet, boss.transform.position,  Quaternion.Euler(0,0,-15)) ;


	currentBullet1.name="bossbullet";
	currentBullet2.name="bossbullet";
	currentBullet3.name="bossbullet";
	currentBullet4.name="bossbullet";

}


