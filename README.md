# JPDB

Title of the Project:
Student Enrollment Form with JsonPowerDB Integration

Description:
This micro project involves the creation of a web-based student enrollment form that interacts with a JsonPowerDB database. The form allows users to enter and manage student data, including Roll No, Full Name, Class, Birth Date, Address, and Enrollment Date. The primary key for the database is the Roll No.

The form is designed with three control buttons: [Save], [Update], and [Reset]. Upon page load or any control button click, an empty form is displayed with the cursor focused on the Roll No input field. All other fields and buttons are initially disabled.

The workflow of the project is as follows:
1. If the entered Roll No does not exist in the database, the [Save] and [Reset] buttons are enabled, and the cursor moves to the next field, allowing the user to enter data for all fields.
2. Data validation ensures that no fields are left empty.
3. After completing the data entry, clicking the [Save] button stores the data in the JsonPowerDB database and returns to step 2.

If the Roll No entered already exists in the database:
1. The existing data for that Roll No is displayed in the form.
2. The [Update] and [Reset] buttons are enabled, allowing users to modify other form fields while keeping the Roll No field disabled.
3. Data validation ensures no empty fields.
4. Clicking the [Update] button updates the data in the JsonPowerDB database and returns to step 2.
5. The [Reset] button can be clicked to reset the form to step 2.

Benefits of using JsonPowerDB:
JsonPowerDB is a high-performance, developer-friendly, and easy-to-use NoSQL database that provides several benefits for this micro project:
- Simple and fast data storage and retrieval.
- Schema-less, allowing flexibility in storing diverse data.
- Low learning curve for integration and usage.
- Real-time data handling, suitable for dynamic forms.
- ACID-compliant, ensuring data integrity.
- Minimal setup and maintenance efforts.

Release History (release of your JsonPowerDB related code on Github):
As of my knowledge cutoff date in September 2021, I do not have access to real-time data or specific project release information. Please visit the project's GitHub repository for the most up-to-date release history and code implementation.