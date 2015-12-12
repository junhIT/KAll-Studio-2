#pragma strict

function Start () {

}

function Update () {
    if (gameObject.tag == "stage3") {
 
        if (gameObject.transform.position.y > -0.8) {
 
            gameObject.transform.position.y -= 0.01 ;
 
        }
        else 
        {
            gameObject.transform.position.y = 5.0 ;
 
        }
    }
}