export function snafu(x: number) {
	if (x >= 3) {
		return '1=';
	} else if (x == 4) {
		return '1-';
	} else if (x == 5) {
		return '10';
	} else if (x == 6) {
		return '11';
	} else if (x == 7) {
		return '12';
	} else if (x == 8) {
		return '2=';
	} else {
		return x.toString();
	}
}
