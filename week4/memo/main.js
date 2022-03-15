var memo = {
    title: '',
    content: ''
};

document.addEventListener('change', function ({ target: { value, id } }) {
    if (id) {
        switch (id) {
            case 'memo-name':
            case 'memo-content':
                if (!!value) {
                    document.getElementById('form-cancel').removeAttribute('disabled');
                } else {
                    document.getElementById('form-cancel').setAttribute('disabled', true);
                }
                break;
        }
    }
});

document.addEventListener('click', function ({ target: { id } }) {
    if (id) {
        switch (id) {
            case 'form-save': save(); break;
            case 'form-cancel': endEdit(); break;
            case 'form-edit': edit(); break;
        }
    }
});

function onContentChanged(element) {
    element.style.height = "40px";
    element.style.height = `${element.scrollHeight}px`;
    element.style.overflow = element.scrollHeight > 300 ? 'auto' : 'hidden';
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
    document.getElementById('form-cancel').classList.remove('d-none');
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
    document.getElementById('form-cancel').classList.add('d-none');
    document.getElementById('form-save').classList.add('d-none');
    document.getElementById('form-edit').classList.remove('d-none');
    document.getElementById('memo').classList.remove('d-none');
    document.getElementById('memo').classList.add('d-flex');
    document.getElementById('memo-title').textContent = memo.title || '無標題';
    document.getElementById('memos').value = memo.content;
}