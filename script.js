document.addEventListener('DOMContentLoaded', function () {
  const calculateButton = document.getElementById('calculateButton');
  const resultParagraph = document.getElementById('result');

  calculateButton.addEventListener('click', function () {
      const dobInput = document.getElementById('dob').value;
      const dobDate = new Date(dobInput);
      const currentDate = new Date();
      const ageInMilliseconds = currentDate - dobDate;
      const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));

      if (!isNaN(ageInYears) && ageInYears >= 0) {
          resultParagraph.textContent = `Your age is ${ageInYears} years.`;
      } else {
          resultParagraph.textContent = 'Please enter a valid date of birth.';
      }
  }); 
});
