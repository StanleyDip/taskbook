import React from 'react'
import '../RightSideContacts.css'
import './ContactList.css'
const ContactList=() =>{
    const userlist=[
        {name:"Riham Chowdhury",
        image:""
        },
        {name:"Shuva Chowdhury",
        image:""
        },
        {name:"Sheikh Mohammad Arafat",
        image:""
        },
        {name:"Zaber Mohammad",
        image:""
        },
        {name:"Sha Md. Rifat",
        image:""
        },
        {name:"Humaira Azad",
        image:""
        },
        {name:"Retuparna Das",
        image:""
        },
        {name:"Zarin Tasnim Tanna",
        image:""
        }
    ]
    // const iterateList = userlist.map(user=>)
    return (
        <div className="contact-container">
           { userlist.map(user=>
                <p className="contactlist-info">{user.name}</p>
            )}
        </div>
    )
}

export default ContactList
