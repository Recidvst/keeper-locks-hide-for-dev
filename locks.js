(function (unlock) {
  
  const devList = ['.dev', '.test', '.staging'];
  const locks = [...document.getElementsByTagName('keeper-lock')]; // array from collection
  const location = window.location.href;
   
  if ( devList.some( dev => location.includes(dev) ) ) { // url contains a dev string
  
    locks.forEach(function(lock) { // hide
      lock.style.display = 'none';
      lock.style.visibility = 'hidden';
    });
  
  };
  
}());
