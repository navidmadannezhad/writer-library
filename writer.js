/* به نام خداوند جان و خرد. کزین اندیشه برتر نگذرد */

class TypeWriter{
    constructor({element, speed, state, direction}){
        this.element = element;
        this.str = element.innerHTML;
        this.speed = speed;
        this.state = state;
        this.direction = direction;

        this.writterCompleted = false;
        this.cursor = '<span>|</span>';
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

    // setBlinkingCursor(){
    //     console.log(this.blinkingCursor());
    //     this.str = this.str + this.blinkingCursor();
    // }

    blinkingCursor(){
        let cursorElement = document.createElement('span');
        cursorElement.classList.add('blinking-cursor');
        cursorElement.innerHTML = '|';
        return cursorElement;
    }

    //use the dom parser, console the created element to see how it is diplayed in console and how to add class and content to it
    // outerHTML of the new element must be placed inside the innerHTML of the render text

    writeWord(){
        let strLength = this.str.length;
        for(let i = 0; i < strLength; i++){
            setTimeout(()=>{
                this.element.innerHTML = this.element.innerHTML + this.str.charAt(i);
            }, this.speed*i);
        }
        setTimeout(() => {
            this.element.appendChild(this.blinkingCursor());
        }, strLength*this.speed);
    }

   
}
