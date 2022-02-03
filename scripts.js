/* DYNAMIC DISPLAY FOR SPEAKS SECTION CONTENT */

const speakers = [
  {
    name: 'Souad El Mansouri',
    image: './media/images/speakers/souad_photo.jpg',
    prof: 'Full stack developer at microverse inc',
    desc: 'Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist and Facebook, Inc co-founder.',
  },
  {
    name: 'Souad El Mansouri',
    image: './media/images/speakers/souad_photo.jpg',
    prof: 'Full stack developer at microverse inc',
    desc: 'Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist and Facebook, Inc co-founder.',
  },
  {
    name: 'Souad El Mansouri',
    image: './media/images/speakers/souad_photo.jpg',
    prof: 'Full stack developer at microverse inc',
    desc: 'Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist and Facebook, Inc co-founder.',
  },
  {
    name: 'Souad El Mansouri',
    image: './media/images/speakers/souad_photo.jpg',
    prof: 'Full stack developer at microverse inc',
    desc: 'Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist and Facebook, Inc co-founder.',
  },
  {
    name: 'Souad El Mansouri',
    image: './media/images/speakers/souad_photo.jpg',
    prof: 'Full stack developer at microverse inc',
    desc: 'Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist and Facebook, Inc co-founder.',
  },
  {
    name: 'Souad El Mansouri',
    image: './media/images/speakers/souad_photo.jpg',
    prof: 'Full stack developer at microverse inc',
    desc: 'Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist and Facebook, Inc co-founder.',
  },
  {
    name: 'Souad El Mansouri',
    image: './media/images/speakers/souad_photo.jpg',
    prof: 'Full stack developer at microverse inc',
    desc: 'Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist and Facebook, Inc co-founder.',
  },
  {
    name: 'Souad El Mansouri',
    image: './media/images/speakers/souad_photo.jpg',
    prof: 'Full stack developer at microverse inc',
    desc: 'Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist and Facebook, Inc co-founder.',
  },
  {
    name: 'Souad El Mansouri',
    image: './media/images/speakers/souad_photo.jpg',
    prof: 'Full stack developer at microverse inc',
    desc: 'Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist and Facebook, Inc co-founder.',
  },
];

const speakersSection = document.querySelector('.speaker_card_list');
const speakersSectionMore = document.querySelector('.speaker_card_list1');
const speakersMore = document.querySelector('.speakers_more');

for (let i = 0; i < 3; i += 1) {
  speakersSection.innerHTML += ` <div class="speaker_card">
    <div class="speaker_img"><img src= ${speakers[i].image} alt=""></div>
    <div class="speaker_info">
        <p class="speaker_name">${speakers[i].name}</p>
        <p class="speaker_profession">${speakers[i].prof}</p>
        <hr/>
        <p class="speaker_desc">${speakers[i].desc}</p>
    </div>
</div>`;
}

function displayMore() {
  for (let i = 3; i < speakers.length; i += 1) {
    speakersSectionMore.innerHTML += ` <div class="speaker_card">
        <div class="speaker_img"><img src= ${speakers[i].image} alt=""></div>
        <div class="speaker_info">
            <p class="speaker_name">${speakers[i].name}</p>
            <p class="speaker_profession">${speakers[i].prof}</p>
            <hr/>
            <p class="speaker_desc">${speakers[i].desc}</p>
        </div>
    </div>`;
  }
}

speakersMore.addEventListener('click', () => {
  if (speakersMore.innerHTML === 'LESS<i class="fas fa-angle-up" aria-hidden="true"></i>') {
    speakersMore.innerHTML = 'More<i class="fas fa-angle-down"></i>';
    speakersSectionMore.innerHTML = '';
  } else {
    displayMore();
    speakersMore.innerHTML = 'LESS<i class="fas fa-angle-up"></i>';
  }
});

/* DYNAMIC MENU FOR MOBILE */

const menuContainer = document.querySelector('.menu_list_container');
const menuIcon = document.querySelector('.menu_icon');

menuIcon.addEventListener('click',function(){
  menuContainer.classList.toggle('show_menu');
});

