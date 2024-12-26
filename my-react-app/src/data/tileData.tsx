import github from "../assets/github.png";
import bitbucket from "../assets/bitbucket.png";
import azuredevops from "../assets/azuredevops.png";
import gitlabs from "../assets/gitlabs.png";
import key from "../assets/key.png";
import { HiOutlineHome } from "react-icons/hi";
import { FaCode } from "react-icons/fa6";
import { IoIosCloudOutline } from "react-icons/io";
import { LuBookText } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
export const SaaSTile=[{
   icon:github,
   text:"Sign in with Github"
},
{
    icon:bitbucket,
    text:"Sign in with Bitbucket"
 },
 {
    icon:azuredevops,
    text:"Sign in with Azure Devops"
 },
 {
    icon:gitlabs,
    text:"Sign in with GitLab"
 }];
 export const SelfHostedTile=[
    {
        icon:gitlabs,
        text:"Self Hosted GitLab"
    },
    {
        icon:key,
        text:"Sign in with SSO"
    }
 ]
 export const RepositoryData=[
    {icon:<HiOutlineHome />,
    text:'Repositories',
    },
    {icon:<FaCode />,
        text:'AI Code Review',
    },
    {icon:<IoIosCloudOutline/>,
        text:'Cloud Security',
    },
    {icon:<LuBookText/>,
        text:'How to use',
    },
    {icon:<IoSettingsOutline/>,
        text:'Settings',
    }
 ]
 export const ContactData=[
    {
        icon:<IoCallOutline/>,
        text:"Support"
    },
    {
        icon:<FiLogOut/>,
        text:"Logout"

    }
 ]
 export const RepoData=[
        {
          name: "design-system",
          access: "Public",
          languages: "React",
          size: "2.6 MB",
          updates: "3",
        },
        {
          name: "codeant-ci-app",
          access: "Private",
          languages: "Javascript",
          size: "1.2 MB",
          updates: "2",
        },
        {
          name: "analytics-dashboard",
          access: "Public",
          languages: "Python",
          size: "4521 KB",
          updates: "5",
        },
        {
          name: "mobile-app",
          access: "Private",
          languages: "Swift",
          size: "4.6 MB",
          updates: "3",
        },
        {
          name: "e-commerce-website",
          access: "Private",
          languages: "React",
          size: "2.6 MB",
          updates: "3",
        },
        {
          name: "blog-website",
          access: "Public",
          languages: "Javascript",
          size: "16120 KB",
          updates: "4",
        },
        {
          name: "social-network",
          access: "Private",
          languages: "PHP",
          size: "5432 KB",
          updates: "3",
        }, 
 ];