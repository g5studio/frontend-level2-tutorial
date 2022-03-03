addEventListener('click', event => resolveAction(event.target.id));

function resolveAction(id) {
    if (id.includes('practice')) {
        document.getElementById('article').style.display = 'none';
    }
    switch (id) {
        case 'example-variable':
            identityNo = 'A123456789';
            showHint(`
            <p>以下範例將示範如何宣告一個名為identityNo的變數，並放入一組身分證號碼。</P>
            <p class = "text-warning mt-1">var identityNo = 'A123456789';</p>
            <p class = "text-xs text-hint mt-1">點擊開發者工具中的console標籤，並輸入變數名稱查看資料。</P>
            `);
            break;
        case 'example-console':
            showHint(`
            <p>以下範例將示範如何檢視程式運行結果。</P>
            <p class = "text-warning mt-1">console.log('test');</p>
            <p class = "text-xs text-hint mt-1">點擊開發者工具中的console標籤，輸入方程式碼查看結果。</P>
            `);
            break;
        case 'example-scope':
            showHint(`
            <p>以下範例將透過下方函式示範函式範疇的變數，無法在該區塊外部被呼叫。</P>
            <p class = "text-warning mt-1">
                function getAnimalType() { <br>
                    &nbsp&nbsp var animal = 'dog'; <br>
                    &nbsp&nbsp console.log(animal); <br>
                }
            </p>
            <p class = "text-xs text-hint mt-1">點擊開發者工具中的console標籤，並呼叫animal變數。</P>
            `);
            scopeExample();
            break;
        case 'practice-variable': userName = 'William'; break;
        case 'practice-console': printHelloWorld(); break;
    }
}

function printHelloWorld() {
    console.log('Hello World!');
}

function scopeExample() {
    var animal = 'dog';
    console.log(animal);
}

function showHint(hint) {
    document.getElementById('article').style.display = 'inline-block';
    document.getElementById('article').innerHTML = hint;
}
