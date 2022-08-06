const projectDatas = [
  {
    featuredImage: './assets/img/001.jpg',
    name: 'Waris Haleem',
    qualification: 'CEO, iAmWaris',
    description:
      'Waris is the CEO, Acts as the CEO and general director of the iAmWaris chain pf companies',
  },
  {
    featuredImage: './assets/img/Waris.jpg',
    name: 'Haji Shams',
    qualification: 'CTO, iAmWaris',
    description:
      'Shams is the CEO, Acts as the CEO and general director of the iAmWaris chain pf companies',
  },
  {
    featuredImage: './assets/img/001.jpg',
    name: 'Waris Haleem',
    qualification: 'CEO, iAmWaris',
    description:
      'Waris is the CEO, Acts as the CEO and general director of the iAmWaris chain pf companies',
  },
  {
    featuredImage: './assets/img/Waris.jpg',
    name: 'Pamela Odeh',
    qualification: 'Product Manager, TIIDELab Initiative',
    description:
      'She has involved herself in sponsoring tech fellowships to train young aspiring developers.',
  },
  {
    featuredImage: './assets/img/001.jpg',
    name: 'Waris Haleem',
    qualification: 'CEO, iAmWaris',
    description:
      'Waris is the CEO, Acts as the CEO and general director of the iAmWaris chain pf companies',
  },
  {
    featuredImage: './assets/img/waris.jpg',
    name: 'Adeyemi Buhari',
    qualification: 'Founder, NovuStack',
    description:
      'Buhari helped introduce innovate for Africa, giving enabling environment to young developer to showcase there skills in engineering technology.',
  },
];

document.querySelector('.keynote-speakers').innerHTML = projectDatas
  .map(
    (data) => `
<div class="speaker">
<div class="speaker-bg"></div>
<img src=${data.featuredImage} alt="speaker" />
<div class="speaker-description">
<h3>${data.name}</h3>
<p class="speaker-qualification">${data.qualification}</p>
<p
>${data.description}</p
>
</div>
</div>
`,
  )
  .join('');

function projects() {
  const speaker = Array.from(document.querySelectorAll('.speaker'));
  if (window.innerWidth > 0) {
    for (let i = 2; i < speaker.length; i += 1) {
      speaker[i].classList.add('hide-show-speaker');
    }
  }
}

projects();

function toggle() {
  document.querySelector('#btn').addEventListener('click', () => {
    const speaker = Array.from(document.querySelectorAll('.speaker'));
    for (let i = 2; i < speaker.length; i += 1) {
      speaker[i].classList.toggle('hide-show-speaker');
    }
    const btn = document.querySelector('.btn');
    if (
      btn.innerHTML
      === 'See More <span> <i class="fa fa-angle-down" aria-hidden="true"></i></span>'
    ) {
      btn.innerHTML = 'LESS <span> <i class="fa fa-angle-up" aria-hidden="true"></i></span>';
    } else {
      btn.innerHTML = 'MORE <span> <i class="fa fa-angle-down" aria-hidden="true"></i></span>';
    }
  });
}
toggle();
