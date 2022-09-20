function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

/* TEST FUNZIONI GRUPPO ADD E REMOVE */
let grp = new Group('prova');
let arts = [];
for(let i = 0; i<10; i++) {
    arts[i] = new Item();
    arts[i].checked = getRandomInt(0,2);
    grp.addItem(arts[i]);
}


console.log(grp.items.length);
console.log('-------------------------------------------');
grp.removeItems();
console.log(grp.items.length);
/* TEST PASSED */