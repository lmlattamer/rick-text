export default function Time(props){
  const dynamicTime = new Date();
  const dynamicTimeString = dynamicTime.toGMTString();

  return (
    <div>
      <div>{dynamicTimeString} (Dinâmico)</div>
      <div>{props.staticTimeString} (Estático)</div>
    </div>
  )
}

export function getStaticProps(){
  const staticTime = new Date();
  const staticTimeString = staticTime.toGMTString();

  return{
    props: {
      staticTimeString
    }
  }
}