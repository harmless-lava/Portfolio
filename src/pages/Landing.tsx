import { useCallback, useEffect, useState} from 'react'
import Name from "../components/Landing/Intro/Name"
import Tagline from "../components/Landing/Intro/Tagline"
import Photo from "../components/Landing/Intro/Photo"
import Quote from "../components/Landing/Intro/Quote"

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const phrases = ["CODING","PHYSICS","MATHS","TECH","LANGUAGES"]

const Landing = () => {
  const [likeTo, setLikeTo]= useState<string>("")
  const [targetString, setTargetString] = useState<string>("LEARNING")
  const [iterations, setIterations]= useState<number>(0)
  const [phraseIndex, setPhraseIndex] = useState(0)
  const randomizeString = useCallback((length:number) => {
    return Array.from({length})
    .map(()=> letters[Math.floor(Math.random()*26)]).join("")

  },[])
  const [scrolled, setScrolled] = useState<boolean>(false)

  const handleScroll = useCallback(() => {
    setScrolled(true)
  },[])
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll",handleScroll)
    }
  },[handleScroll])
  useEffect(() => {
    const length = targetString.length
    let intervalId : number;
    const startRandomizing = () => {
      intervalId = setInterval(()=>{
        if (iterations < length) {
          const randomPart = randomizeString(length - iterations)
          const newText = targetString.slice(0, iterations) + randomPart
          setLikeTo(newText)
        } else {
          setLikeTo(targetString)
          setTimeout(() => {
            setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
            setTargetString(phrases[phraseIndex])
            setIterations(0)
          },1000)
        }
        setIterations((prev) => prev + 1)
      },70)

    }
    if (iterations <= length){
      startRandomizing()
    }
    return () => {
      clearInterval(intervalId)
    }
  }, [iterations, targetString, phraseIndex, phrases])
    
    
  return (
    <div className='h-screen bg-black  w-full text-white selection:bg-white selection:text-black font-roboto grid grid-cols-7 
    grid-rows-15 gap-0' >
      <Name name={'Apar Shrestha'}/>
      <Tagline likeTo={likeTo}/>
      <Photo />
      <Quote scrolled={scrolled} />
    </div>
  )
}

export default Landing