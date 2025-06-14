const crypto = require('crypto');

// Generate a secure 256-bit (32 bytes) random string
const jwtSecret = crypto.randomBytes(32).toString('hex');

console.log('🔐 Generated JWT Secret for FCOM Student Attendance System:');
console.log('='.repeat(60));
console.log(jwtSecret);
console.log('='.repeat(60));
console.log('\n📋 Add this to your Render environment variables:');
console.log(`JWT_SECRET=${jwtSecret}`);
console.log('\n🔒 This is a cryptographically secure 256-bit key.');
console.log('⚠️  Keep this secret safe and never commit it to version control!');
console.log('\n🎯 For your FCOM deployment, set this in Render dashboard under Environment Variables.');
