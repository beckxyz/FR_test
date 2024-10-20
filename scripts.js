<section id="solutions" class="solutions">
    <div class="container">
        <h2>Our Solutions</h2>
        <div class="solution-boxes">
            <div class="solution" id="jewelry">
                <h3>Jewelry Provenance</h3>
                <p>Revolutionize the jewelry industry with tamper-proof Provenance Tags. Click for more details.</p>
            </div>
            <div class="solution" id="art">
                <h3>Art Provenance</h3>
                <p>Protect the authenticity of fine art using blockchain. Click for more details.</p>
            </div>
            <!-- Add more solutions here -->
        </div>
    </div>
</section>

<script>
    const solutions = document.querySelectorAll('.solution');
    solutions.forEach(solution => {
        solution.addEventListener('click', () => {
            alert('More details coming soon!');
        });
    });
</script>
