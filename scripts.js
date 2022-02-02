const speakers=[
    {
        name:'Souad El Mansouri',
        image:'./media/images/speakers/souad_photo.jpg',
        prof:'Full stack developer at microverse inc',
        desc:'Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist and Facebook, Inc co-founder.'
    },
    {
        name:'Souad El Mansouri',
        image:'./media/images/speakers/souad_photo.jpg',
        prof:'Full stack developer at microverse inc',
        desc:'Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist and Facebook, Inc co-founder.'
    },
    {
        name:'Souad El Mansouri',
        image:'./media/images/speakers/souad_photo.jpg',
        prof:'Full stack developer at microverse inc',
        desc:'Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist and Facebook, Inc co-founder.'
    },
    {
        name:'Souad El Mansouri',
        image:'./media/images/speakers/souad_photo.jpg',
        prof:'Full stack developer at microverse inc',
        desc:'Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist and Facebook, Inc co-founder.'
    },
    {
        name:'Souad El Mansouri',
        image:'./media/images/speakers/souad_photo.jpg',
        prof:'Full stack developer at microverse inc',
        desc:'Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist and Facebook, Inc co-founder.'
    },
    {
        name:'Souad El Mansouri',
        image:'./media/images/speakers/souad_photo.jpg',
        prof:'Full stack developer at microverse inc',
        desc:'Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist and Facebook, Inc co-founder.'
    },
    {
        name:'Souad El Mansouri',
        image:'./media/images/speakers/souad_photo.jpg',
        prof:'Full stack developer at microverse inc',
        desc:'Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist and Facebook, Inc co-founder.'
    },
    {
        name:'Souad El Mansouri',
        image:'./media/images/speakers/souad_photo.jpg',
        prof:'Full stack developer at microverse inc',
        desc:'Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist and Facebook, Inc co-founder.'
    },
    {
        name:'Souad El Mansouri',
        image:'./media/images/speakers/souad_photo.jpg',
        prof:'Full stack developer at microverse inc',
        desc:'Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist and Facebook, Inc co-founder.'
    }
];

const speakersSection= document.querySelector('.speaker_card_list');
const speakersSectionMore= document.querySelector('.speaker_card_list1');
const speakersMore = document.querySelector('.speakers_more');

for(var i=0;i<3;i++){
    
    speakersSection.innerHTML+=` <div class="speaker_card">
    <div class="speaker_img"><img src= `+speakers[i].image+` alt=""></div>
    <div class="speaker_info">
        <p class="speaker_name">`+speakers[i].name+`</p>
        <p class="speaker_profession">`+speakers[i].prof+`</p>
        <hr/>
        <p class="speaker_desc">`+speakers[i].desc+`</p>
    </div>
</div>`;
}

function displayMore(){
    for(var i=3;i<speakers.length;i++){
    
        speakersSectionMore.innerHTML+=` <div class="speaker_card">
        <div class="speaker_img"><img src= `+speakers[i].image+` alt=""></div>
        <div class="speaker_info">
            <p class="speaker_name">`+speakers[i].name+`</p>
            <p class="speaker_profession">`+speakers[i].prof+`</p>
            <hr/>
            <p class="speaker_desc">`+speakers[i].desc+`</p>
        </div>
    </div>`;
    }
}

speakersMore.addEventListener('click',function(){
    console.log(speakersMore.innerHTML!==`LESS<i class="fas fa-angle-up" aria-hidden="true"></i>`);
    if(speakersMore.innerHTML === `LESS<i class="fas fa-angle-up" aria-hidden="true"></i>`){
        console.log('from if');
         speakersMore.innerHTML=`More<i class="fas fa-angle-down"></i>`;  
        speakersSectionMore.innerHTML='';
    }else {
        displayMore();
        speakersMore.innerHTML=`LESS<i class="fas fa-angle-up"></i>`;
        console.log('from else');
       
    }
    
});
