

const carasual = document.querySelector(".abcd");

const leftBtn = document.querySelector("._2FXJFa._37BSX");

const rightBtn = document.querySelector("._2FXJF._37BSX");

const list = document.querySelector("._7zD0J");

const onClickRight = ()=>{
    carasual.scrollTo(list.scrollWidth, 0);
        rightBtn.Style.opacity = 0;
      leftBtn.Style.opacity=1;
};

 const onclickLeft = ()=>{
   carasual.scrollTo(list.scrollWidth, 0);
   rightBtn.Style.opacity = 0;
   leftBtn.Style.opacity=1;
};


const carasual2 = document.querySelector(".cont-14-type");

const leftBtn2 = document.querySelector(".cont-14-a-l");

const rightBtn2 = document.querySelector(".cont-14-a");

const list2 = document.querySelector(".cont-14-ul");

const onClickRight2 = ()=>{
    carasual2.scrollTo(list2.scrollWidth, 0);
        rightBtn2.Style.opacity = 0;
      leftBtn2.Style.opacity=1;
};

 const onclickLeft2 = ()=>{
   carasual2.scrollTo(list2.scrollWidth, 0);
   rightBtn2.Style.opacity = 1;
   leftBtn2.Style.opacity=0;
};

console.log(onclickLeft2);