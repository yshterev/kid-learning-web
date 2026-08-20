const facts = [
    "Plovdiv is one of the oldest continuously inhabited cities in Europe — people have lived there for thousands of years.",
    "In ancient times, Plovdiv was called Philippopolis, named after King Philip II of Macedon (Alexander the Great’s father).",
    "The Ancient Theatre of Plovdiv was built by the Romans and can still seat thousands of people for concerts today.",
    "Nebet Tepe is a hill in Plovdiv with ruins from Thracian times — long before the Romans arrived.",
    "The Old Town of Plovdiv is famous for its colorful houses from the Bulgarian National Revival period.",
    "Under the Ottoman Empire, Plovdiv was an important trading city connecting Europe and Asia.",
    "Plovdiv has seven hills, and people sometimes call it 'the city of the seven hills' — like Rome.",
    "In 2019, Plovdiv was named a European Capital of Culture."
];
const factText = document.getElementById("fact");
const randomIndex = Math.floor(Math.random() * facts.length);
const selectedFact = facts[randomIndex];
factText.textContent = selectedFact;