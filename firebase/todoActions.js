// import {
//     db
// } from './firebaseConfig'

// const db = fire.firestore();

// const getDb = () => {
//     return db;
// }

// export default db;

// export {
//     db
// };

// export const createTodo = (todo) => {
//     // make async call to database


//     const firestore = getFirestore();
//     // const profile = getState().firebase.profile;
//     // const authorId = getState().firebase.auth.uid;

//     firestore.collection('todos').add({
//             ...todo,
//             authorFirstName: profile.firstName,
//             authorLastName: profile.lastName,
//             authorId: authorId,
//             createdAt: new Date()
//         })
//         .then(() => {
//             dispatch({
//                 type: 'CREATE_PROJECT',
//                 project
//             })
//         })
//         .catch((err) => {
//             dispatch({
//                 type: 'CREATE_PROJECT_ERROR',
//                 err
//             })
//         })
// }


// export const deleteProject = (id) => {
//     return (dispatch, getState, {
//         getFirebase,
//         getFirestore
//     }) => {
//         const firestore = getFirestore();

//         firestore.collection('projects').doc(id)
//             .delete()
//             .then(() => {
//                 dispatch({
//                     type: 'DELETE_PROJECT',
//                     id
//                 })
//             })
//             .catch((err) => {
//                 dispatch({
//                     type: 'DELETE_PROJECT_ERROR',
//                     err
//                 })
//             })
//     }
// }