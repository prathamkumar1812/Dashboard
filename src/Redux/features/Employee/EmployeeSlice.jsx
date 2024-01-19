import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    employees: [],
    searchResults: [],
    
  
};

const EmployeeSlice = createSlice({
    name: "Employee",
    initialState,
    reducers: {
        setEmployee: (state, action) => {
            state.employees = action.payload;
        },
        deleteEmployee: (state, action) => {
       state.employees = state.employees.filter((employee)=>employee.id != action.payload);
     },

     searchEmployee: (state, action) => {
        // Filter employees based on search ID
        state.searchResults = state.employees.filter(
          (employee) => employee.id == action.payload
        );
      },
    
    },
});

export const { setEmployee, deleteEmployee,searchEmployee} = EmployeeSlice.actions;
export default EmployeeSlice.reducer;