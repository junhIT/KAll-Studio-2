#pragma strict

private var box:GameObject;
private var moveSpeed:float = 0.8f;

function Start () {
	box = GameObject.Find("Player");
}
function OnGUI()
{
   if (GUI.RepeatButton(new Rect(10, 315, 40, 40), "<-"))
   {
   if (box.transform.position.x >= -0.5) 
   	{
   		box.transform.Translate(Vector3.left*moveSpeed*Time.deltaTime);
  	}
   }
	            
   if (GUI.RepeatButton(new Rect(150, 315, 40, 40), "->"))
   {
   if (box.transform.position.x <= 0.5) 
   	{
   		box.transform.Translate(Vector3.right*moveSpeed*Time.deltaTime);
   	}
   }
   
   if (GUI.RepeatButton(new Rect(10, 270, 40, 40), "B"));
}

function Update () {

}