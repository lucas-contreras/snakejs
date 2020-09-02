export default class SnakeObserver {
	constructor() {
		this.observers = [];
	}

	addObserver(observer) {
		this.observers.push(observer);
	}

	removeObserver(observer) {}

	notify(data) {
		this.observers.forEach((observer) => observer.updateInfo(data));
	}
}
