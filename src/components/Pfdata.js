import bearbnb from '../images/bearbnb-app.png'
import percussion from '../images/percussion-app.png'
import weather from '../images/weather-app.png'

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        id: 1,
        title: "bearbnb",
        description: "A simple grizzly airbnb clone with basic prop inheritance.",
        coverImg: bearbnb,
        link: "https://andymc7993.github.io/bearbnb/",
    },
    {
        id: 2,
        title: "Weather vs. Glasgow",
        description: "API integrated weather app showcasing the radiant gloominess of my home city.",
        coverImg: weather,
        link:"https://andymc7993.github.io/weather-comparison/",
    },
    {
        id: 3,
        title: "Percussion",
        description: "Orchestral beats styled react app.",
        coverImg: percussion,
        link:"https://andymc7993.github.io/percussion-app/",
    }
]