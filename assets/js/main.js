const appartHotelPatio = document.querySelector('[data-apart-otel="patio"]');
const appartHotelStreet = document.querySelector('[data-apart-otel="street"]');

if (appartHotelPatio && appartHotelStreet) {
  const apartHotelBlagoustrojstvo = document.querySelector('.project__img img');
  appartHotelPatio.addEventListener('click', function(e) {
    e.preventDefault();
    apartHotelBlagoustrojstvo.src = './assets/images/apart-otel-blagoustrojstvo/apart-otel-blagoustrojstvo-patio.jpg'
  })

  appartHotelStreet.addEventListener('click', function(e) {
    e.preventDefault();
    apartHotelBlagoustrojstvo.src = './assets/images/apart-otel-blagoustrojstvo/apart-otel-blagoustrojstvo-street.jpg'
  })

}