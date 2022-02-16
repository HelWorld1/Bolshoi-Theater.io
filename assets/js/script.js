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

const validation = new JustValidate('.form');

validation
  .addField('.input-name', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите имя!'
    }
  ])
  .addField('.input-mail', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Email обязателен',
    },
    {
      rule: 'email',
      value: true,
      errorMessage: 'Введите корректный Email',
    },
  ])
  .addField('.input-tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Телефон обязателен',
    },
    {
      rule: 'function',
      validator: function() {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите корректный телефон',
    },
  ]).onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);

    console.log(...formData);

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

    event.target.reset();
  });