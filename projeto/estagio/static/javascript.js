(function(win, doc) {
    (function(win, doc) {
        'use strict';
        //Ajax do Formulário
        if (doc.querySelector('#form')) {
            let form = doc.querySelector('#form');

            function sendForm(event) {
                event.preventDefault();
                let data = new FormData(form);
                let ajax = new XMLHttpRequest();
                let token = doc.querySelectorAll('input')[0].value;
                ajax.open('POST', form.action);
                ajax.setRequestHeader('X-CSRF-TOKEN', token);
                ajax.onreadystatechange = function() {
                    if (ajax.status === 200 && ajax.readyState === 4) {
                        let result = doc.querySelector('#result');
                        result.innerHTML = 'Postagem realizada!';
                        result.classList.add('alert');
                        result.classList.add('alert-success');
                        setTimeout("location.href = '/';", 2000);


                    }
                }
                ajax.send(data);
            }
            form.addEventListener('submit', sendForm, false);
        }
    })(window, document);
})(window, document)