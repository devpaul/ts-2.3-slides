interface Mappable {
	map(method: (value: number) => number);
}

export function double<T extends Mappable = Float32Array>(list: T): T {
	return list.map(value => 2 * value);
}

double(new Float32Array([0, 1, 2]));
double<Array<number>>([0, 1, 2]);
