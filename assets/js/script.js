$(document).ready(function() {
    $(".burger").click(function() {
        $(".nav-panel__content").toggleClass("nav-panel__content_active")
        $(".nav-panel__item").toggleClass("nav-panel__item_active")
        $(".burger").toggleClass("burger_cancel")
        $(".nav-panel__social-network").toggleClass("nav-panel__social-network_active")
    });
    $('.home__arrow-left').click(function (){
        // 3
        if($('.home__item_2').hasClass('hide_item') && $('.home__item_3').hasClass('hide_item')){
            $('.home__item_1').toggleClass('hide_item');
            $('.home__item_3').toggleClass('hide_item');
            return;
        }
        // 2
        if($('.home__item_1').hasClass('hide_item') && $('.home__item_2').hasClass('hide_item')){
            $('.home__item_3').toggleClass('hide_item');
            $('.home__item_2').toggleClass('hide_item');
            return;
        }
        // 1
        if($('.home__item_1').hasClass('hide_item') && $('.home__item_3').hasClass('hide_item')){
            $('.home__item_2').toggleClass('hide_item');
            $('.home__item_1').toggleClass('hide_item');
            return;
        }
    });
    $('.home__arrow-right').click(function (){
        // 1
        if($('.home__item_2').hasClass('hide_item') && $('.home__item_3').hasClass('hide_item')){
            $('.home__item_1').toggleClass('hide_item');
            $('.home__item_2').toggleClass('hide_item');
            return;
        }
        // 2
        if($('.home__item_1').hasClass('hide_item') && $('.home__item_3').hasClass('hide_item')){
            $('.home__item_2').toggleClass('hide_item');
            $('.home__item_3').toggleClass('hide_item');
            return;
        }
        // 3
        if($('.home__item_1').hasClass('hide_item') && $('.home__item_2').hasClass('hide_item')){
            $('.home__item_3').toggleClass('hide_item');
            $('.home__item_1').toggleClass('hide_item');
            return;
        }
    });
});

console.log('Init!');

// inputmask
const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

new window.JustValidate('.form', {
  rules: {
    tel: {
      required: true,
      function: () => {
        const phone = telSelector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      }
    }
  },
  colorWrong: '#ff0f0f',
  messages: {
    name: {
      required: 'Введите имя',
      minLength: 'Введите 3 и более символов',
      maxLength: 'Запрещено вводить более 15 символов'
    },
    email: {
      email: 'Введите корректный email',
      required: 'Введите email'
    },
    tel: {
      required: 'Введите телефон',
      function: 'Здесь должно быть 10 символов без +7'
    }
  },
  submitHandler: function(thisForm) {
    let formData = new FormData(thisForm);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    thisForm.reset();
  }
})

// inputmask
// const form = $('.request__form');
// const tel = $('.tel')
// const inputMask = new Inputmask('+7 (999) 999-99-99');
// inputMask.mask(tel)

// new window.JustValidate('.request__form', {
//     rules: {
//         name: {
//             required: true,
//             minLength: 6,
//         },
//         company: {
//             required: true,
//             minLength: 6,
//         },
//         tel: {
//             required: true,
//             function: () => {
//                 const phone = tel.inputmask.unmaskedvalue();
//                 return Number(phone) && phone.length === 10;
//             }
//         },
//     },
//     messages: {
//         name: {
//             required: 'Введите своё имя',
//             minLength: 'Введите не меньше 6 символов',
//         },
//         company: {
//             required: 'Введите имя компании',
//             minLength: 'Введите не меньше 6 символов',
//         },
//         email: {
//             required: 'Введите почту',
//         },
//         tel: {
//             required: 'Введите свой номер телефона',
//             function: 'Напишите 10 символов телефона',
//         },
//     },
//     submitHandler: function(thisForm) {
//         let formData = new FormData(thisForm);

//         let xhr = new XMLHttpRequest();

//         xhr.onreadystatechange = function() {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     console.log('Отправлено');
//                 }
//             }
//         }
//         xhr.open('POST', 'mail.php', true);
//         xhr.send(formData);

//         thisForm.reset();
//     }
// })