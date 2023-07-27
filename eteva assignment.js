function getUniqueUsers(List1, List2) {
    const userSet1 = new Set(List1);
    const userSet2 = new Set(List2);

    // Unique set of users from userSet1 which are not in userSet2
    const uniqueUsersList1 = new Set([...userSet1].filter(user => !userSet2.has(user)));

    // Unique set of users from userSet2 which are not in userSet1
    const uniqueUsersList2 = new Set([...userSet2].filter(user => !userSet1.has(user)));

    // Set of users who are present in userSet1 and userSet2 both
    const commonUsers = new Set([...userSet1].filter(user => userSet2.has(user)));


    // converting setUsers into array format 
    const uniqueUsers1 = Array.from(uniqueUsersList1);
    const uniqueUsers2 = Array.from(uniqueUsersList2);
    const finalCommonUsers = Array.from(commonUsers);

    return {
        uniqueUsers1,
        uniqueUsers2,
        finalCommonUsers
    }
}

const userList1 = ['Hyderabad', 'Bangalore', 'Chennai', 'Delhi', 'Pune', 'Kolkata'];
const userList2 = ['Gujarat', 'Pune', 'Rajasthan', 'Bangalore', 'Vizag', 'Delhi'];

const result = getUniqueUsers(userList1, userList2);

console.log(result.uniqueUsers1);
console.log(result.uniqueUsers2);
console.log(result.finalCommonUsers);
