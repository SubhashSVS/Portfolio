import { LinkIcon } from "lucide-react";

interface projectType{
    name : string;
    description : string;
    skills : string[];
    link : string;
}

const ProjectCard = ({name,description,skills,link} : projectType)=>{
    return <div className="p-4 border rounded-lg shadow-sm">
        <div className="font-bold text-lg my-2">
            <a href={link} className="hover:underline items-center flex" >
                <LinkIcon size={15} className="inline mx-1" />
                {name}
            </a>
        </div>
        <p className="font-mono my-1 text-muted-foreground text-pretty">
            {description}
        </p>
        <div className="flex flex-wrap gap-x-2 gap-y-2 mt-3 mb-2">
            {skills.map((skill,index) => (
                <div key={index} className="border border-solid border-gray-500 rounded-md px-2  font-medium">
                    {skill}
                </div>
            ))}
        </div>
    </div>
}

export default ProjectCard;