var monthstring=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
    function sidebarwriter(blogdata){
        var recent=document.createElement('div');
        recent.classList.add('recent');
        document.currentScript.insertAdjacentElement('afterend',recent);
        var gw=blogdata.feed.entry;
        var postlist,entrythumb,imgthumb,thumbsrc,entryhref,entrytitle,entryprop,postdate,dateicon,datetime,fulldate,date,month,year;
        for(var ww=0;ww<gw.length;ww++){
            postlist=document.createElement('div');
            postlist.classList.add('postlist');
            recent.appendChild(postlist);
            entryhref=document.createElement('a');
            entryhref.class='postlistarea';
            entryhref.title=`Baca: ${blogdata.feed.entry[ww].title.$t}`;
            entryhref.href=blogdata.feed.entry[ww].link[4].href;
            postlist.appendChild(entryhref);
            entrythumb=document.createElement('img');
            entrythumb.classList.add('postthumb');
            thumbsrc=blogdata.feed.entry[ww].media$thumbnail.url;
            if(thumbsrc){if(thumbsrc.includes('s72-c')){thumbsrc=thumbsrc.replace(/s72-c/gi, 'w96-h54-c');}}
else if(!thumbsrc){thumbsrc="https://raw.githubusercontent.com/benblogging/gudang/main/pictures/2021/06/no-img-2a.png";}// no-image
            entrythumb.src=thumbsrc;
            entrythumb.alt=`Thumbnail for "${blogdata.feed.entry[ww].title.$t}"`;
            entryhref.appendChild(entrythumb);
            entryprop=document.createElement('span');
            entryprop.classList.add('entryprop');
            entryhref.appendChild(entryprop);
            entrytitle=document.createElement('span');
            entrytitle.classList.add('entrytitle');
            entrytitle.innerHTML=blogdata.feed.entry[ww].title.$t;
            entryprop.appendChild(entrytitle);
            postdate=document.createElement('span');
            postdate.classList.add('post-date');
            entryprop.appendChild(postdate);
            dateicon=document.createElement('img');
            dateicon.classList.add('small-icon');
            dateicon.alt='post date';
            dateicon.src='https://1.bp.blogspot.com/-30UIxtXR0Vk/YPMBpL6xpEI/AAAAAAAAAKc/OhDljuvj9F8IvKTxFAKHE2AHtyKw5hX6wCNcBGAsYHQ/s0/g6.png';
            postdate.appendChild(dateicon);
            datetime=document.createElement('time');
            datetime.dateTime=blogdata.feed.entry[ww].published.$t;
            fulldate=new Date(blogdata.feed.entry[ww].published.$t);
            date=fulldate.getDate();
            month=monthstring[fulldate.getMonth()];
            year=fulldate.getFullYear();
            datetime.innerHTML=`${date} ${month} ${year}`;
            postdate.appendChild(datetime);
        }
    }
function showCats(bldt){
        var showcat=document.getElementById('showcategory'),singlecategory;
        for(var iw=0;iw<bldt.feed.category.length;iw++){
            singlecategory=document.createElement('a');
            singlecategory.classList.add('singlecategory');
            singlecategory.target='_blank';
            singlecategory.innerHTML=bldt.feed.category[iw].term;
            singlecategory.href=`https://www.bennyes.my.id/search/label/${bldt.feed.category[iw].term}`;
            showcat.appendChild(singlecategory);
        }
    }
