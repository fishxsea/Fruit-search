const input = document.querySelector('#fruit-search');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	let count = 0
	for (i of str) {
		if (i.toLowerCase().includes(input.value.toLowerCase()) && input.value.length === 1 && count < 8){
			results.push(i)
			count += 1
		}
		if (i.toLowerCase().includes(input.value.toLowerCase()) && input.value.length > 1){
			results.push(i)
		} 
	}
	if (input.value === ''){
		results = []
	}
	return results;
}

function showSuggestions(results) {
	suggestions.innerHTML = ''
	for (i of results){
		const listItem = document.createElement('li')
		listItem.textContent = i
		suggestions.appendChild(listItem)
	}
}

function searchHandler(e) {
	showSuggestions(search(fruit))
}


function useSuggestion(e) {
	input.value = e.target.innerText
	suggestions.innerHTML = ''
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);