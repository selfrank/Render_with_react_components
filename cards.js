function Card({item}){
    return (
<div className="card" key={item.objectID}>
              <h5 className="card-header">{item.title}</h5>
              <div className="card-body">
                <h5>{item.author}</h5>
                <table className="table">
                  <tbody>
                    <tr>
                        <td className="text-success font-weight-bold">Title:</td>
                        <td>{item.title}</td>
                    </tr>
                    <tr>
                        <td className="text-success font-weight-bold">Author:</td>
                        <td>{item.author}</td>
                    </tr>
                    <tr>
                        <td className="text-success font-weight-bold">Page:</td>
                        <td> <a href={item.url}>{item.url}></a></td>
                    </tr>
                    <tr>
                        <td className="text-success font-weight-bold">Published Date:</td>
                        <td>{item.created_at}</td>
                    </tr>
                  </tbody>
                </table>

            </div>
            </div>
            
)}