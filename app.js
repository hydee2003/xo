let turn = 'x';
let title = document.getElementById('l');
let s = [];
function game(id) {
    let element = document.getElementById(id)
    if (turn == 'x' && element.innerHTML == '') {
        element.innerHTML = 'x';
        turn = 'o';
        title.innerHTML = 'O';
    }
    else if (turn == 'o' && element.innerHTML == '') {
        element.innerHTML = 'o';
        turn = 'x';
        title.innerHTML = 'X';
    }
    winner();
}
function winner() {
    for (let i = 1; i < 10; i++) {
        s[i] = document.getElementById('a' + i).innerHTML;
    }
    if (s[1] == s[2] && s[2] == s[3] && s[1] != '') {
        end(1, 2, 3);
    }

    else if (s[4] == s[5] && s[5] == s[6] && s[4] != '') {
        end(4, 5, 6);
    }

    else if (s[7] == s[8] && s[8] == s[9] && s[7] != '') {
        end(7, 8, 9);
    }

    else if (s[1] == s[4] && s[4] == s[7] && s[1] != '') {
        end(1, 4, 7);
    }

    else if (s[2] == s[5] && s[5] == s[8] && s[2] != '') {
        end(2, 5, 8);
    }

    else if (s[3] == s[6] && s[6] == s[9] && s[3] != '') {
        end(3, 6, 9);
    }

    else if (s[1] == s[5] && s[5] == s[9] && s[1] != '') {
        end(1, 5, 9);
    }

    else if (s[3] == s[5] && s[5] == s[7] && s[3] != '') {
        end(3, 5, 7);
    }
 
}

function end(n1, n2, n3) {
    title.innerHTML = `${s[n1]} winner..!!! `;
    document.getElementById('a' + n1).style.background = '#000';
    document.getElementById('a' + n2).style.background = '#000';
    document.getElementById('a' + n3).style.background = '#000';
}