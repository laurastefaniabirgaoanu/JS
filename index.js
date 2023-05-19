console.log(persons);

// 1. Folosire find // cautare persoana cu id 4
// find returneaza tot obiectul gasit
// find itereaza array-ul (adica trece prin fiecare obiect)
// deci, trebuie definit un nume ca si obiect pentru referinta atunci cand find ajunge la acel obiect
const searchedPerson = persons.find(person => parseInt(person.id) === 4);
console.log(searchedPerson);

// 2. Folosire some // cautare persoana cu id 4
// some returneaza doar true sau false ( daca a fost gasit sau nu )
const personExist = persons.some(person => parseInt(person.id) === 4);
console.log(personExist);

// metoda de a verifica pentru a putea rula alt cod in functie de raspunsul daca exista sau nu
// ex:
if (personExist)
{
  console.log("Exista aceasta persoana");
}

// 3. Folosire forEach // afisare nume complet de la fiecare persoana
persons.forEach(person => {

    let personName = person.lastname + ' ' + person.firstname;
    console.log(personName);
    
});

