#pragma strict

function Start () {

}

function Update () {
    if (gameObject.tag == "stage2_bg_1") {
 
        if (gameObject.transform.position.y > -0.8) {
 
            gameObject.transform.position.y -= 0.005 ;
 
        }
        else 
        {
            gameObject.transform.position.y = 5.0 ;
 
        }
    }

    if (gameObject.tag == "stage2_bg_2") {
 
        if (gameObject.transform.position.y > -0.8) {
 
            gameObject.transform.position.y -= 0.003 ;
 
        }
        else 
        {
            gameObject.transform.position.y = 5.0 ;
 
        }
    }
}