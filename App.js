import React from 'react';
import logo from './logo.svg';
import './App.css';
import react from 'react';

import ApolloClient from 'apollo-boost';
// import { gql } from "apollo-boost";
import gql from 'graphql-tag';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { useQuery } from '@apollo/react-hooks';



import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';







const graphqlApiUri = 'https://qlth.hpz.vn/v1/graphql';

const hasuraReqHeaders = {
  'content-type': 'application/json',
  'x-hasura-admin-secret': 'hpz'
};


const client = new ApolloClient({

  uri: graphqlApiUri,
  headers: hasuraReqHeaders,
  cache: new InMemoryCache({
       addTypename: true
     })

});


client
  .query({
    query: gql`{

  chamcong_check_in_out(where: {ngay: {_eq: "2019-11-04"}}) {
    id
    mahocsinh
    machamcong
    mathehocsinh
    ngay
    tenmayquetthe
  }    } `
  })
  .then(result => console.log(result));


  const Get_chamcong_check_in_out = gql`
    {
      edu_students(where: {student_code: {_ilike: "HS030201000%"}}) {
        first_name
        last_name
        student_code
        phone
      }
    }
      `;




  function Linhtinh() {

  const { loading, error, data } = useQuery(Get_chamcong_check_in_out);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log(data);
  return (

    <div  className="ag-theme-balham"
          style={{
          height: '500px',
          width: '600px',
          editable: true
         }}
        >

          <AgGridReact


            columnDefs= { [                    {        field: "firstName",          width: 100 ,  editable: true       },
            {
              field: "lastName",
              width: 100, editable: true
            },
            {
              field: "gender",
              width: 90, editable: true
            },
            {
              field: "age",
              width: 70, editable: true
            },
            {
              field: "mood",
              width: 70, editable: true
            },
            {
              field: "country",
              width: 100, editable: true
            },
            {
              field: "address",
              width: 200, editable: true
            }
          ]}
          rowData={[
            {
              firstName: "Bob",
              lastName: "Harrison",
              gender: "Male",
              address: "1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",
              mood: "Happy",
              country: "Ireland"
            },
            {
              firstName: "Bob",
              lastName: "Harrison",
              gender: "Male",
              address: "1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",
              mood: "Happy",
              country: "Ireland"
            },
            {
              firstName: "Bob",
              lastName: "Harrison",
              gender: "Male",
              address: "1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",
              mood: "Happy",
              country: "Ireland"
            },
            {
              firstName: "Bob",
              lastName: "Harrison",
              gender: "Male",
              address: "1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",
              mood: "Happy",
              country: "Ireland"
            },
            {
              firstName: "Bob",
              lastName: "Harrison",
              gender: "Male",
              address: "1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",
              mood: "Happy",
              country: "Ireland"
            },
            {
              firstName: "Bob",
              lastName: "Harrison",
              gender: "Male",
              address: "1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763",
              mood: "Happy",
              country: "Ireland"
            },
            {
              firstName: "Mary",
              lastName: "Wilson",
              gender: "Female",
              age: 11,
              address: "3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215",
              mood: "Sad",
              country: "Ireland"
            }]}

            enterMovesDownAfterEdit={true}
                   // enterMovesDown={true}
      >
      
      </AgGridReact>
    </div>

        //   {data.edu_students.map(aaa => (
        //       <div>          {aaa.first_name} {aaa.last_name}      </div>
        //     ))}
        // </div>




    // <a>    {data.edu_students.map(aaa => (
    //     <div>          {aaa.first_name} {aaa.last_name}      </div>
    //   ))} </a>

  );


}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//
//
//
//
//
//
//       </header>
//     </div>
//   );
// }
// export default App;
export default Linhtinh;
