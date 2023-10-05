// Function to save student data
function saveData() {
    // Check if the Roll No field is filled
    var rollNo = document.getElementById("rollNo").value;
    if (rollNo === "") {
        alert("Roll No is required");
        return;
    }

    // Create an object with student data
    var studentData = {
        "Roll-No": rollNo,
        "Full-Name": document.getElementById("fullName").value,
        "Class": document.getElementById("class").value,
        "Birth-Date": document.getElementById("birthDate").value,
        "Address": document.getElementById("address").value,
        "Enrollment-Date": document.getElementById("enrollmentDate").value
    };

    // Convert the object to JSON
    var jsonData = JSON.stringify(studentData);

    // Send the data to JSONPowerDB using the POST method
    sendDataToJSONPowerDB(jsonData, "insert");
}

// Function to update student data
function updateData() {
    // Check if the Roll No field is filled
    var rollNo = document.getElementById("rollNo").value;
    if (rollNo === "") {
        alert("Roll No is required");
        return;
    }

    // Create an object with updated student data
    var studentData = {
        "Roll-No": rollNo,
        "Full-Name": document.getElementById("fullName").value,
        "Class": document.getElementById("class").value,
        "Birth-Date": document.getElementById("birthDate").value,
        "Address": document.getElementById("address").value,
        "Enrollment-Date": document.getElementById("enrollmentDate").value
    };

    // Convert the object to JSON
    var jsonData = JSON.stringify(studentData);

    // Send the data to JSONPowerDB using the POST method
    sendDataToJSONPowerDB(jsonData, "update");
}

// Function to reset the form
function resetForm() {
    document.getElementById("studentForm").reset();
    document.getElementById("saveBtn").disabled = false;
    document.getElementById("updateBtn").disabled = true;
    document.getElementById("rollNo").disabled = false;
}

// Function to send data to JSONPowerDB using the POST method
function sendDataToJSONPowerDB(jsonData, action) {
    var connToken = "90931634|-31949326634267378|90961887"; // Your connection token
    var dbName = "SCHOOL-DB"; // Your database name
    var relName = "STUDENT-TABLE"; // Your relation name

    // Create the request URL based on the action (insert or update)
    var requestUrl = action === "insert"
        ? `http://api.login2explore.com:5577/api/iml?dbName=${dbName}&relationName=${relName}`
        : `http://api.login2explore.com:5577/api/iml/update?dbName=${dbName}&relationName=${relName}`;

    // Create the request headers
    var headers = {
        "Content-Type": "application/json",
        "Authorization": connToken
    };

    // Create the request options
    var requestOptions = {
        method: "POST",
        headers: headers,
        body: jsonData
    };

    // Send the POST request using fetch
    fetch(requestUrl, requestOptions)
        .then(function (response) {
            if (response.status === 200) {
                alert("Data " + (action === "insert" ? "inserted" : "updated") + " successfully!");
                resetForm();
            } else {
                alert("Error: " + response.statusText);
            }
        })
        .catch(function (error) {
            console.error("Error:", error);
            alert("An error occurred while sending the request.");
        });
}
