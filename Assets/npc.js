#pragma strict

private var npcSpeed : float;

function Start () {

	npcSpeed = 20;
	gameObject.GetComponent(Rigidbody).AddForce(transform.up * npcSpeed * -1);

}

function Update () {
 
    if (gameObject.transform.position.y <= -0.2) {
 
        Destroy (gameObject) ;
 
    }
 
}
