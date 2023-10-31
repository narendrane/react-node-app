// Require "events"; give us access to EventEmitter class 
// EventEmitter class has all the event related methods in it 
const EventEmitter = require("events"); 

// Create an instance of the EventEmitter class 
const ourEmitter = new EventEmitter(); 

// Create an event listener - listens for the "GfG opened" event 
// Event listeners always keep its ear open; it never sleeps 
// Means it'll keep on listening for the event throughout the code 
// It'll execute the callback function when "GfG opened" event is emitted 
ourEmitter.on("GfG opened", (error) => { 
	if (error) 
		return error; 
	else
		console.log("Let's learn computer science concepts."); 
}); 

// Emit event or send a signal that "GfG opened" has happened 
ourEmitter.emit("GfG opened"); 
