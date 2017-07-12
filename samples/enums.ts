enum State {
	Started = 'started',
	Stopped = 'stopped',
}

const node = document.querySelector('input');

if (node.value === State.Started) {
	// do something interesting
}
else if (node.value === State.Stopped) {
	// stop playback
}
