const NGSI = require('ngsijs');
const connection = new NGSI.Connection("http://localhost:1026");
connection.v2.updateEntityAttributes({
    "id": "ElfinRobot001",
    "command": "Go go Johny go go go"
}, {
    keyValues: true
}).then(
    (response) => {
        console.log(response);
        // Attributes updated successfully
        // response.correlator transaction id associated with the server response
    }, (error) => {
        console.log(error);
        // Error updating the attributes of the entity
        // If the error was reported by Orion, error.correlator will be
        // filled with the associated transaction id
    }
);
