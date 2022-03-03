addEventListener('click', event => resolveAction(event.target.id));

/**
 * @description 練習題使用全域變數
 */
var userName;

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
        case 'example-function-IIFE':
            showHint(`
            <p>以下範例將示範如何宣告一個無須呼叫可立即執行的函式。</P>
            <p class = "text-warning mt-1">
                (function () {<br>
                    &nbsp&nbsp  console.log('立即執行函式，宣告時直接執行，後續無法重新使用');<br>
                }());
            </p>
            <p class = "text-xs text-hint mt-1">點擊開發者工具中的console標籤，查看執行結果，立即執行函式無須也無法呼叫。</P>
            `);
            (function () {
                console.log('立即執行函式，宣告時直接執行，後續無法重新使用');
            }());
            break;
        case 'example-catch-element':
            showHint(`
            <p>以下範例將示範如何透過id取得唯一的HTML物件。</P>
            <p class = "text-warning mt-1">
                function getInputElement() { <br>
                    &nbsp&nbsp  return document.getElementById('example-element-input'); <br>
                }<br>
                console.log(getInputElement());
            </p>
            <p class = "text-xs text-hint mt-1">點擊開發者工具中的console標籤，查看id為example-element-input的HTML物件。</P>
            `);
            console.log(getInputElement());
            break;
        case 'example-get-element-value':
            showHint(`
                <p>以下範例將示範取得目標input的HTML物件後如何獲得input的內容。</P>
                <p class = "text-warning mt-1">
                    console.log(getInputElement().value);
                </p>
                <p class = "text-xs text-hint mt-1">點擊開發者工具中的console標籤，查看取得的輸入框的內容。</P>
                `);
            console.log(getInputElement().value);
            break;
        case 'example-set-element-value':
            showHint(`
                <p>以下範例將示範取得目標input的HTML物件後如何修改input的內容。</P>
                <p class = "text-warning mt-1">
                    getInputElement().value = '修改後';
                </p>
                <p class = "text-xs text-hint mt-1">查看輸入框的內容是否變動。</P>
                `);
            getInputElement().value = '修改後';
            break;
        case 'practice-user-name': setUserNameInput(); break;
        case 'practice-reset-user-name': resetUserNameInput(); break;
    }
}

/**
 * @description 普通函式範例
 */
function getUserName(name = 'William') {
    var userName = name;
    userName = 'User:' + name;
    return userName;
}

/**
 * @description 抓取HTMLElement範例
 */
function getInputElement() {
    return document.getElementById('example-element-input');
}

/**
 * @description 練習題 - 函式宣告
 */
function setUserName(name) {
    userName = name;
}

/**
 * @description 練習題 - 修改使用者名稱
 */
function setUserNameInput() {
    const HtmlElement = document.getElementById('practice-user-name-input');
    const UserName = document.getElementById('practice-user-name-content');
    UserName.textContent = HtmlElement.value;
}

/**
 * @description 練習題 - 清除使用者名稱
 */
function resetUserNameInput() {
    const HtmlElement = document.getElementById('practice-user-name-input');
    const UserName = document.getElementById('practice-user-name-content');
    HtmlElement.value = null;
    UserName.textContent = '無';
}

function showHint(hint) {
    document.getElementById('article').style.display = 'inline-block';
    document.getElementById('article').innerHTML = hint;
}
