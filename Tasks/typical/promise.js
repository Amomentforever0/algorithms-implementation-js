(() => {
    const url = 'https://swapi.co/api/films/';

    class DataService {
        constructor(dataUrl) {
            this.dataUrl = dataUrl;
        }

        makeRequest() {
            return fetch(this.dataUrl);
        }

        async getData() {
            try {
                const response = await this.makeRequest();
                const json = await response.json();
                return json.results[0];
            } catch(e) {
                return new Error();
            }
        }
    }

    const dataService = new DataService(url);

    dataService.getData().then((data)=>console.log(data));
})();


(() => {
    let debounce = (ms) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, ms);
        })
    };

    async function retreiveTimers() {
        let a = debounce(1000);
        let b = debounce(1000);
        let c = debounce(1000);
        let d = debounce(1000);

        await Promise.all([a, b, c, d]);

        console.log('all done');
    }

    retreiveTimers();
})();


(() => {
    const friends = fetch('users')
        .then((users) => {
            const promisesList = users.map((user) => {
                return fetch('user');
            });

            return Promise.all(promisesList);
        })
        .then((users) => {
            return users;
        })
        .catch((error) => {console.log(error)});
})();

(() => {
    function* asynGetter() {
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 500);
        });
    };
})();