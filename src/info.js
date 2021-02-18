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
        description:'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet consecutueur regino psal sodam dowe remol adipisicing elit, sed do Lorem ipsum dolor sit amet consecutueur, El suo carla dolor esmi reme adipiscingtel lu garcia',
        teamHead: {
            teamHeadName:'Bhujang Shinde',
            image:'https://picsum.photos/200',
            social:
            {
                instagram:'https://www.instagram.com/its_nik____/',
                linkedin:'https://www.linkedin.com/in/bhujang-shinde/',
                github:'https://github.com/shindeBhuj/'
            }
        },
        teamColor:'#0085FF',
        teamMembers : fullCommitteeInfo.filter(person => person.team === 'web & tech')
    },
]