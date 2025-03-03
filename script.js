document.addEventListener('alpine:init', () => {
    Alpine.data('nameGeneratorData', () => ({
        currentName: '',
        posts: [],

        generateName() {
            console.log('🟢 Fetching Name...');
            fetch('https://randomuser.me/api/')
                .then(response => response.json())
                .then(data => {
                    let firstName = data.results[0].name.first;
                    let lastName = data.results[0].name.last;
                    this.currentName = `${firstName} ${lastName}`;
                    console.log('✅ Generated Name:', this.currentName);
                })
                .catch(error => console.error('❌ Error fetching name:', error));
        },

        fetchPosts() {
            console.log('🟡 Fetching Posts...');
            fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
                .then(response => response.json())
                .then(data => {
                    this.posts = data;
                    console.log('✅ Loaded Posts:', this.posts);
                })
                .catch(error => console.error('❌ Error fetching posts:', error));
        }
    }));
});
