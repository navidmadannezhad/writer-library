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

        this.setBlinkingCursor();

    }
 
    setElementProperties(){
        this.element.style.direction = this.direction;
    }

    makeElementEmpty(){
        this.element.innerText = null;
    }

    setBlinkingCursor(){
        this.element.appendChild(this.blinkingCursor());
    }

    blinkingCursor(){
        let cursorElement = document.createElement('span');
        cursorElement.classList.add('blinking-cursor');
        cursorElement.innerHTML = '|';
        return cursorElement;
    }

    writeWord(){
        let textHolder = document.createElement('span');
        this.element.appendChild(textHolder);
        let strLength = this.str.length;

        for(let i = 0; i < strLength; i++){
            setTimeout(()=>{
                textHolder.innerHTML = textHolder.innerHTML + this.str.charAt(i);
            }, this.speed*i);
        }
    }

   
}
