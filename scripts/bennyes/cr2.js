let author=[],sourceyear=[],sourcetitle=[],sourcelink=[],sourceaccess=[],linkrel=[],lcs=[],bulanid=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];function refData(name,yearswritten,title,link,accessdate,lin){author.push(name),yearswritten||(yearswritten="tahun penulisan tidak diketahui"),sourceyear.push(yearswritten),sourcetitle.push(title),link.includes("https://")||link.includes("http://")||(link=`https://`),link.endsWith("/")||link.endsWith(".php")||link.endsWith(".htm")||link.endsWith(".html")||link.endsWith(".asp")||link.includes("?")||(link=`/`),sourcelink.push(link),sourceaccess.push(accessdate),rel||(rel="nofollow"),linkrel.push(rel),lin||(lin=""),lcs.push(lin)}function refPrint(){let an=document.getElementsByClassName("href-ref"),li,co,dat,tgl,bln,thn,dafpus=document.getElementById("daf-pus"),innerco=0;for(co=0;co<an.length;co++)sourcelink.includes(sourcelink[co])&&sourcelink.indexOf(sourcelink[co])!=co||dafpus.insertAdjacentHTML("beforeend","<li></li>");for(co=0;co<an.length;co++)li=document.querySelectorAll("#daf-pus > li"),dat=new Date(sourceaccess[co]),tgl=dat.getDate(),bln=dat.getMonth(),blntext=bulanid[bln],thn=dat.getFullYear(),jam=dat.getHours(),jam<10&&(jam=`0`),mnt=dat.getMinutes(),mnt<10&&(mnt=`0`),sourcelink.includes(sourcelink[co])&&sourcelink.indexOf(sourcelink[co])!=co?(an[co].href=`#ref${sourcelink.indexOf(sourcelink[co])+1}`,an[co].innerHTML?an[co].innerHTML=`<span id='point${sourcelink.indexOf(sourcelink[co])+1}'></span>${an[co].innerHTML}<sup>[${sourcelink.indexOf(sourcelink[co])+1}]</sup>`:an[co].innerHTML=`<span id='point${sourcelink.indexOf(sourcelink[co])+1}'></span><sup>[${sourcelink.indexOf(sourcelink[co])+1}]</sup>`):(li[innerco].innerHTML=`<span id='ref${innerco+1}' class='jumpto'></span>${author[co]}. ${sourceyear[co]}. <b>${sourcetitle[co]}</b>. <a href='${sourcelink[co]}' target='_blank' rel='${linkrel[co]}'>${sourcelink[co]}</a>. Diakses tanggal <time title='${sourceaccess[co]}' datetime='${sourceaccess[co]}'>   pukul :</time>`,an[co].href=`#ref${innerco+1}`,an[co].innerHTML?an[co].innerHTML=`<span id='point${innerco+1}'></span>${an[co].innerHTML}<sup>[${innerco+1}]</sup>`:an[co].innerHTML=`<span id='point${innerco+1}'></span><sup>[${innerco+1}]</sup>`,lcs[co]&&li[innerco].insertAdjacentHTML("beforeend",` Lisensi: ${lcs[co]}`),innerco++);}
