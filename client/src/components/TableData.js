const TableData = ({users}) => {
    return (
        <>
            {
                users.map((user, index) => {
                    const {firstName, lastName, participation} = user;

                    return (
                        <tr key={index+1}>
                        <td>{index+1}</td> 
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{participation}%</td>
                    </tr>
                    )
                })
            }
        </>
    )
}; export default TableData;