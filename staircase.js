const n = 6;

function staircase(n) {
    var line = Array(n + 1).fill(' ');
    line[n] = '\n';
    for (var i = n - 1; i >= 0; i--) {
        line[i] = '#';
        process.stdout.write(line.join(''));
    }
}

staircase(n);