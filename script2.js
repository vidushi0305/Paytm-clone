const carasual = document.querySelector(".cont-14-type");

const leftBtn = document.querySelector(".cont-14-a-l");

const rightBtn = document.querySelector(".cont-14-a");

const list = document.querySelector(".cont-14-ul");

const onClickRight2 = ()=>{
    carasual.scrollTo(list.scrollWidth, 0);
        rightBtn.Style.opacity = 0;
      leftBtn.Style.opacity=1;
};

 const onclickLeft2 = ()=>{
   carasual.scrollTo(list.scrollWidth, 0);
   rightBtn.Style.opacity = 0;
   leftBtn.Style.opacity=1;
};