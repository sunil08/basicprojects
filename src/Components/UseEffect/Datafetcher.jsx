import React, { useEffect, useState } from 'react'

const Datafetcher = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
                    setData(data); 
                    setLoading(false);
             });
            }, []);

    return (
      <div>
        {
            // loading ? (<div>Loading....</div>) : (
            //     <ul>
            //         {
            //             data.map(post => (
            //                 <li key={post.id}>{post.title}</li>
            //             ))
            //         }
            //     </ul>
            // )

            loading ? (<div>Loading...</div>) : (
                <table border="1" style={{"border-collapse": "collapse"}}>
                        <caption>User Details</caption>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Title</th>
                                </tr>
                            </thead>
                            {
                                data.map(post => (
                                <tbody>
                                    <tr key={post.id}>
                                        <td>{post.id}</td>
                                        <td>{post.title}</td>
                                    </tr>
                                </tbody>
                                ))
                            }
                </table>
            )
        }
      </div>
    )
}

export default Datafetcher
