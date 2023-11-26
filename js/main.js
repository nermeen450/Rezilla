let btns = document.querySelectorAll(".control-btns .btn");
let forms = document.querySelectorAll(".filtered > .row");
let filterBtns = document.querySelectorAll(".filter-btns button");
let gallery = document.querySelectorAll(".gallery > div");

console.log(btns, forms, filterBtns, gallery);

btns.forEach((btn) =>{
    btn.addEventListener("click", (e)=>{
        for(let i=0; i<forms.length; i++){
            var ele = forms[i];
            if(ele.dataset.id == e.target.id){
                ele.style.display = "block";
            } else{
                ele.style.display = "none";
            }
        }
        btns.forEach((btn) => {
            btn.classList.remove("active");
        })
        e.target.classList.add("active");
    })
})

filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        for(let i=0; i<gallery.length; i++){
            var ele = gallery[i];
            if(e.target.id === "all"){
                ele.style.display = "block"
            } else if(ele.dataset.filter == e.target.id){
                ele.style.display = "block"
            } else{
                ele.style.display = "none"
            }
        }
        filterBtns.forEach((btn) => {
            btn.classList.remove("active");
        })
        e.target.classList.add("active");
    })
})