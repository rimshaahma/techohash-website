// ##### preloader ######
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector(".preloader").style.display = "none";
        document.querySelector(".content").style.display = "block";
    }, 5000); // 5000 milliseconds = 5 seconds
});
document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
  
    // Example condition: change background based on scroll position
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) { // Adjust the condition as needed
        content.classList.add('transparent-background');
      } else {
        content.classList.remove('transparent-background');
      }
    });
  });
  // feedback carousel
  const feedbackCarousel = document.querySelector('.feedback-carousel');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;
const totalSlides = document.querySelectorAll('.feedback-slide').length;

function showSlide(index) {
    feedbackCarousel.style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

setInterval(nextSlide, 5000); // Change slide every 5 seconds


// Counter
// Function to animate the counters
function animateCounter(element, target) {
  let start = 0;
  const duration = 2000;
  const stepTime = Math.abs(Math.floor(duration / target));
  
  const timer = setInterval(() => {
    start += 1;
    element.textContent = start;
    if (start >= target) {
      clearInterval(timer);
      element.textContent = target;
    }
  }, stepTime);
}

// Function to observe when the counters come into view
function createObserver() {
  const counters = document.querySelectorAll('.counter');
  const options = {
    threshold: 0.5  // Adjust this value to determine when the counter should start (50% visibility)
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counterElement = entry.target;
        const target = parseInt(counterElement.getAttribute('data-target'));
        animateCounter(counterElement, target);
        observer.unobserve(counterElement); // Stop observing once animated
      }
    });
  }, options);

  counters.forEach(counter => {
    observer.observe(counter);
  });
}

// Function to increase the size of an image on hover
function addHoverEffect() {
  const images = document.querySelectorAll('.total-paral-2 img');

  images.forEach(img => {
    img.addEventListener('mouseover', () => {
      img.style.transform = 'scale(1.2)';  // Increase the image size by 20%
      img.style.transition = 'transform 0.3s ease';  // Smooth transition
    });

    img.addEventListener('mouseout', () => {
      img.style.transform = 'scale(1)';  // Return to original size
    });
  });
}

// Initialize the observer and hover effect on page load
document.addEventListener('DOMContentLoaded', () => {
  createObserver();
  addHoverEffect();
});

// ########### Function to increase the size of all images on hover
  function addHoverEffect() {
    const images = document.querySelectorAll('img');  // Select all images on the website

    images.forEach(img => {
      img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.2)';  // Increase the image size by 20%
        img.style.transition = 'transform 0.3s ease';  // Smooth transition
      });

      img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';  // Return to original size
      });
    });
  }

  // Initialize the observer and hover effect on page load
  document.addEventListener('DOMContentLoaded', () => {
    createObserver();
    addHoverEffect();
  });
// FAQS SECTION
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const toggleSign = question.querySelector('.toggle-sign');

      if (answer.style.display === 'block') {
          answer.style.display = 'none';
          toggleSign.textContent = '+';
          toggleSign.classList.remove('minus');
      } else {
          answer.style.display = 'block';
          toggleSign.textContent = '−';
          toggleSign.classList.add('minus');
      }
  });
});
