const levels = {
    success: 'success',
    warning: 'warning',
    error: 'error',
}

const alertPredefined = {
    succes: 'Succesfully done!',
    warning: 'Warning, please recheck!',
    error: 'Error occured while checking',
}

const options = {
    mountPoint: '#app',
    alertText: alertPredefined.succes,
    level: levels.success
};

// simple alert generator
(() => {
    window.onload = () => {
        const defaultOptions = {
            mountPoint: '#app',
            message: 'Hey, i alert',
            level: 'success'
        };

        const configuration = {...defaultOptions, ...options};
        const $ = (selector, element = document) => element.querySelector(selector);
        const $$ = (selector, element = document) => element.querySelectorAll(selector);
        const appContainer = $(configuration.mountPoint);
        const removeAlert = (e) => { e.target.remove(); console.log(this)}; 

        const generateAlert = (level = defaultOptions, message = defaultOptions.message) => {
            const alert = document.createElement('div');
            alert.textContent = message;
            alert.classList.add('alert', level);
            alert.addEventListener('click', removeAlert);
            return alert;
        }

        appContainer.append(generateAlert(levels.error, alertPredefined.error));

        const samples = [];
        samples.push(generateAlert(levels.success, alertPredefined.success), 
                    generateAlert(levels.warning, alertPredefined.warning), 
                    generateAlert(levels.error, alertPredefined.error));

        const generateRandomAlert = () => {
            const randomAlert = samples[Math.floor(Math.random()+1)];
            return randomAlert;
        };

        setInterval(() => {
            appContainer.append(generateRandomAlert());
        }, 1000);

        const cloneAlert = (node) => {
            let clone = node.cloneNode(node);
            clone.addEventListener('click', removeAlert);
            return clone;
        };
    };
});

// inner html
(() => {
    document.querySelector('ol').innerHTML = '';
});

// removing single element
(() => {
    document.querySelector('table').remove();
});

// handling values from propmpt 
(() => {
    const ul = document.createElement('ul');
    document.body.append(ul);
    let flag = true;
    while(flag) {
        let value = prompt('Enter value to add to the list: ');
        if (String(value).length>0) {
            let li = document.createElement('li');
            li.textContent = String(value);
            ul.append(li);
        } else {
            flag = false;
        }
    }
});

// table sorting, implementing
(() => {
    window.onload = () => {
        const createTable = (columns = ['name', 'surname', 'age'], rows = [['Shakhrat', 'Mikhalko', 25], ['Farkhat', 'Mikhalko', 27]], width = 0, height = 0) => {
            const table = document.createElement('table');
            table.setAttribute('data-grid', 'grid');
            const tbody = document.createElement('tbody');
            const thead = document.createElement('thead');
    
            handleTableHeadClick = (index, dataDef) => {
                sortGrid(index, dataDef);
            }

            table.addEventListener('click', (e) => {
                if (e.target.tagName !== 'TH') return;
                const dataDef = e.target.getAttribute('data-def');
                const index = e.target.cellIndex;
                handleTableHeadClick(index, dataDef);
            });

            const columnRow = document.createElement('tr');

            for(let column of columns) {
                const columnDef = document.createElement('th');
                columnDef.textContent = column;
                columnDef.setAttribute('data-def', column);
                columnRow.append(columnDef);
            }

            thead.append(columnRow);
    
            const buildRows = (rows) => {
                for(let row of rows) {
                    const rowEl = document.createElement('tr');
                    
                    for(let item of row) {
                        const rowDef = document.createElement('td');
                        rowDef.textContent = item;
                        rowEl.append(rowDef);
                    }
        
                    tbody.append(rowEl);
                }

                table.prepend(thead);
                table.append(tbody);
    
                return table;
            }

            return buildRows(rows);
        };

        const table = createTable();
        document.body.append(table);

        const tableRef = document.querySelector('table[data-grid=grid]');
      
        function sortGrid(colNum, type) {
            let tbody = tableRef.querySelector('tbody');
        
            let rowsArray = Array.from(tbody.rows);
        
            // compare(a, b) сравнивает две строки, нужен для сортировки
            let compare;
        
            switch (type) {
                case 'age':
                compare = function(rowA, rowB) {
                    return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
                };
                break;
                case 'name':
                compare = function(rowA, rowB) {
                    return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
                };
                break;
            }
        
            // сортировка
            rowsArray.sort(compare);
        
            tbody.append(...rowsArray);
        }
    };
});

