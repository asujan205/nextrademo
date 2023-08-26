// import Cookies from "js-cookie";
// import { useRouter } from "next/router";
// import Link from "next/link";

// export default function Home() {
//   const router = useRouter();

//   const logIn = (e) => {
//     e.preventDefault();

//     // Get the email and password from input fields
//     const email = e.target.elements.email.value;
//     const password = e.target.elements.password.value;

//     // Perform email and password validation (replace with your logic)
//     if (email === "valid@email.com" && password === "validpassword") {
//       // Set the "authorization" cookie
//       Cookies.set("authorization", "true");

//       // Navigate to the desired route
//       router.push("/frameworks/react");
//     } else {
//       // Handle incorrect credentials
//       alert("Incorrect email or password. Try again!");
//       router.push("/login/login");
//     }
//   };

//   return (
//     <div>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <form onSubmit={(e) => logIn(e)}>
//           <h1>Log In</h1>
//           <input type="text" placeholder="Username" required />
//           <input type="password" placeholder="Password" required />
//           <button>Log In</button>
//         </form>
//       </div>
//     </div>
//   );
// }
