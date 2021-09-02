const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


const showResults = (element) => {
    const box = document.getElementById('box');


    box.innerText = ''; //para limpar a tela

    const result = document.createElement('div');
    result.classList.add('result');
    result.innerText = element.join(',');
    box.appendChild(result);
}

function kata1() {
    let arrResult = [];
    for (let i = 1; i <= 25; i++) {
        arrResult.push(i);
    }

    showResults(arrResult);
    return arrResult;
}

function kata2() {
    let arrResult = [];
    for (let i = 25; i >= 1; i--) {
        arrResult.push(i);
    }

    showResults(arrResult);
    return arrResult;
}

function kata3() {
    let arrResult = [];
    for (let i = -1; i >= -25; i--) {
        arrResult.push(i);
    }

    showResults(arrResult);
    return arrResult;
}

function kata4() {
    let arrResult = [];
    for (let i = -25; i <= -1; i++) {
        arrResult.push(i);
    }

    showResults(arrResult);
    return arrResult;
}

function kata5() {
    let arrResult = [];
    for (let i = 25; i >= -25; i -= 2) {
        arrResult.push(i);
    }

    showResults(arrResult);
    return arrResult;
}

function kata6() {
    let arrResult = [];
    for (let i = 3; i <= 100; i += 3) {
        arrResult.push(i);
    }

    showResults(arrResult);
    return arrResult;
}

function kata7() {
    let arrResult = [];
    for (let i = 7; i <= 100; i += 7) {
        arrResult.push(i);
    }

    showResults(arrResult);
    return arrResult;
}

function kata8() {
    let arrResult = [];
    for (let i = 3; i <= 100; i += 3) {
        arrResult.push(i);
    }

    for (let i = 7; i <= 100; i += 7) {
        arrResult.push(i);
    }

    arrResult.sort(function (a, b) {
        return a - b;
    }).reverse();

    showResults(arrResult);
    return arrResult;

}


function kata9() {
    let arrResult = [];
    for (let i = 5; i <= 100; i += 10) {
        arrResult.push(i);
    }

    showResults(arrResult);
    return arrResult;
}

function kata10() {
    showResults(sampleArray);
    return sampleArray;
}

function kata11() {
    let arrResult = [];
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 === 0) {
            arrResult.push(sampleArray[i]);
        }
    }

    showResults(arrResult);
    return arrResult;
}

function kata12() {
    let arrResult = [];
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 !== 0) {
            arrResult.push(sampleArray[i]);
        }
    }

    showResults(arrResult);
    return arrResult;
}

function kata13() {
    let arrResult = [];
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 8 === 0) {
            arrResult.push(sampleArray[i]);
        }
    }

    showResults(arrResult);
    return arrResult;
}

function kata14() {
    let arrResult = [];
    for (let i = 0; i < sampleArray.length; i++) {
        arrResult.push(sampleArray[i] ** 2);
    }

    showResults(arrResult);
    return arrResult;
}

function kata15() {
    let result = 0;
    for (let i = 1; i <= 20; i++) {
        result += i;
    }

    showResults([result]);
    return result;
}

function kata16() {
    let result = 0;
    for (let i = 0; i < sampleArray.length; i++) {
        result += sampleArray[i];
    }

    showResults([result]);
    return result;
}

function kata17() {
    let result = sampleArray[0];
    for (let i = 1; i < sampleArray.length; i++) {
        if (result > sampleArray[i]) {
            result = sampleArray[i];
        }
    }

    showResults([result]);
    return result;
}

function kata18() {
    let result = sampleArray[0];
    for (let i = 1; i < sampleArray.length; i++) {
        if (result < sampleArray[i]) {
            result = sampleArray[i];
        }
    }

    showResults([result]);
    return result;
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    const box = document.getElementById('box');
    box.innerText = '';

    for (let i = 0; i < 20; i++) {
        console.log('Entrou');
        const newBox = document.createElement('div');
        newBox.style.width = "100px";
        newBox.style.height = '20px';
        newBox.style.backgroundColor = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
        newBox.innerText = '' + i;
        box.appendChild(newBox);
    }


}

function kataBonus2() {
    const box = document.getElementById('box');
    box.innerText = '';

    for (let i = 0; i < 20; i++) {
        console.log('Entrou');
        const newBox = document.createElement('div');
        newBox.style.width = "" + (Math.random() * (200 - 105) + 105) + 'px'; +"px";
        newBox.style.height = '20px';
        newBox.style.backgroundColor = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
        newBox.innerText = '' + i;
        box.appendChild(newBox);
    }
}

function kataBonus3() {
    const box = document.getElementById('box');
    box.innerText = '';

    for (let i = 0; i < 20; i++) {
        console.log('Entrou');
        const newBox = document.createElement('div');
        newBox.style.width = "" + sampleArray[i] + "px";
        newBox.style.height = '20px';
        newBox.style.backgroundColor = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
        newBox.innerText = '' + i;
        box.appendChild(newBox);
    }
}

function kataBonus4() {
    const box = document.getElementById('box');
    box.innerText = '';

    for (let i = 0; i < 20; i++) {
        console.log('Entrou');
        const newBox = document.createElement('div');
        newBox.style.width = "" + sampleArray[i] + "px";
        newBox.style.height = '20px';

        if (i % 2 === 0) {
            newBox.style.backgroundColor = 'red';
        } else {
            newBox.style.backgroundColor = 'grey';
        }
        newBox.innerText = '' + i;
        box.appendChild(newBox);
    }
}

function kataBonus5() {
    const box = document.getElementById('box');
    box.innerText = '';

    for (let i = 0; i < 20; i++) {
        console.log('Entrou');
        const newBox = document.createElement('div');
        newBox.style.width = "" + sampleArray[i] + "px";
        newBox.style.height = '20px';

        if (sampleArray[i] % 2 === 0) {
            newBox.style.backgroundColor = 'red';
        } else {
            newBox.style.backgroundColor = 'grey';
        }
        newBox.innerText = '' + i;
        box.appendChild(newBox);
    }
}