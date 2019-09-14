(() => {
    window.onload = () => {
        console.log('Window is loaded \n');
        console.log('Application ready...');

        let currentPlayer = Math.random() > 0.5 ? 'x' : 'o';

        const $$ = (selector, element = null) => {
            return element ? element.querySelectorAll(selector) : document.querySelectorAll(selector);
        }

        const $ = (selector, element = null) => {
            return element ? element.querSelector(selector) : document.querySelector(selector);
        }

        const addListener = (el, listener, cb) => {
            el.addEventListener(listener, cb);
        }

        const removeListener = (el, listener, cb) => {
            el.removeEventListener(el, listener, cb);
        }

        const appContainer = $('#app-container');
        const gameContainer = $('#game-container');
        const takeCells = () => {
            return $$('.board-container>span');
        };

        const createElement = (el) => {
            return document.createElement(el);
        };

        const initBoard = () => {
            let i = 0;
            let boardContainer = createElement('div');
            boardContainer.classList.add('board-container');
            while(i<9) {
                let cell = createElement('span');
                cell.classList.add('cell');
                boardContainer.appendChild(cell);
                i++;
            }

            gameContainer.append(boardContainer);
        };  
        
        const isWinCase = (values) => {
            
            for(let i = 0; i<values.length; i++) {
                if(
                    (values[0] === 'o' && values[1] === 'o' && values[2] === 'o') ||
                    (values[0] === 'x' && values[1] === 'x' && values[2] === 'x') ||
                    (values[0] === 'o' && values[3] === 'o' && values[6] === 'o') ||
                    (values[0] === 'x' && values[3] === 'x' && values[6] === 'x') ||
                    (values[0] === 'o' && values[3] === 'o' && values[6] === 'o') ||
                    (values[0] === 'x' && values[3] === 'x' && values[6] === 'x') ||
                    (values[0] === 'x' && values[3] === 'x' && values[6] === 'x') 
                ) {
                    return true;
                } else if (values[i] !== '') {
                    return [false, 'draft'];
                }
            }

            return false;
        };

        const checkGameState = () => {
            let cells = Array.from(takeCells());
            let values = [];
            for(let cell of cells) {
                values.push(cell.innerHTML);
            }

            if (isWinCase(values)) {
                alert('Winner is: ', currentPlayer);
            }
        };

        initBoard();

        addListener($('.board-container'), 'click', (e) => {
            if (!e.target.classList.contains('cell')) {
                return false;
            }

            e.target.innerHTML = currentPlayer;
            currentPlayer = currentPlayer === 'x' ? 'o' : 'x';

            checkGameState();
        });

        const divs = $$('div', appContainer);
        const firstParagraph = Array.from($$('p', Array.from(divs)[0]))[0];
        addListener(firstParagraph, 'click', (e) => {
            console.log(firstParagraph.closest('div'));
            const elementToInsert = createElement('div');
            elementToInsert.classList.add('added');
            elementToInsert.insertAdjacentText('beforeend', 'hello');
            appContainer.insertAdjacentElement('beforeend', elementToInsert);
        });

        console.log(firstParagraph);
        console.log(divs);

        const callback = (mutations, observer) => { console.log('Tree is mutating...', mutations)};
        const observer = new MutationObserver(callback);

        observer.observe(appContainer, {
            subtree: true,
            attributes: true,
            childList: true,
        });
    };
})();