gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
    });



	gsap.fromTo('.landing', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.landing',
			start: 'center',
			end: '820',
			scrub: true
		}
	})

	let itemsR = gsap.utils.toArray('#sketch, #cards-title, #cards-text')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: 'center',
				scrub: true
			}
		})
	})


  let itemL = gsap.utils.toArray('#faded')

	itemL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: 'center',
				scrub: true
			}
		})
	})


	let itemPL = gsap.utils.toArray('#plans-item-1')

	itemPL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-500',
				end: 'center',
				scrub: true
			}
		})
	})


	let itemPR = gsap.utils.toArray('#plans-item-2')

	itemPR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-500',
				end: 'center',
				scrub: true
			}
		})
	})



	let itemF = gsap.utils.toArray('#footer')

	itemF.forEach(item => {
		gsap.fromTo(item, { opacity: 1, x: -40 }, {
			opacity: 1, x: 1,
			scrollTrigger: {
				trigger: item,
				start: '-500',
				end: 'center',
				scrub: true
			}
		})
	})


  

}


gsap.from(".titles", 1, {
  opacity: 0,
  delay: 0,
  y: 20,
  ease: Expo.easeInOut
});



gsap.from("#left", 1, {
  opacity: 0,
  delay: 0,
  x: -40,
  ease: Expo.easeInOut
});




gsap.from("#mobile", 1, {
  opacity: 0,
  delay: .3,
  x: -2,
  ease: Expo.easeInOut
});


gsap.from("#right", 1, {
  opacity: 0,
  delay: 0,
  x: 40,
  ease: Expo.easeInOut
});





gsap.from(".logo", 1, {
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
});






// EMAIL VLIDATION 

// Function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to handle form submission
function handleFormSubmission() {
    const emailInput = document.getElementById('email-input');
    const emailError = document.getElementById('email-error');

    // Check if the email is not empty and is in a valid format
    if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) {
        emailError.classList.remove('none');
    } else {
        emailError.classList.add('none');
        // Show an alert message when the email is valid
        alert('Email sent!');
        // You can also add code here to send the email or perform other actions
    }
}

// Event listener for the form submission
document.getElementById('notify-btn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default form submission
    handleFormSubmission();
});
