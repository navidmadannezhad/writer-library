/* به نام خداوند جان و خرد. کزین اندیشه برتر نگذرد */

class TypeWriter{
    constructor({element, speed, state, direction}){
        this.element = element;
        this.str = element.innerText;
        this.speed = speed;
        this.state = state;
        this.direction = direction;

        this.writterCompleted = false;
        //this.cursor = '|';
    }

    init(){
        this.makeElementEmpty();
        this.setElementProperties();

            if(this.state == 'onPageLoad'){
                document.load = this.writeWord();

            }else if(this.state == 'onPageScroll'){
                window.addEventListener('scroll', () => {
                    if(window.scrollY + window.innerHeight >= this.element.offsetTop + this.element.offsetHeight && !this.writterCompleted){
                        this.writeWord();
                        this.writterCompleted = true;
                    }
                })
            }
    }

    setElementProperties(){
        this.element.style.direction = this.direction;
    }

    makeElementEmpty(){
        this.element.innerText = null;
    }

    // addBlinkingCursor(){

    // }

    writeWord(){
        let strLength = this.str.length;
        for(let i = 0; i < strLength; i++){
            setTimeout(()=>{
                this.element.innerHTML = this.element.innerHTML + this.str.charAt(i);
            }, this.speed*i);
        }
    }

   
}
