const tabModel = document.querySelectorAll('.choose-type');
const tabContent = document.querySelectorAll('.model-content');

function TabPick(e) {
    borderModelRemove();
    removeView();

    this.classList.add('border-model');

    const addContent = document.querySelector(`#${this.id}-models`);
    addContent.classList.add('view');
}

function borderModelRemove() {
    tabModel.forEach(item => item.classList.remove('border-model'));
}

function removeView() {
    tabContent.forEach(item => item.classList.remove('view'));
}

tabModel.forEach(item => item.addEventListener('click',TabPick));