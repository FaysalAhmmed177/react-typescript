import React, { useState } from 'react';
import Contact from './Contact';

interface IContact {
    name: string;
    email: string;
}

const Contacts = () => {
    const [contact, setContact] = useState<IContact>({} as IContact);
    const [contactList, setContactList] = useState<IContact[]>([]);

    console.log(contact);

    const onClick = () => {
        setContactList([...contactList, contact]);
        setContact({
            name: '',
            email: ''
        })
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }

    const handleRemove = (email: string) => {
        const newContactList = contactList.filter(c => c.email !== email);
        setContactList(newContactList);
    }

    return (
        <div className="card">
            <h1>Contact list</h1>
            <div className="form">
                <input
                    value={contact.name}
                    onChange={onChange}
                    name="name"
                    placeholder="Contact Name"
                    type="text" />
                <input
                    value={contact.email}
                    onChange={onChange}
                    name="email"
                    placeholder="Contact Email"
                    type="email" />
                <button onClick={onClick}>Submit</button>
            </div>
            {
                contactList.map((con) => <Contact key={con.name} name={con.name} email={con.email} handleRemove={handleRemove} />)
            }
        </div>
    );
};

export default Contacts;