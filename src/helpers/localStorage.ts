type Key = string;
type Read<T> = string | {} | T[] | number | boolean | undefined;
/**
 * Register an item via key and value in local storage
 * @param  {Key} key
 * @param  {any} data
 * @returns {void} retrun
 */
export function store(key: Key, data: any): void {
	if (!window.localStorage || !key) {
		return;
	}
	localStorage.setItem(key, JSON.stringify(data));
}
/**
 * Get an item in local storage db
 * @param  {Key} key
 * @returns {Read<any>}
 */
export function read(key: Key): Read<any> {
	if (!window.localStorage || !key) {
		return;
	}
	const item: any = localStorage.getItem(key);
	if (!item) {
		return;
	}

	const parse = JSON.parse;
	try {
		return parse(item);
	} catch (error) {
		return parse(`"${item}"`);
	}
}
/**
 * Remove an item in local storage db
 * @param  {Key} key
 * @returns {void}
 */
export function remove(key: Key): void {
	if (!window.localStorage || !key) {
		return;
	}

	localStorage.removeItem(key);
}