// todo using vanilla js
(() => {
    window.onload = () => {
        const createElement = (el = 'div') => {
            return document.createElement(el);
        }
        
        const container = createElement('div');
        container.className = 'container';
        container.setAttribute('data-def', 'container');
        container.setAttribute('id', 'container');

        const input = createElement('input');
        input.setAttribute('type', 'text');
        container.append(input);

        const button = createElement('button');
        button.classList = 'button button-append';
        button.textContent = 'Add new';

        const validateAndAdd = () => {

            const text = document.querySelector('input[type=text]').value;

            if (!text || text.length === 0) {
                return;
            }

            const p = createElement('p');
            p.textContent = text;
            const closeButton = createElement('span');
            closeButton.textContent = ' Remove';
            closeButton.classList = 'remove';
            p.append(closeButton);

            return container.append(p);
        };

        input.addEventListener('change', validateAndAdd);
        button.addEventListener('click', validateAndAdd);
        container.addEventListener('click', (e) => {
            if (e.target.className === 'remove') {
                e.target.parentNode.remove();
            }
        });

        document.body.append(container);
        document.body.append(button);
    };
});

// tree structure ui from data Object {}
(() => {
    const data = {
        "Рыбы": {
          "форель": {},
          "лосось": {}
        },
  
        "Деревья": {
          "Огромные": {
            "секвойя": {},
            "дуб": {}
          },
          "Цветковые": {
            "яблоня": {},
            "магнолия": {},
            "Рыбы": {
                "форель": {},
                "лосось": {}
              },
        
              "Деревья": {
                "Огромные": {
                  "секвойя": {},
                  "дуб": {}
                },
                "Цветковые": {
                  "яблоня": {},
                  "магнолия": {},
                }
              }
          }
        }
      };

    const createTree = (data) => {
        if (!Object.keys(data).length) return;

        const rootUl = document.createElement('ul');
        
        for(let entrance in data) {
            const li = document.createElement('li');
            
            li.textContent = entrance;
            rootUl.append(li);

            console.table(data[entrance]);

            const subtree = createTree(data[entrance]);

            if (subtree) {
                li.classList = 'subtree';
                li.append(subtree);
            }

        }
        
        return rootUl;
    };

    const createTreeStructure = (container, data) => {
        container.append(createTree(data));
    };

    const container = document.createElement('div');
    container.classList = 'container';

    container.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('subtree')) {
            target.classList.toggle('hidden');
        }
    });

    createTreeStructure(container, data);

    document.body.append(container);
});

// implementing simple tooltip 
(() => {
    let tooltipElem;

    document.onmouseover = function(event) {
      let target = event.target;

      // если у нас есть подсказка...
      let tooltipHtml = target.dataset.tooltip;
      if (!tooltipHtml) return;

      // ...создадим элемент для подсказки

      tooltipElem = document.createElement('div');
      tooltipElem.className = 'tooltip';
      tooltipElem.innerHTML = tooltipHtml;
      document.body.append(tooltipElem);

      // спозиционируем его сверху от аннотируемого элемента (top-center)
      let coords = target.getBoundingClientRect();

      let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
      if (left < 0) left = 0; // не заезжать за левый край окна

      let top = coords.top - tooltipElem.offsetHeight - 5;
      if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
        top = coords.top + target.offsetHeight + 5;
      }

      tooltipElem.style.left = left + 'px';
      tooltipElem.style.top = top + 'px';
    };

    document.onmouseout = function(e) {

      if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
      }
    };
});

