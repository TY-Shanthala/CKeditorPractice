// import { Autocomplete } from "@mui/material";
// import React from "react";
// import Parent from "./Parent";

// function Child() {
//   return (
//     <div>
//       <Parent>
//         <Controller
//           name="displayName"
//           as={
//             <Autocomplete
//               value={lists}
//               multiple
//               fullWidth
//               size="small"
//               limitTags={1}
//               id="multiple-limit-lists"
//               options={moduleList}
//               getOptionLabel={(option) => option.displayName}
//               renderInput={(params, props) => {
//                 return (
//                   <div>
//                     <div className="container">
//                       <TextValidator
//                         {...params}
//                         variant="outlined"
//                         label="Display Name*"
//                         className="Display Text"
//                         name="displayName"
//                         id="outlined-multiline-static"
//                         placeholder="Enter Display-Name"
//                         size="small"
//                         onChange={handleDisplay}
//                         // validators={['required']} this and below line does throw a validation but the problem is this validation stays on the screen when user selects something in the autocomplete field which is wrong.
//                         // errorMessages={['This field is required']}
//                         // withRequiredValidator
//                       />
//                     </div>
//                   </div>
//                 );
//               }}
//             />
//           }
//           // onChange={handleDisplay}
//           control={control}
//           rules={{ required: true }}
//           // required
//           // defaultValue={options[0]}
//         />
//         <ErrorMessage
//           errors={errors}
//           name="displayName"
//           message="This is required"
//         />
//       </Parent>
//     </div>
//   );
// }

// export default Child;
