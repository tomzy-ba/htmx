import express from "express";

const app = express();


app.use(express.static("public"));

app.use(express.urlencoded({ extended: true}));

app.use(express.json());


// Handle GET requests
app.get("/users", async (req, res) => {
    // const users = [
    //     {id: 1, name: "John Doe"},
    //     {id: 2, name: "Helen"},
    //     {id: 3, name: "Shannon"}
    // ]

    const limit = +req.query.limit || 10;

    const response = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=${limit}`);
    const users = await response.json();

    res.send(`
        <h1>Users</h1>
        <ul>
            ${users.map((user) => `<li>${user.name}</li>`).join("")}
        </ul>
    `);
})


app.listen(3000, () => {
    console.log("3000")
});