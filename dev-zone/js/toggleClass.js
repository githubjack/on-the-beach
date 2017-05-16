

function toggleClass(el){
     var sortItems = document.getElementById("sortitems").children;
         for(var i=0; i<sortItems.length; i++){
         sortItems[i].className = "default";
         }
     el.className = "active";
    }
//////////////////////////////////////
// need to spend more time to get this
// functionality working with a swap
// functionality. @ present replacing
// my sort classes.
/////////////////////////////////////