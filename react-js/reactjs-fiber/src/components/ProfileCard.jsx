function ProfileCard(props){
  console.log(props);

  const {name, designation} = props; // object destructuring

  return(
    <article className="m-5 flex gap-2 items-center">
      <div className="w-[60px] h-[60px] bg-gray-500 rounded-full"></div>

      <div className="flex flex-col gap-1"> 
        <p className="text-lg font-semibold">{name}</p>
        <p>{designation}</p>
      </div>
    </article>
  )
}

export default ProfileCard;