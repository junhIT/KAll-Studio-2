#pragma strict

private var itemSpeed : float;
var item : GameObject ;

function Start () {

  itemSpeed=20;
	gameObject.GetComponent(Rigidbody).AddForce(transform.up * itemSpeed * -1);
}

function Update () {

    if (gameObject.transform.position.y <= -0.2) {

        Destroy (gameObject) ;

    }

}
