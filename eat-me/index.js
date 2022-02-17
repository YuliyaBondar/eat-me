function getRandomNum (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const mainSlider = document.querySelector('.main-slider');
const mainSlides = new Array(6).fill(0).map((_, index) => {
  const mainSlide = document.createElement('A');
  mainSlide.classList.add('main-slide');
  mainSlide.href = '#';
  mainSlide.style.backgroundImage = `url('./assets/main-slider/slide-${index + 1}.jpg')`;
  return mainSlide;
});
mainSlider.append(...mainSlides);

const promoSlider = document.querySelector('.promo-slider');
const promoSlides = new Array(55).fill(0).map(() => {
  const promoSlide = document.createElement('DIV');
  promoSlide.classList.add('promo-slide');
  promoSlide.innerHTML = `
    <div class="visible-part">
      <div class="promo-slide-header">
        <div class="markers-container">
          <div class="yellow-marker">Акция -25%</div>
          <div class="green-marker">Новинка</div>
          <div class="blue-marker">Рекомендуем</div>
        </div>        
        <img class="favorite" src="./assets/svg/heart.svg">
      </div>
      <img class="promo-slide-img" data-lazy='./assets/promo-slider/${getRandomNum(1, 20)}.jpg'>
      <div class="card-row-first">
        <div class="availability">В наличии</div>
        <div class="code">Код: 4744481010818</div>
      </div>
      <p class="card-description">Консервы пастеризованные. Бульон куриный жидкий., 350мл Консервы пастеризованные. Бульон</p>
      <div class="cost-row">
        <div class="cost"><span>500.20 р.</span><span>600.20 р.</span></div>
        <img class="violet-svg" src="./assets/svg/cart+number.svg" alt="cart">
      </div>
      </div>
      <div class="add-container">
        <div class="range-row">
          <span>—</span>
          <span>200</span>
          <span>+</span>
        </div>
        <div class="btn-row">
          <button>Клик в 1 клик</button>
          <button>В корзину</button>
        </div>
      </div>
    `;
  return promoSlide;
});
promoSlider.append(...promoSlides);
    
const addContainers = document.querySelectorAll('.add-container');
const visibleParts = document.querySelectorAll('.visible-part');
const favorites = document.querySelectorAll('.favorite');
const markersContainers = document.querySelectorAll('.markers-container');
const greenMarkers = document.querySelectorAll('.green-marker');
const blueMarkers = document.querySelectorAll('.blue-marker');
promoSlides.forEach((slide, index) => {
  slide.addEventListener('mouseover', () => {
    addContainers[index].style.visibility = 'visible';
    visibleParts[index].style.borderRadius = '22px 0 0';
    visibleParts[index].style.border = '22px 0 0';
    favorites[index].style.visibility = 'visible';
  })
  slide.addEventListener('mouseout', () => {
    addContainers[index].style.visibility = 'hidden';
    visibleParts[index].style.borderRadius = '22px 0';
    favorites[index].style.visibility = 'hidden';
    if (favorites[index].classList.contains('active')) {
      favorites[index].style.visibility = 'visible';
    }
  })
})
favorites.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  })
})
markersContainers[2].style.visibility = 'hidden';
blueMarkers[1].style.visibility = 'hidden';
blueMarkers[3].style.visibility = 'hidden';
greenMarkers[3].style.visibility = 'hidden';
