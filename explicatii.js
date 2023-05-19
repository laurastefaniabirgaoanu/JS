let x = 3; // se poate schimba
const y = 3; // nu se poate schimba

// Exemplu schimbare date din constanta
  // Cazul in care constanta este un obiect
  const obj = {
    name: "ion",
  };

  obj.name = "mitica"; // asignare alta valoare
  console.log(obj); // afisam obiectul

  // Cazul in care constanta este un array
  const array = [
    { id: 1, name: "test" },
    { id: 2, name: "test2" },
  ];
  // array[0] -> primul obiect ( cel cu id 1 )
  array[0].name = "schimbat" // schimbam valoarea proprietatii name de la obiectul 0 ( primul obiect )
  console.log(array); // afisarea array
  

/// ### Explicatii
    // 1. Creare obiect cu proprietatile id si name
    //// Explicatii ex 1
    // id si name sunt proprietati
    // 1 si pizza sunt valorile proprietatilor
    // mancare1 -> este un obiect
    // obiectul este definit doar intre arcolade {} 
    const mancare1 = {
        id: 1,
        name: 'pizza'
    };
    console.log(mancare1);

    // 2. Creare array cu 2 obiecte -> obiect care contine proprietatiile id si name
    //// Explicatii ex 2
    // array-ul este un sir de numere, obiecte, string-uri etc
    // in array delimitam valorile, obiectele cu o virgula simpla ( , )
    const mancare2 = [
        // 1 obiect -> care are 2 proprietati
        {id:1, name:'mancare'}, 
        {id:2, name:'sala'}
    ];
    console.log(mancare2);

    // 3. Creare array numere ( 3 )
    //// Explicatii ex 3
    // sir simplu de numere delimitat de virgula
    const numere = [1,2,3];
    console.log(numere);

    // 4. Creare array string-uri ( 3 )
    //// Explicatii ex 4
    // Vezi mai jos "TIPURI DE STRING"
    const strings = ["Ana", "Maria", "Elena"];
    console.log(strings);


// # TIPURI DE STRING
// "nume" -> string ( double quote )
// 'nume' -> string ( single quote )
// Exemple: 
const nume1 = "nume1";
const nume2 = 'nume2';
console.log(nume1);
console.log(nume2);

    // Exemple concatenare string
    // `nume${x}` -> string ( string cu concatenare )
    // "nume" + variabila -> string ( string cu concatenare )
    // 'nume' + variabila -> string ( string cu concatenare )
    // `nume${x}` + `nume${x}` -> string ( string cu concatenare )

    // Hint 1: 
    // poti concatena:
    // string cu string
    // string cu numere
    // obiectele si array-urile nu se concateneaza prin acest mod
    // Hint 2:
    // un obiect sau un array nu se poate concatena cu un string/numar etc

    // Exemple:
    const nume3 = `nume3 ${nume1}`;
    const nume4 = "nume4" + nume1;
    const nume5 = 'nume5' + nume1;
    const nume6 = `nume6 ${nume1}` + `nume7 ${nume1}`;
    console.log(nume3);
    console.log(nume4);
    console.log(nume5);
    console.log(nume6);


// Consistenta datelor ( necesar la array de obiecte )
    // Explicatie:
    // -> obiectele unui array trebuie intotdeuna sa aiba aceleași proprietati
    // EX:

    // Corect
    const arrayObj = [
        {id: 1, name: "doi"},
        {id: 2, name: "trei"}
    ]

    // Gresit
    const arrayObj2 = [
        {id: 1, name: "doi"},
        {id: 2}
    ]

    // Varianta corecta - array multi dimensional
    const arrayObj3 = [
        {
            columns: {
                first: "id",
                second: "name"
            },
            values: {
                key1: 1,
                key2: "name"
            }
        }
    ]



