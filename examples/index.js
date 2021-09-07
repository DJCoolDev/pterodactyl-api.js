const pterodactylApi = require('../lib/api');
const api = new pterodactylApi('URL', 'TOKEN');

async function runMain() {
    try {
        //Do your stuff
        /**
         * Example: 
         * await api.deleteUser('1);
         * await api.createServer(serverObjectWithAllRequiredDetails)
         */
    } catch (error) {
        console.error(error);
    }
}
runMain();

/**
 * For arguments see the commentaries in api.js or visit https://dashflo.net/docs/api/pterodactyl/v1/ all data objects are named the same.
 */