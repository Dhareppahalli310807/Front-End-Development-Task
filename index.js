document.querySelectorAll('.bundle-option input[type="radio"]').forEach((input) => {
    input.addEventListener('change', function () {
        document.querySelectorAll('.bundle-option').forEach((option) => {
            option.querySelector('.details').style.display = 'none';
            option.querySelector('label').style.border = '1px solid #ddd';
        });

        this.closest('.bundle-option').querySelector('.details').style.display = 'block';
        this.closest('label').style.border = '2px solid green';
    });
});
