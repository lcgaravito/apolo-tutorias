fetch('/disponiblesss')
	.then(function(res) {
		return res.json();
	})
	.then(function(data) {
		let result = '<div class="row row-cols-1 row-cols-md-2">';
		data.forEach((tutoria) => {
			result += `            
                <div class="card border-primary mb-3" style="max-width: 18rem;">
                    <div class="card-header">${tutoria.category}</div>
                    <div class="card-body text-primary">
                        <h5 class="card-title">${tutoria.name}</h5>
                        <p class="card-text">Una muy buena tutoria.</p>
                        <a href="#" class="btn btn-primary">Details</a>
                    </div>
                </div>`;
		});
		data.forEach((tutoria) => {
			result += `            
                <div class="card border-primary mb-3" style="max-width: 18rem;">
                    <div class="card-header">${tutoria.category}</div>
                    <div class="card-body text-primary">
                        <h5 class="card-title">${tutoria.name}</h5>
                        <p class="card-text">Una muy buena tutoria.</p>
                        <a href="#" class="btn btn-primary">Details</a>
                    </div>
                </div>`;
		});
		data.forEach((tutoria) => {
			result += `            
                <div class="card border-primary mb-3" style="max-width: 18rem;">
                    <div class="card-header">${tutoria.category}</div>
                    <div class="card-body text-primary">
                        <h5 class="card-title">${tutoria.name}</h5>
                        <p class="card-text">Una muy buena tutoria.</p>
                        <a href="#" class="btn btn-primary">Details</a>
                    </div>
                </div>`;
		});
		result += '</div>';
		document.getElementById('courses').innerHTML = result;
	});