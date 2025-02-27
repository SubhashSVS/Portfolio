interface eduType{
    name : string;
    course : string;
    startyear : string;
    endyear : string;
}

const EducationCard = ({name, course, startyear, endyear} : eduType)=>{
    return <div className="my-2">
        <div className="flex justify-between items-center my-1">
            <div className="text-lg font-bold">
                {name}
            </div>
            <div className="text-md font-mono text-muted-foreground">
                {startyear} - {endyear}
            </div>
        </div>
        <div className="font-mono text-muted-foreground">
            {course}
        </div>
    </div>
}

export default EducationCard;