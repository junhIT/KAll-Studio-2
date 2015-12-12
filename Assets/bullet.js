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
 else if (enterCollider.gameObject.name == "npc1"||enterCollider.gameObject.name == "npc2"||enterCollider.gameObject.name == "npc3") {

        Destroy (gameObject) ;
        Destroy (enterCollider.gameObject) ;

    }else if(enterCollider.gameObject.name == "boss_stage1"){
      GameObject.Find("boss_stage1").GetComponent(boss_stage1).hp-=1;
      Destroy (gameObject) ;
    }else if(enterCollider.gameObject.name == "boss_stage2"){
      GameObject.Find("boss_stage2").GetComponent(boss_stage2).hp-=1;
      Destroy (gameObject) ;
}
}

function Update () {
	transform.Rotate(Vector3.up*5);

}
