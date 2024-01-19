export async function getEmployess(){
try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const employees = await response.json();
    return employees;
} catch (error) {
    console.log(error);
}
}
export async function getEmployee(id){
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const employee = await response.json();
        return employee;
    } catch (error) {
        console.log(error);
    }
}