(() => {
    window.onload = () => {
        console.log('dom is ready...');

        let tooltipElement;

        const createTooltip = (e) => {
            if (!e.target.dataset.tooltip) return;

            tooltipElement = document.createElement('p');
            tooltipElement.classList.add('tooltip');
            tooltipElement.style.position = 'fixed';
            tooltipElement.style.padding = `${10}px`;
            tooltipElement.style.textTransform = 'uppercase';
            tooltipElement.style.border = '1px solid black';
            tooltipElement.style.borderRadius = '4px';
            tooltipElement.style.transform = 'scale(0)';
            tooltipElement.style.transition = 'ease .5s transform';
            tooltipElement.innerHTML = e.target.dataset.tooltip;

            setTimeout(() => {
                tooltipElement.style.transform = 'scale(1)';
            }, 100);

            document.body.append(tooltipElement);

            const targetCoordinats = e.target.getBoundingClientRect();
            
            let left;
            let top;

            left = targetCoordinats.left + (e.target.offsetWidth - tooltipElement.offsetWidth)/2; 
            if (left < 0) left = 0;

            top = targetCoordinats.top - tooltipElement.offsetHeight - 5;
            if (top < 0) top = targetCoordinats.top + tooltipElement.offsetHeight + 5;

            tooltipElement.style.top = `${top}px`;
            tooltipElement.style.left = `${left}px`;
        };

        const removeTooltip = (e) => {
            if (tooltipElement && e.relatedTarget !== tooltipElement) {    
                tooltipElement.remove();
                tooltipElement = null;
            }
        };

        document.addEventListener('mouseover', createTooltip);
        document.addEventListener('mouseout', removeTooltip);
    };
})();


(() => {
    var validations = {
        required: function(value){
          return value !== '';
        },
        phone: function(value){
          return value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
      );
        },
        email: function(value){
          return value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        }
      }
      function validate() {
        var form = document.getElementById('form'),
            inputsArr = form.querySelectorAll('input'),
            errorMessage = document.querySelector(".ui.error.message"),
            successMessage = document.querySelector(".ui.success.message");
        
        form.addEventListener('submit', function(e){
          var i = 0;
          while (i < inputsArr.length) {
            var attr = inputsArr[i].getAttribute('data-validation'),
                rules = attr ? attr.split(' ') : '',
                parent = inputsArr[i].closest(".field"),
                j = 0;
            while (j < rules.length) {
              if(!validations[rules[j]](inputsArr[i].value)) {
                e.preventDefault();
                
                errorMessage.className = "ui error message";
                errorMessage.innerHTML = "Invalid rule '" + rules[j] + "' for input '" + inputsArr[i].name + "'";
                parent.className = "field error";
                return false;
              }
              errorMessage.className = "ui error message hidden";
              parent.className = "field";
              j++;
            }
            i++;
          }
          e.preventDefault();
          successMessage.className = "ui success message";
          form.outerHTML = "";
          delete form;
        }, false)
      }

      validate();      
})();

// pawn task from Booking solution

(() => {
    const buttons = document.querySelectorAll('button');
    const playButton = buttons[0];
    const stopButton = buttons[1];
    
    const board = document.querySelector('.game');
    const fields = board.querySelectorAll('.field');
    
    const list = Array.from(fields);
    
    let playInterval;
    let isPlaying = false;
    let i = 0;
    
    const startPlay = () => {
        if (!isPlaying) {
            playInterval = setInterval(() => {
                list[i].classList.remove('pawn');
                i++;
                if (i === list.length) {
                    i = 0;
                }
                list[i].classList.add('pawn');
            }, 1000);
            
        }
        
        isPlaying = true;
    }
    
    const stopPlay = () => {
        clearInterval(playInterval);
        isPlaying = false;
    }
    
    board.addEventListener('click', (e) => {
        const target = e.target;
        
        if (target.classList.contains('no-a-field')) {
            return;
        }
        
        for(let k = 0; k<list.length; k++) {
            if (list[k].classList.contains('pawn')) {
                list[k].classList.remove('pawn');
            }
            
            if (list[k] === target) {
                i = k;
            }
        }
        
        target.classList.add('pawn');
        
        stopPlay();
    });
    
    playButton.addEventListener('click', startPlay);
    stopButton.addEventListener('click', stopPlay);
})();