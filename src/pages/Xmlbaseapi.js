import { useEffect, useState } from "react";

const XmlBaseApi = () =>{
    const [data , setData] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(()=>{
        // every time create intance object of XMLHttpRequest()
        const xhr = new XMLHttpRequest();
        xhr.open('GET','https://jsonplaceholder.typicode.com/posts')
        xhr.onload = function(){
            if(xhr.status === 200){
                setData(JSON.parse(xhr.responseText));
            }
        }
        xhr.send();
    },[])

    useEffect(() => {
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
          if (window.pageYOffset > 500) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
    
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
      }, []);

    const gotoTop = () =>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }
    return(
        <>
        <div className="container">
            <h4>Xml Base Api</h4>
            {data ? <div>{JSON.stringify(data)}</div> : <div>Loading...</div>}
            {isVisible && (
            <div className="backtotop">
                <span onClick={gotoTop}>top</span>
            </div>
            )}
        </div>
        </>
    )
}

export default XmlBaseApi;