addEventListener('click', event => resolveAction(event.target.id));

const User = {
    name: 'William',
    age: 18
}

updateCurrentUserData();

function resolveAction(id) {

    if (id.includes('practice')) {
        document.getElementById('article').style.display = 'none';
    }
    switch (id) {
        case 'example-constructor':
            showHint(`
            <p>以下範例將示範如何透過new宣告空物件，並賦予屬性。</P>
            <p class = "text-warning mt-1">
                function exampleObjectConstructor() {<br>
                &nbsp&nbsp const Obj = new Object(); <br>
                &nbsp&nbsp Obj.name = 'William'; <br>
                &nbsp&nbsp Obj.age = 18; <br>
                &nbsp&nbsp return Obj; <br>
                }
            </p>
            <p class = "text-xs text-hint mt-1">
                點擊開發者工具中的console標籤，呼叫exampleObjectConstructor()查看結果。
            </P>
            `);
            break;
        case 'example-literal':
            showHint(`
            <p>以下範例將示範如何透過{}直接指派物件，並賦予屬性。</P>
            <p class = "text-warning mt-1">
                function exampleObjectLiteral() {<br>
                &nbsp&nbsp return {<br>
                &nbsp&nbsp&nbsp name: 'William',<br>
                &nbsp&nbsp&nbsp age: 18<br>
                &nbsp&nbsp }<br>
                }
            </p>
            <p class = "text-xs text-hint mt-1">
                點擊開發者工具中的console標籤，呼叫exampleObjectLiteral()查看結果。
            </P>
            `);
            break;
        case 'example-read-property':
            showHint(`
            <p>以下範例將示範如何讀取物件特定屬性。</P>
            <p class = "text-warning mt-1">
                function exampleGetUserName() {<br>
                &nbsp&nbsp  return User.name;<br>
                }
            </p>
            <p class = "text-xs text-hint mt-1">
                點擊開發者工具中的console標籤，呼叫exampleGetUserName()查看結果。
            </P>
            `);
            break;
        case 'example-read-property-dynamic':
            showHint(`
            <p>以下範例將示範如何透過變數動態讀取物件屬性。</P>
            <p class = "text-warning mt-1">
                function  exampleGetUserInfo(key) {<br>
                &nbsp&nbsp return User[key];<br>
                }
            </p>
            <p class = "text-xs text-hint mt-1">
                點擊開發者工具中的console標籤，呼叫exampleGetUserInfo()，並傳入欄位名稱，查看結果。
            </P>
            `);
            break;
        case 'example-modify-property':
            showHint(`
            <p>以下範例將示範如何修改物件特定屬性的值。</P>
            <p class = "text-warning mt-1">
                function updateUserName() {<br>
                &nbsp&nbsp  User.name = name;<br>
                }
            </p>
            <p class = "text-xs text-hint mt-1">
                點擊開發者工具中的console標籤，呼叫updateUserName()，傳入新名稱，查看畫面上方使用者資訊。
            </P>
            `);
            break;
        case 'example-modify-property-dynamic':
            showHint(`
            <p>以下範例將示範如何透過變數動態修改物件屬性的值。</P>
            <p class = "text-warning mt-1">
                function  updateUserInfo(key) {<br>
                &nbsp&nbsp User[key] = value;<br>
                }
            </p>
            <p class = "text-xs text-hint mt-1">
                點擊開發者工具中的console標籤，呼叫updateUserInfo()，並傳入欄位名稱與對應的值，查看畫面上方使用者資訊。
            </P>
            `);
            break;
        case 'example-delete-property':
            showHint(`
            <p>以下範例將示範如何刪除物件的屬性。</P>
            <p class = "text-warning mt-1">
                function  deleteUserInfo(key) {<br>
                &nbsp&nbsp delete User[key];<br>
                }
            </p>
            <p class = "text-xs text-hint mt-1">
                點擊開發者工具中的console標籤，呼叫deleteUserInfo()，並傳入欄位名稱，查看畫面上方使用者資訊。
            </P>
            `);
            break;
    }
}

function deleteUserInfo(key) {
    delete User[key];
    updateCurrentUserData();
}

/**
 * @description 屬性更新範例
 */
function updateUserInfo(key, value) {
    User[key] = value;
    updateCurrentUserData();
}

/**
 * @description 屬性動態更新範例
 */
function updateUserName(name) {
    User.name = name;
    updateCurrentUserData();
}

/**
 * @description 物件動態取值範例
 */
function exampleGetUserInfo(key) {
    return User[key];
}

/**
 * @description 物件取值範例
 */
function exampleGetUserName() {
    return User.name;
}

/**
 * @description 物件建購式宣告範例
 */
function exampleObjectConstructor() {
    const Obj = new Object();
    Obj.name = 'William';
    Obj.age = 18;
    return Obj;
}

/**
 * @description 物件實字宣告範例
 */
function exampleObjectLiteral() {
    return {
        name: 'William',
        age: 18
    }
}

/**
 * @description 更新當前使用者資訊
 */
function updateCurrentUserData() {
    document.getElementById('current-user').textContent = JSON.stringify(User);
}

function showHint(hint) {
    document.getElementById('article').style.display = 'inline-block';
    document.getElementById('article').innerHTML = hint;
}
