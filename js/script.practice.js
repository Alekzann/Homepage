
const autoParts = ["silnik", "hamulca", "drzwi", "wydech", "kierownica"];

autoParts.forEach((part, index) => {
    console.log(`${index + 1}     ${part}`);
});


for (const auto of autoParts) {
    console.log(auto);
};



const person = {
    name: "Oleksandr",
    surname: "Riaboshapka",
    age: "31",
    placeOfBirth: "Kharków, Ukraine",
    welcomeMessage: function () {
        console.log(`Siema, mam na imię ${this.name} ${this.surname}, mam aż ${this.age} lat!!! Urodziłem się w miastie ${this.placeOfBirth} i uwielbiam to miasto!!!`);
    }
};
