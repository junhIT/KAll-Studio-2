#pragma strict

var npc1 : GameObject ;
var npc2 : GameObject ;
private var npcCoolTime : float ;
private var npcTimer : float ;
private var gameTimer : float ;
var hpview : UI.Text ;
var GetHp : float ;



function Start () {
    gameObject.Find("Player").GetComponent("kevin");
    npcTimer = 0 ;
    npcCoolTime = 4;
}

function Update () {

    npcTimer += Time.deltaTime ;
    gameTimer+= Time.deltaTime ;

    if (npcTimer > npcCoolTime) {

        npcTimer = 0 ;
        var npcObj : GameObject = Instantiate (npc1, Vector3(Random.Range(-0.5, 0.5), 2, -5), Quaternion.Euler(0,0,20)) ;
 		     npcObj.name = "npc1" ;
    }

}

InvokeRepeating("initnpc2", 3,10);
function initnpc2 (){
  var npcObj2 : GameObject = Instantiate (npc2, Vector3(Random.Range(-0.5, 0.5), 2, -5), Quaternion.identity) ;
   npcObj2.name = "npc2" ;
}
function initnpc2se (){
  var npcObj2 : GameObject = Instantiate (npc2, Vector3(Random.Range(-0.5, 0.5), 1, -5), Quaternion.identity) ;
   npcObj2.name = "npc2" ;
}
InvokeRepeating("initnpc2se", 7,20);
