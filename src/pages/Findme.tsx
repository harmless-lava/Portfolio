import type { ReactElement } from "react";
import { useScrollStore } from "../store/refs/useRefToScroll";
import Profiles from "../components/Contact/Profiles";
import { GithubLogo } from "../components/Contact/GithubLogo";
import EmailLogo from "../components/Contact/EmailLogo";
import LinkedInLogo from "../components/Contact/LinkedInLogo";

export interface ProfileI {
    logo: ReactElement;
    link: string;
    username: string;
}

const FindMe = () => {
    const contactRef = useScrollStore().sectionRefs.contact
    const MyProfiles: ProfileI[] = [
        {
            logo: <GithubLogo />,
            link: "https://github.com/harmless-lava",
            username:"harmless-lava"
        },
        {
            logo:<EmailLogo />,
            link: "mailto:shrestha.apar.05@gmail.com",
            username:"shrestha.apar.05@gmail.com",
        },
        {
            logo: <LinkedInLogo />,
            link: "https://www.linkedin.com/in/apar-shrestha/",
            username:"Apar Shrestha"
        }
    ]
    return (
        <div className="bg-black text-white grid grid-cols-7 selection:text-black selection:bg-white gap-0 space-y-12 py-20">
            <h1 className="row-start-1 col-start-2 col-end-7 text-3xl" ref={contactRef}>Find me here</h1>
            <div className="col-start-2 col-end-7 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {MyProfiles.map((profile, index) => (
                    <Profiles key={index} profile={profile} index={index}/>
                ))}
            </div>

        </div>
    )
}
export default FindMe