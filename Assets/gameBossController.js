#pragma strict


var boss : GameObject ;
private var npcCoolTime : float ;
private var npcTimer : float ;
private var gameTimer : float ;
var hpview : UI.Text ;
var boss_text : UI.Text ;
var GetHp : int ;
var item : GameObject ;


function Start () {
  gameTimer=0;
}

function Update () {
  	GetHp=GameObject.Find("Player").GetComponent(Kevin).hp;
    npcTimer += Time.deltaTime ;
	  gameTimer+= Time.deltaTime ;

    hpview.text="x"+GetHp;
    if(gameTimer>5){
      Destroy(boss_text);
    }

}


function initboss(){
	var bossObj : GameObject = Instantiate (boss, Vector3(0, 1.5, -5), Quaternion.identity) ;
	bossObj.name = "boss_stage1" ;
}

Invoke("initboss",5);

function inititem_multishot(){
	var itemObj : GameObject = Instantiate (item, Vector3(Random.Range(-0.5, 0.5), 2, -5), Quaternion.identity) ;
	itemObj.name = "item_multishot" ;
}

Invoke("inititem_multishot", 1);