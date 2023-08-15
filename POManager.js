const { GooglePage } = require('./GooglePage');

class POManager {
    constructor(page) {
        this.page = page;        
        this.googlePage = new GooglePage(this.page)
    }

    getGooglePage() {
        return this.googlePage;
    }

}
module.exports = { POManager };