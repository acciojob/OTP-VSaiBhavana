function verifyOTP() {
        // Hardcoded OTP for demonstration, replace this with actual server-generated OTP
        const actualOTP = "123456";

        // Get user-entered OTP
        const userOTP = document.getElementById("otpInput").value;

        // Check if the entered OTP matches the actual OTP
        if (userOTP === actualOTP) {
            alert("OTP Verified Successfully!");
        } else {
            alert("OTP Verification Failed. Please try again.");
        }
    }