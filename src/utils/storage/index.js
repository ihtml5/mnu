const ulocalStorage = window.localStorage;
const ussesionStorage = window.sessionStorage;
const PREFIEX = 'mnu.storage';
// 如何判断是否存在某个item https://stackoverflow.com/questions/3262605/how-to-check-whether-a-storage-item-is-set
class Storage {
	constructor(options) {
		const {
			type,
			message = {
				setItem: '写入',
				getItem: '读取',
				removeAll: '移除所有',
				removeItem: '移除'
			}
		} = options;
		this.type = type;
		this.message = message;
		if (type === 'local') {
			this._storage = ulocalStorage;
		} else if (type === 'session') {
			this._storage = ussesionStorage;
		}
	}
	doItem(func, action) {
		try {
			if (typeof func === 'function') {
				return func();
			}
		} catch (err) {
			this._warn(action);
			return null;
		}
		return true;
	}
	_warn(action) {
		const message = this.message;
		console.warn(`无法${message[action] || ''}${this.type}Storage`);
	}
	setItem(key, value) {
		if (typeof key === 'object') {
			Object.keys(key).forEach((k, index) => {
				this.doItem(() => this._storage.setItem(`${PREFIEX}.${k}`, JSON.stringify(key[k])), 'setItem');
			});
		} else {
			this.doItem(() => this._storage.setItem(`${PREFIEX}.${key}`, JSON.stringify(value)), 'setItem');
		}
	}
	has(...keys) {
		return keys.every((key, index) => this._storage.getItem(`${PREFIEX}.${key}`));
	}
	get(...keys) {
		const result = {};
		keys.forEach((key, index) => {
			if (`${this._storage.getItem(`${PREFIEX}.${key}`)}` !== 'null') {
				try {
					result[key] = JSON.parse(this._storage.getItem(`${PREFIEX}.${key}`));
				} catch (err) {
					console.warn(this._warn('getItem'));
				}
			}
		});
		return result;
	}
	getItem(key) {
		return this.doItem(() => JSON.parse(this._storage.getItem(`${PREFIEX}.${key}`)), 'getItem');
	}
	removeAll() {
		this.doItem(() => this._storage.removeAll(), 'removeAll');
	}
	removeItem(...keys) {
		keys.forEach((key, index) => this.doItem(() => this._storage.removeItem(`${PREFIEX}${key}`), 'removeItem'));
	}
}
const createStorage = ({ type }) =>
	new Storage({
		type
    });
    
export { createStorage, PREFIEX };
