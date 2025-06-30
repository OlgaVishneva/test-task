export function copy() {
    const copyElements = document.querySelectorAll('[data-copy]');

    copyElements.forEach(function (element) {
        element.addEventListener('click', function (event) {
            event.stopPropagation();
            event.preventDefault();

            const textToCopy = this.getAttribute('data-copy');
            const tempInput = document.createElement('input');
            tempInput.value = textToCopy;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');

            document.body.removeChild(tempInput);
            alert('Скопировано: ' + textToCopy);
        });
    });
}