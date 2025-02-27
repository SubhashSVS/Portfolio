const SkillsCard = ({skills} : {skills : string[]})=>{
    return <div className="flex gap-x-2 my-4 flex-wrap gap-y-2">
        {skills.map((skill,index) => (
            <div className="text-white text-sm font-semibold bg-gray-700 px-2 py-1 text-nowrap rounded-md" key={index} >
                {skill}
            </div>
        ))}
    </div>
}

export default SkillsCard;