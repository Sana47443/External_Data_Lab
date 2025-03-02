document.addEventListener('alpine:init', () => {
    Alpine.data('nameGeneratorData', () => ({
        currentName: '',
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
        }
    }));
});
