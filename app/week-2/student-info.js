import React from 'react';
import Link from 'next/link';

const StudentInfo = () => {
    return (
        <div>
            <h1>Rajvir Singh Jhangria</h1>
            <p className="hover:text-green-400 hover:underline"><Link href= "https://github.com/Jhangria/cprg306-assignments">Jhangria</Link></p>
        </div>
    );
}
export default StudentInfo;