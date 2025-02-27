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
    about : 'An aspiring Software Engineer who loves building efficient and scalable software solutions. My expertise lies in full-stack development, with a strong focus on backend engineering, database optimization, and system design. I work with technologies like Node.js, Express, PostgreSQL, and MongoDB on the backend, while crafting intuitive UIs using React/Next.js and Tailwind CSS. \n I also enjoy problem-solving and applying my knowledge of data structures and algorithms to real-world applications. I’ve also participated in hackathons, where I got a chance to collaborate, innovate, and push my skills further.',
    avatarURL : 'https://avatars.githubusercontent.com/u/146661956?s=400&u=047dc2a30607f13352e63d11a7a635c6b13aebc5&v=4',
    shortName : 'SS',
    education : [
        {
            name : 'Indian Institute of Information Technology (IIIT), Sonepat',
            course : 'B.Tech in Computer Science and Engineering',
            startyear : '2021',
            endyear : '2025',
        },
        {
            name : 'Excellencia Junior College, Hyderabad',
            course : 'High School',
            startyear : '2019',
            endyear : '2021'
        }
    ],
    skills : ['JavaScript','TypeScript','React.js','Next.js','Node.js','Express','MongoDB','Tailwind CSS','PostgreSQL','Git','Docker','C++','DSA'],
    projects : [
        {
            name : 'Fullstack Payments App',
            description : 'This web app enables users to sign up, authenticate, and manage wallet balances, allowing payments to other users via a search feature.',
            skills : ['React.js', 'JavaScript', 'Node.js', 'Express', 'Mongo DB', 'JWT'],
            link : "https://github.com/SubhashSVS/payment-app"
        },
        {
            name : 'Blog Website',
            description : 'A simple blogging website where users can view and publish blogs. Implemented proper authentication for secured session management.',
            skills : ['React.js', 'TypeScript', 'Clouflare','Hono.js', 'Prisma', 'PostgreSQL'],
            link : "https://github.com/SubhashSVS/Blog-site"
        },
        {
            name : 'Portfolio Website',
            description : 'A Frontend project which is a simple portfolio website with a very minimal design, visual and responsive UI.',
            skills : ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shad CN'],
            link : "https://github.com/SubhashSVS/Portfolio"
        },
        {
            name : 'Todo List',
            description : 'Simple To-Do application where a user can input tasks with options to mark them done when completed,etc..',
            skills : ['React.js','Javascript', 'Mongo DB', 'Tailwind CSS'],
            link : 'https://github.com/SubhashSVS/Todo-app'
        }
    ]    
}

export default resumeData;