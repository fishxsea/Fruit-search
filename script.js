const input = document.querySelector('#fruit-search');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function customSort(a, b, alpha) {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
        const aIndex = alpha.indexOf(a[i]);
        const bIndex = alpha.indexOf(b[i]);
        
        if (aIndex !== bIndex) {
            return aIndex - bIndex;
        }
    }
    return a.length - b.length;
}

function search(str, searchAmnt) {
	let results = [];
	for (i of str) {

		if (i.toLowerCase().includes(input.value.toLowerCase())){
			results.push(i)
		} 

		if (results.length === searchAmnt){
			return results
		}
		
		if (input.value === ''){
			results = []
		}
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
	showSuggestions(search(fruit, 8))
}


function useSuggestion(e) {
	input.value = e.target.innerText
	suggestions.innerHTML = ''
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);