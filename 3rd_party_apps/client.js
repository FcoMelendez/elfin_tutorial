const net = require('net');

const SERVER_HOST = 'localhost'; // Change to the server's hostname or IP address
const SERVER_PORT = 2500; // Change to the server's port number

const client = new net.Socket();

client.connect(SERVER_PORT, SERVER_HOST, () => {
  console.log(`Connected to server at ${SERVER_HOST}:${SERVER_PORT}`);
    // Send a "Hello, World!" message to the server
  client.write('Hello, World!');
});

client.on('data', (data) => {
  // Assuming the server sends complete JSON objects, parse and print them
  const jsonStr = data.toString();
  try {
    const jsonObject = JSON.parse(jsonStr);
    console.log('Received JSON object:');
    console.log(jsonObject);
  } catch (err) {
    console.error('Error parsing JSON:', err);
  }
});

client.on('close', () => {
  console.log('Connection to server closed.');
});

client.on('error', (err) => {
  console.error('Socket error:', err);
});

