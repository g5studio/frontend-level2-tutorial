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
    }
}

function showHint(hint) {
    document.getElementById('article').style.display = 'inline-block';
    document.getElementById('article').innerHTML = hint;
}
