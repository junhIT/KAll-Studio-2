#pragma strict

private var box:GameObject;

function Start () {
 	box = GameObject.Find("Player");
 	Destroy(box);
}

function Update () {

}