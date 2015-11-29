#pragma strict
var setName : GameObject ;
 
function Btnstart () {
 
    Application.LoadLevel("select_ch") ;
}

function Btnhelp () {
 
    Application.LoadLevel("help") ;
}

function Btnexit () {
 
    Application.Quit();
}

function BtnKevin () {
	setName.name="Player";
	 DontDestroyOnLoad(setName);
    Application.LoadLevel("Kevin") ;
}

function Btnback () {
 
    Application.LoadLevel("main") ;
}

function BtnBob () {
 	setName.name="Player";
	 DontDestroyOnLoad(setName);
    Application.LoadLevel("Kevin") ;
}

function BtnStuart () {
 	setName.name="Player";
	 DontDestroyOnLoad(setName);
    Application.LoadLevel("Kevin") ;
}