function generateOtp(){
    let x = 10000;
    let y = Math.random();
    let z = Math.trunc(x*y);
    return z;
}
console.log(`Here is your otp: ${generateOtp()}`);