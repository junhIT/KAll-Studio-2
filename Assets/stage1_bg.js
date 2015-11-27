#pragma strict

function Start () {

}

function Update () {
    if (gameObject.tag == "stage1_bg_star1") {
 
        if (gameObject.transform.position.y > -0.8) {
 
            gameObject.transform.position.y -= 0.003 ;
 
        }
        else 
        {
            gameObject.transform.position.y = 3.0 ;
 
        }
    }

    if (gameObject.tag == "stage1_bg_star2") {
 
        if (gameObject.transform.position.y > -0.8) {
 
            gameObject.transform.position.y -= 0.001 ;
 
        }
        else 
        {
            gameObject.transform.position.y = 3.0 ;
 
        }
    }
}