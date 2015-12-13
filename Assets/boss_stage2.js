#pragma strict

private var npcSpeed : float;
var bullet : GameObject ;
private var attackCoolTime : float ;
private var timer : float ;
var boss : GameObject ;
var hp : float;

function Start () {
	hp = 150;
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
			Application.LoadLevel("stage3") ;   
		}

}

function Attack () {

    var currentBullet1 : GameObject ;
	var currentBullet2 : GameObject ;
	var currentBullet3 : GameObject ;
	var currentBullet4 : GameObject ;
	var currentBullet5 : GameObject ;
	var currentBullet6 : GameObject ;
	var currentBullet7 : GameObject ;
	var currentBullet8 : GameObject ;

	currentBullet1 = Instantiate (bullet, boss.transform.position,  Quaternion.Euler(0,0,15)) ;
	currentBullet2 = Instantiate (bullet, boss.transform.position,  Quaternion.Euler(0,0,5)) ;
	currentBullet3 = Instantiate (bullet, boss.transform.position,  Quaternion.Euler(0,0,-5)) ;
	currentBullet4 = Instantiate (bullet, boss.transform.position,  Quaternion.Euler(0,0,-15)) ;
	currentBullet5 = Instantiate (bullet, boss.transform.position,  Quaternion.Euler(0,0,-25)) ;
	currentBullet6 = Instantiate (bullet, boss.transform.position,  Quaternion.Euler(0,0,25)) ;
	currentBullet7 = Instantiate (bullet, boss.transform.position,  Quaternion.Euler(0,0,35)) ;
	currentBullet8 = Instantiate (bullet, boss.transform.position,  Quaternion.Euler(0,0,-35)) ;


	currentBullet1.name="bossbullet";
	currentBullet2.name="bossbullet";
	currentBullet3.name="bossbullet";
	currentBullet4.name="bossbullet";
	currentBullet5.name="bossbullet";
	currentBullet6.name="bossbullet";
	currentBullet7.name="bossbullet";
	currentBullet8.name="bossbullet";

}