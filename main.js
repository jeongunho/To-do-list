'use strict';

const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('.todo-list');

todoInput.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    if (todoInput.value === '') {
      alert('내용을 입력해주세요');
    } else {
      generateTodo(todoInput.value);
      todoInput.value = '';
    };
  }
});

const generateTodo = (todo) => {
  const li = document.createElement('li');
  const likeSpan = generateLike();
  const itemSpan = generateItem(todo);
  const manageSpan = generateManage();
  li.appendChild(likeSpan);
  li.appendChild(itemSpan);
  li.appendChild(manageSpan);
  todoList.appendChild(li);
}

const generateLike = () => {
  const span = document.createElement('span');
  span.classList.add('todo-like');
  const icon = document.createElement('i');
  icon.classList.add('material-icons', 'like');
  icon.innerText = 'favorite_border';
  icon.addEventListener('click', () => {
    icon.innerText === 'favorite_border' ? icon.innerText = 'favorite' : icon.innerText = 'favorite_border';
  });
  span.appendChild(icon);
  return span;
}
const generateItem = (todo) => {
  const span = document.createElement('span');
  span.classList.add('todo-item');
  span.innerText = todo;
  return span;
}
const generateManage = () => {
  const span = document.createElement('span');
  span.classList.add('todo-manage');
  const icon1 = document.createElement('i');
  icon1.classList.add('material-icons', 'check');
  icon1.innerText = 'check';
  const icon2 = document.createElement('i');
  icon2.classList.add('material-icons', 'clear');
  icon2.innerText = 'clear';
  icon1.addEventListener('click', (e) => {
    const li = e.target.parentNode.parentNode;
    if (li.classList.contains('done')) {
      li.classList.remove('done');
    } else {
      li.classList.add('done');
    };
  });
  icon2.addEventListener('click', (e) => {
    const li = e.target.parentNode.parentNode;
    todoList.removeChild(li);
  })
  span.appendChild(icon1);
  span.appendChild(icon2);
  return span;
}

const deleteAll = document.querySelector('.delete');
deleteAll.addEventListener('click', () => {
  removeAllChild(todoList);
})

const removeAllChild = (ul) => {
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }
}