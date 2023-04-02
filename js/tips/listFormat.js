const peoples = ['John', 'Paul', 'George', 'Ringo'];

const listPeoples = peoples
	.slice(0, -1)
	.join(', ')
	.concat(' y ' + peoples.slice(-1));

console.log({listPeoples});

const listPeoplesFormatEs = new Intl.ListFormat('es', {type: 'conjunction'}).format(peoples);
const listPeoplesFormatEn = new Intl.ListFormat('en', {type: 'disjunction'}).format(peoples);

console.log({listPeoplesFormatEs});
console.log({listPeoplesFormatEn});
