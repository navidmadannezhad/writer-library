/* به نام خداوند جان و خرد. کزین اندیشه برتر نگذرد */

class TypeWriter{
    constructor({element, str, speed, state, direction}){
        this.element = element;
        this.str = str;
        this.speed = speed;
        this.state = state;
        this.direction = direction;

        this.strCompleted = false;
        //this.cursor = '|';
    }

    init(){
        this.makeElementEmpty();
        this.setElementProperties();

            if(this.state == 'onPageLoad'){
                document.load = this.writeWord();

            }else if(this.state == 'onPageScroll'){
                window.addEventListener('scroll', () => {
                    if(window.scrollY + window.innerHeight > this.element.offsetTop + this.element.offsetHeight && !this.strCompleted){
                        this.writeWord();
                        this.writerCompleted = true;
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
