var client = contentful.createClient({
    space: '423xe8mllvwt',
    accessToken: 'Zqw9Srt2tF7pourjXDsJiOSUgX3Z0WDDyn-SwJ2R6OY',
});

client.getEntries().then(entries => {
    // log the title for all the entries that have it
    console.log(entries);
    let blog = document.getElementById('blog');

    entries.items.forEach(entry => {
        //console.log(entry.fields.body);
        let converter = new showdown.Converter();
        let text = entry.fields.text;
        let body = converter.makeHtml(text);
        let html = `
        <h1 class = "blog-header">${entry.fields.header}</h1>
        <div class="blog-image-container">
        <img class="blog-image" src='${entry.fields.image.fields.file.url}'>
        </div>
        
    <div class = "blog-text">${body}</div>
      `;
        blog.innerHTML += html;
    });
});