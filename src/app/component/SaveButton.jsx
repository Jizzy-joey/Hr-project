"use client";

import React, { useContext, useState } from 'react';
import { SideContext } from '../providers';


export default function SavesButton({ title, company }) {

    const {setLikes, updates, setUpdates} = useContext(SideContext);
    const [saves, setSaves] = useState('save');

    const handleSave = () => {
        setSaves('saved');
       setLikes(prev => prev + 1);
       setUpdates([...updates, { name: title, company: company }]);
    };

    return (
        <>
            <button className="bg-black text-white px-4 py-2 rounded-md
               hover:bg-amber-600 transition-all duration-300 cursor-pointer
               flex items-center justify-center space-x-2 border-2 border-white"
               onClick={handleSave}>{saves}</button>
        </>
    );
}
