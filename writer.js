/* به نام خداوند جان و خرد. کزین اندیشه برتر نگذرد */

class Writer{
    constructor(element, str, speed, state){
        this.element = element;
        this.str = str;
        this.speed = speed;
        this.state = state;
        this.writerCompleted = false;
    }

    init(){
        this.makeElementEmpty();

            if(this.state == 'onPageLoad'){
                document.load = this.writeWord();
            }else if(this.state == 'onPageScroll'){
                console.log('found');
                window.addEventListener('scroll', () => {
                    if(window.scrollY + window.innerHeight > this.element.offsetTop + this.element.offsetHeight && !this.writerCompleted){
                        this.writeWord();
                        this.writerCompleted = true;
                        console.log('must');
                    }else{
                        console.log({
                            'scrollY': window.scrollY,
                            'sum': this.element.offsetTop + this.element.offsetHeight
                        });
                    }
                })
            }
    }

    makeElementEmpty(){
        this.element.innerText = null;
    }

    writeWord(){
        let strLength = this.str.length;
        for(let i = 0; i < strLength; i++){
            setTimeout(()=>{
                this.element.innerHTML = this.element.innerHTML + this.str.charAt(i);
            }, this.speed*i);
        }
    }

   
}
