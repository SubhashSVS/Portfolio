import { GitHubIcon, LinkedinIcon, XIcon } from "@/components/icons";

const resumeData = {
    name : 'Subhash Srighakollapu',
    description : 'Motivated final year Computer Science student with a keen focus on full-stack development and a strong foundation in data structures and algorithms.',
    location : {
        city : 'Hyderabad, India',
        link : 'https://maps.app.goo.gl/hfrNUxwVbyz7oUQM7'
    },
    contact : {
        email : 'svs.subhash2003@gmail.com',
        phone : '+91 9441989919',
        socials : [
            {
                key : 'GitHub',
                link : 'https://github.com/SubhashSVS',
                icon : GitHubIcon
            },
            {
                key : 'LinkedIn',
                link : 'https://www.linkedin.com/in/subhash-svs/',
                icon : LinkedinIcon
            },
            {
                key : 'X',
                link : 'https://x.com/subhash_svs',
                icon : XIcon
            }
        ]
    },
    about : 'I’m a Computer Science Engineering student at IIIT Sonepat who loves building efficient and scalable software solutions. My expertise lies in full-stack development, with a strong focus on backend engineering, database optimization, and system design. I work with technologies like Node.js, Express, PostgreSQL, and MongoDB on the backend, while crafting intuitive UIs using React/Next.js and Tailwind CSS. I also enjoy problem-solving and applying my knowledge of data structures and algorithms to real-world applications. Some of my projects include a full-stack payments app, designed for secure and seamless transactions, and a blog website that enhances content creation and user engagement. I’ve also participated in hackathons, where I got to collaborate, innovate, and push my skills further.',
    avatarURL : 'https://avatars.githubusercontent.com/u/146661956?s=400&u=047dc2a30607f13352e63d11a7a635c6b13aebc5&v=4',
    shortName : 'SS',
    
}

export default resumeData;