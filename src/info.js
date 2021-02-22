import React from 'react'
import fullCommitteeInfo from './fullCommitteeInfo.json'


export const teamLeadersInfo = [
    {
        title:'Sushant Vernekar',
        image:'https://drive.google.com/open?id=119B8a9J_ljKGrPe04_1zu8m4WEmp1h0J',
        description:'Lorem ipsum dolor sit amet consecutueur regino psal sodam dowe remol adipisicing elit, sed do Lorem ipsum dolor sit amet consecutueur, El suo carla dolor esmi reme adipiscingtel lu garcia ',
        role:'General Secretary',
        social:
            {
                instagram:'https://instagram.com/sushantvernekar?igshid=qfmnhi5zo29a',
                linkedin:'https://www.linkedin.com/in/sushant-vernekar-98a00a181/',
                github:'https://github.com/Sushantvernekar60'
            }
        
    },
    {
        title:'Riya Parekh',
        image:'https://drive.google.com/open?id=1CMP6_6hJEVD4jeSHY8dHC5mGHSqkI3OS',
        description:'Lorem ipsum dolor sit amet consecutueur regino psal sodam dowe remol adipisicing elit, sed do Lorem ipsum dolor sit amet consecutueur, El suo carla dolor esmi reme adipiscingtel lu garcia ',
        role:'Joint General Secretary',
        social:
            {
                instagram:'https://www.instagram.com/riyaparekh_09/',
                linkedin:'https://www.instagram.com/riyaparekh_09/',
                github:'https://github.com/RiyaParekh1234'
            }
        
    },
    {
        title:'Bhujang Shinde',
        image:'https://drive.google.com/open?id=1zZ7fJ_UPxMAO4lBfJKZRuPbF91-dfP0l',
        description:'Lorem ipsum dolor sit amet consecutueur regino psal sodam dowe remol adipisicing elit, sed do Lorem ipsum dolor sit amet consecutueur, El suo carla dolor esmi reme adipiscingtel lu garcia ',
        role:'Head of Web & Tech',
        social:
            {
                instagram:'https://www.instagram.com/its_nik____/',
                linkedin:'https://www.linkedin.com/in/bhujang-shinde/',
                github:'https://github.com/shindeBhuj/'
            }
        
    },
    {
        title:'Pranashree Patil',
        image:'https://drive.google.com/open?id=1A6A1WR-LMUYpIBCB-G3U5i7i7IxATHTO',
        description:'Lorem ipsum dolor sit amet consecutueur regino psal sodam dowe remol adipisicing elit, sed do Lorem ipsum dolor sit amet consecutueur, El suo carla dolor esmi reme adipiscingtel lu garcia ',
        role:'Head of Notification',
        social:
            {
                instagram:'https://instagram.com/pranashree_patil?igshid=7c3by2y5yngv',
                linkedin:'https://www.linkedin.com/in/pranashree-patil-73382018a',
                github:'https://github.com/pranashreepatil'
            }
        
    },
    {
        title:'Shreya Kajbaje',
        image:'https://drive.google.com/open?id=11PzzlYXyNBr8_MgJspnfpagtQ1pfudbD',
        description:'Lorem ipsum dolor sit amet consecutueur regino psal sodam dowe remol adipisicing elit, sed do Lorem ipsum dolor sit amet consecutueur, El suo carla dolor esmi reme adipiscingtel lu garcia ',
        role:'Head of Finance',
        social:
            {
                instagram:'https://www.instagram.com/shreya_k9_/',
                linkedin:'https://www.linkedin.com/in/shreya-kajbaje',
                github:'https://github.com/shreyakajbaje'
            }
        
    },
    {
        title:'Kaushal Bhandari',
        image:'https://drive.google.com/open?id=1QzmeR79TkZK_Io2CMZ4phKLSKVGEZtKk',
        description:'Lorem ipsum dolor sit amet consecutueur regino psal sodam dowe remol adipisicing elit, sed do Lorem ipsum dolor sit amet consecutueur, El suo carla dolor esmi reme adipiscingtel lu garcia ',
        role:'Head of Student Coordination & Printing',
        social:
            {
                instagram:'https://instagram.com/kaushal__bhandari?igshid=4zvmi6y2q0no',
                linkedin:'https://www.linkedin.com/in/kaushal-bhandari-2334091b2',
            }
        
    },
    {
        title:'Jui Godse',
        image:'https://drive.google.com/open?id=1LBO24BpUFVEuTfedhSKRbwSbw3sLYGmD',
        description:'Lorem ipsum dolor sit amet consecutueur regino psal sodam dowe remol adipisicing elit, sed do Lorem ipsum dolor sit amet consecutueur, El suo carla dolor esmi reme adipiscingtel lu garcia ',
        role:'Head of Event Management & production',
        social:
            {
                instagram:'instagram.com/juigodse',
                linkedin:'https://www.linkedin.com/in/jui-godse-b089a71b2',
                github:'github.com/jui221'
            }
        
    },
    
]

export const teamsInfo = [
    {
        teamName:'Team Web and Tech',
        description:'The web and technology team manages the official ITSA website, arranges various technical events and workshops, provides a platform for members technical growth and provides students with exposure to new technologies',
        teamColor:'#0085FF',
        teamMembers : fullCommitteeInfo.filter(person => person.team === 'web & tech').sort((a, b) => a.class > b.class ? 1 : -1)
    },
    {
        teamName:'Team Notification',
        description:'The notification teams acts as a birdge between students and committee members, keeps participants updated about the team events and presides over solving students queries and difficulties.',
        teamColor:'#FFDB00',
        teamMembers : fullCommitteeInfo.filter(person => person.team === 'notification').sort((a, b) => a.class > b.class ? 1 : -1)
    },
    {
        teamName:'Team Finance',
        description:'Keeps records of all financial activities. Other roles include maintaining Funds for committee and handling budgets for all events.',
        teamColor:'#7E08DA',
        teamMembers : fullCommitteeInfo.filter(person => person.team === 'finance').sort((a, b) => a.class > b.class ? 1 : -1)
    },
    {
        teamName:'Team Student Coordination and Printing',
        description:'Team event management handles pre-event organization, ensuring that event day logistics run smoothly, gathering reports of executed events and activities as well as provides a platform for students to showcase their skills in photography and video editing',
        teamColor:'#02B93F',
        teamMembers : fullCommitteeInfo.filter(person => person.team === 'student coordination').sort((a, b) => a.class > b.class ? 1 : -1)
    },
    {
        teamName:'Team Event Management and Production',
        description:'Team student coordination and printing udertakes various activities such as maintaining coordination between teams, T-Shirt and poster designing, sponsorships and slot allotment during events',
        teamColor:'#0085FF',
        teamMembers : fullCommitteeInfo.filter(person => person.team === 'event management & production').sort((a, b) => a.class > b.class ? 1 : -1)
    },
    
]