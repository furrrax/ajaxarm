const nameTitle = document.querySelector('.popup__name-title');
const nameInput = document.querySelector('.popup__name-input');

nameInput.addEventListener('focusin', function(e) {
    let length = this.value.length;
    
    nameTitle.style.opacity = '0';

    if (length >= 1) {
        
        nameTitle.style.opacity = '0';
    } 
});

nameInput.addEventListener('focusout', function(e) {
    let length = this.value.length;

    if (length < 1) {
        
        nameTitle.style.opacity = '1';
    }
});

const telTitle = document.querySelector('.popup__tel-title');
const telInput = document.querySelector('.popup__tel-input');

telInput.addEventListener('focusin', function(e) {
    let length = this.value.length;
    
    telTitle.style.opacity = '0';

    if (length >= 1) {
        telTitle.style.opacity = '0';
    } 
});

telInput.addEventListener('focusout', function(e) {
    let length = this.value.length;

    if (length < 1) {
        telTitle.style.opacity = '1';
    }
});

const emailTitle = document.querySelector('.popup__email-title');
const emailInput = document.querySelector('.popup__email-input');

emailInput.addEventListener('focusin', function(e) {
    let length = this.value.length;
    
    emailTitle.style.opacity = '0';

    if (length >= 1) {
        emailTitle.style.opacity = '0';
    } 
});

emailInput.addEventListener('focusout', function(e) {
    let length = this.value.length;

    if (length < 1) {
        emailTitle.style.opacity = '1';
    }
});

const commentTitle = document.querySelector('.popup__comment-title');
const commentInput = document.querySelector('.popup__comment-input');

commentInput.addEventListener('focusin', function(e) {
    let length = this.value.length;
    
    commentTitle.style.opacity = '0';

    if (length >= 1) {
        commentTitle.style.opacity = '0';
    } 
});

commentInput.addEventListener('focusout', function(e) {
    let length = this.value.length;

    if (length < 1) {
        commentTitle.style.opacity = '1';
    }
});