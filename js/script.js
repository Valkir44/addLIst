{
    const addItems = document.querySelector('.add-items');
    const itemList = document.querySelector('.cats');
    const items = JSON.parse(localStorage.getItem('items')) || [];


    const title = document.querySelector('.list-title');


// Function to add our cat name from input.
    function addItem(e) {
        // Prevent from reloading the page after submit.
        e.preventDefault();
        const text = (this.querySelector('[name="item"]')).value;
        // const idLi = (this.querySelector('[data-index]')).value;
        console.log(this);
        const item = {
            text,
            // will prevent from checking item by default
            done: false
        };

        // push our obj to array
        items.push(item);

        templateList(items, itemList);
        localStorage.setItem('items', JSON.stringify(items));

        // clear input value
        this.reset();
    }


// function to build HTML
// "cats = []" set by default to prevent breaking JS if we forgot something to pass there it will loop over empty array
    function templateList(cats = [], catsList) {
        catsList.innerHTML = cats.map((cat, i) => {
            return `
            <li id="${i}">
                <div>
                    <input class="checkbox" type="checkbox" data-index="${i}" id="item${i}" ${cat.done ? 'checked' : ''}/>
                    <label class="label" for="item${i}">${cat.text}</label>
                </div>
                <button class="delete" >X</button>
            </li>
        `;
        }).join('');
        const idLi = (document.querySelectorAll(i));
        console.log(idLi);
    }

    function toggleDone(e) {
        if (!e.target.matches('input')) return;
        const element = e.target;
        const index = element.dataset.index;
        console.log(element);
        items[index].done = !items[index].done;
        localStorage.setItem('items', JSON.stringify(items));
        templateList(items, itemList);
    }

    function deleteBtn(e) {
        if (!e.target.matches('button')) return;
        const element = e.target.parentElement;
        const index = element.dataset.index;
        const ulList = e.currentTarget;

        ulList.removeChild(element);

        console.log(element);
        console.log(ulList);
        console.log(items);
        JSON.parse(localStorage.getItem('items')).forEach(item => {
            console.log(item);

            return item;

        });

        localStorage.setItem('items', JSON.stringify(items));
        // templateList(items, itemList);
    }

    addItems.addEventListener('submit', addItem);
    itemList.addEventListener('click', toggleDone);
    itemList.addEventListener('click', deleteBtn);

    templateList(items, itemList);


    title.innerHTML = letters(title.textContent);

    function letters(word) {
        return [...word].map(letter => `<span>${letter}</span>`).join('');
    }


}


