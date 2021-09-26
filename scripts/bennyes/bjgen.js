function bajgen(msg,link,judul){
var bjcont=document.createElement('div');
	bjcont.classList.add('baca-juga','parts');
	document.currentScript.insertAdjacentElement('beforebegin',bjcont);
	var bjmsg=document.createElement('div');
	bjmsg.classList.add('baca-juga-title');
	if(!msg){bjmsg.innerHTML='Baca juga'}
	else{bjmsg.innerHTML=msg}
	bjcont.appendChild(bjmsg);
	var bjisi=document.createElement('span');
	bjisi.classList.add('baca-juga-isi');
	bjcont.appendChild(bjisi);
	var bjlink=document.createElement('a');
	bjlink.href=link;
bjlink.innerHTML=judul;
bjisi.appendChild(bjlink)
}
