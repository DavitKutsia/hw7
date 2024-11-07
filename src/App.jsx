import { useState } from 'react';
import './App.css';

function App() {
  // State to store the selected rating (1-5)
  const [selectedRating, setSelectedRating] = useState(null);
  
  // State to control if the user has submitted their rating
  const [submitted, setSubmitted] = useState(false);

  // Function to handle rating selection
  const handleSelect = (rating) => {
    setSelectedRating(rating);
  };

  // Function to handle the submit button click
  const handleSubmit = () => {
    // Only proceed if a rating has been selected
    if (selectedRating) {
      setSubmitted(true);
    }
  };

  return (
    <div id="container">
      {/* Display thank-you message if submitted, else display rating component */}
      {submitted ? (
        <>
          
          {/* Display selected rating message */}
          <div className="div rating">
            <p>You selected {selectedRating} out of 5</p>
          </div>
          
          {/* Thank-you message text */}
          <div className="feedback">
            <h2>Thank you!</h2>
            <p className="text">
              We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
            </p>
          </div>
        </>
      ) : (
        <>
          {/* Star icon */}
          <div id="star">
            <img src="/assets/Star.png" alt="Star" />
          </div>
          
          {/* Question prompt */}
          <div id="question">How did we do?</div>
          
          {/* Instructional text */}
          <p id="text">
            Please let us know how we did with your support request. All feedback is appreciated to help us improve!
          </p>
          
          {/* Rating buttons (1-5) */}
          <div id="box">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                onClick={() => handleSelect(rating)}
                className={`circle ${selectedRating === rating ? 'select' : ''}`}
              >
                {rating}
              </button>
            ))}
          </div>
          
          {/* Submit button, only active if a rating is selected */}
          <button
            onClick={handleSubmit}
            id="submit"
            disabled={!selectedRating}
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
}

export default App;
