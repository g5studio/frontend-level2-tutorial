var memo = {
    title: '',
    content: '',
};

var todoList = {};

var todoLength = 0;

/**
 * @description todo新增鈕hover監聽
 */
document.getElementById('add-todo').addEventListener('mouseover', function ({ target }) {
    target.innerHTML = `+<div class = 'tooltip'>新增<div>`;
});

document.getElementById('add-todo').addEventListener('mouseleave', function ({ target }) {
    target.innerHTML = `+`;
});

document.addEventListener('click', function ({ target: { id } }) {
    if (id.includes('todo-items')) {
        removeTodo(id);
    } else {
        switch (id) {
            case 'form-save': save(); break;
            case 'form-edit': edit(); break;
            case 'add-todo': addTodo(); break;
        }
    }
});

/**
 * @description 控制文字輸入區塊高度，超出300px後出現滾動條
 */
function onContentChanged(element) {
    element.style.height = "40px";
    element.style.height = `${element.scrollHeight}px`;
    element.style.overflow = element.scrollHeight > 300 ? 'auto' : 'hidden';
}

/**
 * @description 未輸入代辦事項時禁用新增鈕
 */
function onAddItemChanged() {
    if (document.getElementById('add-item').value) {
        document.getElementById('add-todo').removeAttribute('disabled');
    } else {
        document.getElementById('add-todo').setAttribute('disabled', true);
    }
}

/**
 * @description 儲存備忘錄
 */
function save() {
    memo.content = document.getElementById('memo-content').value;
    memo.title = document.getElementById('memo-name').value;
    endEdit();
}

/**
 * @description 切換編輯模式
 */
function edit() {
    document.getElementById('memo-edit-title').textContent = `編輯備忘錄-${memo.title || '無標題'}`;
    document.getElementById('memo-edit').classList.remove('d-none');
    document.getElementById('memo-edit').classList.add('d-flex');
    document.getElementById('form-save').classList.remove('d-none');
    document.getElementById('form-edit').classList.add('d-none');
    document.getElementById('memo').classList.remove('d-flex');
    document.getElementById('memo').classList.add('d-none');
    document.getElementById('memo-name').value = memo.title;
    document.getElementById('memo-content').value = memo.content;
}

/**
 * @description 結束編輯
 */
function endEdit() {
    document.getElementById('memo-edit').classList.remove('d-flex');
    document.getElementById('memo-edit').classList.add('d-none');
    document.getElementById('form-save').classList.add('d-none');
    document.getElementById('form-edit').classList.remove('d-none');
    document.getElementById('memo').classList.remove('d-none');
    document.getElementById('memo').classList.add('d-flex');
    document.getElementById('memo-title').textContent = memo.title || '無標題';
    document.getElementById('memos').value = memo.content;
}

/**
 * @description 新增代辦事項
 */
function addTodo() {
    const TodoItem = document.getElementById('add-item').value;
    todoLength = todoLength + 1;
    todoList[`todo-items-${todoLength}`] = TodoItem;
    document.getElementById('todolist-preview').insertAdjacentHTML('beforeend', `
    <li id="preview-items-${todoLength}" class = "d-flex flex-row align-items-center">
        ${TodoItem}
        <button id="todo-items-${todoLength}" type="button" class="btn btn-warning text-lgx todo-btn">-</button>
    </li>
    `);
    document.getElementById('todolist').insertAdjacentHTML('beforeend', `
    <li class = "d-flex flex-row align-items-center" id="items-${todoLength}">
        <input id = "item-${todoLength}" type = "checkbox">
        <label for = "item-${todoLength}">
            ${TodoItem}
        </label>
    </li>`);
    document.getElementById('add-item').value = '';
    document.getElementById('add-todo').setAttribute('disabled', true);
    document.getElementById('add-todo').innerHTML = '+';
}

/**
 * @description 移除代辦事項
 */
function removeTodo(key) {
    delete todoList[key];
    document.getElementById('todolist-preview')
        .removeChild(document.getElementById(key.replace('todo', 'preview')));
    document.getElementById('todolist')
        .removeChild(document.getElementById(key.replace('todo-', '')));
    todoLength = todoLength - 1;
}