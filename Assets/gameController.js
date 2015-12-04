#pragma strict

var npc1 : GameObject ;
var npc2 : GameObject ;
var npc3 : GameObject ;
private var npcCoolTime : float ;
private var npcTimer : float ;
private var gameTimer : float ;
var hpview : UI.Text ;
var stage1 : UI.Text ;
var GetHp : int ;
var item : GameObject ;



function Start () {
    npcTimer = 0 ;
    npcCoolTime = 4;
    gameTimer=0;
}

function Update () {
  	GetHp=GameObject.Find("Player").GetComponent(Kevin).hp;
    npcTimer += Time.deltaTime ;
	  gameTimer+= Time.deltaTime ;

    hpview.text="x"+GetHp;
    if(gameTimer>30){
      Application.LoadLevel("boss_stage1") ;
    }
    if(gameTimer>5){
      Destroy(stage1);
    }
    if (npcTimer > npcCoolTime) {

        npcTimer = 0 ;
        var npcObj : GameObject = Instantiate (npc1, Vector3(Random.Range(-0.5, 0.5), 2, -5), Quaternion.Euler(0,0,20)) ;
 		npcObj.name = "npc1" ;
		var npcObj3 : GameObject = Instantiate (npc3, Vector3(Random.Range(-0.5, 0.5), 2, -5), Quaternion.identity) ;
		npcObj3.name = "npc3" ;

    }

}


InvokeRepeating("initnpc2",3,10);
function initnpc2 (){
	var npcObj2 : GameObject = Instantiate (npc2, Vector3(Random.Range(-0.5, 0.5), 2, -5), Quaternion.identity) ;
	npcObj2.name = "npc2" ;
}
function initnpc2se (){
	var npcObj2 : GameObject = Instantiate (npc2, Vector3(Random.Range(-0.5, 0.5), 1, -5), Quaternion.identity) ;
	npcObj2.name = "npc2" ;
}
InvokeRepeating("initnpc2se",7,20);


function inititem(){
	var itemObj : GameObject = Instantiate (item, Vector3(0, 1.5, -5), Quaternion.identity) ;
	itemObj.name = "item_hp" ;
}

Invoke("inititem",15);
