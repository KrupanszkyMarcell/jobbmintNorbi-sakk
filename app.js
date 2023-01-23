function colors()
{
    const color = document.querySelectorAll('.square')
    color.forEach(color => {
        getid = color.id
        array = Array.from(getid)
        array.shift()
        mapside = eval(array.pop())
        mapup = eval(array.shift())
        map = mapside + mapup
        if (map % 2 == 0 )
        {
            color.style.backgroundColor = 'rgb(0,0,0)'
        }
        if (map % 2 !== 0)
        {
            color.style.backgroundColor = 'rgb(255,255,255)'
        }
    }
        
        )
}
colors()
function insert() {
    document.querySelectorAll('.square').forEach(square => {
        if (square.classList.contains('pawn')) {
            square.innerHTML = `<img class='allimg allpawn' src="${square.classList[0]}.png" alt="">`;
            square.style.cursor = 'pointer';
        } else {
            square.innerHTML = `<img class='allimg' src="${square.classList[0]}.png" alt="">`;
            square.style.cursor = 'pointer';
        }
    });
}
insert();
