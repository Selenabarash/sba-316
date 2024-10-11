/
// my daily mood tracker 


// adding an event listener to the form that listens for the "submit" event
document.getElementById('moodForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission, which refreshes the page
  
    // get the selected mood from the dropdown and the text from the textarea
    const mood = document.getElementById('mood').value;
    const note = document.getElementById('note').value;
    
    // gets the error message paragraph element
    const errorMessage = document.getElementById('errorMessage');
  
    // clears any prioor  error messages
    errorMessage.textContent = '';
  
    // validation: Check if both a mood and a note have been entered
    if (mood === '' || note === '') {
      // If not, display an error message and exit the function
      errorMessage.textContent = 'Please select a mood and write a note!';
      return;
    }
  
    // create a new <li> element to hold the new mood entry
    const li = document.createElement('li');
    
    // set the inner HTML of the new <li> element with the mood and note
    // This displays the mood in bold (<strong>) and the note next to it
    li.innerHTML = `<strong>${mood}</strong> - ${note}`;
    
    // append the newly created <li> to the existing <ul> list (moodHistory)
    document.getElementById('moodHistory').appendChild(li);
  
    // Cclear the form fields after submission
    document.getElementById('mood').value = '';  // Reset mood selection
    document.getElementById('note').value = '';  // Clear the textarea
  });
  