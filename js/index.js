

// box vars and functions
let Box1Text = document.getElementById('Box1Text');
let Box2Text = document.getElementById('Box2Text');
let Box1 = document.getElementById('Box1');
let Box2 = document.getElementById('Box2');

Box1Text.addEventListener('mouseenter', () => {
    changeBox1Active();
});
Box1Text.addEventListener('mouseleave', () => {
    changeBox1Normal();
});

Box2Text.addEventListener('mouseenter', () => {
    changeBox2Active();
});
Box2Text.addEventListener('mouseleave', () => {
    changeBox2Normal();
});

let changeBox1Active = () => {
    Box1.className = 'Box1Active';
}

let changeBox1Normal = () => {
    Box1.className = 'Box1';
}

let changeBox2Active = () => {
    Box2.className = 'Box2Active';
}

let changeBox2Normal = () => {
    Box2.className = 'Box2';
}