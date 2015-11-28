#pragma strict

var npc1 : GameObject ;
private var npcCoolTime : float ;
private var npcTimer : float ;

function Start () {

    npcTimer = 0 ;
    npcCoolTime = 2 ;

}

function Update () {

    npcTimer += Time.deltaTime ;

    if (npcTimer > npcCoolTime) {

        npcTimer = 0 ;
        var npcObj : GameObject = Instantiate (npc1, Vector3(Random.Range(-0.5, 0.5), 2, -5), Quaternion.Euler(0,0,20)) ;
 		npcObj.name = "npc1" ;
    }

}
