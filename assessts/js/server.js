const http = require('http');
const querystring = require('querystring');

// Create the server
const server = http.createServer((req, res) => {
    // Handle only POST requests
    if (req.method === 'POST') {
        let body = '';

        // Collect data chunks from the request body
        req.on('data', chunk => {
            body += chunk.toString();
        });

        // After receiving the complete body, parse and respond
        req.on('end', () => {
            // Parse the form data
            const formData = querystring.parse(body);

            // Extracting form values
            const firstName = formData.firstName || 'N/A';
            const lastName = formData.lastName || 'N/A';
            const email = formData.signupEmail || 'N/A';
            const password = formData.signupPassword || 'N/A';
            const termsAccepted = formData.termsCheckbox ? 'Accepted' : 'Not Accepted';

            // Respond with the received data
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Form submitted successfully with the following data:\n
                First Name: ${firstName}\n
                Last Name: ${lastName}\n
                Email: ${email}\n
                Password: ${password}\n
                Terms & Conditions: ${termsAccepted}`);

            // (Optional) Print the data to the console (for testing purposes)
            console.log("Form Data Received:");
            console.log({
                firstName,
                lastName,
                email,
                password,
                termsAccepted
            });
        });
    } else {
        // Handle other request methods (e.g., GET)
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});

// Start the server
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});