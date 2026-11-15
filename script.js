
let events = [
    {name: "Coding", category: "Technical", date: "2026-12-10"},
    {name: "Dance", category: "Cultural", date: "2026-12-15"},
    {name: "Cricket", category: "Sports", date: "2026-12-20"},
    {name: "Hackathon", category: "Technical", date: "2026-12-25"}
];

function display() {

    let search = document.getElementById("search").value.toLowerCase();
    let cat = document.getElementById("category").value;
    let date = document.getElementById("date").value;
    let sort = document.getElementById("sort").value;

    let result = events.filter(e =>
        e.name.toLowerCase().includes(search) &&
        (cat == "All" || e.category == cat) &&
        (date == "" || e.date == date)
    );

    result.sort((a, b) =>
        sort == "asc" ? a.date.localeCompare(b.date)
                      : b.date.localeCompare(a.date)
    );

    let output = "";

    result.forEach(e => {
        output += `<div class="card">
            <h3>${e.name}</h3>
            <p>${e.category}</p>
            <p>${e.date}</p>
        </div>`;
    });

    document.getElementById("events").innerHTML = output;

    document.getElementById("msg").innerText =
        result.length == 0 ? "No Results Found" : "";
}

// Update without refreshing
document.querySelectorAll("input, select").forEach(x =>
    x.addEventListener("input", display)
);

document.querySelectorAll("select").forEach(x =>
    x.addEventListener("change", display)
);

display();
