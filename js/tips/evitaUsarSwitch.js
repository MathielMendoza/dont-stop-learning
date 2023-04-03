const adversario = 'Hulk2';
let lokiIf = '';
let lokiSwitch = '';

//if => else if => else
if (adversario === 'Iron-Man') {
	lokiIf = 'Magneto';
} else if (adversario === 'Hulk') {
	lokiIf = 'Thanos';
} else if (adversario === 'Thor') {
	lokiIf = 'Odin';
} else {
	lokiIf = 'Loki';
}
console.log('if => :', lokiIf);

//switch
switch (adversario) {
	case "Iron-Man":
		lokiSwitch = 'Magneto';
		break;
	case "Hulk":
		lokiSwitch = 'Thanos';
		break;
	case "Thor":
		lokiSwitch = 'Odin';
		break;
	default:
		lokiSwitch = 'Loki';
}
console.log('switch => :', lokiSwitch);


// Object.keys()
const LOKI_DISFRACES = {
	'Iron-Man': 'Magneto',
	Hulk: 'Thanos',
	Thor: 'Odin',
};

const LOKI_DEFAULT_DISFRAZ = 'Loki';
const lokiObject = LOKI_DISFRACES[adversario] || LOKI_DEFAULT_DISFRAZ;

console.log('Object => :', lokiObject);
