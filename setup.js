const fs = require('fs');
const crypto = require('crypto');

const envPath = '.env';

function generateEnvFile() {
    const secret = crypto.randomBytes(32).toString('hex'); // Generate a secure random string
    const content = `JWT_SECRET=${secret}\n`;

    if (!fs.existsSync(envPath)) {
        fs.writeFileSync(envPath, content, { encoding: 'utf8' });
        console.log(`✅ .env file created with a generated JWT_SECRET.`);
    } else {
        console.log(`⚠️  .env file already exists. No changes were made.`);
    }
}

generateEnvFile();
