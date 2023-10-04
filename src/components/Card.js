export default function Card(props) {


    return (
        
            <div style={{
                width: '400px'}}>

                <div
                    style={{
                        backgroundImage: `url('${props.img}')`,
                        width: '400px',
                        height: '400px',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        borderRadius:'10px',
                        margin:'20'
                    }}

                >
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <h1>{props.title}</h1>
                    <h1>{props.review}</h1>
                </div>

                <h3>{props.desc}</h3>

                <h6>{props.price}</h6>

            </div>
    )
}