addEventListener('click', event => resolveAction(event.target.id));

function resolveAction(id) {
    if (id.includes('practice')) {
        document.getElementById('article').style.display = 'none';
    }
    switch (id) {
        case 'example-function':
            showHint(`
            <p>以下範例將示範如何宣告函式並回傳值。</P>
            <p class = "text-warning mt-1">
                function getUserName(name = 'William') {<br>
                    &nbsp&nbsp var userName = name;<br>
                    &nbsp&nbsp userName = 'User:' + name;<br>
                    &nbsp&nbsp return userName;<br>
                }<br>
            </p>
            <p class = "text-xs text-hint mt-1">點擊開發者工具中的console標籤，呼叫getUserName()函數。</P>
            `);
            break;
    }
}

function showHint(hint) {
    document.getElementById('article').style.display = 'inline-block';
    document.getElementById('article').innerHTML = hint;
}
