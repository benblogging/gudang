function showextvid(buttonid,videoid,vidclass,src){
    var vidmark=document.createElement('div');
    vidmark.classList.add('videomark');
    vidmark.id=videoid;
    document.currentScript.insertAdjacentElement('beforebegin',vidmark);
    var vidframe=document.createElement('iframe');
    vidmark.appendChild(vidframe);
    $(`#${buttonid}`).click(function(){
        $(`#${videoid}`).toggleClass("videocontainer");
        $(`#${videoid} iframe`).attr("src", src);
        if(src.includes("youtube")||src.includes("youtu.be")){$(`#${videoid} iframe`).attr("title","YouTube video player");$(`#${videoid} iframe`).toggleClass("youtubevid");}
        else{$(`#${videoid} iframe`).toggleClass(vidclass);}
        $(`#${videoid} iframe`).attr("frameborder", "0");
        $(`#${videoid} iframe`).attr("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
        $(`#${videoid} iframe`).attr("allowfullscreen");
    });
}
