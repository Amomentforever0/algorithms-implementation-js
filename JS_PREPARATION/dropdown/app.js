const users = [ 
    {
        id: 2,
        name: 'Dwight Schrute',
        title: 'AARM'
      },
      {
        id: 3,
        name: 'Pam Beesly',
        title: 'Receptionist'
      },
      {
        id: 4,
        name: 'Jim Halpert',
        title: 'Salesman'
      },
      {
        id: 5,
        name: 'Kevin Malone',
        title: 'Accountant'
      },
      {
        id: 6,
        name: 'Toby Flenderson',
        title: 'HR Manager'
      },
      {
        id: 7,
        name: 'Ryan Howard',
        title: 'Temp'
      },
      {
        id: 8,
        name: 'Kelly Kapoor',
        title: 'Customer Service',
      },
      {
        id: 9,
        name: 'Creed Bratton',
        title: 'Unknown'
      }    
];

(() => {
    window.onload = () => {
        const $ = (selector, element=document) => {
            return element.querySelector(selector);
        }

        const $$ = (selector, element=document) => {
            return element.querySelectorAll(selector);
        }

        const aria = $('#content');

        const toggleDropdown = () => {
            const dropdown = $('.structure');
            dropdown.classList.toggle('hide');

            const input = $('.input');
            input.classList.toggle('input__active');
        };

        const dropdownIcon = () => {
            const dropdown = document.createElement('span');
            dropdown.innerHTML = `<svg width="14px" height="7px" viewBox="0 0 10 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Delivery" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Transactions-(Landing)" transform="translate(-1360.000000, -29.000000)" fill="#CDCFD3" fill-rule="nonzero">
                    <g id="Group-4" transform="translate(1360.000000, 29.000000)">
                        <polygon id="Shape" points="0 0 5 5 10 0"></polygon>
                    </g>
                </g>
                </g>
            </svg>`;
            return dropdown;
        }

        const selectOption = (param) => {
            const placeholder = $('.placeholder');
            placeholder.textContent = param;
            placeholder.classList.add('input__selected');
            toggleDropdown();
        };

        const generateInput = () => {
            const input = document.createElement('div');
            const inputPlaceholder = document.createElement('div');
            const placeholder = document.createElement('p');

            input.classList.add('input');
            input.addEventListener('click', toggleDropdown);
            inputPlaceholder.classList.add('input__placeholder');
            placeholder.classList.add('placeholder');
            placeholder.textContent = 'Select User';

            inputPlaceholder.appendChild(placeholder);
            inputPlaceholder.appendChild(dropdownIcon());
            input.appendChild(inputPlaceholder);

            return input;
        };

        const generateDropdown = (options) => {
            const dropdown = document.createElement('div');
            dropdown.classList.add('structure', 'hide');

            options.users.forEach(user => {
                const { id, name, title } = user;

                const option = document.createElement('div');
                option.addEventListener('click', () => selectOption(name));
                option.setAttribute('id', id);

                const h5 = document.createElement('h5');
                h5.textContent = name;

                const h3 = document.createElement('h3');
                h3.textContent = title;

                option.appendChild(h5);
                option.appendChild(h3);
                dropdown.appendChild(option);
            });

            return dropdown;
        }

        const initializeDropDown = (options = {}) => {
            const content = document.createElement('div');
            const input = generateInput();
            const dropdown = generateDropdown(options);

            content.appendChild(input);
            content.appendChild(dropdown);
            $(options.el).appendChild(content);
        };

        initializeDropDown({
            users: users,
            el: '#content'
        });
    };
})(users);