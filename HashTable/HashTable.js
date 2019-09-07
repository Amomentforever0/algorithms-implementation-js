class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = '';

        if (typeof key === 'string') {
            for(let i = 0; i<key.length; i++) {
                hash += key.charCodeAt(i) + '_hash_value_';
            }
        }

        return hash;
    }

    set(key, value) {
        let address = this._hash(key);

        if(!this.data[address]) {
            this.data[address] = [];
            this.data[address].push([key, value]);
        }
    }

    get(key) {
        let address = this._hash(key);
        let bucket = this.data[address];

        return bucket[0][1] !== undefined ? bucket[0][1] : null;
    }
}

module.exports = HashTable;