document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('title');
    const changeTextBtn = document.getElementById('changeTextBtn');
    const changeColorBtn = document.getElementById('changeColorBtn');
    const toggleVisibilityBtn = document.getElementById('toggleVisibilityBtn');
    const content = document.getElementById('content');
    const list = document.getElementById('list');
    const addItemBtn = document.getElementById('addItemBtn');

    // Change text content
    changeTextBtn.addEventListener('click', function() {
        content.textContent = 'The text has been changed!';
    });

    // Change color
    changeColorBtn.addEventListener('click', function() {
        content.style.color = content.style.color === 'blue' ? '#333' : 'blue';
    });

    // Toggle visibility
    toggleVisibilityBtn.addEventListener('click', function() {
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });

    // Add new list item
    addItemBtn.addEventListener('click', function() {
        const newItem = document.createElement('li');
        newItem.textContent = `Item ${list.children.length + 1}`;
        list.appendChild(newItem);
    });
});
