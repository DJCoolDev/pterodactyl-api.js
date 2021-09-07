# pterodactyl-api.js

pterodactyl-api.js is a simple node.js module to simplify the communication with the pterodactyl REST API. Currently, it only supports all /api/application/users & /api/application/servers methods.

## Installation

Use the package manager [npm](https://npmjs.com/) to install pterodactyl-api.js.

```bash
npm install pterodactyl-api.js
```

## Usage
See more detailed examples in the examples directory.

```javascript
const pterodactylApi = require('pterodactyl-api.js');
const api = new pterodactylApi('PANEL_URL_OR_IP', 'API_TOKEN');

async function runMain() {
    try {
        await api.deleteUser('1');
    } catch (error) {
        console.error(error);
    }
}
runMain();
```
## About & Informations
All parameters that are sent to pterodactyl's API are named the same as you can see [here](https://dashflo.net/docs/api/pterodactyl/v1/) at the different endpoints.

This module was based on [this](https://github.com/MikeModder/pterodactyl-api).


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[GNU LGPLv3](https://choosealicense.com/licenses/lgpl-3.0/)