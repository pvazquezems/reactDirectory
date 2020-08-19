import React from "react";
import MaterialTable from "material-table";

export default function EmployeeTable() {
  const [state, setState] = React.useState({
    columns: [
      { title: "EmployeeID", field: "id", type: "numeric" },
      { title: "Name", field: "name" },
      { title: "Department", field: "department" },
      { title: "Role", field: "role" },
    ],
    data: [
      { id: 1, name: "Pablo Vazquez", department: "Field Operations", role: "Field Supervisor" },
      { id: 2, name: "Edgar Guzman", department: "Field Operations", role: "EMT" },
      { id: 3, name: "Marco Banuelos", department: "Dispatch", role: "Dispatcher" },
      { id: 4, name: "Daniel Meza", department: "Dispatch", role: "Dispatcher" },
      { id: 5, name: "Taryn West", department: "Billing", role: "Biller" },
      { id: 6, name: "Briana Wilson", department: "Billing", role: "Biller" },
      { id: 7, name: "Justin Ornelas", department: "Field Operations", role: "Paramedic" },
      { id: 8, name: "Glen Cornejo", department: "Field Operations", role: "EMT" },
      { id: 9, name: "Taylor Gratz", department: "Field Operations", role: "Paramedic" },
      { id: 10, name: "Jesse Hernandez", department: "Dispatch", role: "Dispatcher" },
      { id: 11, name: "Brian Napoli", department: "Management", role: "Supervisor" },
      { id: 12, name: "Mark Baird", department: "Management", role: "Manager" },
      { id: 13, name: "Jeff Cortez", department: "Field Operations", role: "EMT" },
      { id: 14, name: "Gilbert Galindo", department: "Field Operations", role: "Registered Nurse" },
      { id: 15, name: "Chris Guerrero", department: "Field Operations", role: "Registered Nurse" },
      { id: 16, name: "Paul Gomez", department: "Field Operations", role: "Paramedic" },
      { id: 17, name: "Boris Krutnog", department: "Management", role: "CEO" },
      { id: 18, name: "Elizabeth Zey", department: "Field Operations", role: "Respiratory Therapist" },
      { id: 19, name: "Leon Zombrano", department: "Field Operations", role: "Respiratory Therapist" },
      { id: 20, name: "Andrew Cardenas", department: "Field Operations", role: "Respiratory Therapist" }
    ],
  });

  return (
    <MaterialTable
      title="Employee React Directory"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
