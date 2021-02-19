import React from 'react'
import fullCommitteeInfo from './fullCommitteeInfo.json'


export const teamLeadersInfo = [
    {
        title:'Sushant Vernekar',
        image:'https://picsum.photos/200',
        description:'Lorem ipsum dolor sit amet consecutueur regino psal sodam dowe remol adipisicing elit, sed do Lorem ipsum dolor sit amet consecutueur, El suo carla dolor esmi reme adipiscingtel lu garcia ',
        role:'General Secretary',
        social:
            {
                instagram:'https://www.instagram.com',
                linkedin:'https://www.linkedin.com',
                facebook:'https://www.facebook.com'
            }
        
    },
    {
        title:'Riya Parekh',
        image:'https://picsum.photos/200',
        description:'Lorem ipsum dolor sit amet consecutueur regino psal sodam dowe remol adipisicing elit, sed do Lorem ipsum dolor sit amet consecutueur, El suo carla dolor esmi reme adipiscingtel lu garcia ',
        role:'Joint General Secretary',
        social:
            {
                instagram:'https://www.instagram.com',
                linkedin:'https://www.linkedin.com',
                facebook:'https://www.facebook.com'
            }
        
    },
    {
        title:'Bhujang Shinde',
        image:'https://picsum.photos/200',
        description:'Lorem ipsum dolor sit amet consecutueur regino psal sodam dowe remol adipisicing elit, sed do Lorem ipsum dolor sit amet consecutueur, El suo carla dolor esmi reme adipiscingtel lu garcia ',
        role:'Head of Web & Tech',
        social:
            {
                instagram:'https://www.instagram.com',
                linkedin:'https://www.linkedin.com',
                facebook:'https://www.facebook.com'
            }
        
    },
    {
        title:'Sushant Vernekar',
        image:'https://picsum.photos/200',
        description:'Lorem ipsum dolor sit amet consecutueur regino psal sodam dowe remol adipisicing elit, sed do Lorem ipsum dolor sit amet consecutueur, El suo carla dolor esmi reme adipiscingtel lu garcia ',
        role:'General Secretary',
        social:
            {
                instagram:'https://www.instagram.com',
                linkedin:'https://www.linkedin.com',
                facebook:'https://www.facebook.com'
            }
        
    },
    {
        title:'Sushant Vernekar',
        image:'https://picsum.photos/200',
        description:'Lorem ipsum dolor sit amet consecutueur regino psal sodam dowe remol adipisicing elit, sed do Lorem ipsum dolor sit amet consecutueur, El suo carla dolor esmi reme adipiscingtel lu garcia ',
        role:'General Secretary',
        social:
            {
                instagram:'https://www.instagram.com',
                linkedin:'https://www.linkedin.com',
                facebook:'https://www.facebook.com'
            }
        
    },
    {
        title:'Sushant Vernekar',
        image:'https://picsum.photos/200',
        description:'Lorem ipsum dolor sit amet consecutueur regino psal sodam dowe remol adipisicing elit, sed do Lorem ipsum dolor sit amet consecutueur, El suo carla dolor esmi reme adipiscingtel lu garcia ',
        role:'General Secretary',
        social:
            {
                instagram:'https://www.instagram.com',
                linkedin:'https://www.linkedin.com',
                facebook:'https://www.facebook.com'
            }
        
    },
    {
        title:'Sushant Vernekar',
        image:'https://picsum.photos/200',
        description:'Lorem ipsum dolor sit amet consecutueur regino psal sodam dowe remol adipisicing elit, sed do Lorem ipsum dolor sit amet consecutueur, El suo carla dolor esmi reme adipiscingtel lu garcia ',
        role:'General Secretary',
        social:
            {
                instagram:'https://www.instagram.com',
                linkedin:'https://www.linkedin.com',
                facebook:'https://www.facebook.com'
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