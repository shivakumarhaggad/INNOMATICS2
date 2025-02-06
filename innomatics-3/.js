//1. ATM Withdrawal System
function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (enteredPin !== pin) return "Incorrect PIN";
    if (amount > balance) return "Insufficient Funds";
    if (amount % 100 !== 0) return "Enter amount in multiples of 100";
    return balance - amount;
}



//2. Online Shopping Discount & Free Shipping
function calculateFinalAmount(orderAmount) {
    let discounted = orderAmount;
    if (orderAmount > 1000) discounted *= 0.8;
    else if (orderAmount >= 500) discounted *= 0.9;

    const shipping = discounted > 50 ? 0 : 10;
    return discounted + shipping;
}


//3. Student Grading System with Extra Credit
function calculateGrade(marks, attendance) {
    if (attendance > 90) marks += 5;
    if (marks >= 90) return "A";
    else if (marks >= 80) return "B";
    else if (marks >= 70) return "C";
    else if (marks >= 60) return "D";
    else return "F";
}


//4. Smart Traffic Light System
function trafficLightControl(density) {
    switch (density) {
        case "Heavy Traffic": return 60;
        case "Moderate Traffic": return 40;
        case "Light Traffic": return 20;
        default: return 0;
    }
}


//5. Movie Ticket Pricing with Time and Age Discount
function calculateTicketPrice(age, showTime) {
    const base = 12;
    let discount = 0;
    if (showTime < 17) discount = Math.max(discount, 0.2);
    if (age < 12) discount = Math.max(discount, 0.4);
    else if (age > 60) discount = Math.max(discount, 0.3);
    return base * (1 - discount);
}


//6. Job Application Filter
function isEligibleForJob(age, experience, qualification) {
    return age >= 21 && age <= 55 && experience >= 2 && qualification === "Bachelor's Degree";
}


//7. E-commerce Coupon Redemption
function applyCoupon(orderAmount, couponCode) {
    if (couponCode === "DISCOUNT10" && orderAmount > 500) {
        return orderAmount * 0.9;
    } else if (couponCode === "FREESHIP" && orderAmount > 200) {
        return orderAmount - 20; // Assumed shipping cost deduction
    }
    return orderAmount;
}


//8. Fitness Membership Plan
function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    if (wantsDietPlan) return "VIP ($80/month)";
    if (wantsTrainer) return "Premium ($50/month)";
    return "Basic ($20/month)";
}


//9. Electricity Bill Calculation with Peak Hours
function calculateElectricityBill(units, timeOfDay) {
    let rate;
    if (units < 100) rate = 5;
    else if (units <= 300) rate = 4;
    else rate = 3;

    let cost = units * rate;
    if (timeOfDay.toLowerCase().includes("peak")) cost *= 1.1;
    return cost;
}


//10. Flight Ticket Booking System
function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let fare = 300;
    if (classType === "Business") fare += 200;
    else if (classType === "First") fare += 500;

    if (luggageWeight > 20) {
        const extra = Math.floor((luggageWeight - 20) / 10) * 50;
        fare += extra;
    }

    if (isStudent) fare *= 0.85;
    else if (isSenior) fare *= 0.90;
    return fare;
}