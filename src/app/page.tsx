import { GitHubIcon } from '@/components/icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import resume from '@/data/resume-data'
import { GlobeIcon, MailIcon, PhoneIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className='flex-col mx-auto w-full max-w-3xl p-4 md:p-10 lg:p-16'>
      <div>
        <div className='text-2xl font-bold my-1'>
          {resume.name}
        </div>
        <div className='flex font-mono text-pretty text-muted-foreground my-1 gap-x-[10%]'>
          <div className=''>
            <div className='mt-1'>
              {resume.description}
            </div>
            <div className='my-1'>
              <a 
                href={resume.location.link}
                className='hover:underline'  
              >
                <div className='flex gap-x-1.5 items-center'>
                  <GlobeIcon className='size-4' />
                  <span>{resume.location.city}</span>
                </div>
              </a>
            </div>
            <div className='flex my-3 gap-2'>
              <Button className='size-8' variant="outline" key="mail" >
                  <a href={`mailto:${resume.contact.email}`} >
                    <MailIcon className='size-4' />
                  </a>
              </Button>
              <Button className='size-8' variant="outline" key="phone" >
                <a href={`tel:${resume.contact.phone}`} >
                  <PhoneIcon className='size-4' />
                </a>
              </Button>
              {resume.contact.socials.map(social => (
                <Button className='size-8' variant="outline">
                  <a href={social.link} >
                    <social.icon className="size-4"/>
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <div className='pt-2'>
            <Avatar className='size-32 rounded-md'>
                <AvatarImage src={resume.avatarURL} alt={resume.name} />
                <AvatarFallback>{resume.shortName}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
}
