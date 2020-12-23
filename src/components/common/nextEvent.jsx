const NextEvent = (props) => {

    const event=props.event;
    const today = new Date().getDate();
    console.log(today)
    return ( 
        <div className="card text-center">
            <div className="card-header">
            Next Event
            </div>
            <div className="card-body">
            <h5 className="card-title">{event.title}</h5>
            <p className="card-text">8pm</p>
            </div>
            <div className="card-footer text-muted">
            2 days
            </div>
    </div> 
  );
}
 
export default NextEvent;