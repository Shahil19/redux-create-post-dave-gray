import React from 'react';
import { useSelector } from 'react-redux/es/exports';

const PersonsList = () => {
    const persons = useSelector((state) => state.persons)

    return (
        <section>

        </section>
    );
};

export default PersonsList;