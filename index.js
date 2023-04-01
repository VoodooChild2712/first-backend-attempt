const http = require("http");

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'aplication/json'})

	const music = [
		{
			id: 1,
			name: "laura",
			author: "Damas Gratis",
		},
		{
			id: 2,
			name: "Asi era ella",
			author: "Cristian Castro",
		},
		{
			id: 3,
			name: "Muchachos",
			author: "La Mosca",
		},
	];

    response.write(JSON.stringify(music))

	response.end();
});

server.listen(7000);
console.log("escuchando");
