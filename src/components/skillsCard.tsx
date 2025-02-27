const SkillsCard = ({skills} : {skills : string[]})=>{
    return <div className="flex gap-x-2 my-4 flex-wrap gap-y-2">
        {skills.map(skill => (
            <div className="text-white font-semibold bg-gray-700 px-2 py-1 text-nowrap rounded-md">
                {skill}
            </div>
        ))}
    </div>
}

export default SkillsCard;