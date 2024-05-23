// switch case syntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("Month is January");
        break;
    case 2:
        console.log("Month is February");
        break;
    case 3:
        console.log("Month is March");
        break;
    case 4:
        console.log("Month is April");
        break;
    case 5:
        console.log("Month is May");
        break;
    case 6:
        console.log("Month is June");
        break;
    case 7:
        console.log("Month is July");
        break;
    case 8:
        console.log("Month is August");
        break;
    case 9:
        console.log("Month is September");
        break;
    case 10:
        console.log("Month is October");
        break;
    case 11:
        console.log("Month is November");
        break;
    case 12:
        console.log("Month is December");
        break;
    case "Jan": // keys can be string too
        console.log("Month is January");
        break;

    default:
        console.log("Invalid Month");
        break;
}

// add a break for each case. if break is not added then all the code after a condition is matched gets executed, except the default condition.
// that is if there were no breaks in above code, and the condition matched at 3. then we will print Month is March all the way to Month is december.
// Break breaks the control flow

