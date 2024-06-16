document.addEventListener('DOMContentLoaded', function() {
    const welcomeTextElement = document.querySelector('.welcomeText');
    const texts = ['#SoarHighCpE', '#ChooseBSCpE', '#AIWarriors', 'Join Our Events!', 'Be a Part of SCpES'];
    let currentIndex = 0;

    function updateText() {
      // Remove the animation class
      welcomeTextElement.style.animation = 'none';
      
      // Trigger reflow to restart the animation
      welcomeTextElement.offsetWidth; // reflow

      // Update the text
      welcomeTextElement.textContent = texts[currentIndex];
      currentIndex = (currentIndex + 1) % texts.length;

      // Re-apply the animation class
      welcomeTextElement.style.animation = 
        'typing 2s steps(20), cursor .4s step-end infinite alternate';
    }

    // Initial text update
    updateText();

    // Update text every 3 seconds
    setInterval(updateText, 3000);
  });