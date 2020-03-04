const record = document.getElementById('record');
const shot = document.getElementById('shot');
const hit = document.getElementById('hit');
const dead = document.getElementById('dead');
const enemy = document.getElementById('enemy');
const again = document.getElementById('again');

const play = {
    record: 0,
    shot: 0,
    hit: 0,
    dead: 0,

    set updateData(data){
        this[data] += 1;
        this.render();
    },

    render(){
        record.textContent = this.record;
        shot.textContent = this.shot;
        hit.textContent = this.hit;
        dead.textContent = this.dead;
    },
    
}

const show = {
    hit(){

    }, 

    miss(target){
        this.changeClass(target, 'miss');
    },

    dead(){
        
    },

    changeClass(target, value){
        target.className = value;
        
    }
}

let doubleClicked;

const fire = (event) => {
    const target = event.target;

    if(doubleClicked == target){
        console.log('clicked twise');
    }else{
        show.miss(target);
        play.updateData = 'shot';
    }
    
    doubleClicked = event.target;
}

const init = () => {
    enemy.addEventListener('click', fire);
}

init()

