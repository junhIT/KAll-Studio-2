#pragma strict

private var box:GameObject;
private var moveSpeed:float = 0.8f;

function Start () {
	box = GameObject.Find("Player");
}
function OnGUI()
{
   if (GUI.RepeatButton(new Rect(10, 1400, 250, 250), "<-"))
   {
   if (box.transform.position.x >= -0.5) 
   	{
   		box.transform.Translate(Vector3.left*moveSpeed*Time.deltaTime);
  	}
   }
	            
   if (GUI.RepeatButton(new Rect(800, 1400, 250, 250), "->"))
   {
   if (box.transform.position.x <= 0.5) 
   	{
   		box.transform.Translate(Vector3.right*moveSpeed*Time.deltaTime);
   	}
   }
   
}

function Update () {

}