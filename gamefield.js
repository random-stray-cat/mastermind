var defaultWidth = 603px;
var defaultHeight = 619px;

function CreateZone(obj)
{
    obj = document.getElementById("display");
    if (obj == null)
        return; 

    (new Zone( /starting x/ , /starting y/ , defaultHeight, defaultWidth)).Show();
}