// JavaScript Functionality
function talk() {
  var user = document.getElementById('userBox').value.trim().toLowerCase();
  var chatLog = document.getElementById('chatLog');
  chatLog.innerHTML = "";
  chatLog.style.display = 'block';

  let s = user.toLowerCase();

  // Responses for known queries
  var know = {
    "library": "The library is located on the C-block 2nd floor",
    "canteen": "The canteen is located beside the main block",
    "cse hod cabin": "It is at b block 2nd floor",
    "examination section": "Located at the main block",
    "exam centre": "Present at the main block ground floor",
    "fee payment": "It will be there in the main block",
    "faculty room": "The faculty room is on the first floor of Block B."
  };

  if (user.includes("find location of") || user.includes("where is") || user.includes("find the location of")) {
    var location = user
      .replace("find location of", "")
      .replace("find the location of", "")
      .replace("where is", "")
      .trim();

    if (know[location]) {
      chatLog.innerHTML += know[location] + "<br>";
    } else {
      chatLog.innerHTML += "Sorry, I couldn't find that location in the college.<br>";
    }
  } else if (user === "who are you") {
    chatLog.innerHTML += "Hello, I am College Mantra, your chat assistant.<br>";
  } else if (user === "hi") {
    chatLog.innerHTML += "Hello! How can I help you today?<br>";
  } else if (user === "bye") {
    chatLog.innerHTML += "Okay! We'll meet soon.<br>";
  } else if (s.includes("whatsapp")) {
        // Open WhatsApp if the input includes "open whatsapp"
       window.open("whatsapp://", "_blank");
    }

    else if (s.includes("settings")) {
    // Open Settings if the input includes "open settings"
    window.open("ms-settings://", "_blank");
    }

    else if (s.includes("college website") || s.includes("college portal") || s.includes("srit website") || s.includes("srit college website")|| s.includes("home page")) {
       window.open("https://www.srit.ac.in/");
    }

    else if (s.includes("exam portal")|| s.includes("exam website") || s.includes("results")) {
      window.open("https://sritexams.in/eportal/Login.aspx");
    }

    else if (s.includes("faculty ecap")|| s.includes("faculty login")|| s.includes("employee login")) {
      window.open("http://webprosindia.com/srit/ ");
    }

    else if (s.includes("student ecap")|| s.includes("student login")) {
      window.open("http://webprosindia.com/sritstudent/");
    }

    else if (s.includes("alumni")) {
      window.open("http://alumni.srit.ac.in/ ");
    }

else {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(user)}`, '_blank');
  }

  chatLog.style.display = 'block';
  document.getElementById('userBox').value = ""; // Clear input
}
