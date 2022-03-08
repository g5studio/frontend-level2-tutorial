addEventListener('click', event => resolveAction(event.target.id));

function resolveAction(id) {
    if (id.includes('practice')) {
        document.getElementById('article').style.display = 'none';
    }
    switch (id) {
        case 'example-if':
            showHint(`
            <p>以下範例將示範如何製作基本判斷式。</P>
            <p class = "text-warning mt-1">
                function conditionalStatementExample(color = 'black') {<br>
                    &nbsp&nbsp  if (color === 'black') {<br>
                    &nbsp&nbsp&nbsp&nbsp    console.log('黑');<br>
                    &nbsp&nbsp  } else {<br>
                    &nbsp&nbsp&nbsp&nbsp    console.log('白')<br>
                    &nbsp&nbsp}<br>
                }
            </p>
            <p class = "text-xs text-hint mt-1">
                點擊開發者工具中的console標籤，呼叫conditionalStatementExample()函數，傳入參數查看結果。
            </P>
            `);
            break;
        case 'example-else-if':
            showHint(`
            <p>以下範例將示範如何搭配else-if實做判斷式。</P>
            <p class = "text-warning mt-1">
                function multipleConditionalStatementExample(color = 'red') {<br>
                    &nbsp&nbsp  if (color === 'red') {<br>
                    &nbsp&nbsp&nbsp&nbsp    console.log('紅色');<br>
                    &nbsp&nbsp  } else if (color === 'blue') {<br>
                    &nbsp&nbsp&nbsp&nbsp   console.log('藍色')<br>
                    &nbsp&nbsp  } else {<br>
                    &nbsp&nbsp&nbsp&nbsp    console.log('黑色')<br>
                    &nbsp&nbsp}<br>
                }
            </p>
            <p class = "text-xs text-hint mt-1">
                點擊開發者工具中的console標籤，呼叫conditionalStatementExample()函數，傳入參數查看結果。
            </P>
            `);
            break;
        case 'example-while':
            showHint(`
            <p>以下範例將示範如何透過while迴圈，重複執行程式。</P>
            <p class = "text-warning mt-1">
                function whileExample(maximum) {<br>
                    &nbsp&nbsp while (maximum > 0) { <br>
                    &nbsp&nbsp&nbsp&nbsp console.log(maximum);<br>
                    &nbsp&nbsp&nbsp&nbsp maximum = maximum - 1;<br>
                    &nbsp&nbsp  } <br>
                }
            </p>
            <p class = "text-xs text-hint mt-1">
                點擊開發者工具中的console標籤，呼叫whileExample()函數，傳入參數查看結果。
            </P>
            `);
            whileExample();
            break;
        case 'example-for':
            showHint(`
            <p>以下範例將示範如何透過for迴圈，重複執行程式。</P>
            <p class = "text-warning mt-1">
                function forExample(maximum) {<br>
                    &nbsp&nbsp for (let i = 1; i <= maximum; i = i + 1) { <br>
                    &nbsp&nbsp&nbsp&nbsp     console.log(i);<br>
                    &nbsp&nbsp  } <br>
                }
            </p>
            <p class = "text-xs text-hint mt-1">
                點擊開發者工具中的console標籤，呼叫forExample()函數，傳入參數查看結果。
            </P>
            `);
            break;
        case 'practice-if':
            validateAge(
                +document.getElementById('practice-if-input-year').value,
                +document.getElementById('practice-if-input-age').value
            );
            break;
        case 'practice-for':
            findOdds(document.getElementById('practice-for-input').value);
            break;
        case 'practice-timer':
            timer(document.getElementById('practice-timer-input').value);
            break;
    }
}

/**
 * @description 判斷式範例
 */
function conditionalStatementExample(color = 'black') {
    if (color === 'black') {
        console.log('黑');
    } else {
        console.log('白');
    }
}

/**
 * @description 多條件判斷式範例
 */
function multipleConditionalStatementExample(color = 'red') {
    if (color === 'red') {
        console.log('紅色');
    } else if (color === 'blue') {
        console.log('藍色')
    } else {
        console.log('黑色')
    }
}

/**
 * @description 迴圈範例 - while
 */
function whileExample(maximum) {
    while (maximum > 0) {
        console.log(maximum);
        maximum = maximum - 1;
    }
}

/**
 * @description 迴圈範例 - for
 */
function forExample(maximum) {
    for (let i = 1; i <= maximum; i = i + 1) {
        console.log(i);
    }
}

/**
 * @description 練習題 - 檢查年齡
 */
function validateAge(year, age) {
    if (2022 - year !== age) {
        console.log('拒絕');
    } else {
        console.log('通過');
    }
}

/**
 * @description 練習題 - 找出奇數
 */
function findOdds(maximum) {
    var isHaveResult = false;
    for (let current = 0; current <= maximum; current = current + 1) {
        if (current % 2 !== 0) {
            console.log(current);
            isHaveResult = true;
        }
    }
    if (!isHaveResult) {
        console.log('查無結果');
    }
}

/**
 * @description 練習題 - 計時器
 */
function timer(time) {
    for (let i = 0; i < time; i++) {
        setTimeout(function () {
            console.log(i + 1);
        }, 1000 * i);
    }
}

function showHint(hint) {
    document.getElementById('article').style.display = 'inline-block';
    document.getElementById('article').innerHTML = hint;
}
