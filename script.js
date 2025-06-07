document.getElementById('highlight-btn').addEventListener('click', function() {
    document.querySelectorAll('section').forEach(section => {
        section.classList.toggle('highlight');
    });
});// Highlight all sections when the button is clicked
document.getElementById('highlight-btn').addEventListener('click', function() {
    document.querySelectorAll('section').forEach(section => {
        section.classList.toggle('highlight');
    });
});

// Handle contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('form-response').textContent =
            "Thank you for your message! We'll get back to you soon.";
        contactForm.reset();
    });
}

// Partners slider logic
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('#partners .slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
    
        // Example: Add event listeners for next/prev buttons if they exist
        const nextBtn = document.getElementById('partners-next');
        const prevBtn = document.getElementById('partners-prev');
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
        // Show the first slide initially
        showSlide(currentSlide);
    });

// Interactive testimonial Q&A
const sendBtn = document.getElementById('send-question');
const questionInput = document.getElementById('client-question');
const answerDiv = document.getElementById('client-answer');
if (sendBtn && questionInput && answerDiv) {
    sendBtn.addEventListener('click', function() {
        const q = questionInput.value.trim().toLowerCase();
        let answer = '';
        if (!q) {
            answer = 'Please enter your question.';
        } else if (q.includes('location') || q.includes('where')) {
            answer = 'We are located at 123 Storage Lane, Nairobi, Kenya.';
        } else if (q.includes('contact') || q.includes('phone')) {
            answer = 'You can contact us at info@ngumbau.com or call 0111817186.';
        } else if (q.includes('hours') || q.includes('open')) {
            answer = 'We are open 24/7 for all customers!';
        } else if (q.includes('insurance')) {
            answer = 'Yes, all stored items are covered by our comprehensive insurance policy.';
        } else if (q.includes('price') || q.includes('cost')) {
            answer = 'Please contact us for a personalized quote based on your needs.';
        } else {
            answer = "Thank you for your question! We'll get back to you soon.";
        }
        answerDiv.textContent = answer;
    });
    questionInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            sendBtn.click();
            e.preventDefault();
        }
    });
}