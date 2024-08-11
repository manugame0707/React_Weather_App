import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({ info }) {
    let INIT_URL = "https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let Hot_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let Rain_URL = "https://images.unsplash.com/photo-1613739118925-cde1e8f5d65b?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let Cold_URL = "https://images.unsplash.com/photo-1677164859770-9b971dd523df?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    // let info = {
    //     city: "Chennai",
    //     temp: 25.05,
    //     tempMin: 25.05,
    //     tempMax: 25.05,
    //     humidity: 47,
    //     weather: "haze",
    //     feelslike: 29.84,
    // };

    return (
        <div className="InfoBox">
            {/* <h1>Weather Info-{info.weather}</h1> */}
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? Rain_URL : info.temp > 15 ? Hot_URL : Cold_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}{info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temprature={info.temp}&deg;C</p>
                            <p>Humidity={info.humidity}</p>
                            <p>Min Temprature={info.tempMin}&deg;C</p>
                            <p>Max Temprature={info.tempMax}&deg;C</p>
                            <p>The weather is described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C.</p>
                        </Typography>
                    </CardContent>

                </Card>
            </div>

        </div>
    )
}