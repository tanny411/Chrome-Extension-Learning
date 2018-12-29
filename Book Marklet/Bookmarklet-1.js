(function(){
    console.log("Something printing...\nSorry, nothing...");
    let p=document.getElementsByTagName('p');
    for(let i=0;i<p.length;i++){
        p[i].innerHTML="puppy";
    }
})();
