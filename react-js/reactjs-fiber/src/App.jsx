// React component is just a normal js function, which returns JSX Expression.
import ProfileCard from "./components/ProfileCard";

function App(){

  const userData = [
    {
      id: 1,
      name: "Sundeeep Dasari",
      designation: "Associate PM @St."
    },
    {
      id:2,
      name: "Himabindu",
      designation: "MERN Trainee @St."
    },
    {
      id:3,
      name: "Raja Venkata Sai Kumar",
      designation: "MERN Trainee @St."
    }
  ]

  return (
    <>

    {
      userData.map((user) => (
        <ProfileCard key={user.id} name={user.name} designation={user.designation}/>
      ))
    }

      {/* <ProfileCard name="Sundeeep Dasari" designation="Associate PM @St." />  
      <ProfileCard name="Sathwik" designation="MERN Trainee @St." />  
      <ProfileCard name="Jayanth" designation="MERN Trainee @St." />   */}
      <h1 className="font-bold">Hello, Batch 3&4! Welcome to React JS</h1>
      <h1 className="font-semibold">Sundeeep Dasari</h1>
    </>
  )
}

export default App;