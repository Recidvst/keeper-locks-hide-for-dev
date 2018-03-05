(function (unlock) {

  const locks = [...document.getElementsByTagName('keeper-lock')]; // array from collection
  const location = window.location.href;
  
  if ( location.includes('.test') ) { // test env
  
    locks.forEach(function(lock) { // hide
      lock.style.display = 'none';
      lock.style.visibility = 'hidden';
    });
  
  };
  
}());
