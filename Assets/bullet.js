#pragma strict

private var bulletSpeed : float ;

function Start () {

    bulletSpeed = 50 ;

    gameObject.GetComponent(Rigidbody).AddForce(transform.up * bulletSpeed) ;
}

function OnTriggerEnter (enterCollider : Collider) {

    if (enterCollider.gameObject.name == "bulletEraser"){
     Destroy (gameObject) ;
 }
 else if (enterCollider.gameObject.name == "npc1") {

        Destroy (gameObject) ;
        Destroy (enterCollider.gameObject) ;

    }




}

function Update () {
	transform.Rotate(Vector3.up*5);

}