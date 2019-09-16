(() => {
    initializeApplication = () => {
        console.log('Application initialized..');

        const validationEngineClasses = {
            valid: 'validation-valid',
            invalid: 'validation-invalid'
        }

        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

        const $$ = (selector, element = document) => {
            return element.querySelectorAll(selector);
        };

        const $ = (selector, element = document) => {
            return element.querySelector(selector);
        }

        const fields = $$('form>[name]');
        const fieldsArray = Array.from(fields);

        const checkPasswordValue = (value) => {
            return strongRegex.test(value);
        };

        const validateInput = (input, options) => {
            if(input.value.length < options.minimalLength) {
                input.classList.add(validationEngineClasses.invalid);
            } else {
                input.classList.remove(validationEngineClasses.invalid);
            }

            if(input.attributes.type.value === 'password') {
                if (!checkPasswordValue(input.value)) {
                    
                }
            }
        }

        const validateForm = () => {
            const inputs = Array.from($$('form>input'));
            
            for(let input of inputs) {
                validateInput(input, {
                    notEmpty: true,
                    minimalLength: 8
                });
            }
        };

        $('form').addEventListener('click', (e) => {
            e.preventDefault();
            if(e.target.attributes.type.value === 'submit') {
                validateForm();
            }
        });
    };

    window.onload = () => {
        initializeApplication();
    };
})();