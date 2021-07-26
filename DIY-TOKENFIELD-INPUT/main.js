window.onload = () => {
    const tagContainer = document.querySelector('.tag-container');

    const input = document.querySelector('.tag-container input');

    let tags = [];

    createTag = (label) => {
        const div = document.createElement('div');
        div.setAttribute('class', 'tag');
        const span = document.createElement('span');
        span.innerHTML = label;
        const closeBtn = document.createElement('i');
        closeBtn.setAttribute('class', 'material-icons');
        closeBtn.setAttribute('data-item', label);
        closeBtn.innerHTML = 'close';

        div.appendChild(span);
        div.appendChild(closeBtn);
        return div;
    };

    reset = () => {
        document.querySelectorAll('.tag').forEach(tag => {
            tag.parentElement.removeChild(tag);
        })
    }

    addTags = () => {
        reset();
        tags.slice().reverse().forEach(tag => {
            const input = createTag(tag);
            tagContainer.prepend(input);
        })
    }

    input.addEventListener('keyup', e => {
        if (e.key == 'Enter') {
            tags.push(input.value);
            addTags();
            input.value = '';
        }
        div = document.querySelector('.tag-container');
        div.scrollLeft = div.scrollWidth;
    });

    document.addEventListener('click', e => {
        if (e.target.tagName == 'I') {
            const value = e.target.getAttribute("data-item");
            const index = tags.indexOf(value);
            tags.splice(index, 1);
            addTags();
        }
    })
}
