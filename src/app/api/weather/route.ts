import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;

    const lat = "6.9271";
    const lon = "79.8612";

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );

    const data = await res.json();

    return NextResponse.json({
      success: true,
      district: "Colombo",
      temperature: Math.round(data.main.temp),
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      description: data.weather[0].description,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch weather data",
      },
      { status: 500 }
    );
  }
}