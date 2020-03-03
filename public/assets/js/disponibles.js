fetch('http://localhost:3000/categorias')
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        let result = '';
        data.forEach((category) => {
            result += `<a class="btn btn-outline-primary btn-lg" href="/disponibles/${category}" role="button">${category}</a>`;
        });
        document.getElementById('categories').innerHTML = result;
    });