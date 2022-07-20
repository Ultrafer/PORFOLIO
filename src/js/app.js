(function() {

  const myDiv = document.body;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    if(scrollTop > window.innerHeight / 2) {
      document.body.classList.add('theme-light');
    } else {
      document.body.classList.remove('theme-light');
    }

    var trget_height = myDiv.offsetHeight - window.innerHeight;
    var pos_scroll = window.scrollY + window.innerHeight;

    if ( pos_scroll > trget_height) {
      document.body.classList.remove('theme-light');
    };

    var target_div = document.querySelector(".MAYTEA");
    var maytea_pos = target_div.offsetTop;
    var maytea_limit = maytea_pos + target_div.offsetHeight;

    // console.log(maytea_pos);

    if(pos_scroll > maytea_pos && pos_scroll < maytea_limit){

      document.body.classList.add('theme-maytea');
    }else{
      document.body.classList.remove('theme-maytea');
    }

    target_div = document.querySelector(".SEL");
    var selecta_pos = target_div.offsetTop;
    var selecta_limit  = selecta_pos + target_div.offsetHeight;

    if(pos_scroll > selecta_pos && pos_scroll < selecta_limit){
      document.body.classList.add('theme-selecta');
    }else{
      document.body.classList.remove('theme-selecta');
    }





  });


})();
