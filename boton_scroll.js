
const d=document,
      w=window;
export  function scroll(btn){
    const $scrolBtn=d.querySelector(btn)

    w.addEventListener("scroll",e=>{
        //operador de cortocircuito.
        let scrolltop=w.pageYOffset  || d.documentElement.scrollTop;

        if(scrolltop>400){
            $scrolBtn.classList.remove("hidden");
        }
        else{
            $scrolBtn.classList.add("hidden")
        }

    });
//este evento nos va a permitir que nuestra pagina regrese a su posicion inicial.
    d.addEventListener("click",(e)=>{
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior:"smooth",
                top:0,

            });         
        }
    });

}
